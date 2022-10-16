import type { PokemonData } from "./types.js";

const storePokemonInApi = async (pokemon: PokemonData): Promise<void> => {
  await fetch("http://localhost:4000/pokemon/", {
    method: "POST",
    body: JSON.stringify({
      name: pokemon.name,
      id: pokemon.id,
      sprites: {
        ["front_default"]: pokemon.sprites.front_default,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(async (response) => response.json());
};

export default storePokemonInApi;
