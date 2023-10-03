import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()),
		heroImage: z.object({
			url: z.string(),
			creator: z.object({
				name: z.string(),
				url: z.string()
			})
		})
	}),
});

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
	}),
});


export const collections = { articles, projects };
