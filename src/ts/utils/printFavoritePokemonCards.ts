import PokemonCard from "../components/PokemonCard/PokemonCard.js";
import fetchFavoritePokemonList from "./fetchFavoritePokemonList.js";

const printFavoritePokemonCards = async (parentElement: HTMLElement) => {
  const favoritepokemonList = await fetchFavoritePokemonList();

  favoritepokemonList.forEach((pokemon) => {
    const pokemonCard = new PokemonCard(parentElement, pokemon);
    pokemonCard.render();
  });
};

export default printFavoritePokemonCards;
