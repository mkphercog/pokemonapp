import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 font-family: Arial, Helvetica, sans-serif;
} 
`;

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
