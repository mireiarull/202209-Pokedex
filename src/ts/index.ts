import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";
import printPokemonCards from "./utils/printPokemonCards.js";

const root = document.querySelector(".root");

const pageOffset = 0;

const header = new Header(root as HTMLElement);
header.render();

const main = new Component(root as HTMLElement, "main-container", "main");
main.render();

const mainSection = document.querySelector("main");

const pokemonList = new Component(mainSection, "pokemon-list", "ol");
pokemonList.render();

const pokemonListContainer = document.querySelector("ol");
await printPokemonCards(pokemonListContainer, pageOffset);
