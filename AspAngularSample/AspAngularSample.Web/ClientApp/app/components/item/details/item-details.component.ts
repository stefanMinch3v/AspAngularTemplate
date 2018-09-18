import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../../../core/services/item/item.service';
import { RoleService } from '../../../core/services/role.service';

import { ItemDetailsViewModel } from '../../../core/models/item/item-details.view.model';

@Component({
    selector: 'item-details',
    templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {
    private id: number;
    private item: ItemDetailsViewModel

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private router: Router,
        private roleService: RoleService) { }

    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.getDetails(this.id);
    }

    public getDetails(id: number): void {
        this.itemService.getSingle(this.id)
            .subscribe(
                item => this.item = item,
                error => console.log(error)); // handle error
    }

    public deleteItem(): void {
        this.itemService.remove(this.id)
            .subscribe(success => {  // handle success
                console.log(success);
                this.router.navigate(['/']);
            },
            error => console.log(error));// handle error
    }

    private isUserAdm(): boolean {
        return this.roleService.isUserAdmin();
    }
}