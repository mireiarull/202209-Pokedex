import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";
import PokemonList from "./components/PokemonList/PokemonList.js";

const root = document.querySelector(".root");

const header = new Header(root as HTMLElement);
header.render();

const main = new Component(root as HTMLElement, "main-container", "main");
main.render();

const mainSection = document.querySelector("main");

const pageOffset = 0;

const pokemonList = new PokemonList(mainSection, pageOffset);
await pokemonList.printPokemonCards(pageOffset);
// PokemonList.addListener();
