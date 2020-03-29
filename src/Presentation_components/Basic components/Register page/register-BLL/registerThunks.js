import {RegisterAPI} from "../register-DAL/registerAPI";
import {registerErrorMessage, registerUserData} from "./registerAtions";

const passwordCoding = (password) => {
    let f = '';
    for (let c = 0; c < password.length; c++) {
        f += String.fromCharCode(password.charCodeAt(c) ^ (1 + (password.length - c) % 32));
    }
    return f;
};

export const registerTC = (objData) =>
    async (dispatch) => {
        // dispatch(addBoolean({name: REGISTER_IS_LOADING, value: true}));
        const response = await RegisterAPI.getSuccessRegister(objData.email, objData.username, passwordCoding(objData.firstPassword));
        // dispatch(addBoolean({name: REGISTER_IS_LOADING, value: false}));
        if (response.data.success) {
            dispatch(registerUserData(response.data.success));
        } else {
            dispatch(registerErrorMessage(response.data.error));
        }
    };