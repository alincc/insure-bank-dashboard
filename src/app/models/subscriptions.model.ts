import { IUser } from "./users.model";
import { IPolicy } from "./policy.model";
import { ICompany } from "./companies.model";



export type SubscriptionStatus = 'pending' | 'successful' | 'failed';



export interface ISubscriptionUpdate {
    id: string;
    data: ISubscription;
}


export interface ISubscription {
    _id?: string;
    userId?: IUser;
    policy?: IPolicy;
    company?: ICompany;
    approved?: boolean;
    startDate?: string;
    debitDay?: string;
    endDate?: string;
    canceled?: boolean;
    status?: SubscriptionStatus;
    errorMessage?: string;
    mandateId?: string;
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
}



export class SubscriptionModel implements ISubscription {

        _id: string;
        userId: IUser;
        policy: IPolicy;
        company: ICompany;
        approved: boolean;
        startDate: string;
        debitDay: string;
        endDate: string;
        canceled: boolean;
        status: SubscriptionStatus;
        errorMessage: string;
        mandateId: string;
        completed: boolean;
        createdAt: string;
        updatedAt: string;


        constructor (subscription: ISubscription) {
            this._id = subscription._id;
            this.userId = subscription.userId;
            this.policy = subscription.policy;
            this.company = subscription.company;
            this.approved = subscription.approved;
            this.startDate = subscription.startDate;
            this.debitDay = subscription.debitDay;
            this.endDate = subscription.endDate;
            this.canceled = subscription.canceled;
            this.status = subscription.status;
            this.errorMessage = subscription.errorMessage;
            this.mandateId = subscription.mandateId;
            this.completed = subscription.completed;
            this.createdAt = subscription.createdAt;
            this.updatedAt = subscription.updatedAt;
        }


        getCompanyName () {
            return this.company && this.company.name ? this.company.name : '';
        }

        getUserName () {
            return this.userId && this.userId.name ? this.userId.name : '';
        }

        getPolicyName () {
            return this.policy && this.policy.name ? this.policy.name : '';
        }


}