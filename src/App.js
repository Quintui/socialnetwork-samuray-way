import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import UserContainer from "./component/Users/UserContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LoginPage from "./component/Login/LoginContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {getInitialized} from "./component/Redux/app-reducer";
import LoadingIcon from "./component/Common/LoadingIcon/LoadingIcon";
import NavbarContainer from "./component/Navbar/NavbarContainer";
import store from "./component/Redux/store-redux";
import {suspenseWrapper} from "./component/hoc/lazyLoadingHok";

const ProfileContainer = React.lazy(() => import("./component/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./component/Dialogs/DialogsContaianer"));
class App extends React.Component {

    componentDidMount() {
        this.props.getInitialized()
    }

    render() {
        if (!this.props.initialized) {
           return <LoadingIcon/>
        }

        return (
            <>
                <div className="app_wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='app_wrapper_content'>
                        <Route path='/profile/:userId?' render={() => ( suspenseWrapper(ProfileContainer))}/>
                        <Route path='/dialogs' render={() => (suspenseWrapper(DialogsContainer))}/>
                        <Route path='/users' render={() => <UserContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                    </div>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

const AppContainer = compose (
    withRouter,
    connect(mapStateToProps, {getInitialized})
)(App);

const MainApp = () => {
    return(
        <Router>
            <Provider store = {store}>
                <AppContainer/>
            </Provider>
        </Router>
    )

}

export default MainApp