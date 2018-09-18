var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemModule } from './components/item/item.module';
import { AccountModule } from './components/account/account.module';
var routes = [
    {
        path: 'items',
        loadChildren: function () { return ItemModule; } // lazy loading items...
    },
    {
        path: 'account',
        loadChildren: function () { return AccountModule; } // lazy loading items...
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());
export { AppRoutesModule };
//# sourceMappingURL=app.routes.module.js.map