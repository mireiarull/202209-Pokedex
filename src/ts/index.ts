import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import PokemonListButton from "./components/PokemonListButton/PokemonListButton.js";
import fetchPokemon from "./utils/fetchPokemon.js";
import fetchPokemonList from "./utils/fetchPokemonList.js";

const root = document.querySelector(".root");

const pokemonListButton = new PokemonListButton(
  root as HTMLElement,
  "show Pokemons"
);
pokemonListButton.render();
