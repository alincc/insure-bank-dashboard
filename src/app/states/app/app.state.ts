import { State, StateContext, Action, Selector } from "@ngxs/store";
import { SetNavigationTitle, ToggleSideContents } from "./app.actions";


export interface IAppState {
    title: string;
    notifications: number;
    toggleSideContent: boolean;
}


@State<IAppState>({
    name: 'App',
    defaults: {
        title: '',
        notifications: 0,
        toggleSideContent: false
    }
})
export class AppState {


        constructor () {}

        @Selector()
        static title (state: IAppState) {
            return state.title;
        }


        @Selector()
        static toggleSideContent (state: IAppState) {
            return state.toggleSideContent;
        }

        
        @Action(SetNavigationTitle)
        setNavigationTitle ({ patchState }: StateContext<IAppState>, { title }: SetNavigationTitle) {
                return patchState({
                    title: title
                })
        }


        @Action(ToggleSideContents)
        toggleSideContents ({ patchState, getState }: StateContext<IAppState>, {}: ToggleSideContents) {
                return patchState({
                    toggleSideContent: !getState().toggleSideContent
                })
        }

}