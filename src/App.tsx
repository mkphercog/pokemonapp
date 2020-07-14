import React, { useEffect } from "react";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import {
  fetchPokemonList,
  fetchPokemonImagesUrls,
  fetchPokemonPNG,
} from "./store/actions/pokemonListAction";
import { StateInterface } from "./store/interfaces";

import { GlobalStyles, AppStyled } from "./index.css";
import { useDispatch, useSelector } from "react-redux";

const startingPoint = 0;

export const App = () => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { fetchingList, images, pokemonsPerPage } = pokemonList;
  const { results } = pokemonList.data;
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${startingPoint}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList(URL));
  }, [dispatch, URL]);

  useEffect(() => {
    if (!fetchingList) dispatch(fetchPokemonImagesUrls(results));
  }, [fetchingList, results, dispatch]);

  useEffect(() => {
    if (images.length === pokemonsPerPage) dispatch(fetchPokemonPNG(images));
  }, [images, dispatch, pokemonsPerPage]);

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
