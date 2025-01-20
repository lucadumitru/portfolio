'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Button, Card } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';

interface ProjectCardsProps {
	blurredImages: string[];
	projects: Project[];
}

const INITIAL_PROJECTS_LEGTH = 6;

export const ProjectCards = ({ blurredImages, projects }: ProjectCardsProps) => {
	const [projectsShowLength, setProjectsShowLength] = useState(INITIAL_PROJECTS_LEGTH);
	const projectsToShow = projects.length - projectsShowLength;

	const handleClick = () => {
		if (projectsShowLength >= projects.length) return;
		setProjectsShowLength(projectsShowLength + 3);
	};

	return (
		<>
			<div
				className={`mt-6 grid grid-cols-1 gap-11 gap-y-5 md:mt-20 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:mt-[7.5rem]`}
			>
				{projects.slice(0, projectsShowLength).map((project, index) => (
					<motion.div
						className='flex h-full'
						initial='initial'
						key={project.id}
						transition={{ delay: index * 0.3 }}
						variants={fadeInAnimationVariants}
						viewport={{ once: true }}
						whileInView='animate'
					>
						<Card blurredImage={blurredImages[index]} project={project} />
					</motion.div>
				))}
			</div>

			{projectsShowLength <= projects.length && (
				<Button className='mt-10' onClick={handleClick} size='large' variant='secondary'>
					<span className='relative z-10'>More projects</span>
					<sup className='ml-1'>{projectsToShow}</sup>
				</Button>
			)}
		</>
	);
};
