import {
  FETCHING_LIST,
  FETCHED_LIST,
  ERROR_LIST,
  FETCHING_POKE_IMAGES,
  FETCHED_POKE_IMAGES,
  ERROR_POKE_IMAGES,
} from "../types";

const pokemonPerPage = 9;
const startingPoint = 0;
const URL = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${startingPoint}`;

export const fetchPokemonList = (nextURL: string = URL) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_LIST,
    });

    return await fetch(`${nextURL}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        dispatch({
          type: FETCHED_LIST,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_LIST,
        });
        console.log(error);
      });
  };
};

export const fetchPokemonImages = (
  urlList: { name: string; url: string }[]
) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_POKE_IMAGES,
    });

    return await Promise.all(
      urlList.map(
        async (result: { url: string }) =>
          await (await fetch(result.url))
            .json()
            .then((res) => {
              dispatch({
                type: FETCHED_POKE_IMAGES,
                payload: res.sprites.front_default,
              });
            })
            .catch((error) => {
              dispatch({
                type: ERROR_POKE_IMAGES,
              });
              console.log(error);
            })
      )
    );
  };
};
