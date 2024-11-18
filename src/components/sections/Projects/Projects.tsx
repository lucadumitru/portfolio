import { Container, Title } from '@/components/ui';
import { projects } from '@/src/data/data';
import { getBase64 } from '@/src/lib/getBase64';
import { ProjectCards } from './components/ProjectCards';

export const Projects = async () => {
	const revercedProjects = projects.toReversed();
	const images = revercedProjects.map((project) => project.img.jpg);
	const blurredImages = await Promise.all(images.map((image) => getBase64(image)));

	return (
		<section className="scroll-mt-[80px] pb-[100px] md:scroll-mt-[120px]" id="projects">
			<Container className="flex flex-col">
				<Title className="text-center text-[24px] font-bold md:text-[48px]" tag="h2">
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
