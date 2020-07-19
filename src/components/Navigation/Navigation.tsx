import React from "react";

import { NavigationStyled, NavList, NavLinkStyled } from "./Navigation.css";

export const Navigation: React.FC = () => (
  <NavigationStyled>
    <NavList>
      <NavLinkStyled to="/" exact>
        Losuj
      </NavLinkStyled>
      <NavLinkStyled to="/list">Lista</NavLinkStyled>
    </NavList>
  </NavigationStyled>
);
