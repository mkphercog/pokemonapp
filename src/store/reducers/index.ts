import { combineReducers } from "redux";
import { randomPokeReducer } from "./randomPokeReducer";
import { pokemonListReducer } from "./pokemonListReducer";

export const rootReducer = combineReducers({
  randomPokemon: randomPokeReducer,
  pokemonList: pokemonListReducer,
});
