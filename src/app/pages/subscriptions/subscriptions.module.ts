import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import { RouterModule } from '../../../../node_modules/@angular/router';

import { routes } from "./subscriptions.routing";
import { SideContentModule } from '../../components/side-content/side-content.module';
import { TitleComponentModule } from '../../components/title/title.module';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';



@NgModule({
    declarations: [
        SubscriptionsComponent
    ],
    imports: [ 
        CommonModule,
        SideContentModule,
        TitleComponentModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class SubscriptionsModule {}