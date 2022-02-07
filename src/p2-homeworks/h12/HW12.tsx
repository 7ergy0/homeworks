import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some', 'favorite', 'invert'];

function HW12() {
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme); // useSelector

    const onChangeCallback = useCallback((theme: string) => {
        dispatch(changeThemeC(theme))
    }, [])

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio name={'radio'}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;

