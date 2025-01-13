'use client';

import { useState } from 'react';

import { Card } from '@/components/ui';

interface ProjectCardsProps {
	blurredImages: string[];
	projects: Project[];
}

const INITIAL_PROJECTS_LEGTH = 6;

export const ProjectCards = ({ blurredImages, projects }: ProjectCardsProps) => {
	const [projectsShowLength, setProjectsShowLength] = useState(INITIAL_PROJECTS_LEGTH);

	const loadMoreProjects = () => {
		if (projectsShowLength >= projects.length) return;
		setProjectsShowLength(projectsShowLength + 3);
	};

	return (
		<>
			<div
				className={`mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]`}
			>
				{projects.slice(0, projectsShowLength).map((project, index) => (
					<Card
						key={project.id}
						blurredImage={blurredImages[index]}
						index={index}
						project={project}
					/>
				))}
			</div>

			{projectsShowLength <= projects.length && (
				<button
					className='text-md before:content-[" "] relative mt-10 flex cursor-pointer items-center justify-center place-self-center overflow-hidden whitespace-nowrap rounded-[100px] border border-gray bg-white from-cyan-500 to-fuchsia-500 p-4 transition-all before:absolute before:h-full before:w-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity hover:border-white hover:text-white hover:before:opacity-100 dark:bg-bgDark sm:inline-flex md:w-auto md:p-5 md:text-lg md:hover:no-underline'
					type='button'
					onClick={() => loadMoreProjects()}
				>
					<span className='relative z-10'>More projects</span>
					<sup className='text-s ml-1'>{projects.length - projectsShowLength}</sup>
				</button>
			)}
		</>
	);
};
