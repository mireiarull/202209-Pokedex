import type { PokemonData, PokemonDataList } from "./types.js";

const fetchFavoritePokemonList = async () => {
  const apiUrl = `https://rocky-refuge-79563.herokuapp.com/pokemon/`;
  const response = await fetch(apiUrl);

  const pokemonDataList = (await response.json()) as PokemonData[];
  return pokemonDataList;
};

export default fetchFavoritePokemonList;
