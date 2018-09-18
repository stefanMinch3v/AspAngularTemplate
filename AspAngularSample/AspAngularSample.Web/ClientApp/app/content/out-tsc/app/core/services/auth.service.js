var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService_1 = AuthService;
    AuthService.prototype.saveUser = function (user) {
        window.localStorage.setItem(AuthService_1.USER_KEY, user);
    };
    AuthService.prototype.getUser = function () {
        return window.localStorage.getItem(AuthService_1.USER_KEY);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return window.localStorage.getItem(AuthService_1.TOKEN_KEY) !== null;
    };
    AuthService.prototype.authenticateUser = function (token) {
        window.localStorage.setItem(AuthService_1.TOKEN_KEY, token);
    };
    AuthService.prototype.deauthenticateUser = function () {
        this.removeUser();
        this.removeToken();
        this.removeRoles();
    };
    AuthService.prototype.getToken = function () {
        return window.localStorage.getItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.prototype.saveRoles = function (roles) {
        window.localStorage.setItem(AuthService_1.ROLES_KEY, roles);
    };
    AuthService.prototype.getRoles = function () {
        return window.localStorage.getItem(AuthService_1.ROLES_KEY);
    };
    AuthService.prototype.removeRoles = function () {
        window.localStorage.removeItem(AuthService_1.ROLES_KEY);
    };
    AuthService.prototype.removeUser = function () {
        window.localStorage.removeItem(AuthService_1.USER_KEY);
    };
    AuthService.prototype.removeToken = function () {
        window.localStorage.removeItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.USER_KEY = 'user';
    AuthService.TOKEN_KEY = 'token';
    AuthService.ROLES_KEY = 'roles';
    AuthService = AuthService_1 = __decorate([
        Injectable()
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map