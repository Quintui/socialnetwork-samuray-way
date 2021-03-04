import React from 'react';
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer"
import {getIsAuth} from "../Redux/ReduxSelectors/header-selector";
import {getFormError} from "../Redux/ReduxSelectors/login-selector";



class LoginContainer extends React.Component {


    onSubmit = (currentData) => {
        this.props.login(currentData.email, currentData.password,currentData.rememberMe)
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <LoginForm
                    isAuth = {this.props.isAuth}
                    onSubmit={this.onSubmit}
                    formError = {this.props.formError}
                />
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    formError:  getFormError(state)
})


export default compose(
    connect(mapStateToProps, {login})
)(LoginContainer)
