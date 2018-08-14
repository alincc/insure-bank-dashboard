import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';



@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        NavBarComponent
    ],
    providers: [],
})
export class NavBarModule {}