export const REGISTER_USER_DATA = 'auth/REGISTER-USER-DATA';
export const REGISTER_ERROR = 'auth/REGISTER-ERROR';
export const SUCCESS_REGISTER = 'auth/SUCCESS-REGISTER';

export const registerUserData = (objData) => {
    return {
        type: REGISTER_USER_DATA,
        objData,
    }
};

export const registerErrorMessage = (errorMessage) => {
    return {
        type: REGISTER_USER_DATA,
        errorMessage,
    }
};

export const registerSuccess = (status) => {
    return {
        type: REGISTER_USER_DATA,
        status,
    }
};
