var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutesModule } from './app.routes.module';
import { ItemModule } from './components/item/item.module';
import { AccountModule } from './components/account/account.module';
import { SharedModule } from './components/shared/shared.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/services/guards/auth.guard';
import { AdminGuard } from './core/services/guards/admin.guard';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                AppRoutesModule,
                HttpClientModule,
                ItemModule,
                AccountModule,
                SharedModule
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                },
                AuthGuard, AdminGuard
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map