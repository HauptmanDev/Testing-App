import './App.css';
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import store from "./components/store/store";
import {Provider} from "react-redux";
import Header from "./components/Header component/Header";
import Routers from "./components/Basic components/Routers";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <Routers/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
