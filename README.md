# AspAngularTemplate

## Table:
*   RESTful API Backend using ASP.NET Core 2.1 Web API and MVC for roles.
*   Angular 6.
*   Database - Entity Framework Core.
*   Jwt token authorization using Bearer schema.
*   AutoMapper.

## Structure
*   EF databse - Code First.
*   Data access using Services.
*   AutoMapper (data to view models).
*   CORS policty enabled in the Startup.cs (for POST, PUT, DELETE, GET).
*   Jwt token - user's roles, username and email.
*   Simple "item" model used for full CRUD APIs.
*   Logger messages on the console.
*   Database auto migrations.
*   Angular lazy loading routes, services, guards and http interceptors.

## Login
### Login with username and password
> * **Default administrator**
>   * Username: admin
>   * Password: admin12
> * **Default user**
>   * Username: test-user
>   * Password: test12

## Roles
*   Default roles are: Admin, Test, Test2

### More info
For the sake of simplicity in the angular project all the successful and error messages are been logged on the console.