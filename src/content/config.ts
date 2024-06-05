import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    added: z.number(),
    title: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    imgs: z.array(z.string()),
    team: z.array(z.object({
      img: z.string(),
      name: z.string(),
      nickname: z.string(),
      role: z.array(z.string()),
      desc: z.string()
    }))
  })
})

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    img: z.string(),
    name: z.string(),
    nickname: z.string(),
    role: z.array(z.string()),
    linkedin: z.string().optional(),
    facebook: z.string().optional(),
    twitter: z.string().optional()
  })
})

export const collections = {
  projects: projectsCollection,
  team: teamCollection
};