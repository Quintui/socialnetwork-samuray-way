import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthCheck = ( Component) => {

    class WithAuthHok extends React.Component{

        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>

            return(
                <Component {...this.props}/>
            )
        }
    }

    let ConnectedRedicrectAuthHok = connect(mapStateToProps)(WithAuthHok)

    return ConnectedRedicrectAuthHok;
};



