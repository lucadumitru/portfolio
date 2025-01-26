import { notFound } from 'next/navigation';

import { Container, Title } from '@/components/ui';
import { getProjects } from '@/src/lib/api/data';

import { ProjectCards } from './components/ProjectCards';

export const Projects = async () => {
	const projects = await getProjects();

	if (!projects) {
		return notFound();
	}

	return (
		<section className='pb-[6.25rem]'>
			<Container className='flex flex-col'>
				<Title
					className='scroll-mt-20 text-center text-2xl font-bold md:text-5xl'
					id='projects'
					tag='h2'
					data-section-title
				>
					Projects
				</Title>
				<div className='mt-3 text-center text-[1.125rem] text-gray md:mt-8 md:text-[2rem]'>
					Things I’ve built so far
				</div>
				<ProjectCards projects={projects} />
			</Container>
		</section>
	);
};
