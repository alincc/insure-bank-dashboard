import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from "@ngxs/store";

import { AppState } from "./app/app.state";
import { CompanyState } from './companies/company.state';


@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        NgxsModule.forRoot([
            AppState,
            CompanyState
        ])
    ],
    exports: [],
    providers: [],
})
export class StateModule {}