import React from "react";
import { HeaderStyled, PokemonLogoStyled } from "./Header.css";
import pokemonLogo from "./../../images/pokemon-logo.png";

export const Header: React.FC = () => (
  <HeaderStyled>
    <PokemonLogoStyled src={pokemonLogo} />
  </HeaderStyled>
);
