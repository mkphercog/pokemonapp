import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "./../../../store/interfaces";

import { SharedButton } from "./../../SharedButton/SharedButton";
import {
  fetchPokemonList,
  prevPage,
  nextPage,
  resetPages,
  changeNumberOfPokemonPerPage,
} from "./../../../store/actions/pokemonListAction";

import { ControlPanelWrapper, ButtonWrapper } from "./PagesControlPanel.css";

export const PagesControlPanel: React.FC<PagesControlPanelProps> = ({
  pokePerPageButtons,
}) => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { pokemonsPerPage, currentPage } = pokemonList;
  const { next, previous } = pokemonList.data;
  const dispatch = useDispatch();

  const renderPerPageButtons = pokePerPageButtons.map((perPage: number) => (
    <SharedButton
      key={perPage}
      fun={() => {
        dispatch(changeNumberOfPokemonPerPage(perPage));
        dispatch(resetPages());
      }}
    >
      {perPage}
    </SharedButton>
  ));

  return (
    <ControlPanelWrapper>
      <ButtonWrapper>
        <SharedButton
          fun={() => {
            if (previous) {
              dispatch(prevPage());
              dispatch(fetchPokemonList(previous));
            }
          }}
        >{`<`}</SharedButton>
        {currentPage}
        <SharedButton
          fun={() => {
            const isCorrectLimit = next?.slice(
              next.indexOf("limit=") + 6,
              next.length
            );
            if (next && Number(isCorrectLimit) === pokemonsPerPage) {
              dispatch(nextPage());
              dispatch(fetchPokemonList(next));
            }
          }}
        >{`>`}</SharedButton>
      </ButtonWrapper>
      <ButtonWrapper>{renderPerPageButtons}</ButtonWrapper>
    </ControlPanelWrapper>
  );
};

interface PagesControlPanelProps {
  pokePerPageButtons: number[];
}
