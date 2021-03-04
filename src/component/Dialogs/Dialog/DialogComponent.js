import styled from 'styled-components'
import {NavLink as Link} from "react-router-dom";

export const DialogItem = styled.li`
  font-size: 24px;
  text-decoration: none;
  list-style: none;
`

export const DialogImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: black;
  
  &.active {
    color: red;
  }
`