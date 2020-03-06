import './App.css';
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import store from "./components/store/store";
import {Provider} from "react-redux";
import Header from "./components/Header component/Header";
import Routers from "./components/Basic components/Routers";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Provider store={store}>
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
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
