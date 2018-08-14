import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { routes } from "./app.routing";
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavBarModule } from './components/navbar/navbar.component.module';
import { FooterModule } from './components/footer/footer.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavBarModule,
    FooterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
