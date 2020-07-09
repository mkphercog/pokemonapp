import { FETCHING_RANDOM, FETCHED_RANDOM, ERROR_RANDOM } from "./../types/";
const URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchRandomPokemon = (pokemonId: number) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_RANDOM,
    });

    return await fetch(`${URL}${pokemonId}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) =>
        dispatch({
          type: FETCHED_RANDOM,
          payload: res,
        })
      )
      .catch((error) => {
        dispatch({
          type: ERROR_RANDOM,
        });
        console.log(error);
      });
  };
};
