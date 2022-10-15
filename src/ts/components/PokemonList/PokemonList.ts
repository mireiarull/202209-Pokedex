import printPokemonCards from "../../utils/printPokemonCards.js";
import Component from "../Component/Component.js";

class PokemonList extends Component {
  constructor(parentElement: HTMLElement, private pageOffset: number) {
    super(parentElement, "pokemon-list", "ol");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <button class= "button last-page">Previous Page</button><span>${
      this.pageOffset / 10
    }/116</span><button class= "button next-page">Next Page</button>
    `;
  }

  async printPokemonCards(offset: number) {
    this.render();
    await printPokemonCards(this.domElement, offset);
    this.addListener();
  }

  addListener() {
    const nextPageButton = document.querySelector(".next-page");
    nextPageButton.addEventListener("click", async () => {
      if (this.pageOffset < 1153) {
        this.pageOffset += 10;
      } else {
        this.pageOffset = 116;
      }

      await this.printPokemonCards(this.pageOffset);
    });

    const previousPageButton = document.querySelector(".last-page");
    previousPageButton.addEventListener("click", async () => {
      if (this.pageOffset > 0) {
        this.pageOffset -= 10;
      } else {
        this.pageOffset = 0;
      }

      await this.printPokemonCards(this.pageOffset);
    });
  }
}

export default PokemonList;
