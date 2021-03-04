export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getStatus = (state) => {
    return state.profilePage.status
}

export const getAuthorizedUser = (state) => {
    return state.auth.userId
}

export const getMapedPosts = (state) => {
    return state.profilePage
}
export const getMyPostInputValue = (state) => {
    return state.profilePage.newPostText
}
