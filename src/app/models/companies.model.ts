
export interface IWallet {
    number: string;
    network: string;
}


export interface ICompany {
    _id?: string;
    name?: string;
    wallet?: IWallet;
    apiKey?: string;
    description?: string;
    blocked?: boolean;
    createdAt?: string;
    updatedAt?: string;
}


export class CompanyModel implements ICompany {

        _id: string;
        name: string;
        number: string;
        network: string;
        apiKey: string;
        description: string;
        blocked: boolean;
        createdAt: string;
        updatedAt: string;

        constructor (company: ICompany) {
            this.name = company.name;
            this.number = company.wallet.number;
            this.network = company.wallet.network;
            this.description = company.description;
            this.blocked = company.blocked;
            this.createdAt = company.createdAt;
            this.updatedAt = company.updatedAt;
            this._id = company._id;
        }

}