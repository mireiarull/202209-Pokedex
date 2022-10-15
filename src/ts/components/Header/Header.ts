import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h1>Pokémon</h1>
    <span>The complete Pokémon list</span>
    `;
  }
}

export default Header;
