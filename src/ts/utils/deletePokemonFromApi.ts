import type { PokemonData } from "./types.js";

const deletePokemonFromApi = async (pokemon: PokemonData): Promise<void> => {
  await fetch(
    `https://rocky-refuge-79563.herokuapp.com/pokemon/${pokemon.id}`,
    {
      method: "DELETE",
    }
  ).then(async (response) => response.json());
};

export default deletePokemonFromApi;
