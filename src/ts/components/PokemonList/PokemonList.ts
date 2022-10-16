import printPokemonCards from "../../utils/printPokemonCards.js";
import Component from "../Component/Component.js";

class PokemonList extends Component {
  constructor(parentElement: HTMLElement, private pageOffset: number) {
    super(parentElement, "pokemon-list-container", "div");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <nav class="pokemon-list__navigation">
    <button class= "button last-page"><i class="fa-solid fa-backward"></i></button><span>${
      this.pageOffset / 20 + 1
    }/58</span><button class= "button next-page"><i class="fa-solid fa-forward"></i></button>
    </nav>
    <ol class="pokemon-list">
    </ol>
    `;
  }

  async printPokemonCards(offset: number) {
    this.render();
    const pokemonListOl = this.domElement.querySelector("ol");
    await printPokemonCards(pokemonListOl, offset);
    this.addListener();
  }

  addListener() {
    const nextPageButton = document.querySelector(".next-page");
    nextPageButton.addEventListener("click", async () => {
      if (this.pageOffset < 1153) {
        this.pageOffset += 20;
      } else {
        this.pageOffset = 116;
      }

      await this.printPokemonCards(this.pageOffset);
    });

    const previousPageButton = document.querySelector(".last-page");
    previousPageButton.addEventListener("click", async () => {
      if (this.pageOffset > 0) {
        this.pageOffset -= 20;
      } else {
        this.pageOffset = 0;
      }

      await this.printPokemonCards(this.pageOffset);
    });
  }
}

export default PokemonList;
