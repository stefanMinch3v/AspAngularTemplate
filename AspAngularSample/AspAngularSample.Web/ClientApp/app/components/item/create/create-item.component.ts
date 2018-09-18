import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ItemService } from '../../../core/services/item/item.service';

import { ItemFormInputModel } from '../../../core/models/item/item-form.input.model';

@Component({
    selector: 'create-item',
    templateUrl: './create-item.component.html'
})
export class CreateItemComponent implements OnInit {
    private item: ItemFormInputModel

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.item = new ItemFormInputModel();
    }

    public create(): void {
        // add validations
        this.itemService.create(this.item)
            .subscribe(
                success => console.log(success), // handle success
                error => console.log(error)); // handle error
    }
};
