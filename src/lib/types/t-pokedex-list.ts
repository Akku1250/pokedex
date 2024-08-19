import { TPokemonUrl } from "./t-pokemon-url";

export type TPokedexList = {
  count: number;
  next: any | null;
  previous: any | null;
  results: TPokemonUrl[];
};
