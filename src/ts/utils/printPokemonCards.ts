import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonList from "./fetchPokemonList.js";

const printPokemonCards = async (
  parentElement: HTMLElement,
  offset: number
) => {
  const pokemonList = await fetchPokemonList(offset);
  const pokemonUrlList = pokemonList.results;

  pokemonUrlList.forEach(async (pokemon) => {
    const individualPokemon = await fetchPokemon(pokemon.url);
    const pokemonCard = new PokemonCard(parentElement, individualPokemon);
    pokemonCard.render();
  });
};

export default printPokemonCards;
