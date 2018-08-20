import { Component, OnInit } from '@angular/core';
import { PolicyState } from '../../states/policies/policies.state';
import { Select, Store } from '../../../../node_modules/@ngxs/store';
import { Observable } from '../../../../node_modules/rxjs';
import { IPolicy, frequencyType } from '../../models/policy.model';
import { GetPolicies, SelectPolicy, UpdatePolicy } from '../../states/policies/policies.actions';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
    selector: 'app-policies',
    templateUrl: './policies.component.html',
    styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {


        @Select(PolicyState.selected) selected$: Observable<IPolicy>;
        @Select(PolicyState.loading) loading$: Observable<boolean>;
        @Select(PolicyState.policies) policies$: Observable<IPolicy[]>;

        frequencyTypes: frequencyType[] = [ 'Daily', 'Annually', 'Monthly', 'Quarterly', 'Semi-Annually', 'Weekly' ];
        formGroup: FormGroup;
        editable: boolean = false;

        private _id: string;


        constructor (private store: Store) {}



        ngOnInit(): void {

            this.store.dispatch(new GetPolicies());
            this.selected$.subscribe(policy => {

                this._id = policy._id;
                this.formGroup = new FormGroup({
                    company: new FormControl(policy.company ? policy.company.name : ''),
                    name: new FormControl(policy.name),
                    description: new FormControl(policy.description),
                    frequencyType: new FormControl(policy.frequencyType),
                    frequency: new FormControl(policy.frequency),
                    totalAmountToPay: new FormControl(policy.totalAmountToPay),
                    duration: new FormControl(policy.duration),
                    amountToDebit: new FormControl(policy.amountToDebit)
                })
            })

        }


        onCompanySelected (policy) {
            this.store.dispatch(new SelectPolicy(policy));
        }


        onEdit () {
            this.editable = !this.editable;
        }


        save () {
            this.store.dispatch(new UpdatePolicy(this._id, this.formGroup.value));
        }



}
