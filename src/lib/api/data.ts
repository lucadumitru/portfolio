'use server';

import { unstable_cache as NextCache } from 'next/cache';

import { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { projectsDb } from './db';

export const getProjects = NextCache(
	async () => {
		const response = await projectsDb.query({
			filter: {
				status: { equals: 'Published' },
			},
			sorts: [{ timestamp: 'created_time', direction: 'descending' }],
		});
		const results = response.results.map((result) => new ProjectsResponseDTO(result));
		const data = JSON.parse(JSON.stringify(results)) as ProjectsResponseDTO[];
		return data;
	},
	['projects'],
	{ revalidate: 3600, tags: ['projects'] },
);

export const getProject = async (slug: string) => {
	const response = await projectsDb.query({
		filter: {
			slug: { equals: slug },
		},
		page_size: 1,
	});
	const result = new ProjectsResponseDTO(response.results[0]);
	const data = JSON.parse(JSON.stringify(result)) as ProjectsResponseDTO;
	return data;
};

export const getNextProject = NextCache(
	async (createdTime: string) => {
		try {
			const response = await projectsDb.query({
				filter: {
					createdTime: { before: createdTime },
				},
			});

			const result = new ProjectsResponseDTO(response.results[0]);

			if (result) {
				const data = JSON.parse(JSON.stringify(result)) as ProjectsResponseDTO;
				return data;
			}
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	['next-project'],
	{ revalidate: 3600, tags: ['next-project'] },
);
