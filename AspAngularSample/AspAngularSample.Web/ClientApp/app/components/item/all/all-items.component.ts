import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ItemService } from '../../../core/services/data/item/item.service';

import { AllItemsViewModel } from '../../../core/models/item/all-items.view.model';

@Component({
    selector: 'all-items',
    templateUrl: './all-items.component.html'
})
export class AllItemsComponent implements OnInit{
    private items: AllItemsViewModel[];

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.getAll();
    }

    public getAll(): void {
        this.itemService.getAll()
            .subscribe(
                data => this.items = data,
                error => console.log(error)); // handle error
    }
};