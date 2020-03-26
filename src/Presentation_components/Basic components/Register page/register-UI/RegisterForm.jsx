import React, {useState} from "react"
import {useForm} from "react-hook-form"
import style from "./RegisterForm.module.scss"

const RegisterForm = () => {
    const {handleSubmit, register, errors} = useForm();

    const [dataObj, setDataPerson] = useState();
    // const [successRegister, setStatusRegister] = useState(false);

    const onSubmit = values => {
        if (values.firstPassword !== values.secondPassword) {
            alert('Пароли не совпадают')
        } else {
            console.log(values);
            setDataPerson(values)
        }
    };

    return (
        <div>
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
                           // validate: value => value !== '123' || "Nice try!"
                       })}
                />
                {errors.secondPassword && errors.secondPassword.message}
                <button className={style.button} type="submit">Подтвердить</button>
            </form>
        </div>
    )
};

export default RegisterForm;
