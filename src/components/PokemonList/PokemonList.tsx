import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "./../../store/interfaces";

import { PagesControlPanel } from "./PagesControlPanel/PagesControlPanel";
import { LoadingComponent } from "./../LoadingComponent/LoadingComponent";

import { Wrapper, List, Item, PokeName, Image } from "./PokemonList.css";
import questionMark from "./../../images/questionMark.png";

export const PokemonList: React.FC = () => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { fetchingList, pngs, pokemonsPerPage } = pokemonList;
  const { results } = pokemonList.data;

  const pokemonsWithImages = useMemo(() => {
    if (!(pngs.length < pokemonsPerPage)) {
      return results.map((poke) => {
        const text = poke.url.slice(
          poke.url.indexOf("/pokemon/"),
          poke.url.length - 1
        );
        poke.image =
          pngs.find((png) => png.includes(`${text}.png`)) || "Not found";
        return poke;
      });
    }
    return [];
  }, [pngs, results, pokemonsPerPage]);

  const renderItems = useMemo(
    () =>
      pokemonsWithImages.map((poke) => {
        return (
          <Item key={poke.name}>
            <PokeName>{poke.name}</PokeName>
            {poke.image === "Not found" ? (
              <Image src={questionMark} alt={poke.name} />
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
      <List>
        {fetchingList || pngs.length < pokemonsPerPage ? (
          <LoadingComponent />
        ) : (
          renderItems
        )}
      </List>
      <PagesControlPanel pokePerPageButtons={[6, 12, 33]} />
    </Wrapper>
  );
};
