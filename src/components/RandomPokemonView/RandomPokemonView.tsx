import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "./../../store/interfaces";

import { SharedButton } from "./../SharedButton/SharedButton";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import {
  fetchRandomPokemon,
  fetchRandomPokemonPNG,
} from "../../store/actions/randomPokeAction";

import { randomNumber } from "./../../functions/randomNumber";
import { Wrapper, Container, Title, Image } from "./RandomPokemonView.css";
import questionMark from "./../../images/questionMark.png";

const pokemonCount = 807;

export const RandomPokemonView: React.FC = () => {
  const randomPokemon = useSelector(
    (state: StateInterface) => state.randomPokemon
  );
  const { fetchingRandom, errorRandom, fetchingRandomPng } = randomPokemon;
  const { name, id, sprites } = randomPokemon.data;
  const prevPokeID = useRef(id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sprites && id !== 0) {
      if (id !== prevPokeID.current) {
        dispatch(fetchRandomPokemonPNG(sprites.front_default));
        prevPokeID.current = id;
      }
    }
  }, [id, sprites, dispatch]);

  const renderPokeImage = useMemo(
    () =>
      !fetchingRandomPng ? (
        <Image
          src={
            sprites.front_default.length ? sprites.front_default : questionMark
          }
          alt="Pokemon"
          title={name}
        />
      ) : (
        <LoadingComponent />
      ),
    [fetchingRandomPng, name, sprites]
  );

  const handleClickRandom = useCallback(() => {
    dispatch(fetchRandomPokemon(randomNumber(pokemonCount)));
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {!fetchingRandom && !errorRandom ? (
          <>
            <Title>{`${name} ${id ? `(${id})` : ""}`}</Title>
            {renderPokeImage}
          </>
        ) : (
          <LoadingComponent />
        )}
      </Container>
      <SharedButton fun={handleClickRandom}>Losuj</SharedButton>
    </Wrapper>
  );
};
