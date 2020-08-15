export interface StateInterface {
  randomPokemon: {
    fetchingRandom: boolean;
    fetchedRandom: boolean;
    errorRandom: boolean;
    fetchingRandomPng: boolean;
    fetchedRandomPng: boolean;
    errorRandomPng: boolean;
    data: {
      name: string;
      id: number;
      sprites: {
        front_default: string;
      };
    };
    png: string;
  };

  pokemonList: {
    fetchingList: boolean;
    fetchedList: boolean;
    errorList: boolean;
    fetchingImages: boolean;
    fetchedImages: boolean;
    errorImages: boolean;
    fetchingPNG: boolean;
    fetchedPNG: boolean;
    errorPNG: boolean;
    data: {
      count: number;
      next: string | null;
      previous: string | null;
      results: { name: string; url: string; image: string | undefined }[];
    };
    images: string[];
    pngs: string[];
    currentPage: number;
    pokemonsPerPage: number;
  };

  pokemonDetails: {
    visibility: boolean;
    pokeUrl: string;
    pokeDetails: {
      base_experience: number;
      id: number;
      name: string;
      sprites: { front_default: string };
      stats: { base_stat: number; stat: { name: string } }[];
    };
  };
}
