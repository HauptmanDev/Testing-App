import style from './Error.module.css';
import React from 'react'


function NotFoundPage() {
    return (
        <div className={style.menu}>
            <span>Регистрация</span>
            <span>Авторизация</span>
            <span>Контакты</span>
        </div>
    );
}

export default NotFoundPage;
