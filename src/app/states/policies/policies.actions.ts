import { IPolicy } from "../../models/policy.model";




export class GetPolicies {
    static readonly type = '[Policies] Get Policies';
    constructor () {}
}


export class DeletePolicy {
    static readonly type = '[Policies] Delete Policy';
    constructor (public id: string) {}
}


export class UpdatePolicy {
    static readonly type = '[Policy] Update Policy';
    constructor (public id: string, public data: IPolicy) {}
}


export class SelectPolicy {
    static readonly type = '[Policies] Select Policy';
    constructor (public data: IPolicy) {}
}
