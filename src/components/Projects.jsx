"use client";

import { Container, Title, Card, Link, useProjects } from ".";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Projects = () => {
	const projects = useProjects();
	const t = useTranslations("projects-section");
	const [projectsShowLength, setProjectsShowLength] = useState(6);
	const [hideBtn, setHideBtn] = useState(false);
	function showAllProjects() {
		setProjectsShowLength(projects.length);
		setHideBtn(true);
	}
	return (
		<section id="projects" className={`scroll-mt-[80px] md:scroll-mt-[120px] `}>
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					{t("title")}
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					{t("subtitle")}
				</div>
				<div
					className={`mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]`}
				>
					{projects
						.reverse()
						.slice(0, projectsShowLength)
						.map((project, index) => (
							<Card project={project} key={project.id} index={index}></Card>
						))}
				</div>
				<div className="text-center">
					<Link
						onClick={showAllProjects}
						className={`${
							hideBtn && "!hidden"
						} text-md before:content-[' ']  relative mt-10 cursor-pointer overflow-hidden whitespace-nowrap rounded-[100px] border border-gray from-cyan-500 to-fuchsia-500 p-4 transition-all before:absolute before:h-full before:w-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity hover:border-white hover:text-white hover:before:opacity-100 sm:inline-flex md:p-5 md:text-lg md:hover:no-underline`}
					>
						{t("more-projects")}
						<sup className="text-s ml-1">{projects.length - projectsShowLength}</sup>{" "}
					</Link>
				</div>
			</Container>
		</section>
	);
};
export default Projects;
