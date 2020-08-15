import React, { useState, useEffect, useMemo } from "react";
import { Portal, PortalTarget } from "./../Portal/Portal";
import {
  hidePokeDetails,
  setPokeDetails,
} from "./../../store/actions/pokemonDetailsAction";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "./../../store/interfaces";
import QuestionMark from "./../../images/questionMark.png";

import { Wrapper, Board } from "./PokeDetails.css";

export const PokeDetails: React.FC<PokeDetailsProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const pokemonDetails = useSelector(
    (state: StateInterface) => state.pokemonDetails
  );
  const { pokeUrl, pokeDetails } = pokemonDetails;
  const { name, id, base_experience, sprites, stats } = pokeDetails;

  useEffect(() => {
    setIsLoading(true);
    if (pokeUrl.length) {
      fetch(pokeUrl)
        .then((res) => {
          if (res.status === 200) return res.json();
        })
        .then((res) => {
          dispatch(setPokeDetails(res));
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [pokeUrl, dispatch]);

  const renderPokeSats = useMemo(
    () =>
      stats
        ? stats.map(({ base_stat, stat }) => (
            <li key={stat.name}>
              <p>
                {stat.name}: <span>{base_stat}</span>
              </p>
            </li>
          ))
        : [],
    [stats]
  );

  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <Wrapper onClick={() => dispatch(hidePokeDetails())}>
        {!isLoading ? (
          <Board>
            <h1>
              {name} ({id})
            </h1>
            <img
              src={sprites.front_default ? sprites.front_default : QuestionMark}
              alt=""
            />
            <p>Statystyki:</p>
            <ul>
              <li>
                <p>
                  Exp: <span>{base_experience}</span>
                </p>
              </li>
              {renderPokeSats}
            </ul>
          </Board>
        ) : null}
      </Wrapper>
    </Portal>
  ) : null;
};

interface PokeDetailsProps {
  isOpen: boolean;
}
