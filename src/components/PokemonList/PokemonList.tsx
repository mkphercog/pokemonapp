import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SharedButton } from "./../SharedButton/SharedButton";
import {
  fetchPokemonList,
  prevPage,
  nextPage,
  resetPages,
  changeNumberOfPokemonPerPage,
} from "./../../store/actions/pokemonListAction";
import { StateInterface } from "./../../store/interfaces";
import { LoadingComponent } from "./../LoadingComponent/LoadingComponent";
import questionMark from "./../../images/questionMark.png";

import {
  Wrapper,
  List,
  Item,
  PokeName,
  Image,
  PagesControlPanel,
  ButtonWrapper,
} from "./PokemonList.css";

const sixPerPage = 6;
const ninePerPage = 9;
const twelvePerPage = 12;
const twentyOnePerPage = 21;

export const PokemonList: React.SFC<PokemonListProps> = () => {
  const pokemonList = useSelector((state: StateInterface) => state.pokemonList);
  const { fetchingList, pngs, pokemonsPerPage, currentPage } = pokemonList;
  const { next, previous, results } = pokemonList.data;
  const dispatch = useDispatch();

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
      <PagesControlPanel>
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
              if (next) {
                dispatch(nextPage());
                dispatch(fetchPokemonList(next));
              }
            }}
          >{`>`}</SharedButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <SharedButton
            fun={() => {
              dispatch(changeNumberOfPokemonPerPage(sixPerPage));
              dispatch(resetPages());
            }}
          >
            {sixPerPage}
          </SharedButton>
          <SharedButton
            fun={() => {
              dispatch(changeNumberOfPokemonPerPage(ninePerPage));
              dispatch(resetPages());
            }}
          >
            {ninePerPage}
          </SharedButton>
          <SharedButton
            fun={() => {
              dispatch(changeNumberOfPokemonPerPage(twelvePerPage));
              dispatch(resetPages());
            }}
          >
            {twelvePerPage}
          </SharedButton>
          <SharedButton
            fun={() => {
              dispatch(changeNumberOfPokemonPerPage(twentyOnePerPage));
              dispatch(resetPages());
            }}
          >
            {twentyOnePerPage}
          </SharedButton>
        </ButtonWrapper>
      </PagesControlPanel>
    </Wrapper>
  );
};

interface PokemonListProps {}
