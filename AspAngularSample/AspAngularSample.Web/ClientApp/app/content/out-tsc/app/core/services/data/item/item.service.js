var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
var localhostUrl = environment.localhost.url;
var itemsUrl = localhostUrl + "/items";
var ItemService = /** @class */ (function () {
    function ItemService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    ItemService.prototype.getAll = function () {
        return this.http.get(itemsUrl)
            .pipe(map(function (res) { return Object.values(res); }));
    };
    ItemService.prototype.getSingle = function (id) {
        // add validations
        var url = itemsUrl + "/" + id;
        return this.http.get(url);
    };
    ItemService.prototype.remove = function (id) {
        // add validations
        var url = itemsUrl + "/" + id;
        return this.http.delete(url)
            .pipe(map(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.edit = function (id, editItemModel) {
        // add validations
        var url = itemsUrl + "/" + id;
        return this.http.put(url, editItemModel)
            .pipe(map(function (res) { return Object.assign(res); }));
    };
    ItemService.prototype.create = function (createItemModel) {
        return this.http.post(itemsUrl, createItemModel)
            .pipe(map(function (res) { return Object.assign(res); }));
    };
    ItemService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            AuthService,
            Router])
    ], ItemService);
    return ItemService;
}());
export { ItemService };
;
//# sourceMappingURL=item.service.js.map