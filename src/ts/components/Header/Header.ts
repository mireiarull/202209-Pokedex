import Component from "../Component/Component.js";

class Header extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly navigationButtonContent: string,
    private readonly buttonLink: string
  ) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
      <div class="main-header__title">
      <h1>Pokedex</h1>
      <span>The complete Pokémon list</span>
      </div>
      <a class="main-header__button-desktop" href="${this.buttonLink}">${this.navigationButtonContent}</a>
      <a class="main-header__button-mobile" href="${this.buttonLink}"><i class="fa-solid fa-heart"></i></a>
    `;
  }
}

export default Header;
