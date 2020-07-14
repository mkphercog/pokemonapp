import {
  FETCHING_RANDOM,
  FETCHED_RANDOM,
  ERROR_RANDOM,
  FETCHING_RANDOM_PNG,
  FETCHED_RANDOM_PNG,
  ERROR_RANDOM_PNG,
} from "./../types/";
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

export const fetchRandomPokemonPNG = (URL: string) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_RANDOM_PNG,
    });

    return await fetch(URL)
      .then((res) => {
        if (res.status === 200) {
          return res;
        }
      })
      .then((res) =>
        dispatch({
          type: FETCHED_RANDOM_PNG,
          payload: res?.url,
        })
      )
      .catch((error) => {
        dispatch({
          type: ERROR_RANDOM_PNG,
        });
        console.log(error);
      });
  };
};
