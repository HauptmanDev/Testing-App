import React from "react";
import { useForm } from "react-hook-form";
import FormsWrapper from "../Common_components/FormsWrapper";

const RegisterPage = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <div>
            <FormsWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="email"
                        ref={register({
                            required: 'Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors.email && errors.email.message}
                    <input
                        name="username"
                        ref={register({
                            validate: value => value !== "admin" || "Nice try!"
                        })}
                    />
                    {errors.username && errors.username.message}
                    <button type="submit">Submit</button>
                </form>

            </FormsWrapper>
        </div>

    );
};

export default RegisterPage;