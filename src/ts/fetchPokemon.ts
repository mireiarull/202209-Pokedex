import type { PokemonData } from "./types.js";

const fetchPokemon = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const {
    id,
    name,
    sprites: {
      other: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "official-artwork": { front_default },
      },
    },
  } = (await response.json()) as PokemonData;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { id, name, front_default };
};

export default fetchPokemon;
