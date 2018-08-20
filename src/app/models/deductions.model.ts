import { ISubscription } from "./subscriptions.model";


export interface IDeductions {
    subscriptionId: string,
    nandateId: string,
    momTransactionId: string,
    debitOrderTransactionId: string,
    amount: string,
    responseMessage: string,
    createdAt: string;
}