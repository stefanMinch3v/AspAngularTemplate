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
import { ItemService } from '../../../core/services/data/item/item.service';
import { ItemFormInputModel } from '../../../core/models/item/item-form.input.model';
var CreateItemComponent = /** @class */ (function () {
    function CreateItemComponent(itemService) {
        this.itemService = itemService;
    }
    CreateItemComponent.prototype.ngOnInit = function () {
        this.item = new ItemFormInputModel();
    };
    CreateItemComponent.prototype.create = function () {
        // add validations
        this.itemService.create(this.item)
            .subscribe(function (success) { return console.log(success); }, // handle success
        function (// handle success
        error) { return console.log(error); }); // handle error
    };
    CreateItemComponent = __decorate([
        Component({
            selector: 'create-item',
            templateUrl: './create-item.component.html'
        }),
        __metadata("design:paramtypes", [ItemService])
    ], CreateItemComponent);
    return CreateItemComponent;
}());
export { CreateItemComponent };
;
//# sourceMappingURL=create-item.component.js.map