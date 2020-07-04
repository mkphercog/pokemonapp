import { FETCHING_DATA, FETCHED_DATA, ERROR_DATA } from "./../types";

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
    case FETCHING_DATA:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
        data: {},
      };
    case FETCHED_DATA:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        data: action.payload,
      };
    case ERROR_DATA:
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
  payload: {};
}
