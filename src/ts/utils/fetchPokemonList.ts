import type { PokemonDataList } from "./types.js";

const fetchPokemonList = async (offset: number) => {
  const path = `?offset=${offset}&limit=10`;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${path}`;
  const response = await fetch(apiUrl);

  const pokemonDataList = (await response.json()) as PokemonDataList;
  return pokemonDataList;
};

export default fetchPokemonList;
