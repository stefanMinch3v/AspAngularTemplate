var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllItemsComponent } from './all/all-items.component';
import { ItemDetailsComponent } from './details/item-details.component';
import { CreateItemComponent } from './create/create-item.component';
import { EditItemComponent } from './edit/edit-item.component';
import { AuthGuard } from '../../core/services/guards/auth.guard';
import { AdminGuard } from '../../core/services/guards/admin.guard';
var routes = [
    { path: 'all', component: AllItemsComponent },
    { path: 'details/:id', component: ItemDetailsComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateItemComponent, canActivate: [AdminGuard] },
    { path: 'edit/:id', component: EditItemComponent, canActivate: [AdminGuard] }
];
var ItemRoutesModule = /** @class */ (function () {
    function ItemRoutesModule() {
    }
    ItemRoutesModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ItemRoutesModule);
    return ItemRoutesModule;
}());
export { ItemRoutesModule };
//# sourceMappingURL=item.routes.module.js.map