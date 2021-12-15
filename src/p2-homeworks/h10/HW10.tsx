import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from './loader/loader.gif'


function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    //const loading = false

    const setLoading = () => {
        const action = loadingAC(true)
        dispatch(action)
        setTimeout(() => {
            const action = loadingAC(false)
            dispatch(action)
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={loader} style={{width:"100px", height:"50px", marginTop:"-12px"}}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
