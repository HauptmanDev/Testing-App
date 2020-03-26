export const REGISTER_USER_DATA = 'auth/REGISTER-USER-DATA';
export const REGISTER_ERROR = 'auth/REGISTER-ERROR';

const registerUserData = (objData) => {
    return {
        type: REGISTER_USER_DATA,
        objData,
    }
};

const registerErrorMessage = (errorMessage) => {
    return {
        type: REGISTER_USER_DATA,
        errorMessage,
    }
};
