'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import type { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { Button, Card } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/constants/animations';

interface ProjectCardsProps {
	projects: ProjectsResponseDTO[] | undefined;
}

const INITIAL_PROJECTS_LENGTH = 6;

export const ProjectCards = ({ projects }: ProjectCardsProps) => {
	const [projectsShowLength, setProjectsShowLength] = useState(INITIAL_PROJECTS_LENGTH);

	if (!projects) {
		return null;
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
					<motion.div
						key={project.id}
						className='flex h-full'
						initial='initial'
						variants={fadeInAnimationVariants}
						whileInView='animate'
						transition={{ delay: index * 0.3 }}
						viewport={{ once: true }}
					>
						<Card project={project} />
					</motion.div>
				))}
			</div>

			{projectsShowLength <= projects.length && (
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
