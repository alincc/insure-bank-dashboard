import { State, StateContext, Action, Selector } from "../../../../node_modules/@ngxs/store";
import { IUser, UserModel } from "../../models/users.model";
import { UserService } from "../../services/users.service";
import { GetUsers, UpdateUser, SelectUser } from "./users.actions";



export interface IUserState {
    selected: IUser;
    loading: boolean;
    users: IUser[];
    message: string;
    showAlert: boolean;
}


@State<IUserState>({
    name: 'Users',
    defaults: {
        selected: {},
        loading: false,
        users: [],
        showAlert: false,
        message: ''
    }
})
export class UserState {


        @Selector()
        static selected (state: IUserState) {
            return state.selected;
        }

        @Selector()
        static loading (state: IUserState) {
            return state.loading;
        }

        @Selector()
        static users (state: IUserState) {
            return state.users;
        }

        @Selector()
        static message (state: IUserState) {
            return state.message;
        }


        constructor (private service: UserService) {

        }


        @Action(GetUsers)
        async getCompanies ({ patchState }: StateContext<IUserState>, {}: GetUsers) {
            try {

                    patchState({
                        loading: false,
                        message: ''
                    })

                    const  res = await this.service.getUsers();

                    if (res.success) {

                            const users = res.data;

                            patchState({
                                loading: false,
                                message: res.message,
                                users: res.data.map(user => new UserModel(user))
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


        @Action(UpdateUser)
        async updatePolicy ({ patchState, getState }: StateContext<IUserState>, { id, data }: UpdateUser) {
            try {

                patchState({ 
                    loading: true,
                    message: ''
                });

                const res = await this.service.updateUser({ id: id, data: data })

                if (res.success) {

                        const users = getState().users;
                        const user = users.find(v => v._id === id);
                        users[user._id] = Object.assign(user, data);

                        patchState({
                                loading: false,
                                message: res.message,
                                selected: users[user._id],
                                showAlert: true,
                                users: users
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


        @Action(SelectUser)
        SelectPolicy({ patchState }: StateContext<IUserState>, { data }: SelectUser) {
            return patchState({
                selected: data
            })
        }


}