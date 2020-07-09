import {
  FETCHING_LIST,
  FETCHED_LIST,
  ERROR_LIST,
  FETCHING_POKE_IMAGES,
  FETCHED_POKE_IMAGES,
  ERROR_POKE_IMAGES,
} from "../types";

const initialState = {
  fetchingList: false,
  fetchedList: false,
  errorList: false,
  fetchingImages: false,
  fetchedImages: false,
  errorImages: false,
  data: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  images: [],
};

export const pokemonListReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCHING_LIST:
      return {
        ...state,
        fetchingList: true,
        fetchedList: false,
        errorList: false,
        data: {
          count: 0,
          next: "",
          previous: "",
          results: [],
        },
      };
    case FETCHED_LIST:
      return {
        ...state,
        fetchingList: false,
        fetchedList: true,
        errorList: false,
        data: action.payload,
      };
    case ERROR_LIST:
      return {
        ...state,
        fetchingList: false,
        fetchedList: false,
        errorList: true,
        data: {
          count: 0,
          next: "",
          previous: "",
          results: [],
        },
      };

    case FETCHING_POKE_IMAGES:
      return {
        ...state,
        fetchingImages: true,
        fetchedImages: false,
        errorImages: false,
        images: [],
      };
    case FETCHED_POKE_IMAGES:
      return {
        ...state,
        fetchingImages: false,
        fetchedImages: true,
        errorImages: false,
        images: [...state.images, action.payload],
      };
    case ERROR_POKE_IMAGES:
      return {
        ...state,
        fetchingImages: false,
        fetchedImages: false,
        errorImages: true,
        images: [],
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  payload: {} | [];
}
