import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    constructor(private authService: AuthService) { }

    public isUserAdmin() {
        const roles = this.authService.getRoles();
        if (roles.includes('Admin')) {
            return true;
        }

        return false;
    }
}