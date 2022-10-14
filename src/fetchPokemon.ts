import type PokemonUrl from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = async () => {
  const response = await fetch(`${apiUrl}/1/`);
  const {
    id,
    name,
    weight,
    sprites: {
      other: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "official-artwork": { front_default },
      },
    },
  } = (await response.json()) as PokemonUrl;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { id, name, weight, front_default };
};

export default fetchPokemon;
