import { Paragraph } from '@/components/ui';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { handlePokemonId } from '@/lib/helper';
import { TPokemonUrl } from '@/lib/types';

type TProps = {
  pokemonUrl: TPokemonUrl;
};

function PokemonCard({ pokemonUrl }: TProps) {
  const pokemonId = pokemonUrl.url.split('/')[6];

  return (
    <Card className="min-h-[180px] w-[160px]">
      <CardHeader className="p-3">
        <CardDescription className="text-end">#{handlePokemonId(pokemonId)}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <img
          className="ml-auto mr-auto w-[85px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          alt={pokemonUrl.name}
        />
      </CardContent>
      <CardFooter className="justify-center">
        <Paragraph className="capitalize">{pokemonUrl.name}</Paragraph>
      </CardFooter>
    </Card>
  );
}

export default PokemonCard;
