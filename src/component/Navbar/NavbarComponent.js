import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const NavbarWrapper = styled.nav`
  grid-area: nav;
  background-color: rgb(12, 176, 231);
  border-radius: 20px;

`

export const NavbarList = styled.ul`

`

export const NavbarItem = styled.li`
  list-style: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
  font-size: 24px;

  &.active {
    color: red;
  }
`