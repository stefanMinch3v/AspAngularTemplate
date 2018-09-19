import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }

    check(): boolean {
        const expirationTime = new Date(this.authService.getExpirationTime());
        if (this.authService.isUserAuthenticated() && expirationTime > new Date) {
            return true;
        }

        this.authService.deauthenticateUser();
        this.router.navigate(['/account/login']);
        return false;
    }
}
