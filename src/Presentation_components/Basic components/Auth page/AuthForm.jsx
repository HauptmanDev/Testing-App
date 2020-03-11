import React, {useState} from "react"
import {useForm} from "react-hook-form"
import style from "./AuthForm.module.scss"

const AuthForm = () => {
    const {handleSubmit, register, errors} = useForm();
    const [dataObj, setDataPerson] = useState();
    // const [successRegister, setStatusRegister] = useState(false);
    const onSubmit = values => {
            console.log(values);
            setDataPerson(values)
    };

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <input className={style.input}
                       name="username"
                       placeholder={"Имя"}
                       ref={register({
                           required: 'Required',
                       })}
                />
                {errors.username && errors.username.message}
                <input className={style.input}
                       name="firstPassword"
                       placeholder={"Пароль"}
                       type={'password'}
                       ref={register({
                           required: 'Required',
                           validate: value => value !== "" || "Введи пароль"
                       })}
                />
                <button className={style.button} type="submit">Войти</button>
            </form>
        </div>
    )
};

export default AuthForm;
