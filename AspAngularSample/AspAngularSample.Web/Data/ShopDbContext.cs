namespace AspAngularSample.Web.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Models;
    using System;

    public class ShopDbContext : IdentityDbContext<User>
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var items = GetItems();
            builder.Entity<Item>().HasData(items);
        }

        private static Item[] GetItems()
        {
            return new[]
                        {
                new Item { Id = 1, Title = "Test item", Quantity = 20, DateOfAdded = DateTime.UtcNow },
                new Item { Id = 2, Title = "Test another item", Quantity = 35, DateOfAdded = DateTime.UtcNow.AddDays(5) },
            };
        }

    }
}
