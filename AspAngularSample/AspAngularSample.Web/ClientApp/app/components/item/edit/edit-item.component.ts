import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ItemService } from '../../../core/services/data/item/item.service';

import { ItemFormInputModel } from '../../../core/models/item/item-form.input.model';

@Component({
    selector: 'edit-item',
    templateUrl: './edit-item.component.html'
})
export class EditItemComponent {
    private item: ItemFormInputModel;
    private id: number;

    constructor(private itemService: ItemService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.item = new ItemFormInputModel();
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.itemService.getSingle(this.id)
            .subscribe(
                (item: ItemFormInputModel) => this.item = item,
                error => console.log(error));
    }

    public edit(): void {
        // add validations
        this.itemService.edit(this.id, this.item)
            .subscribe(
                success => console.log(success),
                error => console.log(error));
    }
};
