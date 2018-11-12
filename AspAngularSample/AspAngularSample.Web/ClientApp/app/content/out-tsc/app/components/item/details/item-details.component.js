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
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../core/services/data/item/item.service';
import { RoleService } from '../../../core/services/role.service';
var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(itemService, route, router, roleService) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.roleService = roleService;
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.getDetails(this.id);
    };
    ItemDetailsComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.itemService.getSingle(this.id)
            .subscribe(function (item) { return _this.item = item; }, function (error) { return console.log(error); }); // handle error
    };
    ItemDetailsComponent.prototype.deleteItem = function () {
        var _this = this;
        this.itemService.remove(this.id)
            .subscribe(function (success) {
            console.log(success);
            _this.router.navigate(['/']);
        }, function (error) { return console.log(error); }); // handle error
    };
    ItemDetailsComponent.prototype.isUserAdm = function () {
        return this.roleService.isUserAdmin();
    };
    ItemDetailsComponent = __decorate([
        Component({
            selector: 'item-details',
            templateUrl: './item-details.component.html'
        }),
        __metadata("design:paramtypes", [ItemService,
            ActivatedRoute,
            Router,
            RoleService])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());
export { ItemDetailsComponent };
//# sourceMappingURL=item-details.component.js.map