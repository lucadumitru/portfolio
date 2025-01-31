'use server';

import { EducationsResponseDTO } from '@/src/notion-sdk/dbs/educations/response.dto';
import { ExperiencesResponseDTO } from '@/src/notion-sdk/dbs/experiences';
import { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { TechnologiesResponseDTO } from './../../notion-sdk/dbs/technologies/response.dto';
import { educationsDb, experiencesDb, projectsDb, technologiesDb } from './dbs';

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
	if (!createdTime) {
		return;
	}
	try {
		const response = await projectsDb.query({
			filter: {
				createdTime: { before: createdTime },
			},
		});

		if (!response.results.length) {
			return;
		}

		const result = new ProjectsResponseDTO(response.results[0]);

		const data = JSON.parse(JSON.stringify(result)) as ProjectsResponseDTO;
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getEducations = async () => {
	const response = await educationsDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	const results = response.results.map((result) => new EducationsResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as EducationsResponseDTO[];
	return data;
};

export const getExperiences = async () => {
	const response = await experiencesDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	const results = response.results.map((result) => new ExperiencesResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as ExperiencesResponseDTO[];
	return data;
};

export const getTechnologies = async () => {
	const response = await technologiesDb.query({
		sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
	});

	const results = response.results.map((result) => new TechnologiesResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as TechnologiesResponseDTO[];
	return data;
};
