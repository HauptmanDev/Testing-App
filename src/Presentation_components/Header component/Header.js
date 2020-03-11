import React from 'react'
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={style.menu}>
            <div className={style.element}>
                <NavLink className={style.link} to='/register'>Регистрация</NavLink>
            </div>
            <div className={style.element}>
                <NavLink className={style.link} to='/auth'>Авторизация</NavLink>
            </div>
            <div className={style.element}>
                <NavLink className={style.link} to='/contacts'>Контакты</NavLink>
            </div>
        </div>
    );
}

export default Header;
