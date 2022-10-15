export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonDataList {
  count: number;
  next: string;
  previous: string | undefined;
  results: {
    name: string;
    url: string;
  };
}
