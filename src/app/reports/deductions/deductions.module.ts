import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { routes } from './deductions.routing';
import { DeductionsComponent } from './deductions.component';


@NgModule({
    declarations: [
        DeductionsComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class DeductionsModule {}