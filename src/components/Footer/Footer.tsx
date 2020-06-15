import React from "react";
import { FooterStyled, TitleStyled, AuthorLink } from "./Footer.css";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled>
      <TitleStyled>
        Projekt i realizacja{" "}
        <AuthorLink
          href="https://mkphercog.github.io/mywebsite/#/"
          target="blanc"
        >
          Marcin Hercog
        </AuthorLink>
      </TitleStyled>
    </FooterStyled>
  );
};

interface FooterProps {}
