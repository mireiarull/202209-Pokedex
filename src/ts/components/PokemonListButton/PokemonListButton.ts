import printPokemonCard from "../../utils/printPokemonCards.js";
import Component from "../Component/Component.js";

class PokemonListButton extends Component {
  constructor(parentElement: HTMLElement, private readonly text: string) {
    super(parentElement, "pokemon-list", "button");
    this.addListeners();
  }

  render() {
    super.render();
    this.domElement.textContent = this.text;
  }

  addListeners() {
    this.domElement.addEventListener("click", async () => {
      await printPokemonCard(this.parentElement);
    });
  }
}

export default PokemonListButton;
