import { sortByName, searchPokemon, mapPokemonDetails } from '@/lib/helper';
import { TPokedexList, TPokemon, TPokemonSpecies, TPokemonUrl } from '@/lib/types';
import { TPokedexFilter } from '@/lib/types/t-pokedex-filter';
import axios from 'axios';

async function fetchPokedex(filterOptions: TPokedexFilter) {
  return await axios
    .get<TPokedexList>('https://pokeapi.co/api/v2/pokemon?limit=905&offset=0')
    .then(async (res) => {
      const { results } = res.data;
      let pokemonURLList: TPokemonUrl[] = results;
      const { sortBy, searchValue } = filterOptions;

      if (sortBy === 'Name') {
        pokemonURLList = sortByName(pokemonURLList);
      }

      if (searchValue) {
        pokemonURLList = searchPokemon(pokemonURLList, searchValue);
      }

      return pokemonURLList;
    });
}

async function fetchPokemon(value: string | number) {
  const pokemonId = Number(value);
  return (await axios.get<TPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)).data;
}

async function fetchPokemonSpecies(value: string | number) {
  const pokemonId = Number(value);
  return (
    await axios.get<TPokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
  ).data;
}

export { fetchPokedex, fetchPokemon, fetchPokemonSpecies, mapPokemonDetails };
