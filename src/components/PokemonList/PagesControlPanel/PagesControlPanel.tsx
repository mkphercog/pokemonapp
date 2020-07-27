import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "./../../../store/interfaces";

import { SharedButton } from "./../../SharedButton/SharedButton";
import {
  fetchPokemonList,
  prevPage,
  nextPage,
  setPageAction,
  resetPages,
  changeNumberOfPokemonPerPage,
} from "./../../../store/actions/pokemonListAction";

import {
  ControlPanelWrapper,
  ButtonWrapper,
  CounterPageForm,
  NumberInput,
} from "./PagesControlPanel.css";

export const PagesControlPanel: React.FC<PagesControlPanelProps> = ({
  pokePerPageButtons,
}) => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { pokemonsPerPage, currentPage } = pokemonList;
  const { next, previous, count } = pokemonList.data;
  const [page, setPage] = useState(String(currentPage));
  const dispatch = useDispatch();

  const renderPerPageButtons = useMemo(
    () =>
      pokePerPageButtons.map((perPage: number) => (
        <SharedButton
          key={perPage}
          isChosen={pokemonsPerPage === perPage ? true : false}
          fun={() => {
            dispatch(changeNumberOfPokemonPerPage(perPage));
            dispatch(resetPages());
            setPage("1");
          }}
        >
          {perPage}
        </SharedButton>
      )),
    [dispatch, pokePerPageButtons, pokemonsPerPage]
  );

  const handleSubmitPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Number(page) !== currentPage &&
      page !== "" &&
      Number(page) > 0 &&
      Number(page) <= count / pokemonsPerPage
    ) {
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${
        Number(page) * pokemonsPerPage - pokemonsPerPage
      }&limit=${pokemonsPerPage}`;
      dispatch(setPageAction(Number(page)));
      dispatch(fetchPokemonList(URL));
    } else if (Number(page) > count / pokemonsPerPage) {
      setPage(String(Math.floor(count / pokemonsPerPage)));
    }
  };

  const handlePrevPage = () => {
    if (previous) {
      dispatch(prevPage());
      dispatch(fetchPokemonList(previous));
      setPage(String(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    const searchingText = "limit=";
    const isCorrectLimit = next?.slice(
      next.indexOf(searchingText) + searchingText.length,
      next.length
    );
    if (next && Number(isCorrectLimit) === pokemonsPerPage) {
      dispatch(nextPage());
      dispatch(fetchPokemonList(next));
      setPage(String(currentPage + 1));
    }
  };

  return (
    <ControlPanelWrapper>
      <ButtonWrapper>
        <SharedButton fun={() => handlePrevPage()}>
          <i className="fas fa-chevron-right prev-page"></i>
        </SharedButton>
        <CounterPageForm onSubmit={(e) => handleSubmitPage(e)}>
          <NumberInput
            type="number"
            min="1"
            onChange={(e) => setPage(e.target.value)}
            value={String(page)}
          />
        </CounterPageForm>
        <SharedButton fun={() => handleNextPage()}>
          <i className="fas fa-chevron-right next-page"></i>
        </SharedButton>
      </ButtonWrapper>
      <p className="desc">Ilość pokemonów na stronę:</p>
      <ButtonWrapper>{renderPerPageButtons}</ButtonWrapper>
    </ControlPanelWrapper>
  );
};

interface PagesControlPanelProps {
  pokePerPageButtons: number[];
}
