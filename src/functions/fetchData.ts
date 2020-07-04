export const fetchData = async (URL: string, pokemonID: number) =>
  await fetch(`${URL}${pokemonID}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
