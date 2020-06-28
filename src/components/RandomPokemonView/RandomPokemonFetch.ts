const URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchRandomPokemon = async (pokemonID: number) =>
  await fetch(`${URL}${pokemonID}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));

export const randomID = () => Math.floor(Math.random() * 807 + 1);
