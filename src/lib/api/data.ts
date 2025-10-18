'use server';

import { EducationsResponseDTO } from '@/src/notion-sdk/dbs/educations/response.dto';
import { ExperiencesResponseDTO } from '@/src/notion-sdk/dbs/experiences';
import { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';
import { TechnologiesResponseDTO } from '@/src/notion-sdk/dbs/technologies/response.dto';

import { educationsDb, experiencesDb, projectsDb, technologiesDb } from './dbs';

export const getProjects = async (): Promise<ProjectsResponseDTO[]> => {
	const response = await projectsDb.query({
		filter: {
			status: { equals: 'Published' },
		},
		sorts: [{ timestamp: 'created_time', direction: 'descending' }],
	});

	const result = response.results.map((result) => new ProjectsResponseDTO(result));
	const data = JSON.parse(JSON.stringify(result)) as ProjectsResponseDTO[];
	return data;
};

export const getProject = async (slug: string): Promise<ProjectsResponseDTO> => {
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

export const getNextProject = async (
	createdTime: string,
): Promise<ProjectsResponseDTO | undefined> => {
	if (!createdTime) {
		return;
	}
	try {
		const response = await projectsDb.query({
			filter: {
				createdTime: { before: createdTime },
			},
			sorts: [{ timestamp: 'created_time', direction: 'descending' }],
		});

		if (!response.results.length) {
			return;
		}

		return new ProjectsResponseDTO(response.results[0]);
	} catch (error) {
		console.error(error);
	}
};

export const getEducations = async (): Promise<EducationsResponseDTO[]> => {
	const response = await educationsDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	const results = response.results.map((result) => new EducationsResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as EducationsResponseDTO[];
	return data;
};

export const getExperiences = async (): Promise<ExperiencesResponseDTO[]> => {
	const response = await experiencesDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	const results = response.results.map((result) => new ExperiencesResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as ExperiencesResponseDTO[];
	return data;
};

export const getTechnologies = async (): Promise<TechnologiesResponseDTO[]> => {
	const response = await technologiesDb.query({
		sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
	});

	const results = response.results.map((result) => new TechnologiesResponseDTO(result));
	const data = JSON.parse(JSON.stringify(results)) as TechnologiesResponseDTO[];
	return data;
};
