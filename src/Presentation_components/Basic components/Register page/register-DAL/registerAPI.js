import axios from 'axios';
import {baseURL} from "./../../BaseURL";

const instance = axios.create({
    baseURL
});

export const RegisterAPI = {
    getSuccessRegister(email, login, password) {
        return instance.post(`/register`, {email, login, password})
    },
};
