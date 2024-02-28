import { Container, Title, Card, Link, useProjects } from "@/components/ui";
import { useState } from "react";
import { projects } from "@/data/data";

export const Projects = () => {
	const [projectsShowLength, setProjectsShowLength] = useState(6);
	const [hideBtn, setHideBtn] = useState(false);
	const dataProjects = [...projects];
	function showAllProjects() {
		setProjectsShowLength(projects.length);
		setHideBtn(true);
	}

	return (
		<section
			itemType="https://schema.org/ItemList"
			id="projects"
			className={`scroll-mt-[80px] md:scroll-mt-[120px] `}
		>
			<Container>
				<Title
					tag="h2"
					itemProp="name"
					className="text-center text-[24px] font-bold md:text-[48px]"
				>
					Projects
				</Title>
				<div
					itemProp="description"
					className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]"
				>
					Things I’ve built so far
				</div>
				<div
					className={`mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]`}
				>
					{dataProjects
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
						More projects
						<sup className="text-s ml-1">{projects.length - projectsShowLength}</sup>{" "}
					</Link>
				</div>
			</Container>
		</section>
	);
};
