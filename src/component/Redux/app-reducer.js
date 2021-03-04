import {authMySelf} from "./auth-reducer";

const SET_INITIALIZE = 'samurai-way/app/SET_INITIALIZE'

let initialState = {
    initialized: false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;

    }
}

export const initializedSuccess = () => ({
    type: SET_INITIALIZE
})

export const getInitialized = () => async (dispatch) => {

    let promise = dispatch(authMySelf())
    await Promise.all([promise])
    dispatch(initializedSuccess())


}


export default appReducer

