import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonList from "./fetchPokemonList.js";

const newPokemon = await fetchPokemon("https://pokeapi.co/api/v2/pokemon/1/");
console.log(newPokemon);

const pokemonList = await fetchPokemonList(0);

console.log(pokemonList);
