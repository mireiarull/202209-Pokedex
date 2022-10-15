export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
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
