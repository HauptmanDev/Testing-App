import style from './Header.module.css';
import React from 'react'


function Header() {
    return (
        <div className={style.menu}>
            <span>Регистрация</span>
            <span>Авторизация</span>
            <span>Контакты</span>
        </div>
    );
}

export default Header;
