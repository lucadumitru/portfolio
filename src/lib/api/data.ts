'use server';

import { serialize } from '@/src/lib/utils';
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

	return serialize(response.results.map((result) => new ProjectsResponseDTO(result)));
};

export const getProject = async (slug: string): Promise<ProjectsResponseDTO> => {
	const response = await projectsDb.query({
		filter: {
			slug: { equals: slug },
		},
		page_size: 1,
	});

	return serialize(new ProjectsResponseDTO(response.results[0]));
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

		return serialize(new ProjectsResponseDTO(response.results[0]));
	} catch (error) {
		console.error(error);
	}
};

export const getEducations = async (): Promise<EducationsResponseDTO[]> => {
	const response = await educationsDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	return serialize(response.results.map((result) => new EducationsResponseDTO(result)));
};

export const getExperiences = async (): Promise<ExperiencesResponseDTO[]> => {
	const response = await experiencesDb.query({
		sorts: [{ property: 'period', direction: 'descending' }],
	});
	return serialize(response.results.map((result) => new ExperiencesResponseDTO(result)));
};

export const getTechnologies = async (): Promise<TechnologiesResponseDTO[]> => {
	const response = await technologiesDb.query({
		sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
	});

	return serialize(response.results.map((result) => new TechnologiesResponseDTO(result)));
};
