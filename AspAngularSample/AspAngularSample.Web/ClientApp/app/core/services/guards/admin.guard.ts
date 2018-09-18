import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { AuthService } from '../auth.service';
import { RoleService } from '../role.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private roleSerivce: RoleService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }

    check(): boolean {
        if (!this.authService.isUserAuthenticated()) {
            this.router.navigate(['/account/login']);
            return;
        }

        return this.roleSerivce.isUserAdmin();
    }
}