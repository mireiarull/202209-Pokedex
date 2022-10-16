import storePokemonInApi from "../../utils/storePokemonInApi.js";
import type { PokemonData } from "../../utils/types.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: PokemonData
  ) {
    super(parentElement, `pokemon-card `, "li");
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
    alt="${name}"
    class="pokemon-card__image"
  />
    <div>
    <span>id: ${id}</span>
    <button><i class="fa-regular fa-heart"></i></button>
    </div>
      `;
    this.addListeners();
  }

  addListeners() {
    const favoriteButton = this.domElement.querySelector("button");
    favoriteButton.addEventListener("click", async () => {
      await storePokemonInApi(this.pokemon);
      favoriteButton.disabled = true;
      const icon = this.domElement.querySelector("i");
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    });
  }
}

export default PokemonCard;
