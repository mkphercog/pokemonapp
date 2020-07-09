import React, { useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import {
  fetchPokemonList,
  fetchPokemonImages,
} from "./store/actions/pokemonListAction";
import { StateInterface } from "./store/interfaces";

import { GlobalStyles, AppStyled } from "./index.css";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { fetchingList } = pokemonList;
  const { results } = pokemonList.data;
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  useEffect(() => {
    if (!fetchingList) dispatch(fetchPokemonImages(results));
  }, [fetchingList, results, dispatch]);

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
