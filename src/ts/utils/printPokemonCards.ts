import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonList from "./fetchPokemonList.js";

const printPokemonCards = async (
  parentElement: HTMLElement,
  offset: number
) => {
  const pokemonList = await fetchPokemonList(offset);
  const pokemonUrlList = pokemonList.results;

  const pokemonPromises = pokemonUrlList.map(async (pokemon) =>
    fetchPokemon(pokemon.url)
  );
  const pokemonResults = await Promise.all(pokemonPromises);
  pokemonResults.forEach((pokemon) => {
    const pokemonCard = new PokemonCard(parentElement, pokemon);
    pokemonCard.render();
  });

  return pokemonResults;
};

export default printPokemonCards;
