import { Component, OnInit } from '@angular/core';
import { Store, Select } from '../../../../node_modules/@ngxs/store';
import { SelectCompany, UpdateCompany, DeleteCompany, GetCompanies } from '../../states/companies/companies.actions';
import { ICompany, CompanyModel } from '../../models/companies.model';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { CompanyState } from '../../states/companies/company.state';
import { Observable } from '../../../../node_modules/rxjs';
import { NETWORKS } from '../../config/networks.config';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {


        @Select(CompanyState.selected) selected$: Observable<ICompany>;
        @Select(CompanyState.loading) loading$: Observable<boolean>;
        @Select(CompanyState.companies) companies$: Observable<ICompany[]>;

        networks: string[] = NETWORKS;


        formGroup: FormGroup;
        editable: boolean = false;

        private id: string;


        constructor (private store: Store) {};


        ngOnInit(): void {

            this.store.dispatch(new GetCompanies());

            this.selected$.subscribe( (company: CompanyModel) => {

                this.id = company._id;

                this.formGroup = new FormGroup({
                    name: new FormControl(company.name),
                    number: new FormControl(company.number),
                    network: new FormControl(company.network),
                    apiKey: new FormControl(company.apiKey),
                    blocked: new FormControl(company.blocked),
                    description: new FormControl(company.description)
                })

            })
        }


        onCompanySelected (data: ICompany) {
            this.store.dispatch(new SelectCompany(data));        
        }


        delete () {
            if (this.id && this.id !== '') this.store.dispatch(new DeleteCompany(this.id));
        }

        onEdit () {
            this.editable = !this.editable;
        }


        save () {
            this.store.dispatch(new UpdateCompany(this.id, this.formGroup.value));
        }



}
