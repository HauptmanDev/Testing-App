import style from './Register.module.css';
import React from 'react'


function RegisterPage() {
    return (
        <div className={style.menu}>
            <span>Регистрация</span>
            <span>Авторизация</span>
            <span>Контакты</span>
        </div>
    );
}

export default RegisterPage;
