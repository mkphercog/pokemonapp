import {
  SHOW_POKE_DETAILS,
  HIDE_POKE_DETAILS,
  SET_POKE_DETAILS,
} from "./../types";

export const showPokeDetails = (pokeUrl: string) => ({
  type: SHOW_POKE_DETAILS,
  payload: pokeUrl,
});

export const hidePokeDetails = () => ({
  type: HIDE_POKE_DETAILS,
});

export const setPokeDetails = (pokeDetails: {}) => ({
  type: SET_POKE_DETAILS,
  payload: pokeDetails,
});
