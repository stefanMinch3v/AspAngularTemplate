namespace AspAngularSample.Web.Controllers
{
    using Data.Models;
    using Infrastructure.Extensions;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Microsoft.IdentityModel.Tokens;
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using ViewModels;

    public class AccountController : BaseController
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IConfiguration configuration;
        private readonly ILogger<AccountController> logger;

        public AccountController(
            UserManager<User> userManager, 
            SignInManager<User> signInManager,
            IConfiguration configuration,
            ILogger<AccountController> logger)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.logger = logger;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (model == null || !this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState.GetFirstError());
            }

            var user = new User { Email = model.Email, UserName = model.Username };
            var result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return this.BadRequest(result.Errors.FirstOrDefault());
            }

            this.logger.LogInformation("User registered.");

            return this.Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            if (!this.ModelState.IsValid || this.ModelState == null)
            {
                return BadRequest("Invalid credentials.");
            }

            var result = await this.signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (!result.Succeeded)
            {
                this.ModelState.AddModelError(string.Empty, "Invalid login attempt.");

                return BadRequest(this.ModelState.GetFirstError());
            }

            var user = await userManager.FindByNameAsync(model.Username);
            if (user == null)
            {
                return BadRequest("Unexisting user.");
            }

            this.logger.LogInformation("User logged in.");

            var securityToken = this.BuildToken(user);

            return Ok(securityToken);
        }

        private object BuildToken(User model)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, model.Email),
                new Claim(JwtRegisteredClaimNames.UniqueName, model.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var userRoles = this.userManager.GetRolesAsync(model).Result;

            if (userRoles.Any())
            {
                foreach (var roleName in userRoles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, roleName));// adds role to the security token and later been recognized in the api
                }
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                this.configuration["Jwt:Issuer"],
                this.configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: creds);

            var results = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                roles = userRoles,
                expiration = token.ValidTo
            };

            return results;
        }
    }
}
