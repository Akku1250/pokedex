import { Heading } from '@/components/ui';
import Spinner from '@/components/ui/spinner';
import { handlePokemonId } from '@/lib/helper';
import { fetchPokemon, fetchPokemonSpecies, mapPokemonDetails } from '@/lib/services/api';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { PokemonAbout, PokemonBaseStats, PokemonCarousel, PokemonTypes } from './-components';
import PokeballIcon from '@/components/icons/pokeball-icon';

export const Route = createFileRoute('/pokedex/$value')({
  component: Pokemon,
  loader: async ({ params }) => ({
    pokemonData: await fetchPokemon(params.value),
    speciesData: await fetchPokemonSpecies(params.value),
  }),

  pendingComponent: pokemonPending,
});

function pokemonPending() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner />
    </div>
  );
}

function Pokemon() {
  const { pokemonData, speciesData } = Route.useLoaderData();

  const { data } = useQuery({
    queryKey: ['details', pokemonData.name],
    queryFn: () => mapPokemonDetails(pokemonData, speciesData),
  });

  if (!data) {
    return pokemonPending;
  }

  return (
    <div
      className={`grid-rows-pokemon-layout relative ${data.bg_color} grid min-h-dvh sm:min-h-screen`}
    >
      <PokeballIcon
        width={'230'}
        height={'230'}
        className="absolute right-[10px] top-[10px]"
        fillPath="#ffffff17"
      />
      <div className="flex justify-between p-3 sm:ml-auto sm:mr-auto sm:w-[28rem]">
        <Link
          to="/pokedex"
          className="flex gap-3"
          search={{ sortBy: 'Number' }}
        >
          <ArrowLeft
            width={25}
            height={25}
            className="text-light mb-auto mt-2.5"
          />
          <Heading className="text-light mb-auto mt-2 capitalize">{data.name}</Heading>
        </Link>
        <Heading className="text-light mb-auto mt-2">#{handlePokemonId(String(data.id))}</Heading>
      </div>

      <main
        className={'m-2 rounded-md bg-white p-3 sm:ml-auto sm:mr-auto sm:h-min sm:w-min sm:p-4'}
      >
        <PokemonCarousel
          id={data.id}
          name={data.name}
        />
        <section className="ml-auto mr-auto sm:w-96">
          <PokemonTypes types={data.types} />
          <PokemonAbout
            abilities={data.abilities}
            weight={data.weight}
            height={data.height}
            flavor_text={data.flavor_text}
            text_color={data.text_color}
          />
          <PokemonBaseStats
            stats={data?.stats ?? []}
            statsTotal={data?.statsTotal ?? 0}
            text_color={data?.text_color ?? ''}
            bg_color={data?.bg_color ?? ''}
          />
        </section>
      </main>
    </div>
  );
}
