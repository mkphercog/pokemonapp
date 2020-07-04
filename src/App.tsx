import React from "react";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

import { GlobalStyles, AppStyled } from "./index.css";

export const App = () => (
  <AppStyled>
    <Header />
    <Navigation />
    <Main />
    <Footer />
    <GlobalStyles />
  </AppStyled>
);
