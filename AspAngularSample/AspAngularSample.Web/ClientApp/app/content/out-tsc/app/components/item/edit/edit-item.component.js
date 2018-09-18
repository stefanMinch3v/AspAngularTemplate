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
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../core/services/item/item.service';
import { ItemFormInputModel } from '../../../core/models/item/item-form.input.model';
var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = new ItemFormInputModel();
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.itemService.getSingle(this.id)
            .subscribe(function (item) { return _this.item = item; }, function (error) { return console.log(error); });
    };
    EditItemComponent.prototype.edit = function () {
        // add validations
        this.itemService.edit(this.id, this.item)
            .subscribe(function (success) { return console.log(success); }, function (error) { return console.log(error); });
    };
    EditItemComponent = __decorate([
        Component({
            selector: 'edit-item',
            templateUrl: './edit-item.component.html'
        }),
        __metadata("design:paramtypes", [ItemService, ActivatedRoute])
    ], EditItemComponent);
    return EditItemComponent;
}());
export { EditItemComponent };
;
//# sourceMappingURL=edit-item.component.js.map