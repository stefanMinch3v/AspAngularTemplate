var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../core/services/users/users.service';
import { AuthService } from '../../../core/services/auth.service';
import { LoginUser } from '../../../core/models/users/login-user.input.model';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, authService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.user = new LoginUser();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.usersService.login(this.user)
            .subscribe(function (res) {
            _this.authService.authenticateUser(res['token']);
            _this.authService.saveUser(_this.user.username);
            _this.router.navigateByUrl('/');
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [UsersService,
            AuthService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map