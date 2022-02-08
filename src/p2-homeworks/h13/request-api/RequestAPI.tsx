import React, {ChangeEvent, useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsApi} from "./RequestsApi";


export function RequestAPI() {
    const [checked, setChecked] = useState<boolean>(false)


    const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>
        setChecked(e.currentTarget.checked)

    const requests = () => requestsApi.request(checked)

    return (
        <>
            <SuperButton onClick={requests}>отправить</SuperButton>
            <SuperCheckbox checked={checked} onChange={testOnChange}/>
        </>
    )
}