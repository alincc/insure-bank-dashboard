import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { routes } from "./app.routing";
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavBarModule } from './components/navbar/navbar.component.module';
import { FooterModule } from './components/footer/footer.module';


/*

  STATES

*/ 
import { StateModule } from "./states/state.module";
import { SideContentModule } from './components/side-content/side-content.module';
import { CompanyService } from './services/companies.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavBarModule,
    FooterModule,
    StateModule,
    SideContentModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
