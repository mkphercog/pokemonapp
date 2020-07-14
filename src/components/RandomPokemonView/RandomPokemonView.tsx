import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "./../../store/interfaces";

import { SharedButton } from "./../SharedButton/SharedButton";
import { randomNumber } from "./../../functions/randomNumber";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import {
  fetchRandomPokemon,
  fetchRandomPokemonPNG,
} from "../../store/actions/randomPokeAction";

import { Wrapper, Container, Title, Image } from "./RandomPokemonView.css";
import questionMark from "./../../images/questionMark.png";

const pokemonCount = 807;

export const RandomPokemonView: React.FC = () => {
  const randomPokemon = useSelector(
    (state: StateInterface) => state.randomPokemon
  );
  const { fetchingRandom, errorRandom, fetchingRandomPng } = randomPokemon;
  const { name, id, sprites } = randomPokemon.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (sprites && id !== 0) {
      dispatch(fetchRandomPokemonPNG(sprites.front_default));
    }
  }, [id, sprites, dispatch]);

  const handleClickRandom = useCallback(() => {
    dispatch(fetchRandomPokemon(randomNumber(pokemonCount)));
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {!fetchingRandom && !errorRandom ? (
          <>
            <Title>
              {name ? name : ""} {id ? `(${id})` : ``}
            </Title>
            {!fetchingRandomPng ? (
              <Image
                src={
                  sprites.front_default.length
                    ? sprites.front_default
                    : questionMark
                }
                alt="Pokemon"
                title={name}
              />
            ) : (
              <LoadingComponent />
            )}

            {/* <Image
              src={
                sprites.front_default.length
                  ? sprites.front_default
                  : questionMark
              }
              alt="Pokemon"
              title={name}
            /> */}
          </>
        ) : (
          <LoadingComponent />
        )}
      </Container>

      <SharedButton fun={handleClickRandom}>Losuj</SharedButton>
    </Wrapper>
  );
};
