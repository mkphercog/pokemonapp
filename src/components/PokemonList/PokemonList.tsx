import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "./../../store/interfaces";
import { showPokeDetails } from "./../../store/actions/pokemonDetailsAction";

import { PagesControlPanel } from "./PagesControlPanel/PagesControlPanel";
import { LoadingComponent } from "./../LoadingComponent/LoadingComponent";

import { Wrapper, List, Item, PokeName, Image } from "./PokemonList.css";
import questionMark from "./../../images/questionMark.png";

export const PokemonList: React.FC = () => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const dispatch = useDispatch();
  const { fetchingList, pngs, pokemonsPerPage } = pokemonList;
  const { results } = pokemonList.data;

  const pokemonsWithImages = useMemo(() => {
    if (!(pngs.length < pokemonsPerPage)) {
      return results.map((poke) => {
        const slicedPokemonIdFromURL = poke.url.slice(
          poke.url.indexOf("/pokemon/"),
          poke.url.length - 1
        );
        poke.image =
          pngs.find((png) => png.includes(`${slicedPokemonIdFromURL}.png`)) ||
          "Not found";
        return poke;
      });
    }
    return [];
  }, [pngs, results, pokemonsPerPage]);

  const renderItems = useMemo(
    () =>
      pokemonsWithImages.map((poke) => {
        const pokemonImage =
          poke.image === "Not found" ? (
            <Image src={questionMark} alt={poke.name} />
          ) : (
            <Image src={poke.image} alt={poke.name} />
          );
        return (
          <Item
            key={poke.name}
            onClick={() => {
              dispatch(showPokeDetails(poke.url));
            }}
          >
            <PokeName>{poke.name}</PokeName>
            {pokemonImage}
          </Item>
        );
      }),
    [pokemonsWithImages, dispatch]
  );

  return (
    <Wrapper>
      <List>
        {fetchingList || pngs.length < pokemonsPerPage ? (
          <LoadingComponent />
        ) : (
          renderItems
        )}
      </List>
      <PagesControlPanel pokePerPageButtons={[6, 12, 21]} />
    </Wrapper>
  );
};
