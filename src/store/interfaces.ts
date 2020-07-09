export interface StateInterface {
  randomPokemon: {
    fetching: boolean;
    fetched: boolean;
    error: boolean;
    data: {
      name: string;
      id: number;
      sprites: {
        front_default: string;
      };
    };
  };
  pokemonList: {
    fetchingList: boolean;
    fetchedList: boolean;
    errorList: boolean;
    fetchingImages: boolean;
    fetchedImages: boolean;
    errorImages: boolean;
    data: {
      count: number;
      next: string | null;
      previous: string | null;
      results: { name: string; url: string; image: string | undefined }[];
    };
    images: string[];
  };
}
