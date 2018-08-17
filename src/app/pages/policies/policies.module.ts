import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesComponent } from './policies.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { routes } from './policies.routing';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { SideContentModule } from '../../components/side-content/side-content.module';
import { TitleComponentModule } from '../../components/title/title.module';




@NgModule({
    declarations: [
        PoliciesComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SideContentModule,
        TitleComponentModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class PoliciesModule {}