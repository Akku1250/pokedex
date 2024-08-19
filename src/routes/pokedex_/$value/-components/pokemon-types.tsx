import { Badge } from '@/components/ui/badge';
import { handlePokemonTypeColour } from '@/lib/helper';

type TProps = {
  types: string[];
};

function PokemonTypes({ types }: TProps) {
  return (
    <div className={'flex justify-center gap-2'}>
      {types.map((item) => (
        <Badge className={`capitalize ${handlePokemonTypeColour('bg', item)}`}>{item}</Badge>
      ))}
    </div>
  );
}

export default PokemonTypes;
