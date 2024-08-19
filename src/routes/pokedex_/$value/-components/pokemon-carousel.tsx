import { handlePokemonId } from '@/lib/helper';
import { Link } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TProps = {
  id?: number;
  name?: string;
};

function PokemonCarousel({ id, name }: TProps) {
  return (
    <section className="mt-[-128px] flex sm:ml-auto sm:mr-auto sm:mt-[-170px] sm:w-96">
      <Link
        to={'/pokedex/$value'}
        params={{ value: handlePokemonId(`${Number(id) - 1}`) }}
        className="text-light z-10 mb-auto mt-auto"
        disabled={id === 1}
      >
        {id !== 1 && <ChevronLeft />}
      </Link>

      <img
        className="z-10 ml-auto mr-auto w-[200px] sm:w-[260px]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        loading="eager"
      />

      <Link
        to={'/pokedex/$value'}
        params={{ value: handlePokemonId(`${Number(id) + 1}`) }}
        className="text-light z-10 mb-auto mt-auto"
        disabled={id === 905}
      >
        <ChevronRight />
      </Link>
    </section>
  );
}

export default PokemonCarousel;
