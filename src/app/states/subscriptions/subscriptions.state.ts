import { State, StateContext, Action, Selector } from "../../../../node_modules/@ngxs/store";
import { ISubscription, SubscriptionModel } from "../../models/subscriptions.model";
import { SubscriptionService } from "../../services/subscriptions.state";
import { GetSubscriptions, UpdateSubscription, SelectSubscription } from "./subscriptions.actions";



export interface ISubscriptionState {
    selected: ISubscription;
    loading: boolean;
    subscriptions: ISubscription[];
    message: string;
    showAlert: boolean;
}


@State<ISubscriptionState>({
    name: 'Users',
    defaults: {
        selected: {},
        loading: false,
        subscriptions: [],
        showAlert: false,
        message: ''
    }
})
export class SubscriptionState {


        @Selector()
        static selected (state: ISubscriptionState) {
            return state.selected;
        }

        @Selector()
        static loading (state: ISubscriptionState) {
            return state.loading;
        }

        @Selector()
        static subscriptions (state: ISubscriptionState) {
            return state.subscriptions;
        }

        @Selector()
        static message (state: ISubscriptionState) {
            return state.message;
        }


        constructor (private service: SubscriptionService) {

        }


        @Action(GetSubscriptions)
        async getCompanies ({ patchState }: StateContext<ISubscriptionState>, {}: GetSubscriptions) {
            try {

                    patchState({
                        loading: false,
                        showAlert: false,
                        message: ''
                    })

                    const  res = await this.service.getSubscriptions();

                    if (res.success) {

                            const subscriptions = res.data;

                            patchState({
                                loading: false,
                                message: res.message,
                                subscriptions: res.data.map(user => new SubscriptionModel(subscriptions))
                            })

                    } else  {

                            throw Error(res.message);

                    }
                
            } catch (err) {

                    patchState({
                        loading: false,
                        message: err.message
                    })
                
            }
        }


        @Action(UpdateSubscription)
        async updatePolicy ({ patchState, getState }: StateContext<ISubscriptionState>, { id, data }: UpdateSubscription) {
            try {

                patchState({ 
                    loading: true,
                    message: ''
                });

                const res = await this.service.updateSubscription({ id: id, data: data })

                if (res.success) {

                        const subscriptions = getState().subscriptions;
                        const subscription = subscriptions.find(v => v._id === id);
                        subscriptions[subscription._id] = Object.assign(subscription, data);

                        patchState({
                                loading: false,
                                message: res.message,
                                selected: subscriptions[subscription._id],
                                showAlert: true,
                                subscriptions: subscriptions
                        })

                } else {

                    throw Error(res.message);
                    
                }
                
            } catch (err) {
                patchState ({
                    loading: false,
                    showAlert: true,
                    message: err.message
                })
            }
        }


        @Action(SelectSubscription)
        SelectPolicy({ patchState }: StateContext<ISubscriptionState>, { data }: SelectSubscription) {
            return patchState({
                selected: data
            })
        }


}