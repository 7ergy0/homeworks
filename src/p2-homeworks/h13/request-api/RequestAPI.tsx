import React from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsApi} from "./RequestsApi";




const success=true

export function RequestAPI() {

    return (
        <>
            <SuperButton onClick={(e)=>requestsApi.request(success)}>отправить</SuperButton>
            <SuperCheckbox />
        </>
    )
}