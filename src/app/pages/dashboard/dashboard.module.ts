import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { routes } from "./dashboard.routing";


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}