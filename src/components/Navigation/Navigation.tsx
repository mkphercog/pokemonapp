import React from "react";

import { NavigationStyled, NavList, NavLinkStyled } from "./Navigation.css";

export const Navigation: React.FC = () => (
  <NavigationStyled>
    <NavList>
      <NavLinkStyled to="/pokemonapp/" exact>
        Losuj
      </NavLinkStyled>
      <NavLinkStyled to="/pokemonapp/list">Lista</NavLinkStyled>
      {/* <NavLinkStyled to="/favourite">Ulubione</NavLinkStyled> */}
    </NavList>
  </NavigationStyled>
);
