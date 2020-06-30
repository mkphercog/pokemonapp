import React from "react";

import { NavigationStyled, NavList, NavLinkStyled } from "./Navigation.css";

export const Navigation: React.SFC<NavigationProps> = () => {
  return (
    <NavigationStyled>
      <NavList>
        <NavLinkStyled to="/" exact>
          Losuj
        </NavLinkStyled>

        <NavLinkStyled to="/list">Lista</NavLinkStyled>
        <NavLinkStyled to="/userPokemons">Twoje pokemony</NavLinkStyled>
      </NavList>
    </NavigationStyled>
  );
};

export interface NavigationProps {}
