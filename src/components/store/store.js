import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    // signIn: signInReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
