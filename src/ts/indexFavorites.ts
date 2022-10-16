import Header from "./components/Header/Header.js";
import printFavoritePokemonCards from "./utils/printFavoritePokemonCards.js";

const favoriteRoot = document.querySelector(".favorite-root");

const header = new Header(
  favoriteRoot as HTMLElement,
  "List of Pokémons",
  "index.html"
);
header.render();

await printFavoritePokemonCards(favoriteRoot as HTMLElement);
