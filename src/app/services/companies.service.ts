import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API, IApi } from '../models/api.model';
import { ICompany } from '../models/companies.model';


export interface IComanyUpdate {
    id: string;
    data: ICompany
}


@Injectable()
export class CompanyService {

        constructor (private http: HttpClient) {

        }

        getCompanies (): Promise<IApi> {
            return this.http.get(`${API.companies}/get`)
                       .toPromise()
                       .then((res: IApi) => res); 
        }

        updateCompany (data: IComanyUpdate): Promise<IApi> {
            return this.http.post(`${API.companies}/update`, data)
                            .toPromise()
                            .then((res: IApi) => res)
        }

        deleteCompany (id: string): Promise<IApi> {
            return this.http.delete(`${API.companies}/delete/${id}`)
                            .toPromise()
                            .then((res: IApi) => res)
        }


}