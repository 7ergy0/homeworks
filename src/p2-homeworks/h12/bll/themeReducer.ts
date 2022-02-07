const initState = {
    theme: 'favorite'
};


export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME : {
            return {...state, theme: action.themes};
        }
        default:
            return state;
    }
};
const CHANGE_THEME = "CHANGE-THEME"

export const changeThemeC = (themes: string): ChangeThemeAction => ({type: CHANGE_THEME, themes} as const)

type ChangeThemeAction = {
    type: "CHANGE-THEME"
    themes: string
}

export type InitialStateType = typeof initState

type ActionType = ReturnType<typeof changeThemeC>
