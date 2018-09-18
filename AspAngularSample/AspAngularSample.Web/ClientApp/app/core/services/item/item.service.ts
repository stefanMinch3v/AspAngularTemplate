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


const dbUrl = environment.localhost.url;
const itemsUrl = `${dbUrl}/items`;

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
        const headers = this.prepareBearerTokenHeaders(false);

        return this.http.get(url, { headers })
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public remove(id: number): Observable<object> {
        // add validations
        const url = `${itemsUrl}/${id}`;
        const headers = this.prepareBearerTokenHeaders(false);

        return this.http.delete(url, { headers })
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public edit(id: number, editItemModel: ItemFormInputModel): Observable<object> {
        // add validations
        const url = `${itemsUrl}/${id}`;
        const headers = this.prepareBearerTokenHeaders(false);

        return this.http.put(url, editItemModel, { headers })
            .pipe(map((res: Response) => Object.assign(res)));
    }

    public create(createItemModel: ItemFormInputModel): Observable<object> {
        // add validations
        const headers = this.prepareBearerTokenHeaders(true);

        return this.http.post(itemsUrl, createItemModel, { headers })
            .pipe(map((res: Response) => Object.assign(res)));
    }

    private prepareBearerTokenHeaders(isPostReq) {
        const token = this.authService.getToken();

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        if (isPostReq) {
            headers.set('Content-Type', 'application/json');
        } else {
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }

        return headers;
    }
};
