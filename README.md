# AspAngularTemplate
The template is provided without any design addons!

## The application consists of:
*   RESTful API Backend using ASP.NET Core 2.1 Web API.
*   Angular 6 and TypeScript.
*   Database - Entity Framework Core.
*   Jwt token authorization using Bearer schema.
*   AutoMapper.

## Structure
*   ASP backend is build on Code First Database Model along with migrations.
*   Data access using Services.
*   AutoMapper binding between data models and view models.
*   CORS policty setted up in the Startup.cs allows global credentialed requests (POST, PUT, DELETE, GET).
*   Jwt token which includes user's roles, username and email.
*   Simple item model used for full CRUD APIs.
*   Microsoft ILogger extension used for showing info on the backend console.
*   Database migrates automatically everytime application runs.
*   Angular services - includes admin guard, authentication guard and so on.
*   Angular lazy loading routes.

## Login
### Login with username and password
> * **Default administartor**
>   * Username: admin
>   * Password: admin12
> * **Default user**
>   * Username: test-user
>   * Password: test12

## Roles
*   Default roles are: Admin, Test, Test2

### More info
For the sake of simplicity in the angular project all the successful and error messages are been logged on the browser console, so adjust them by your taste.

# Have fun :)