import { ISubscription } from "../../models/subscriptions.model";





export class GetSubscriptions {
    static readonly type = '[Subscriptions] Get Subscriptions';
    constructor () {}
}


export class DeleteSubscription {
    static readonly type = '[Subscriptions] Delete Subscription';
    constructor (public id: string) {}
}


export class UpdateSubscription {
    static readonly type = '[Subscriptions] Update Subscription';
    constructor (public id: string, public data: ISubscription) {}
}


export class SelectSubscription {
    static readonly type = '[Subscriptions] Select Subscription';
    constructor (public data: ISubscription) {}
}