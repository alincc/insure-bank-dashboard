import { Component, OnInit } from '@angular/core';
import { Select, Store } from '../../../../node_modules/@ngxs/store';
import { UserState } from '../../states/users/users.state';
import { Observable } from '../../../../node_modules/rxjs';
import { IUser } from '../../models/users.model';
import { NETWORKS } from '../../config/networks.config';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { GetUsers, SelectUser, UpdateUser } from '../../states/users/users.actions';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {



        @Select(UserState.selected) selected$: Observable<IUser>;
        @Select(UserState.loading) loading$: Observable<boolean>;
        @Select(UserState.users) users$: Observable<IUser[]>;


        networks: string[] = NETWORKS;
        formGroup: FormGroup;
        editable: boolean = false;

        private _id: string;


        constructor (private store: Store) {}



        ngOnInit(): void {

            this.store.dispatch(new GetUsers());
            this.selected$.subscribe(user => {

                this._id = user._id;
                this.formGroup = new FormGroup({
                    name: new FormControl(user.name),
                    network: new FormControl(user.network),
                    phone: new FormControl(user.phone),
                    idNumber: new FormControl(user.idNumber),
                    idType: new FormControl(user.idType),
                    dateOfBirth: new FormControl(user.dateOfBirth),
                    address: new FormControl(user.address),
                    securityPin: new FormControl(user.securityPin),
                    blocked: new FormControl(user.email),
                    email: new FormControl(user.email)
                })
                
            })

        }


        onUserSelected (user) {
            this.store.dispatch(new SelectUser(user));
        }


        onEdit () {
            this.editable = !this.editable;
        }


        save () {
            this.store.dispatch(new UpdateUser(this._id, this.formGroup.value));
        }



}
