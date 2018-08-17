import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API, IApi } from '../models/api.model';
import { ICompany } from '../models/companies.model';
import { IPolicy } from '../models/policy.model';


export interface IPolicyUpdate {
    id: string;
    data: IPolicy
}


@Injectable()
export class PolicyService {

        constructor (private http: HttpClient) {

        }

        getPolicies (): Promise<IApi> {
            return this.http.get(`${API.policies}/get`)
                       .toPromise()
                       .then((res: IApi) => res); 
        }

        updatePolicy (data: IPolicyUpdate): Promise<IApi> {
            return this.http.post(`${API.policies}/update`, data)
                            .toPromise()
                            .then((res: IApi) => res)
        }

        deletePolicy (id: string): Promise<IApi> {
            return this.http.delete(`${API.policies}/delete/${id}`)
                            .toPromise()
                            .then((res: IApi) => res)
        }


}