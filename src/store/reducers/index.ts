import { combineReducers } from "redux";
import { randomPokeReducer } from "./randomPokeReducer";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";

export const rootReducer = combineReducers({
  randomPokemon: randomPokeReducer,
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer,
});
