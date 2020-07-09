import { FETCHING_RANDOM, FETCHED_RANDOM, ERROR_RANDOM } from "./../types";

const initialState = {
  fetching: false,
  fetched: false,
  error: false,
  data: {
    name: "",
    id: 0,
    sprites: {
      front_default: "",
    },
  },
};

export const randomPokeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_RANDOM:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
        data: {},
      };
    case FETCHED_RANDOM:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        data: action.payload,
      };
    case ERROR_RANDOM:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: true,
        data: {},
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  payload: {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
  };
}
