var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from '../../../../environments/environment';
var AccountService = /** @class */ (function () {
    function AccountService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    AccountService.prototype.login = function (user) {
        var url = environment.localhost.url + '/account/login';
        return this.http.post(url, user);
    };
    AccountService.prototype.register = function (user) {
        var url = environment.localhost.url + '/account/register';
        return this.http.post(url, user);
    };
    AccountService.prototype.logout = function () {
        this.authService.deauthenticateUser();
        this.router.navigate(['/']);
    };
    AccountService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AuthService,
            Router])
    ], AccountService);
    return AccountService;
}());
export { AccountService };
//# sourceMappingURL=account.service.js.map