namespace AspAngularSample.Web.Infrastructure.Extensions
{
    using Data;
    using Data.Models;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using System.Threading.Tasks;

    using static WebConstants;

    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseDatabaseMigration(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                // db migration
                serviceScope
                    .ServiceProvider
                    .GetService<ShopDbContext>()
                    .Database
                    .Migrate();

                var userManager = serviceScope
                    .ServiceProvider
                    .GetService<UserManager<User>>();

                var roleManager = serviceScope
                    .ServiceProvider
                    .GetService<RoleManager<IdentityRole>>();

                Task.Run(async () =>
                {
                    // add roles
                    var roles = new[]
                    {
                        AdminRole,
                        TestRole,
                        TestRoleSecond
                    };

                    foreach (var role in roles)
                    {
                        var existingRole = await roleManager.RoleExistsAsync(role);

                        if (!existingRole)
                        {
                            await roleManager.CreateAsync(new IdentityRole
                            {
                                Name = role
                            });
                        }
                    }

                    // add administrator 
                    var adminUsername = "admin";
                    var adminEmail = "admin@mymail.com";
                    var adminFromDb = await userManager.FindByEmailAsync(adminEmail);

                    if (adminFromDb == null)
                    {
                        var user = new User
                        {
                            UserName = adminUsername,
                            Email = adminEmail,
                            FirstName = adminUsername,
                            LastName = adminUsername,
                        };

                        await userManager.CreateAsync(user, "admin12");

                        await userManager.AddToRoleAsync(user, AdminRole);
                    }

                    // add test user with 2 test roles
                    var testUsername = "test-user";
                    var testEmail = "test@mymail.com";
                    var testUserFromDb = await userManager.FindByEmailAsync(testEmail);

                    if (testUserFromDb == null)
                    {
                        var user = new User
                        {
                            UserName = testUsername,
                            Email = testEmail,
                            FirstName = testUsername,
                            LastName = testUsername,
                        };

                        await userManager.CreateAsync(user, "test12");

                        await userManager.AddToRolesAsync(user, new[] { TestRole, TestRoleSecond });
                    }
                })
                .Wait();
            }

            return app;
        }
    }
}
