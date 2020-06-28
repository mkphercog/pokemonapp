import React from "react";
import { Container, Title, Image } from "./RandomPokemonView.css";

export const RandomPokemonView: React.FC<RandomPokemonViewProps> = ({
  pokemonID,
  pokemonName,
  pokemonImg,
}) => {
  return (
    <Container>
      <Title>
        {pokemonName} {pokemonID}
      </Title>
      <Image src={pokemonImg} alt="Pokemon" title={pokemonName} />
    </Container>
  );
};

interface RandomPokemonViewProps {
  pokemonID: number;
  pokemonName: string;
  pokemonImg: string;
}
