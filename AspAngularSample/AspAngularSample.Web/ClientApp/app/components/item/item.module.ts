import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemRoutesModule } from './item.routes.module';

import { ItemService } from '../../core/services/data/item/item.service';
import { AuthService } from '../../core/services/auth.service';

import { itemsComponents } from '.';

@NgModule({
    imports: [CommonModule, ItemRoutesModule, FormsModule],
    declarations: [...itemsComponents],
    providers: [ItemService, AuthService]
})
export class ItemModule { }