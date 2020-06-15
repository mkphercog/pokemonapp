import React from "react";
import { FooterStyled, TitleStyled } from "./Footer.css";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled>
      <TitleStyled>MH</TitleStyled>
    </FooterStyled>
  );
};

interface FooterProps {}
