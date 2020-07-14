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
  CHANGE_NUMBER_OF_POKEMON_PER_PAGE,
  RESET_LIST_PAGE,
} from "../types";

export const fetchPokemonList = (URL: string) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_LIST,
    });

    return await fetch(`${URL}`)
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

export const fetchPokemonImagesUrls = (
  listOfUrls: { name: string; url: string }[]
) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_POKE_IMAGES,
    });

    return await Promise.all(
      listOfUrls.map(
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

export const fetchPokemonPNG = (listOfUrls: string[]) => {
  return async (dispatch: Function) => {
    dispatch({
      type: FETCHING_POKE_PNG,
    });

    return await Promise.all(
      listOfUrls.map(
        async (result: string) =>
          await fetch(result)
            .then((res) => {
              dispatch({
                type: FETCHED_POKE_PNG,
                payload: res.url,
              });
            })
            .catch((error) => {
              dispatch({
                type: ERROR_POKE_PNG,
              });
              console.log(error);
            })
      )
    );
  };
};

export const nextPage = () => ({
  type: NEXT_LIST_PAGE,
});

export const prevPage = () => ({
  type: PREV_LIST_PAGE,
});

export const resetPages = () => ({
  type: RESET_LIST_PAGE,
});

export const changeNumberOfPokemonPerPage = (num: number) => ({
  type: CHANGE_NUMBER_OF_POKEMON_PER_PAGE,
  payload: num,
});
