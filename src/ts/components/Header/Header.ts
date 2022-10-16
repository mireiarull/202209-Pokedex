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
    <h1>Pokémon</h1>
    <span>The complete Pokémon list</span>
    <a href="${this.buttonLink}">${this.navigationButtonContent}</a>
    `;
  }
}

export default Header;
