import React from "react";
import { HeaderStyled, TitleStyled } from "./Header.css";
import PokemonLogo from "./../../images/pokemon-logo.png";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <TitleStyled src={PokemonLogo} />
    </HeaderStyled>
  );
};

interface HeaderProps {}
