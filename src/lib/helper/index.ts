import { EPokemonStats } from '../enum';
import {
  TPokemon,
  TPokemonAbilities,
  TPokemonDetails,
  TPokemonSpecies,
  TPokemonStats,
  TPokemonUrl,
} from '../types';
import { TPokemonTypes } from '../types/t-pokemon-types';

function handlePokemonId(id: string) {
  return id.padStart(3, '0');
}

const textPokemonColor = {
  grass: 'text-pokegrass',
  fire: 'text-pokefire',
  water: 'text-pokewater',
  bug: 'text-pokebug',
  electric: 'text-pokeelectric',
  poison: 'text-pokepoison',
  ground: 'text-pokeground',
  fairy: 'text-pokefairy',
  fighting: 'text-pokefighting',
  dragon: 'text-pokedragon',
  dark: 'text-pokedark',
  flying: 'text-pokeflying',
  ghost: 'text-pokeghost',
  ice: 'text-pokeice',
  psychic: 'text-pokepsychic',
  rock: 'text-pokerock',
  steel: 'text-pokesteel',
  normal: 'text-pokenormal',
};

const bgPokemonColor = {
  grass: 'bg-pokegrass',
  fire: 'bg-pokefire',
  water: 'bg-pokewater',
  bug: 'bg-pokebug',
  electric: 'bg-pokeelectric',
  poison: 'bg-pokepoison',
  ground: 'bg-pokeground',
  fairy: 'bg-pokefairy',
  fighting: 'bg-pokefighting',
  dragon: 'bg-pokedragon',
  dark: 'bg-pokedark',
  flying: 'bg-pokeflying',
  ghost: 'bg-pokeghost',
  ice: 'bg-pokeice',
  psychic: 'bg-pokepsychic',
  rock: 'bg-pokerock',
  steel: 'bg-pokesteel',
  normal: 'bg-pokenormal',
};

function handlePokemonTypeColour(cssType: 'bg' | 'text', type: string) {
  const colorList = cssType === 'bg' ? bgPokemonColor : textPokemonColor;

  switch (type) {
    case 'grass':
    case 'fire':
    case 'water':
    case 'bug':
    case 'electric':
    case 'poison':
    case 'ground':
    case 'fairy':
    case 'fighting':
    case 'dragon':
    case 'dark':
    case 'flying':
    case 'ghost':
    case 'ice':
    case 'psychic':
    case 'rock':
    case 'steel':
      return colorList[type];
    default:
      return colorList['normal'];
  }
}

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function mapPokemonDetails(pokemon: TPokemon, species: TPokemonSpecies): TPokemonDetails {
  return {
    id: pokemon.id,
    name: pokemon.name,
    abilities: mapPokemonAbilities(pokemon.abilities).slice(0, 2),
    height: pokemon.height,
    stats: mapPokemonStats(pokemon.stats),
    statsTotal: pokemon.stats.reduce((acc, curr) => acc + curr.base_stat, 0),
    types: mapPokemonTypes(pokemon.types),
    weight: pokemon.weight,
    bg_color: handlePokemonTypeColour('bg', mapPokemonTypes(pokemon.types)[0]),
    text_color: handlePokemonTypeColour('text', mapPokemonTypes(pokemon.types)[0]),
    flavor_text: species.flavor_text_entries[0].flavor_text,
  };
}

function mapPokemonTypes(types: TPokemonTypes[]) {
  return types.map((item) => item.type.name);
}

function mapPokemonAbilities(abilities: TPokemonAbilities[]) {
  return abilities.map((item) => item.ability.name);
}

function mapPokemonStats(stats: TPokemonStats[]) {
  return stats.map((item) => {
    return {
      base_stat: item.base_stat,
      name: handlePokemonStatName(item.stat.name),
    };
  });
}

function handlePokemonStatName(name: string) {
  switch (name) {
    case 'hp':
      return EPokemonStats.hp;
    case 'attack':
      return EPokemonStats.attack;
    case 'defense':
      return EPokemonStats.defense;
    case 'special-attack':
      return EPokemonStats['special-attack'];
    case 'special-defense':
      return EPokemonStats['special-defense'];
    default:
      return EPokemonStats.speed;
  }
}

function sortByName(pokemon: TPokemonUrl[]) {
  return pokemon.sort((a, b) => b.name.localeCompare(a.name));
}

function searchPokemon(pokemon: TPokemonUrl[], search: string) {
  return pokemon.filter((species) => species.name.toLowerCase().includes(search.toLowerCase()));
}

export {
  handlePokemonId,
  debounce,
  handlePokemonTypeColour,
  mapPokemonDetails,
  searchPokemon,
  sortByName,
};
