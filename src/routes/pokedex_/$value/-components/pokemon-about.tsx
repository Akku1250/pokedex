import { Heading, Paragraph } from '@/components/ui';
import { Separator } from '@/components/ui/separator';

type TProps = {
  text_color?: string;
  flavor_text?: string;
  abilities: string[];
  height: number;
  weight: number;
};

function PokemonAbout({ text_color, flavor_text, abilities = [], height = 0, weight = 0 }: TProps) {
  const calcWeight = weight / 10;
  const calcHeight = height / 10;
  return (
    <>
      <Heading
        variant={'subtitle-1'}
        className={`mb-4 mt-4 text-center ${text_color}`}
      >
        About
      </Heading>
      <div className={'mt-5 flex h-16 items-center justify-around'}>
        <div className="flex h-full flex-col justify-between">
          <Paragraph>{`${calcWeight} kg`}</Paragraph>
          <Paragraph
            variant={'body-3'}
            className="text-gray-500"
          >
            Weight
          </Paragraph>
        </div>
        <Separator orientation="vertical" />
        <div className="flex h-full flex-col justify-between">
          <Paragraph>{`${calcHeight} m`}</Paragraph>
          <Paragraph
            variant={'body-3'}
            className="text-gray-500"
          >
            Height
          </Paragraph>
        </div>
        <Separator orientation="vertical" />
        <div
          className={`${abilities.length < 2 ? 'flex h-full flex-col justify-between' : 'space-y-2'}`}
        >
          <div className="flex flex-col">
            {abilities.map((item) => (
              <Paragraph key={item}>{item}</Paragraph>
            ))}
          </div>
          <Paragraph
            variant={'body-3'}
            className="text-gray-500"
          >
            Moves
          </Paragraph>
        </div>
      </div>
      <Paragraph
        variant={'body-2'}
        className="my-7"
      >
        {flavor_text}
      </Paragraph>
    </>
  );
}

export default PokemonAbout;
