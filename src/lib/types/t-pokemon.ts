import { TPokemonAbilities } from "./t-pokemon-abilities";
import { TPokemonStats } from "./t-pokemon-stats";
import { TPokemonTypes } from "./t-pokemon-types";

export type TPokemon = {
  id: number;
  name: string;
  abilities: TPokemonAbilities[];
  height: number;
  stats: TPokemonStats[];
  types: TPokemonTypes[];
  weight: number;
};
