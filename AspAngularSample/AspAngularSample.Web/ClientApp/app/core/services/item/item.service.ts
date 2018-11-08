import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllItemsViewModel } from "../../models/item/all-items.view.model";
import { ItemDetailsViewModel } from "../../models/item/item-details.view.model";
import { ItemFormInputModel } from "../../models/item/item-form.input.model";

import { environment } from '../../../../environments/environment';


const localhostUrl = environment.localhost.url;
const itemsUrl = `${localhostUrl}/items`;

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router
    ) { }

    public getAll(): Observable<AllItemsViewModel[]> {
        return this.http.get(itemsUrl)
            .pipe(map((res: Response) => Object.values(res)));
    }

    public getSingle(id: number): Observable<ItemDetailsViewModel> {
        // add validations

        const url = `${itemsUrl}/${id}`;
        return this.http.get(url)
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public remove(id: number): Observable<object> {
        // add validations

        const url = `${itemsUrl}/${id}`;
        return this.http.delete(url)
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public edit(id: number, editItemModel: ItemFormInputModel): Observable<object> {
        // add validations

        const url = `${itemsUrl}/${id}`;
        return this.http.put(url, editItemModel)
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public create(createItemModel: ItemFormInputModel): Observable<object> {
        return this.http.post(itemsUrl, createItemModel)
            .pipe(map((res: Response) => Object.assign(res)));
    }
};
