'use server';

import { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { projectsDb } from './db';

export const getProjects = async () => {
	const response = await projectsDb.query({
		filter: {
			status: { equals: 'Published' },
		},
		sorts: [{ timestamp: 'created_time', direction: 'descending' }],
	});
	const results = response.results.map((result) => new ProjectsResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as ProjectsResponseDTO[];
	return data;
};

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

export const getNextProject = async (createdTime: string) => {
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
		return null;
	} catch (error) {
		console.error(error);
	}
};
