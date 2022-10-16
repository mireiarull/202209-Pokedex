import type { PokemonData } from "./types.js";

const deletePokemonFromApi = async (pokemon: PokemonData): Promise<void> => {
  await fetch(`http://localhost:4000/pokemon/${pokemon.id}`, {
    method: "DELETE",
  }).then(async (response) => response.json());
};

export default deletePokemonFromApi;
