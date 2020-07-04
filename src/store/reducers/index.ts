import { combineReducers } from "redux";
import { randomPokeReducer } from "./randomPokeReducer";

export const rootReducer = combineReducers({
  randomPokemon: randomPokeReducer,
});
