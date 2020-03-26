import styles from './Greeting.module.css';
import React from 'react'
import {NavLink} from "react-router-dom";

function GreetingPage() {
    return (
        <div className={styles.greeting}>
            <div className={styles.text}>
                <span>Привет, новобранец! </span><span><NavLink to='/register'>Регистрируйся</NavLink> и проверь себя, готов ли ты стать САМУРАЕМ!!!</span>
            </div>
        </div>
    );
}

export default GreetingPage;
