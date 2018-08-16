import { Component, OnInit } from '@angular/core';
import { Select, Store } from '../../../../node_modules/@ngxs/store';
import { AppState } from '../../states/app/app.state';
import { Observable } from '../../../../node_modules/rxjs';
import { ToggleSideContents } from '../../states/app/app.actions';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {


        @Select(AppState.title) title$: Observable<string>;


        constructor (private store: Store) {}

        ngOnInit(): void {}


        toggleContent () {
            this.store.dispatch(new ToggleSideContents());
        }

        

}
