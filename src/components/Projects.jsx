"use client";

import { Container, Title, Card } from ".";
import { projects } from "./../data/data";
import { useTranslations } from "next-intl";

const Projects = () => {
	const t = useTranslations("projects");
	return (
		<section
			id="projects"
			className="mdscroll-mt-[120px] mt-[50px] scroll-mt-[80px]  md:mt-[200px]"
		>
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					{t("title")}
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					{t("subtitle")}
				</div>
				<div className="mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]">
					{projects.map((project) => (
						<Card key={project.id} project={project}></Card>
					))}
				</div>
			</Container>
		</section>
	);
};
export default Projects;
