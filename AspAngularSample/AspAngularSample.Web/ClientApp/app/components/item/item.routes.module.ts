import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllItemsComponent } from './all/all-items.component';
import { ItemDetailsComponent } from './details/item-details.component';
import { CreateItemComponent } from './create/create-item.component';
import { EditItemComponent } from './edit/edit-item.component';

import { AuthGuard } from '../../core/services/guards/auth.guard';
import { AdminGuard } from '../../core/services/guards/admin.guard';

const routes: Routes = [
    { path: 'all', component: AllItemsComponent },
    { path: 'details/:id', component: ItemDetailsComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateItemComponent, canActivate: [AdminGuard] },
    { path: 'edit/:id', component: EditItemComponent, canActivate: [AdminGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRoutesModule { }