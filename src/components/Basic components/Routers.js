// import './';
import React from 'react'
import {Route, Switch} from "react-router-dom";
import GreetingPage from "./Greeting page/Greeting";
import RegisterPage from "./Register page/Register";
import NotFoundPage from "./Error page/Error";
import ContactsPage from "./Contacts page/Contacts";
import AuthPage from "./Auth page/Auth";

export const START_GH_PAGES_PATH = '/';
export const AUTH_PATH = '/auth';
export const REGISTER_PATH = '/register';
export const CONTACTS_PATH = '/contacts';


function Routers() {
    return (
        <div className="Routers">
            <Switch>
                <Route exact path={START_GH_PAGES_PATH} render={() => <GreetingPage/>}/>
                <Route path={AUTH_PATH} render={() => <AuthPage/>}/>
                <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
                <Route path={CONTACTS_PATH} render={() => <ContactsPage/>}/>
                <Route path='*'
                       render={() => <NotFoundPage/>}/>
            </Switch>
        </div>
    );
}

export default Routers;
