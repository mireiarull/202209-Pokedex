import PokemonCard from "./components/PokemonCard/PokemonCard.js";
import fetchPokemon from "./utils/fetchPokemon.js";
import fetchPokemonList from "./utils/fetchPokemonList.js";

const newPokemon = await fetchPokemon("https://pokeapi.co/api/v2/pokemon/1/");

const pokemonList = await fetchPokemonList(0);

const root = document.querySelector(".root");

const pokemonCard = new PokemonCard(root as HTMLElement, newPokemon);
pokemonCard.render();
