import React from 'react'
import {HeaderImgWrap, LoginWrap, NavLink} from "./HeaderComponent";



const Header = ({logout, login, isAuth}) => {

    return (
        <>
            <HeaderImgWrap>
                <LoginWrap>
                    {isAuth
                        ? <div>{login} <button onClick={logout}> Logout</button> </div>
                        : <NavLink to='/login'> Login </NavLink>}
                </LoginWrap>
            </HeaderImgWrap>
        </>
    )
}

export default Header
