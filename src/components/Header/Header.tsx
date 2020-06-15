import React from "react";
import { HeaderStyled, TitleStyled } from "./Header.css";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <TitleStyled>Pokemon App</TitleStyled>
    </HeaderStyled>
  );
};

interface HeaderProps {}
