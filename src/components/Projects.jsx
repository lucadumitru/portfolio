"use client";

import { Container, Title, Card, Link } from ".";
import { useTranslations } from "next-intl";
import { useProjects } from "../data/data";

const Projects = ({ allProjects }) => {
	const t = useTranslations("projects-section");
	const projects = useProjects();
	return (
		<section
			id="projects"
			className={`scroll-mt-[80px] md:scroll-mt-[120px] ${
				allProjects && "mt-[100px] md:mt-[150px]"
			}`}
		>
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					{t("title")}
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					{t("subtitle")}
				</div>
				<div
					className={`mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px] ${
						allProjects && "pb-[100px]"
					}`}
				>
					{allProjects
						? projects.map((project, index) => (
								<Card key={project.id} index={index} project={project}></Card>
						  ))
						: projects
								.slice(0, 6)
								.map((project, index) => (
									<Card project={project} key={project.id} index={index}></Card>
								))}
				</div>
				{!allProjects && (
					<div className="text-center">
						<Link
							className="text-md before:content-[' '] relative mt-10 overflow-hidden whitespace-nowrap rounded-[100px] border border-gray from-cyan-500 to-fuchsia-500 p-4 transition-all before:absolute before:h-full before:w-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity hover:border-white hover:text-white hover:before:opacity-100 sm:inline-flex md:p-5 md:text-lg md:hover:no-underline"
							href="/projects"
						>
							{t("more-projects")}
							<sup className="text-s ml-1">{projects.length}</sup>{" "}
						</Link>
					</div>
				)}
			</Container>
		</section>
	);
};
export default Projects;
