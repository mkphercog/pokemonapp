import React, { useState } from "react";

import { SharedButton } from "./../SharedButton/SharedButton";
import {
  fetchRandomPokemon,
  randomID,
} from "./../RandomPokemonView/RandomPokemonFetch";
import questionMark from "./../../images/questionMark.png";

import { Container, Title, Image } from "./RandomPokemonView.css";

export const RandomPokemonView: React.FC<RandomPokemonViewProps> = () => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: "Radom",
    img: questionMark,
  });

  const { id: pokemonID, name: pokemonName, img: pokemonImg } = pokemon;

  return (
    <>
      <Container>
        <Title>
          {pokemonName} {pokemonID}
        </Title>
        <Image src={pokemonImg} alt="Pokemon" title={pokemonName} />
      </Container>
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
    </>
  );
};

interface RandomPokemonViewProps {}
