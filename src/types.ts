interface PokemonUrl {
  id: number;
  name: string;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export default PokemonUrl;
