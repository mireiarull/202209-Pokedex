import Header from "./Header";

describe("Given a Header", () => {
  describe("When it's rendered", () => {
    test("Then it should show the web title as a h1 and a description as a span", () => {
      const screen = document.createElement("div");
      const title = "Pokémon";
      const description = "The complete Pokémon list";

      const headerComponent = new Header(screen, "", "");
      headerComponent.render();

      const pokemonHeaderTitle = screen.querySelector("h1");
      const pokemonHeaderDescription = screen.querySelector("span");

      expect(pokemonHeaderTitle.textContent).toBe(title);
      expect(pokemonHeaderDescription.textContent).toBe(description);
    });
  });
});
