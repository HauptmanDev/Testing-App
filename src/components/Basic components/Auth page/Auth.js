import style from './Auth.module.css';
import React from 'react'


function AuthPage() {
    return (
        <div className={style.menu}>
            <span>Регистрация</span>
            <span>Авторизация</span>
            <span>Контакты</span>
        </div>
    );
}

export default AuthPage;
