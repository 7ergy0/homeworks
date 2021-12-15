
const initState = {
    loading:false
}
type loadingActionType={
    type:'LOADING'
    loading:boolean
}

export type initStateType = typeof initState

export const loadingReducer = (state:initStateType = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading:boolean): loadingActionType => ({
    type:"LOADING",loading
}) // fix any