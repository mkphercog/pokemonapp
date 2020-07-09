import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SharedButton } from "./../SharedButton/SharedButton";
import { fetchPokemonList } from "./../../store/actions/pokemonListAction";
import { State } from "./../../store/interfaces";
import { LoadingComponent } from "./../LoadingComponent/LoadingComponent";

import {
  Wrapper,
  List,
  Item,
  PokeName,
  Image,
  PagesControlPanel,
} from "./PokemonList.css";

export const PokemonList: React.SFC<PokemonListProps> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: State) => state.pokemonList);
  const { fetchingList, images } = pokemonList;
  const { next, previous, results } = pokemonList.data;

  const pokemonsWithImages = useMemo(
    () =>
      results.map((poke) => {
        const text = poke.url.slice(
          poke.url.indexOf("/pokemon"),
          poke.url.length - 1
        );
        poke.image = images.find((image) => image.includes(text));
        return poke;
      }),
    [images, results]
  );

  const renderItems = useMemo(
    () =>
      pokemonsWithImages.map((poke) => {
        return (
          <Item key={poke.name}>
            <PokeName>{poke.name}</PokeName>
            {!poke.image ? (
              <LoadingComponent />
            ) : (
              <Image src={poke.image} alt={poke.name} />
            )}
          </Item>
        );
      }),
    [pokemonsWithImages]
  );

  return (
    <Wrapper>
      <List>{fetchingList ? <LoadingComponent /> : renderItems}</List>
      <PagesControlPanel>
        <SharedButton
          fun={() => {
            if (previous) {
              dispatch(fetchPokemonList(previous));
              setPageNumber(pageNumber - 1);
            }
          }}
        >{`<`}</SharedButton>
        {pageNumber}
        <SharedButton
          fun={() => {
            if (next) {
              dispatch(fetchPokemonList(next));
              setPageNumber(pageNumber + 1);
            }
          }}
        >{`>`}</SharedButton>
      </PagesControlPanel>
    </Wrapper>
  );
};

interface PokemonListProps {}
