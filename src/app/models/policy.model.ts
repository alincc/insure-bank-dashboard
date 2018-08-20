import { ICompany } from "./companies.model";



export type frequencyType = 'Daily' |
                            'Weekly' |
                            'Monthly' |
                            'Quarterly' |
                            'Semi-Annually' |
                            'Annually' 



export interface IPolicy {
    _id?: string;
    company?: ICompany;
    name?: string;
    description?: string;
    amountToDebit?: string;
    frequencyType?: frequencyType;
    frequency?: string;
    totalAmountToPay?: string;
    duration?: string;
    createdAt?: string;
    updatedAt?: string;
}




export class PolicyModel implements IPolicy {

        _id: string;
        company: ICompany;
        name: string;
        description: string;
        frequencyType: frequencyType;
        frequency: string;
        totalAmountToPay: string;
        amountToDebit: string;
        duration: string;
        createdAt: string;
        updatedAt: string;


        constructor (policy: IPolicy) {
            this._id = policy._id;
            this.company = policy.company;
            this.name = policy.name;
            this.frequency = policy.frequency;
            this.frequencyType = policy.frequencyType;
            this.totalAmountToPay = policy.totalAmountToPay;
            this.duration = policy.duration;
            this.createdAt = policy.createdAt;
            this.updatedAt = policy.updatedAt;
            this.amountToDebit = policy.amountToDebit;
        }

        
}