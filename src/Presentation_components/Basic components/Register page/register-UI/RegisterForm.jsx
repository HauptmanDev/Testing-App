import React from "react"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

import style from "./RegisterForm.module.scss"
import {registerTC} from './../register-BLL/registerThunks'
import {AUTH_PATH} from "../../Routers";
import {registerSuccess} from "../register-BLL/registerSelectors";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {handleSubmit, register, errors} = useForm();
    const success = useSelector(registerSuccess);


    const onSubmit = values => {
        if (values.firstPassword !== values.secondPassword) {
            alert('Пароли не совпадают')
        } else {
            console.log(success)
            dispatch(registerTC(values));
        }
    };

    return (
        <div>
            {success ? <Redirect to={AUTH_PATH}/> :
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <input className={style.input}
                           name="email"
                           placeholder={"Эл. почта"}
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
                           placeholder={"Имя"}
                           ref={register({
                               required: 'Required',
                               validate: value => value !== "admin" || "Nice try!",
                           })}
                    />
                    {errors.username && errors.username.message}
                    <input className={style.input}
                           name="firstPassword"
                           placeholder={"Пароль"}
                           type={'password'}
                           ref={register({
                               required: 'Required',
                               validate: value => value !== "123" || "Ты серьезно?"
                           })}
                    />
                    {errors.firstPassword && errors.firstPassword.message}
                    <input className={style.input}
                           name="secondPassword"
                           placeholder={"Повторите пароль"}
                           type="password"
                           ref={register({
                               required: 'Required',
                           })}
                    />
                    {errors.secondPassword && errors.secondPassword.message}
                    <button className={style.button} type="submit">Подтвердить</button>
                </form>}

        </div>
    )
};

export default RegisterForm;
