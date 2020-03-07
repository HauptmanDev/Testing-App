import style from './Register.module.scss';
import React from 'react'
import FormsWrapper from "./FormsWrapper"

function RegisterPage() {
    return (
        <div className={style.menu}>
            <FormsWrapper>
                <h3>Title</h3>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </FormsWrapper>
        </div>
    );
}

export default RegisterPage;
