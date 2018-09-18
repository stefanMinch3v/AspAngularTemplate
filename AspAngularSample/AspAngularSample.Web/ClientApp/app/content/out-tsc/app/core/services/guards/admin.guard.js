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
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RoleService } from '../role.service';
var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, authService, roleSerivce) {
        this.router = router;
        this.authService = authService;
        this.roleSerivce = roleSerivce;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AdminGuard.prototype.check = function () {
        if (!this.authService.isUserAuthenticated()) {
            this.router.navigate(['/account/login']);
            return;
        }
        return this.roleSerivce.isUserAdmin();
    };
    AdminGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router,
            AuthService,
            RoleService])
    ], AdminGuard);
    return AdminGuard;
}());
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map