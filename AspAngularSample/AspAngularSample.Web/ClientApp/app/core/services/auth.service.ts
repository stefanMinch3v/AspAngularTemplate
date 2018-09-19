import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private static readonly USER_KEY = 'user';
    private static readonly TOKEN_KEY = 'token';
    private static readonly ROLES_KEY = 'roles';
    private static readonly EXPIRE_KEY = 'expiration';

    public saveUser(user) {
        window.localStorage.setItem(AuthService.USER_KEY, user);
    }

    public getUser() {
        return window.localStorage.getItem(AuthService.USER_KEY);
    }

    public isUserAuthenticated() {
        return window.localStorage.getItem(AuthService.TOKEN_KEY) !== null;
    }

    public authenticateUser(token) {
        window.localStorage.setItem(AuthService.TOKEN_KEY, token);
    }

    public deauthenticateUser() {
        this.removeUser();
        this.removeToken();
        this.removeRoles();
        this.removeExpirationTime();
    }

    public getToken() {
        return window.localStorage.getItem(AuthService.TOKEN_KEY);
    }

    public saveRoles(roles) {
        window.localStorage.setItem(AuthService.ROLES_KEY, roles);
    }

    public getRoles() {
        return window.localStorage.getItem(AuthService.ROLES_KEY);
    }

    public saveExpirationTime(expiration) {
        window.localStorage.setItem(AuthService.EXPIRE_KEY, expiration);
    }

    public getExpirationTime() {
        return window.localStorage.getItem(AuthService.EXPIRE_KEY);
    }

    private removeExpirationTime() {
        window.localStorage.removeItem(AuthService.EXPIRE_KEY);
    }

    private removeRoles() {
        window.localStorage.removeItem(AuthService.ROLES_KEY);
    }

    private removeUser() {
        window.localStorage.removeItem(AuthService.USER_KEY);
    }

    private removeToken() {
        window.localStorage.removeItem(AuthService.TOKEN_KEY);
    }
}