import React from "react";
import FormsWrapper from "../Common_components/FormsWrapper";
import RegisterForm from "./register-UI/RegisterForm"
import FormTitle from "../Common_components/FormTitle"

const RegisterPage = () => {

    return (
        <>
            <FormsWrapper>
                <FormTitle title={'Регистрация'}/>
                <RegisterForm/>
            </FormsWrapper>
        </>

    );
};

export default RegisterPage;
