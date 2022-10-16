import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";
import printFavoritePokemonCards from "./utils/printFavoritePokemonCards.js";

const favoriteRoot = document.querySelector(".favorite-root");

const header = new Header(
  favoriteRoot as HTMLElement,
  "List of Pokémons",
  "index.html"
);
header.render();

const main = new Component(
  favoriteRoot as HTMLElement,
  "main-container",
  "main"
);

main.render();
const mainSection = document.querySelector("main");

const favoritePokemonListContainer = new Component(
  mainSection,
  "fav-pokemon-list-container",
  "div"
);
favoritePokemonListContainer.render();

const pokemonListContainer = document.querySelector(
  ".fav-pokemon-list-container"
);
pokemonListContainer.innerHTML = "<h2>My Pokémons</h2>";

const favoritePokemonList = new Component(
  mainSection,
  "fav-pokemon-list",
  "ol"
);
favoritePokemonList.render();
const pokemonList = document.querySelector("ol");
await printFavoritePokemonCards(pokemonList);
