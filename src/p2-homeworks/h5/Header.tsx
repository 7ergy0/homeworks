import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>Junior+</NavLink>
            <div className={s.block}>levels</div>
        </div>
    )
}

export default Header
