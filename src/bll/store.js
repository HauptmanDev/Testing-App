import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import  thunkMiddleware from "redux-thunk";
import registerReducer from '../Presentation_components/Basic components/Register page/register-BLL/registerReducer'

const reducers = combineReducers({
    register: registerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.store = store;

