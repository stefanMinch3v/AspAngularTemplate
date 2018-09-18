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
import { ItemService } from '../../../core/services/item/item.service';
var AllItemsComponent = /** @class */ (function () {
    function AllItemsComponent(itemService) {
        this.itemService = itemService;
    }
    AllItemsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    AllItemsComponent.prototype.getAll = function () {
        var _this = this;
        this.itemService.getAll()
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log(error); }); // handle error
    };
    AllItemsComponent = __decorate([
        Component({
            selector: 'all-items',
            templateUrl: './all-items.component.html'
        }),
        __metadata("design:paramtypes", [ItemService])
    ], AllItemsComponent);
    return AllItemsComponent;
}());
export { AllItemsComponent };
;
//# sourceMappingURL=all-items.component.js.map