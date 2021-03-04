import {authAPI, LoginApi,} from "../api/authApi";

const SET_AUTH_USER_DATA = 'samurai-way/auth/SET_AUTH_USER_DATA'
const SET_FORM_ERROR = 'samurai-way/auth/auth/SET_FORM_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userData: null,
    formError: ''

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_FORM_ERROR:
            return {
                ...state,
                formError: action.error
            }
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
})
export const setFormError = (error) => ({
    type: SET_FORM_ERROR,
    error
})

export const authMySelf = () =>
    async (dispatch) => {

        const response = await authAPI.authMe()

        if (response.resultCode === 0) {
            let {email, id, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true))
        }

    }

export const login = (email, password, rememberMe) =>
    async (dispatch) => {
        const response = await LoginApi.fetchingLogin(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(authMySelf())
        } else {
            let action = response.data.messages.length > 0 ? response.data.messages[0] : 'Uncommon Error'
            dispatch(setFormError(action))
        }


    }
export const logout = () =>
    async (dispatch) => {
        const response = await LoginApi.fetchingLoginOut()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    }


export default authReducer

