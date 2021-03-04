import {instance} from "./instance";


export const authAPI = {
    setAuth(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },


    authMe() {
        return instance
            .get('auth/me')
            .then(response => {
                return response.data
            })
    },
}

export const LoginApi = {

    fetchingLogin(email, password, rememberMe = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})

    },

    fetchingLoginOut() {
        return instance
            .delete(`auth/login`)
    }
}