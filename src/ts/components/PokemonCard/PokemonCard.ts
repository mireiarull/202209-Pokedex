import type { PokemonData } from "../../types.js";
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
      sprites: {
        other: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "official-artwork": { front_default },
        },
      },
    } = this.pokemon;
    super.render();
    this.domElement.innerHTML = `
    <h2>${name}</h2>
  <img
    src="${front_default}"
    alt="${this.domElement.name}"
    class="pokemon-card__image"
  />;
    <span>${id}</span>
      `;
  }
}

export default PokemonCard;
