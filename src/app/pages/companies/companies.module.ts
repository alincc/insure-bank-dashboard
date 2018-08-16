import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { routes } from "./companies.routing";
import { RouterModule } from '../../../../node_modules/@angular/router';
import { SideContentModule } from '../../components/side-content/side-content.module';
import { TitleComponentModule } from '../../components/title/title.module';



@NgModule({
    declarations: [
        CompaniesComponent
    ],
    imports: [ 
        CommonModule,
        SideContentModule,
        TitleComponentModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class CompaniesModule {}