import {
  FETCHING_RANDOM,
  FETCHED_RANDOM,
  ERROR_RANDOM,
  FETCHING_RANDOM_PNG,
  FETCHED_RANDOM_PNG,
  ERROR_RANDOM_PNG,
} from "./../types";

const initialState = {
  fetchingRandom: false,
  fetchedRandom: false,
  errorRandom: false,
  fetchingRandomPng: false,
  fetchedRandomPng: false,
  errorRandomPng: false,
  data: {
    name: "",
    id: 0,
    sprites: {
      front_default: "",
    },
  },
  png: "",
};

export const randomPokeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_RANDOM:
      return {
        ...state,
        fetchingRandom: true,
        fetchedRandom: false,
        errorRandom: false,
        data: {
          name: "",
          id: 0,
          sprites: {
            front_default: "",
          },
        },
        png: "",
      };
    case FETCHED_RANDOM:
      return {
        ...state,
        fetchingRandom: false,
        fetchedRandom: true,
        errorRandom: false,
        data: action.payload,
      };
    case ERROR_RANDOM:
      return {
        ...state,
        fetchingRandom: false,
        fetchedRandom: false,
        errorRandom: true,
        data: {
          name: "",
          id: 0,
          sprites: {
            front_default: "",
          },
        },
      };

    case FETCHING_RANDOM_PNG:
      return {
        ...state,
        fetchingRandomPng: true,
        fetchedRandomPng: false,
        errorRandomPng: false,
        png: "",
      };
    case FETCHED_RANDOM_PNG:
      return {
        ...state,
        fetchingRandomPng: false,
        fetchedRandomPng: true,
        errorRandomPng: false,
        png: action.payload,
      };
    case ERROR_RANDOM_PNG:
      return {
        ...state,
        fetchingRandomPng: false,
        fetchedRandomPng: false,
        errorRandomPng: true,
        png: "",
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
