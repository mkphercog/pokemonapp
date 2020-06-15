import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4vh;
  background-color: gray;
`;

export const TitleStyled = styled.p`
  color: white;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const AuthorLink = styled.a`
  color: khaki;
  text-decoration: none;
  transition: 0.2s;

  @media (min-width: 1024px) {
    :hover {
      color: goldenrod;
    }
  }
`;
