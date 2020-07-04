import { FETCHING_DATA, FETCHED_DATA, ERROR_DATA } from "./../types/";
const URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchRandomPokemon = (pokemonId: number) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_DATA,
    });

    return await fetch(`${URL}${pokemonId}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) =>
        dispatch({
          type: FETCHED_DATA,
          payload: res,
        })
      )
      .catch((error) => {
        dispatch({
          type: ERROR_DATA,
        });
        console.log(error);
      });
  };
};
