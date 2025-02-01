'use client';

import { useState } from 'react';

import type { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { Button } from '@/components/ui';
import { INITIAL_PROJECTS_LENGTH } from '@/src/lib/constants';

import { ProjectCard } from './ProjectCard';

interface ProjectCardsProps {
	imagesPlaceholders?: string[];
	projects: ProjectsResponseDTO[] | undefined;
}

export const ProjectCards = ({ imagesPlaceholders, projects }: ProjectCardsProps) => {
	const [projectsShowLength, setProjectsShowLength] = useState(INITIAL_PROJECTS_LENGTH);

	if (!projects) {
		return <div>Projects not found</div>;
	}

	const projectsToShow = projects.length - projectsShowLength;

	const handleClick = () => {
		if (projectsShowLength >= projects?.length) return;
		setProjectsShowLength(projectsShowLength + 3);
	};

	return (
		<>
			<div
				className={`mt-6 grid grid-cols-1 gap-11 gap-y-5 md:mt-20 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:mt-[7.5rem]`}
			>
				{projects.slice(0, projectsShowLength).map((project, index) => (
					<ProjectCard
						key={project.id}
						index={index}
						imagePlaceholder={imagesPlaceholders?.[index] ?? ''}
						project={project}
					/>
				))}
			</div>

			{projectsToShow > 0 && (
				<Button className='mt-10' size='large' variant='secondary' onClick={handleClick}>
					<span>
						More projects
						<sup className='ml-1'>{projectsToShow}</sup>
					</span>
				</Button>
			)}
		</>
	);
};
