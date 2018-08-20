import { Component, OnInit } from '@angular/core';
import { Select, Store } from '../../../../node_modules/@ngxs/store';
import { SubscriptionState } from '../../states/subscriptions/subscriptions.state';
import { Observable } from '../../../../node_modules/rxjs';
import { ISubscription } from '../../models/subscriptions.model';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { GetSubscriptions } from '../../states/subscriptions/subscriptions.actions';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {


            @Select(SubscriptionState.selected) selected$: Observable<ISubscription>;
            @Select(SubscriptionState.loading) loading$: Observable<boolean>;
            @Select(SubscriptionState.subscriptions) subscriptions$: Observable<ISubscription[]>;


            constructor (private store: Store) {};


            ngOnInit(): void {
                this.store.dispatch(new GetSubscriptions());

            }




}
