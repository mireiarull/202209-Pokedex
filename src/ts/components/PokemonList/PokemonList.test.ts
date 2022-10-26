import PokemonList from "./PokemonList";

let screen: HTMLElement;
beforeEach(() => {
  screen = document.createElement("div");
});
describe("Given a Pokemon list component", () => {
  describe("When it's rendered", () => {
    test("And it should show a page counter with the current page number and the total number", () => {
      const pageNumber = 0;
      const pageNumberText = "1/58";
      const pokemonList = new PokemonList(screen, pageNumber);
      pokemonList.render();

      const renderedPageNumber = screen.querySelector("span");

      expect(renderedPageNumber.textContent).toBe(pageNumberText);
    });
  });
});
