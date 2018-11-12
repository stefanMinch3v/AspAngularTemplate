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

import { TokenInterceptor } from './core/services/interceptors/token.interceptor';

@NgModule({
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
    AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
