
export const getUsersData = (state) => {
    return state.usersPage.users
}
export const getTotalCountUsers = (state) => {
    return state.usersPage.totalCountUsers
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPageData = (state) => {
    return  state.usersPage.currentPage
}

export const getIsFetchingData = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingiInProgress
}