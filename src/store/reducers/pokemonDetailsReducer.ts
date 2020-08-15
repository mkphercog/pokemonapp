import {
  SHOW_POKE_DETAILS,
  HIDE_POKE_DETAILS,
  SET_POKE_DETAILS,
} from "./../types/";

const initialState = {
  visibility: false,
  pokeUrl: "",
  pokeDetails: {},
};

export const pokemonDetailsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_POKE_DETAILS:
      return {
        ...state,
        visibility: true,
        pokeUrl: action.payload,
      };

    case HIDE_POKE_DETAILS:
      return {
        ...state,
        visibility: false,
        pokeUrl: "",
        pokeDetails: {},
      };

    case SET_POKE_DETAILS:
      return { ...state, pokeDetails: action.payload };

    default:
      return state;
  }
};

interface Action {
  type: string;
  payload: string | {};
}
