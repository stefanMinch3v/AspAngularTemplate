import { Component } from '@angular/core';

import { AccountService } from '../../../core/services/account/account.service';
import { AuthService } from '../../../core/services/auth.service';
import { RoleService } from '../../../core/services/role.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(
        private accountService: AccountService,
        private authService: AuthService,
        private roleService: RoleService) { }

    public logout() {
        this.accountService.logout();
    }

    private isUserAuth(): boolean {
        return this.authService.isUserAuthenticated();
    }

    private isUserAdm(): boolean {
        return this.roleService.isUserAdmin();
    }
}
