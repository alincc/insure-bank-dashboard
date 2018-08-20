import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { IApi, API } from '../models/api.model';
import { IuserUpdate } from '../models/users.model';



@Injectable()
export class UserService {

        constructor (private http: HttpClient) {

        }


        getUsers (): Promise<IApi> {
            return this.http.get(`${API.users}/get`)
                       .toPromise()
                       .then((res: IApi) => res); 
        }

        updateUser (data: IuserUpdate): Promise<IApi> {
            return this.http.post(`${API.users}/update`, data)
                            .toPromise()
                            .then((res: IApi) => res)
        }

        deleteUser (id: string): Promise<IApi> {
            return this.http.delete(`${API.users}/delete/${id}`)
                            .toPromise()
                            .then((res: IApi) => res)
        }
        

}