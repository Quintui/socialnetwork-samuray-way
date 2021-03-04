import React from 'react'
import {connect} from "react-redux";
import {getAuthProfile, getStatusData, setUserProfile, updateStatus} from "../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter,} from "react-router";
import {ProfileContainerWrapper} from "./ProfileComponent";
import {withAuthCheck} from "../hoc/withAuthHok";
import {compose} from "redux";
import {getAuthorizedUser, getProfile, getStatus} from "../Redux/ReduxSelectors/profile-selector";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUser
        }
        const {getAuthProfile, getStatusData} = this.props
        getAuthProfile(userId)
        getStatusData(userId)
    }


    render() {


        return (
            <>
                <ProfileContainerWrapper>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
                </ProfileContainerWrapper>
            </>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUser: getAuthorizedUser(state)
})

export default compose(
    withAuthCheck,
    connect(mapStateToProps, {setUserProfile, getAuthProfile, getStatusData, updateStatus}),
    withRouter,
)(ProfileContainer)

