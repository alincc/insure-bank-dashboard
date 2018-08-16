import { ICompany } from "../../models/companies.model";



export class GetCompanies {
    static readonly type = '[Companies] Get Companies';
    constructor () {}
}


export class DeleteCompany {
    static readonly type = '[Companies] Delete Company';
    constructor (public id: string) {}
}


export class UpdateCompany {
    static readonly type = '[Company] Update Company';
    constructor (public id: string, public data: ICompany) {}
}


export class SelectCompany {
    static readonly type = '[Companies] Select Company';
    constructor (public data: ICompany) {}
}
