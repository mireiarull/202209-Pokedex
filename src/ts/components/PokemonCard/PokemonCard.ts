import storePokemonInApi from "../../utils/storePokemonInApi.js";
import type { PokemonData } from "../../utils/types.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonData
  ) {
    super(parentElement, "pokemon-card", "li");
  }

  render() {
    const {
      id,
      name,
      sprites: { front_default: image },
    } = this.pokemon;
    super.render();
    this.domElement.innerHTML = `
    <h2>${name}</h2>
  <img
    src="${image}"
    alt="${this.domElement.name}"
    class="pokemon-card__image"
  />
    <span>${id}</span>
    <button><i class="fa-regular fa-star"></i></button>
      `;
    this.addListeners();
  }

  addListeners() {
    const favoriteButton = this.domElement.querySelector("button");
    favoriteButton.addEventListener("click", async () => {
      await storePokemonInApi(this.pokemon);
      favoriteButton.disabled = true;
    });
  }
}

export default PokemonCard;
