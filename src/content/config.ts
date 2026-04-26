import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    state: z.enum(['draft', 'published']).default('draft'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  writing,
};
