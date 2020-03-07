import React from 'react'
import style from './FormsWrapper.module.scss'

function FormsWrapper({children}) {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
}

export default FormsWrapper;
