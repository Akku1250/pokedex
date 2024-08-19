import { z } from 'zod';

const pokedexSchema = z.object({
  searchValue: z.string().optional(),
  sortBy: z.enum(['Name', 'Number']).catch('Number'),
});

type TPokedexFilter = z.infer<typeof pokedexSchema>;

export { pokedexSchema };
export type { TPokedexFilter };
