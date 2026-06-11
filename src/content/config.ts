import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["ACTIVE", "MAINTAINED", "BETA", "ARCHIVED"]),
    repo: z.string().optional(),
    url: z.string().optional(),
    stars: z.number().optional(),
    forks: z.number().optional(),
  }),
});

export const collections = { blog, projects };
