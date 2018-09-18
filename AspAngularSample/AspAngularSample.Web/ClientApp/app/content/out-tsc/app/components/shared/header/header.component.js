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
import { AccountService } from '../../../core/services/account/account.service';
import { AuthService } from '../../../core/services/auth.service';
import { RoleService } from '../../../core/services/role.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(accountService, authService, roleService) {
        this.accountService = accountService;
        this.authService = authService;
        this.roleService = roleService;
    }
    HeaderComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    HeaderComponent.prototype.isUserAuth = function () {
        return this.authService.isUserAuthenticated();
    };
    HeaderComponent.prototype.isUserAdm = function () {
        return this.roleService.isUserAdmin();
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html'
        }),
        __metadata("design:paramtypes", [AccountService,
            AuthService,
            RoleService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map