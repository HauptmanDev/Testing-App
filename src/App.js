import React from 'react'
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import Header from "./Presentation_components/Header component/Header";
import Routers from "./Presentation_components/Basic components/Routers";
import './App.css';


export const App = () => {
    return (
        <div>
            <main className='wrapper'>
                <div className='blur'></div>
                <div className='App'>
                    <div className='HeaderPart'>
                        <div className='Title'>
                            Тест IT-incubator
                        </div>
                        <div className='Header'>
                            <Header/>
                        </div>
                    </div>
                    <div className='TestTable'>
                        <Routers/>
                    </div>
                </div>
            </main>
        </div>
    );
};

const BrowserApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};
export default BrowserApp;
