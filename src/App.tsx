import React from "react";
import { GlobalStyles, AppStyled } from "./index.css";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <AppStyled>
      <Header />
      <Navigation />
      <Main />
      <Footer />
      <GlobalStyles />
    </AppStyled>
  );
};
