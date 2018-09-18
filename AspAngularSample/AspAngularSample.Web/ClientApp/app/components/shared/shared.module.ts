import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { sharedComponents } from '.';

@NgModule({
    declarations: [...sharedComponents],
    imports: [CommonModule, RouterModule],
    exports: [...sharedComponents]
})
export class SharedModule { }