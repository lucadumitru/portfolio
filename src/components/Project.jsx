"use client";

import Image from "next/image";
import { Container, LiveLink, CodeLink, NextProjectBtn, Contact, useProjects } from "../components";

const Project = ({ params }) => {
	const projects = useProjects();
	const projectId = +params.id;
	const project = projects.find((project) => project.id === projectId);
	const nextProject = projects.find((project) => project.id === projectId - 1);
	return (
		<main className="pt-[110px]">
			<Container className="flex flex-col items-center">
				<div>
					<h1 className="text-center text-3xl font-bold text-textSecondary dark:text-white md:text-6xl">
						{project.title}
					</h1>
					<p className="mt-3 max-w-4xl text-center text-gray md:mt-10">{project.text}</p>
					<div className="mt-10 flex justify-between gap-5">
						<LiveLink href={project.preview}></LiveLink>
						<CodeLink href={project.git}></CodeLink>
					</div>
				</div>
				<div className="mt-[5%] flex w-full flex-col  gap-[50px] md:gap-[100px]">
					<Image
						className="rounded-xl"
						src={project.img.svg}
						alt={project.title + " img"}
						width={1200}
						height={200}
					></Image>
					{project.video && project.video.macbook && (
						<div className="bg-macbook  relative  w-full bg-contain bg-no-repeat pb-[51%]">
							<video
								autoPlay
								className="absolute left-1/2 top-[2px] z-[-1] w-[75%]  -translate-x-2/4 rounded-t-[4%] "
								src={project.video.macbook}
								loop
								playsInline
								muted
								preload="auto"
							></video>
						</div>
					)}
					<div className="relative mt-10 flex flex-col justify-center">
						{params.id != 1 && (
							<NextProjectBtn
								nextProjectId={nextProject.id}
								nextProjectImg={nextProject.img.jpg}
								nextProjectTitle={nextProject.title}
							></NextProjectBtn>
						)}
					</div>
					<Contact></Contact>
				</div>
			</Container>
		</main>
	);
};
export default Project;
