import type { PokemonData } from "./types.js";

const fetchPokemon = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const pokemonInfo = (await response.json()) as PokemonData;

  return pokemonInfo;
};

export default fetchPokemon;
