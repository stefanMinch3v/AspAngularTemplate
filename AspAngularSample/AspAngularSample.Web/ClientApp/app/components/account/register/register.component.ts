import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../../core/services/account/account.service';

import { AccountRegisterModel } from '../../../core/models/account/account-register.input.model';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    private user: AccountRegisterModel;

    constructor(private accountService: AccountService, private router: Router) { }

    ngOnInit() {
        this.user = new AccountRegisterModel();
    }

    public register(): void {
        this.accountService.register(this.user)
            .subscribe(
                success => this.router.navigate(['/account/login']),// handle success
                error => console.log(error.error));// handle error
    }
}
