import { Component, OnInit } from '@angular/core';
import { sideBarItems } from '../../config/sidebar.items';
import { Store } from '../../../../node_modules/@ngxs/store';
import { SetNavigationTitle } from '../../states/app/app.actions';


export interface ISidebarItems {
    item: string;
    icon: string;
}


export interface ISidebar {
    title: string;
    logo: string;
    items: ISidebarItems[]
}


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


        sideBar: ISidebar = sideBarItems;

        constructor (private store: Store) {}

        ngOnInit(): void {
            
        }

        onLinkCliked (title) {
            this.store.dispatch(new SetNavigationTitle(title))
        }



}

