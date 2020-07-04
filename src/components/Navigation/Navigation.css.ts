import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationStyled = styled.nav`
  width: 100%;
  background-color: saddlebrown;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  color: burlywood;
  padding: 5px 15px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
    background-color: khaki;
    color: saddlebrown;
  }

  &.active {
    color: saddlebrown;
    background-color: khaki;
  }
`;
