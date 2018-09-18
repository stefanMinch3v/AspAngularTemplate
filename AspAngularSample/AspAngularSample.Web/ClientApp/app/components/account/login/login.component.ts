import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../../core/services/account/account.service';
import { AuthService } from '../../../core/services/auth.service';

import { AccountLoginModel } from '../../../core/models/account/account-login.input.model';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    private user: AccountLoginModel;

    constructor(
        private accountService: AccountService,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.user = new AccountLoginModel();
    }

    public login(): void {
        this.accountService.login(this.user)
            .subscribe(res => {
                this.authService.authenticateUser(res['token']);
                this.authService.saveUser(this.user.username);
                this.authService.saveRoles(res['roles']);
                
                this.router.navigate(['/']);
            },
            error => console.log(error.error)); // handle error
    }
}
