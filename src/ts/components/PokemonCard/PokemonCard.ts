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
      `;
  }
}

export default PokemonCard;
