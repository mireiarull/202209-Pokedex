import type { PokemonData, PokemonDataList } from "./types.js";

const fetchFavoritePokemonList = async () => {
  const apiUrl = `http://localhost:4000/pokemon/`;
  const response = await fetch(apiUrl);

  const pokemonDataList = (await response.json()) as PokemonData[];
  return pokemonDataList;
};

export default fetchFavoritePokemonList;
