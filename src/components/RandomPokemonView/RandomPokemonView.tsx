import React, { useState, useCallback } from "react";

import { SharedButton } from "./../SharedButton/SharedButton";
import { fetchData } from "./../../functions/fetchData";
import { randomNumber } from "./../../functions/randomNumber";
import questionMark from "./../../images/questionMark.png";

import { Wrapper, Container, Title, Image } from "./RandomPokemonView.css";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonCount = 807;

export const RandomPokemonView: React.FC = () => {
  const [randomPokemon, setRandomPokemon] = useState({
    id: 0,
    name: "",
    img: questionMark,
  });
  const { id: pokemonID, name: pokemonName, img: pokemonImg } = randomPokemon;
  const [loaded, setLoaded] = useState(true);

  const handleClickRandom = useCallback(async () => {
    setLoaded(false);
    const fetchPoke = await fetchData(URL, randomNumber(pokemonCount));
    const fetchedPoke = {
      id: fetchPoke.id,
      name: fetchPoke.name,
      img: fetchPoke.sprites.front_default,
    };
    setRandomPokemon(fetchedPoke);
    setLoaded(true);
  }, []);

  return (
    <Wrapper>
      <Container>
        {loaded ? (
          <>
            <Title>
              {pokemonName ? pokemonName : ""}{" "}
              {pokemonID ? `(${pokemonID})` : ``}
            </Title>
            <Image src={pokemonImg} alt="Pokemon" title={pokemonName} />
          </>
        ) : (
          // <p>Ładowanie...</p>
          <LoadingComponent />
        )}
      </Container>

      <SharedButton fun={handleClickRandom}>Losuj</SharedButton>
    </Wrapper>
  );
};
