import { ICompany, CompanyModel } from "../../models/companies.model";
import { State, StateContext, Action, Selector } from "../../../../node_modules/@ngxs/store";
import { SelectCompany, GetCompanies, UpdateCompany } from "./companies.actions";
import { CompanyService } from "../../services/companies.service";



export interface ICompanyState {
    selected: ICompany;
    loading: boolean;
    companies: ICompany[];
    message: string;
}


@State<ICompanyState>({
    name: 'Companies',
    defaults: {
        selected: {},
        loading: false,
        companies: [],
        message: ''
    }
})
export class CompanyState {


        @Selector()
        static selected (state: ICompanyState) {
            return state.selected;
        }

        @Selector()
        static loading (state: ICompanyState) {
            return state.loading;
        }

        @Selector()
        static companies (state: ICompanyState) {
            return state.companies;
        }

        @Selector()
        static message (state: ICompanyState) {
            return state.message;
        }


        constructor (private companyService: CompanyService) {

        }


        @Action(GetCompanies)
        async getCompanies ({ patchState }: StateContext<ICompanyState>, {}: GetCompanies) {
            try {

                    patchState({
                        loading: false,
                        message: ''
                    })

                    const  res = await this.companyService.getCompanies();

                    if (res.success) {

                            const companies = res.data;

                            patchState({
                                loading: false,
                                message: res.message,
                                companies: res.data.map(company => new CompanyModel(company))
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


        @Action(UpdateCompany)
        async updateCompany ({ patchState, getState }: StateContext<ICompanyState>, { id, data }: UpdateCompany) {
            try {

                patchState({ 
                    loading: true,
                    message: ''
                });

                const res = await this.companyService.updateCompany({ id: id, data: data })

                if (res.success) {

                        const companies = getState().companies;
                        const company = companies.find(v => v._id === id);
                        companies[company._id] = Object.assign(company, data);

                        patchState({
                                loading: false,
                                message: res.message,
                                selected: companies[company._id],
                                companies: companies
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


        @Action(SelectCompany)
        SelectCompany({ patchState }: StateContext<ICompanyState>, { data }: SelectCompany) {
            return patchState({
                selected: data
            })
        }


}