import React from 'react'
import style from './FormTitle.module.scss'

function FormTitle({title}) {
    return (
        <h2 className={style.title}>
            {title}
        </h2>
    );
}

export default FormTitle;
