import printFavoritePokemonCards from "./utils/printFavoritePokemonCards.js";

const favoriteRoot = document.querySelector(".favorite-root");

await printFavoritePokemonCards(favoriteRoot as HTMLElement);
