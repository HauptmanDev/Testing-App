import React from 'react'
import FormsWrapper from "../Common_components/FormsWrapper";
import FormTitle from "../Common_components/FormTitle";
import AuthForm from "./AuthForm";


function AuthPage() {
    return (
        <>
            <FormsWrapper>
                <FormTitle title={'Авторизация'}/>
                <AuthForm/>
            </FormsWrapper>
        </>
    );
}

export default AuthPage;
