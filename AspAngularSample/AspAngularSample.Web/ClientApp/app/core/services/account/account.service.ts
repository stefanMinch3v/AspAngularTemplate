import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router) { }

    public login(user) {
        const url = environment.localhost.url + '/account/login';
        return this.http.post(url, user);
    }

    public register(user) {
        const url = environment.localhost.url + '/account/register';
        return this.http.post(url, user);
    }

    public logout() {
        this.authService.deauthenticateUser();

        this.router.navigate(['/']);
    }
}