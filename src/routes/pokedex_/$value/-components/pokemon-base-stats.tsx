import { Heading } from '@/components/ui';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

type TProps = {
  text_color: string;
  bg_color: string;
  statsTotal: number;
  stats: {
    base_stat: number;
    name: string;
  }[];
};

function PokemonBaseStats({ stats, text_color, bg_color, statsTotal }: TProps) {
  return (
    <>
      <Heading
        variant={'subtitle-1'}
        className={`mb-4 mt-4 text-center ${text_color}`}
      >
        Base Stats
      </Heading>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex items-center gap-2 space-y-1"
        >
          <section className="mt-1 flex h-5 w-28 items-center space-x-4 text-sm">
            <Heading
              variant={'subtitle-2'}
              className={`${text_color} w-full`}
            >
              {stat.name}
            </Heading>
            <Separator orientation="vertical" />
            <div className="w-full text-center">{stat.base_stat.toString().padStart(3, '0')}</div>
          </section>
          <Progress
            value={(stat.base_stat / 255) * 100}
            indicatorClassName={bg_color}
            className={'h-2 w-[80%] bg-gray-100'}
          />
        </div>
      ))}
      <section className="mt-1 flex h-5 w-[6.3rem] items-center space-x-4 text-sm">
        <Heading
          variant={'subtitle-2'}
          className={`${text_color} w-full`}
        >
          Total
        </Heading>
        <Separator orientation="vertical" />
        <div className="w-full text-center">{statsTotal}</div>
      </section>
    </>
  );
}

export default PokemonBaseStats;
