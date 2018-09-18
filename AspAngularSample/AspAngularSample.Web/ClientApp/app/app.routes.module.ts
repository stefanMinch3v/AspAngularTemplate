import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemModule } from './components/item/item.module';
import { AccountModule } from './components/account/account.module';

const routes: Routes = [
    {
        path: 'items',
        loadChildren: () => ItemModule // lazy loading items...
    },
    {
        path: 'account',
        loadChildren: () => AccountModule // lazy loading items...
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
