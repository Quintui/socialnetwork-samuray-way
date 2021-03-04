import {authAPI} from "../api/authApi";
import {ProfileApi} from "../api/api";

const ADD_POST = 'samurai-way/profile/ADD_POST'
const SET_USERS_PROFILE = 'samurai-way/profile/SET_USERS_PROFILE'
const SET_STATUS = 'samurai-way/profile/SET_STATUS'
const DELETE_POST = 'samurai-way/profile/DELETE_POST'
let initialState = {
    posts: [
        {
            message: 'My first post ',
            likeCount: '15',
            id: 1
        },
        {
            message: "Hello, I'm here ",
            likeCount: '20',
            id: 2
        },

    ],
    newPostText: 'New Post',
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                message: action.newPostText,
                likeCount: 0,
                id: Date.now()
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }


        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS :
            return {
                ...state, status: action.status
            }
        case DELETE_POST :
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state;

    }
}


export const addNewPost = (newPostText) => {
    return ({type: ADD_POST, newPostText})
}

export const setUserProfile = (profile) => {
    return ({type: SET_USERS_PROFILE, profile})
}
export const setStatus = (status) => {
    return ({type: SET_STATUS, status})
}
export const deletePost = (postId) => {
    return ({type: DELETE_POST, postId})
}


export const getAuthProfile = (userId) =>
    async (dispatch) => {
        const response = await authAPI.setAuth(userId)
        dispatch(setUserProfile(response));

    }


export const getStatusData = (userId) =>
    async (dispatch) => {
        const response = await ProfileApi.getStatus(userId)
        dispatch(setStatus(response))

    }


export const updateStatus = (status) =>
    async (dispatch) => {
        const response = await ProfileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    }
export default profileReducer

