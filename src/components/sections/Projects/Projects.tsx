import { Container, Title } from '@/components/ui';
import { projects } from '@/src/data/data';
import { getBase64 } from '@/src/lib/utils';

import { ProjectCards } from './components/ProjectCards';

export const Projects = async () => {
	const revercedProjects = projects.toReversed();
	const images = revercedProjects.map((project) => project.img.jpg);
	const blurredImages = await Promise.all(images.map((image) => getBase64(image)));

	return (
		<section className='pb-[6.25rem]'>
			<Container className='flex flex-col'>
				<Title
					className='scroll-mt-20 text-center text-2xl font-bold md:text-5xl'
					data-section-title
					id='projects'
					tag='h2'
				>
					Projects
				</Title>
				<div className='mt-3 text-center text-[1.125rem] text-gray md:mt-8 md:text-[2rem]'>
					Things I’ve built so far
				</div>
				<ProjectCards blurredImages={blurredImages} projects={revercedProjects} />
			</Container>
		</section>
	);
};
