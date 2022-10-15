import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonList from "./fetchPokemonList.js";

const printPokemonCard = async (parentElement: HTMLElement) => {
  const pokemonList = await fetchPokemonList(0);
  const pokemonUrlList = pokemonList.results;
  console.log(pokemonUrlList);

  pokemonUrlList.forEach(async (pokemon) => {
    const individualPokemon = await fetchPokemon(pokemon.url);
    const pokemonCard = new PokemonCard(parentElement, individualPokemon);
    pokemonCard.render();
  });
};

export default printPokemonCard;
