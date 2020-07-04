export interface State {
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
}
