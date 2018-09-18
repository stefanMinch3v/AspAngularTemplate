import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ItemRoutesModule } from './item.routes.module';

import { ItemService } from '../../core/services/item/item.service';
import { AuthService } from '../../core/services/auth.service';

import { itemsComponents } from '.';

@NgModule({
    imports: [CommonModule, ItemRoutesModule, FormsModule, HttpClientModule],
    declarations: [...itemsComponents],
    providers: [ItemService, AuthService]
})
export class ItemModule { }