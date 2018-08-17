import { State, StateContext, Action, Selector } from "../../../../node_modules/@ngxs/store";
import { IPolicy, PolicyModel } from "../../models/policy.model";
import { GetPolicies, UpdatePolicy, SelectPolicy } from "./policies.actions";
import { PolicyService } from "../../services/policies.service";



export interface IPolicyState {
    selected: IPolicy;
    loading: boolean;
    policies: IPolicy[];
    message: string;
}


@State<IPolicyState>({
    name: 'Policies',
    defaults: {
        selected: {},
        loading: false,
        policies: [],
        message: ''
    }
})
export class PolicyState {


        @Selector()
        static selected (state: IPolicyState) {
            return state.selected;
        }

        @Selector()
        static loading (state: IPolicyState) {
            return state.loading;
        }

        @Selector()
        static policies (state: IPolicyState) {
            return state.policies;
        }

        @Selector()
        static message (state: IPolicyState) {
            return state.message;
        }


        constructor (private service: PolicyService) {

        }


        @Action(GetPolicies)
        async getCompanies ({ patchState }: StateContext<IPolicyState>, {}: GetPolicies) {
            try {

                    patchState({
                        loading: false,
                        message: ''
                    })

                    const  res = await this.service.getPolicies();

                    if (res.success) {

                            const companies = res.data;

                            patchState({
                                loading: false,
                                message: res.message,
                                policies: res.data.map(Policy => new PolicyModel(Policy))
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


        @Action(UpdatePolicy)
        async updatePolicy ({ patchState, getState }: StateContext<IPolicyState>, { id, data }: UpdatePolicy) {
            try {

                patchState({ 
                    loading: true,
                    message: ''
                });

                const res = await this.service.updatePolicy({ id: id, data: data })

                if (res.success) {

                        const policies = getState().policies;
                        const policy = policies.find(v => v._id === id);
                        policies[policy._id] = Object.assign(policy, data);

                        patchState({
                                loading: false,
                                message: res.message,
                                selected: policies[policy._id],
                                policies: policies
                        })

                } else {

                    throw Error(res.message);
                    
                }
                
            } catch (err) {
                patchState ({
                    loading: false,
                    message: err.message
                })
            }
        }


        @Action(SelectPolicy)
        SelectPolicy({ patchState }: StateContext<IPolicyState>, { data }: SelectPolicy) {
            return patchState({
                selected: data
            })
        }


}