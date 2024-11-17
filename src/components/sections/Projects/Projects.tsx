import { Container, Title } from '@/components/ui';
import { projects } from '@/src/data/data';
import { ProjectCards } from './components/ProjectCards';
import { getBase64 } from '@/src/lib/getBase64';

export const Projects = async () => {
	const revercedProjects = projects.toReversed();
	const images = revercedProjects.map((project) => project.img.jpg);
	const blurredImages = await Promise.all(images.map((image) => getBase64(image)));

	return (
		<section id="projects" className="scroll-mt-[80px] pb-[100px] md:scroll-mt-[120px]">
			<Container className="flex flex-col">
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					Projects
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					Things I’ve built so far
				</div>
				<ProjectCards blurredImages={blurredImages} projects={revercedProjects} />
			</Container>
		</section>
	);
};
