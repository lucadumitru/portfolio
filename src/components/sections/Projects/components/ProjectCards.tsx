'use client';

import { Card } from '@/components/ui';
import { domAnimation, LazyMotion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardsProps {
	projects: Project[];
	blurredImages: string[];
}

const INITIAL_PROJECTS_LEGTH = 6;

export const ProjectCards = ({ projects, blurredImages }: ProjectCardsProps) => {
	const [projectsShowLength, setProjectsShowLength] = useState(INITIAL_PROJECTS_LEGTH);

	const loadMoreProjects = () => {
		if (projectsShowLength >= projects.length) return;
		setProjectsShowLength(projectsShowLength + 3);
	};

	return (
		<>
			<LazyMotion features={domAnimation}>
				<div
					className={`mt-[25px]  grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]`}
				>
					{projects.slice(0, projectsShowLength).map((project, index) => (
						<Card
							blurredImage={blurredImages[index]}
							project={project}
							key={project.id}
							index={index}
						/>
					))}
				</div>
			</LazyMotion>
			{projectsShowLength <= projects.length && (
				<button
					onClick={() => loadMoreProjects()}
					className='text-md before:content-[" "] relative mt-10 flex cursor-pointer  items-center justify-center place-self-center overflow-hidden whitespace-nowrap rounded-[100px] border border-gray bg-white from-cyan-500 to-fuchsia-500 p-4  transition-all before:absolute before:h-full before:w-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity hover:border-white hover:text-white hover:before:opacity-100 dark:bg-bgDark sm:inline-flex md:w-auto md:p-5 md:text-lg md:hover:no-underline'
				>
					<span className=" relative z-10">More projects</span>
					<sup className="text-s ml-1">{projects.length - projectsShowLength}</sup>
				</button>
			)}
		</>
	);
};
