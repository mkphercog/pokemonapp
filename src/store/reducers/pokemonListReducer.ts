import {
  FETCHING_LIST,
  FETCHED_LIST,
  ERROR_LIST,
  FETCHING_POKE_IMAGES,
  FETCHED_POKE_IMAGES,
  ERROR_POKE_IMAGES,
  FETCHING_POKE_PNG,
  FETCHED_POKE_PNG,
  ERROR_POKE_PNG,
  NEXT_LIST_PAGE,
  PREV_LIST_PAGE,
  SET_LIST_PAGE,
  RESET_LIST_PAGE,
  CHANGE_NUMBER_OF_POKEMON_PER_PAGE,
} from "../types";

const initialState = {
  fetchingList: false,
  fetchedList: false,
  errorList: false,
  fetchingImages: false,
  fetchedImages: false,
  errorImages: false,
  fetchingPNG: false,
  fetchedPNG: false,
  errorPNG: false,
  data: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  images: [],
  pngs: [],
  currentPage: 1,
  pokemonsPerPage: 6,
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
        images: [],
        pngs: [],
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

    case FETCHING_POKE_PNG:
      return {
        ...state,
        fetchingPNG: true,
        fetchedPNG: false,
        errorPNG: false,
        pngs: [],
      };
    case FETCHED_POKE_PNG:
      return {
        ...state,
        fetchingPNG: false,
        fetchedPNG: true,
        errorPNG: false,
        pngs: [...state.pngs, action.payload],
      };
    case ERROR_POKE_PNG:
      return {
        ...state,
        fetchingPNG: false,
        fetchedPNG: false,
        errorPNG: true,
        pngs: [],
      };

    case NEXT_LIST_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_LIST_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case SET_LIST_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case RESET_LIST_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case CHANGE_NUMBER_OF_POKEMON_PER_PAGE:
      return {
        ...state,
        pokemonsPerPage: action.payload,
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  payload: {} | [];
}
