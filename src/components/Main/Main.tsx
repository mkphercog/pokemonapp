import React, { useState } from "react";
import { MainStyled } from "./Main.css";
import { SharedButton } from "./../SharedButton/SharedButton";
import { RandomPokemonView } from "./../RandomPokemonView/RandomPokemonView";
import {
  fetchRandomPokemon,
  randomID,
} from "./../RandomPokemonView/RandomPokemonFetch";

export const Main: React.FC<MainProps> = () => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: "Pokemon",
    img:
      "https://cdn.pixabay.com/photo/2014/05/21/19/16/the-question-mark-350169_960_720.png",
  });

  return (
    <MainStyled>
      <RandomPokemonView
        pokemonID={pokemon.id}
        pokemonName={pokemon.name}
        pokemonImg={pokemon.img}
      />
      <SharedButton
        fun={async () => {
          const fetchPoke = await fetchRandomPokemon(randomID());
          const fetchedPoke = {
            id: fetchPoke.id,
            name: fetchPoke.name,
            img: fetchPoke.sprites.front_default,
          };
          setPokemon(fetchedPoke);
        }}
      >
        Losuj pokemona
      </SharedButton>
    </MainStyled>
  );
};

interface MainProps {}
