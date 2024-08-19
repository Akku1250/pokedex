import { PokeballIcon } from '@/components/icons';
import { Input, Heading } from '@/components/ui';
import Spinner from '@/components/ui/spinner';
import { pokedexSchema } from '@/lib/types/t-pokedex-filter';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { SearchIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { debounce, handlePokemonId } from '@/lib/helper';
import { PokemonCard, PokedexSortByMenu } from './pokedex/-components';
import { TSortByPokemon } from '@/lib/types';
import { fetchPokedex } from '@/lib/services/api';

export const Route = createFileRoute('/pokedex')({
  component: PokedexHome,
  validateSearch: (search) => pokedexSchema.parse(search),
});

function PokedexHome() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [sortByValue, setSortByValue] = useState<TSortByPokemon>(search.sortBy);
  const [searchValue, setSearchValue] = useState<string>(search.searchValue || '');
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['pokedex', search],
    queryFn: () => fetchPokedex(search),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!search.searchValue) setSearchValue('');
  }, [search]);

  function sortByPokemon(value: string) {
    const valueSort = value as TSortByPokemon;
    setSortByValue(valueSort);
    navigate({ search: (prev) => ({ ...prev, sortBy: valueSort }) });
  }

  function searchPokemon(value: string) {
    if (value === '') {
      clearSearch();
      return;
    }

    navigate({ search: (prev) => ({ ...prev, searchValue: value }) });
  }
  const debouncedSearch = debounce(searchPokemon, 500);

  const clearSearch = () => {
    setSearchValue('');
    navigate({
      search: (prev) => ({ sortBy: prev.sortBy }),
    });
  };

  return (
    <div className="grid-rows-pokedex-layout grid min-h-dvh bg-primary">
      <header className="p-3">
        <Link
          to="/pokedex"
          className="mb-3 flex gap-4"
          search={{ sortBy: 'Number' }}
        >
          <PokeballIcon
            width={'25'}
            height={'25'}
            className="mb-auto mt-auto"
            fillPath="#E0E0E0"
          />
          <Heading className="text-light mb-auto mt-auto">Pokedex</Heading>
        </Link>

        <section className="flex gap-3">
          <Input
            value={searchValue}
            clearIcon={<X />}
            onClear={(e) => {
              e.preventDefault();
              clearSearch();
            }}
            icon={<SearchIcon />}
            onChange={(e) => {
              setSearchValue(e.target.value);
              debouncedSearch(e.target.value);
            }}
            placeholder="Search by name"
          />

          <PokedexSortByMenu
            value={sortByValue as string}
            onValueChange={sortByPokemon}
          />
        </section>
      </header>
      <main
        className={`m-2 rounded-md bg-white p-3 ${(isPending || isError) && 'grid place-content-center'}`}
      >
        {isPending && <Spinner />}
        {isError && <p>{error.message}</p>}
        {(!isPending || !isError) && (
          <div className="flex flex-wrap justify-center gap-3">
            {data?.map((item) => {
              return (
                <Link
                  to={'/pokedex/$value'}
                  params={{
                    value: handlePokemonId(item.url.split('/')[6]),
                  }}
                  key={item.name}
                >
                  <PokemonCard pokemonUrl={item} />
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
