import React from 'react'

import {NavbarItem, NavbarList, NavbarWrapper, NavLink} from "./NavbarComponent";

const Navbar = (props) => {

    let mappedNav = props.navigation.map(nav =>
        <NavbarItem key = {nav.id}>
            <NavLink activeClassName='active' to={nav.link}> {nav.name}</NavLink>
        </NavbarItem>)

    return (
        <>
            <NavbarWrapper>
                <NavbarList>
                    {mappedNav}
                </NavbarList>
                {/*<FriendsList activeFriends = {activeFriends}/>*/}
            </NavbarWrapper>
        </>
    )
}

export default Navbar
