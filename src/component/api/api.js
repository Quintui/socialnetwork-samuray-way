import {instance} from "./instance";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10 ) {

        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })

    },


    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }

}

export const ProfileApi = {

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
    }

}


