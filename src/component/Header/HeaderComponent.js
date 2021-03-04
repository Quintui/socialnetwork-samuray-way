import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const HeaderImgWrap = styled.header`
  grid-area: header;
  background-color: rgb(82, 223, 241);
  border-radius: 10px;
`



export const LoginWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  align-items: center;
  font-size: 25px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color:#000000;
  font-size: 20px;
  
`