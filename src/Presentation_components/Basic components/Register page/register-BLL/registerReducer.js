import {initialState} from "./registerInitialState";
import {REGISTER_ERROR, REGISTER_USER_DATA} from "./registerAtions";


const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_DATA:
            return {
                ...state,
                objData: action.objData
            };
        case REGISTER_ERROR :
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};

export default registerReducer;