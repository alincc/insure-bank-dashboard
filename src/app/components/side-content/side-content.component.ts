import { Component, OnInit } from '@angular/core';
import { Select } from '../../../../node_modules/@ngxs/store';
import { AppState } from '../../states/app/app.state';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-side-content',
    templateUrl: './side-content.component.html',
    styleUrls: ['./side-content.component.scss']
})
export class SideContentComponent implements OnInit {

    
        @Select(AppState.toggleSideContent) onToggle$: Observable<boolean>;

        constructor() {}

        ngOnInit(): void {}


}
