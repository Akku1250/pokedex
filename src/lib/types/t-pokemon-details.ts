export type TPokemonDetails = {
  id: number;
  name: string;
  abilities: string[];
  height: number;
  stats: { base_stat: number; name: string }[];
  statsTotal: number;
  types: string[];
  weight: number;
  bg_color: string;
  text_color: string;
  flavor_text: string;
};
