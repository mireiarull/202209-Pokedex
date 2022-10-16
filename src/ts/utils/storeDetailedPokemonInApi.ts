import type { PokemonData } from "./types";

const storeDetailedPokemonInApi = async (
  pokemon: PokemonData
): Promise<void> => {
  await fetch(`https://rocky-refuge-79563.herokuapp.com/pokemon/`, {
    method: "POST",
    body: JSON.stringify(pokemon),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(async (response) => response.json());
};

export default storeDetailedPokemonInApi;
