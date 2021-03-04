import {userAPI} from "../api/api";
import {mappingObjectToArray} from "../Common/Helpers/obj-arr_helper";

const FOLLOW = 'samurai-way/users/FOLLOW'
const UNFOLLOW = 'samurai-way/users/UNFOLLOW'
const SET_USERS = 'samurai-way/users/SET_USERS'
const SET_CURRENT_PAGE = 'samurai-way/users/SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'samurai-way/users/TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'samurai-way/users/TOGGLE_FOLLOWING_PROGRESS'
const SET_TOTAL_COUNT_PAGE = 'samurai-way/users/SET_TOTAL_COUNT_PAGE'

let initialState = {
    users: [],
    pageSize:10,
    totalCountUsers:10,
    currentPage: 1,
    isFetching: false,
    followingiInProgress: []

}
const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: mappingObjectToArray(state.users, action.userId, "id", {followed: true},)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: mappingObjectToArray(state.users, action.userId, "id", {followed: false},)
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_TOTAL_COUNT_PAGE: {
            return {...state,totalCountUsers: action.totalCount}
       }

        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.pageCount}
        }

        case TOGGLE_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingiInProgress:
                    action.isFetching
                        ? [...state.followingiInProgress, action.userId]
                        : state.followingiInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

const followUnfollowFlow = async (dispatch, userId, actionCreator, apiMethod) => {

    dispatch(followingProgress(true, userId))
    const response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followingProgress(false, userId));
}

//ACTIONS CREATORS
export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users: users})

export const setCurrentPage = (pageCount) => ({type: SET_CURRENT_PAGE, pageCount: pageCount})

export const setTotalUsers = (totalCount) => ({type: SET_TOTAL_COUNT_PAGE, totalCount})

export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export const followingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

//THUNK CREATORS
export const getUsers = (currentPage, pageSize) =>

    async (dispatch) => {
        dispatch(toggleFetching(true))
        const data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
        dispatch(toggleFetching(false))

    }


export const follow = (userId) =>
    (dispatch) => {
        followUnfollowFlow(dispatch, userId, followSuccess, userAPI.follow)
    }

export const unFollow = (userId) =>
    (dispatch) => {
        followUnfollowFlow(dispatch, userId, unFollowSuccess, userAPI.unFollow)

    }


export default UsersReducer
