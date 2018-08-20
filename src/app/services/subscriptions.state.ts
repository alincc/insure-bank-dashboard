import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { IApi, API } from '../models/api.model';
import { ISubscriptionUpdate } from '../models/subscriptions.model';




@Injectable()
export class SubscriptionService {

    
        constructor (private http: HttpClient) {};


        getSubscriptions (): Promise<IApi> {
            return this.http.get(`${API.subscriptions}/get`)
                       .toPromise()
                       .then((res: IApi) => res); 
        }

        updateSubscription (data: ISubscriptionUpdate): Promise<IApi> {
            return this.http.post(`${API.subscriptions}/update`, data)
                            .toPromise()
                            .then((res: IApi) => res)
        }

        deleteSubscription (id: string): Promise<IApi> {
            return this.http.delete(`${API.subscriptions}/delete/${id}`)
                            .toPromise()
                            .then((res: IApi) => res)
        }



}