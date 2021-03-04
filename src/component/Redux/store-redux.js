import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./app-reducer";
import navBarReducer from "./navBar-reducer";


let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    navBar: navBarReducer

})
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleWare),

);
let store = createStore(reducers, enhancer);


export default store