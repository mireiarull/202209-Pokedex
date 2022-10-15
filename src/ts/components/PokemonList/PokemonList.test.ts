import PokemonList from "./PokemonList";

let screen: HTMLElement;
beforeEach(() => {
  screen = document.createElement("div");
});
describe("Given a Pokemon list component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two buttons with classes next-page and last-page and the page counter", () => {
      const pokemonList = new PokemonList(screen, 0);
      const navigationNextTextButton = "Next Page";
      const navigationLastTextButton = "Previous Page";
      pokemonList.render();

      const navigationNextButton = screen.querySelector(".next-page");
      const navigationLastButton = screen.querySelector(".last-page");

      expect(navigationNextButton.textContent).toBe(navigationNextTextButton);
      expect(navigationLastButton.textContent).toBe(navigationLastTextButton);
    });

    test("And it should show a page counter with the current page number and the total number", () => {
      const pageNumber = 0;
      const pageNumberText = "0/116";
      const pokemonList = new PokemonList(screen, pageNumber);
      pokemonList.render();

      const renderedPageNumber = screen.querySelector("span");

      expect(renderedPageNumber.textContent).toBe(pageNumberText);
    });
  });
});
