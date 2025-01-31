import { notFound } from 'next/navigation';

import { getProjects } from '@/src/lib/api/data';
import { getFileUrl, getImage } from '@/src/lib/utils';

import { ProjectCards } from './ProjectCards';

export const Projects = async () => {
	const projects = await getProjects();

	const projectsImgPlaceholders = await Promise.all(
		projects.map(async (project) => {
			return (await getImage(getFileUrl(project.properties.__data.mainImage.files))).base64;
		}),
	);

	if (!projects) {
		return notFound();
	}

	return <ProjectCards imagesPlaceholders={projectsImgPlaceholders} projects={projects} />;
};
