import React from 'react'
import {connect} from "react-redux"
import {
    follow, getUsers,
    setCurrentPage,
   setTotalUsers,
    unFollow
} from "../Redux/users-reducer"
import Users from "./Users"
import LoadingIcon from "../Common/LoadingIcon/LoadingIcon";
import {compose} from "redux";
import {withAuthCheck} from "../hoc/withAuthHok";
import {
    getCurrentPageData, getFollowingInProgress,
    getIsFetchingData,
    getPageSize,
    getTotalCountUsers,
    getUsersData
} from "../Redux/ReduxSelectors/user-selector";


class UsersClass extends React.Component {

    componentDidMount() {
        const {getUsers} = this.props
        getUsers(this.props.currentPage,this.props.pageSize)
    }

    setSelectedPage = (pageNum) => {
        const {setCurrentPage,getUsers } =this.props
        setCurrentPage(pageNum)
        getUsers(this.props.currentPage,this.props.pageSize)
    }

    render() {
        return (

            <main>
                {this.props.isFetching ? <LoadingIcon/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       setSelectedPage={this.setSelectedPage}
                       followingiInProgress = {this.props.followingiInProgress}
                       followingProgress = {this.props.followingProgress}
                       totalCountUsers = {this.props.totalCountUsers}
                />
            </main>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: getUsersData(state),
        totalCountUsers: getTotalCountUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPageData(state),
        isFetching: getIsFetchingData(state),
        followingiInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthCheck,
    connect(mapStateToProps, {follow, unFollow, setCurrentPage, setTotalUsers, getUsers }),
)(UsersClass)

