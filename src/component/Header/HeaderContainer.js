import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import { logout, setAuthUserData,} from "../Redux/auth-reducer";
import {getIsAuth, getLogin, getUserId} from "../Redux/ReduxSelectors/header-selector";


class HeaderContainer extends React.Component {

    render() {

        return (
            <>
                <Header {...this.props} userData={this.props.userId} logout={this.props.logout}/>
            </>
        )
    }

}
const mapStateToProps = (state) => ({
    userId: getUserId(state),
    login: getLogin(state),
    isAuth: getIsAuth(state),


})

export default connect(mapStateToProps, {setAuthUserData,logout})(HeaderContainer)
