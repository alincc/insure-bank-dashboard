import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '../../../../node_modules/@angular/router';


import { routes } from "./users.routing";
import { TitleComponentModule } from '../../components/title/title.module';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { SideContentModule } from '../../components/side-content/side-content.module';


@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [ 
        CommonModule,
        TitleComponentModule,
        FormsModule,
        ReactiveFormsModule,
        SideContentModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class UsersModule {}