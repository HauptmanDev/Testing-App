import React from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>

                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
