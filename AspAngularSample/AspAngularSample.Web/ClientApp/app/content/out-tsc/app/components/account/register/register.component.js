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
import { AccountService } from '../../../core/services/account/account.service';
import { AccountRegisterModel } from '../../../core/models/account/account-register.input.model';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new AccountRegisterModel();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.register(this.user)
            .subscribe(function (success) { return _this.router.navigate(['/account/login']); }, // handle success
        function (// handle success
        error) { return console.log(error.error); }); // handle error
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'register',
            templateUrl: './register.component.html'
        }),
        __metadata("design:paramtypes", [AccountService, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map