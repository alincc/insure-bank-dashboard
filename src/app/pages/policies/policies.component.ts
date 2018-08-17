import { Component, OnInit } from '@angular/core';
import { PolicyState } from '../../states/policies/policies.state';
import { Select, Store } from '../../../../node_modules/@ngxs/store';
import { Observable } from '../../../../node_modules/rxjs';
import { IPolicy } from '../../models/policy.model';
import { GetPolicies, SelectPolicy } from '../../states/policies/policies.actions';

@Component({
    selector: 'app-policies',
    templateUrl: './policies.component.html',
    styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {


        @Select(PolicyState.selected) selected$: Observable<IPolicy>;
        @Select(PolicyState.loading) loading$: Observable<boolean>;
        @Select(PolicyState.policies) policies$: Observable<IPolicy[]>;


        constructor (private store: Store) {}

        ngOnInit(): void {

            this.store.dispatch(new GetPolicies())

        }

        onCompanySelected (policy) {
            this.store.dispatch(new SelectPolicy(policy));
        }



}
