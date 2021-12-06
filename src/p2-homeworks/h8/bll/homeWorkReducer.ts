import {UserType} from "../HW8";

const SORT="sort"
const CHECK="check"

type PayloadType="up"|"down"

type SortActionType={
    type:"sort",
    payload:PayloadType
}
type CheckActionType={
    type:"check",
    payload:number

}
type ActionsType=ReturnType<typeof SortUpDownAC> | ReturnType<typeof CheckAC>



let initialState: UserType[]


export const homeWorkReducer = (state=initialState, action: ActionsType): UserType[]=> { // need to fix any
    switch (action.type) {
        case SORT: {
           const newState= [...state].sort((a,b)=>{
               return a.name>b.name?1:-1
            })
            return action.payload==="up"?newState:newState.reverse()
        }
        case CHECK: {
            return state.filter(f=>f.age>=action.payload)
        }
        default: return state
    }
}
export const SortUpDownAC=(payload:PayloadType):SortActionType=>({type:SORT,payload})as const
export const CheckAC=(payload:number):CheckActionType=>({type:CHECK,payload})as const