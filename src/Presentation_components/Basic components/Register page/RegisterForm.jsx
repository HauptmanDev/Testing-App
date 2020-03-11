import React from "react"
import {useForm} from "react-hook-form"
import style from "./RegisterForm.module.scss"

const RegisterForm = () => {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <input className={style.input}
                   name="email"
                   placeholder={"эл. почта"}
                   ref={register({
                       required: 'Required',
                       pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                           message: "invalid email address"
                       }
                   })}
            />
            {errors.email && errors.email.message}
            <input className={style.input}
                   name="username"
                   placeholder={"имя"}
                   ref={register({
                       required: 'Required',
                       validate: value => value !== "admin" || "Nice try!"
                   })}
            />
            {errors.username && errors.username.message}
            <input className={style.input}
                   name="firstPassword"
                   placeholder={"пароль"}
                   type={'password'}
                   ref={register({
                       required: 'Required',
                       validate: value => value !== "admin" || "Nice try!"
                   })}
            />
            {errors.firstPassword && errors.firstPassword.message}
            <input className={style.input}
                   name="secondPassword"
                   placeholder={"повторите пароль"}
                   type="password"
                   ref={register({
                       required: 'Required',
                       validate: value => value !== "admin" || "Nice try!"
                   })}
            />
            {errors.secondPassword && errors.secondPassword.message}
            <button className={style.button} type="submit">Подтвердить</button>
        </form>
    )
}

export default RegisterForm;
