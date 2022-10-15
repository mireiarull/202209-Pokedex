import PokemonCard from "./PokemonCard";

describe("Given a Pokemon Card", () => {
  describe("When it's rendered", () => {
    test("Then it should show a pokemon card with the name 'Bulbasur'", () => {
      const screen = document.createElement("div");
      const name = "Bulbasur";
      const pokemon = {
        id: 1,
        name: "Bulbasur",
        sprites: {
          ["front_default"]:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      };

      const pokemonCardComponent = new PokemonCard(screen, pokemon);
      pokemonCardComponent.render();

      const pokemonName = screen.querySelector("h2");

      expect(pokemonName).not.toBeNull();
      expect(pokemonName.textContent).toBe(name);
    });
  });
});
