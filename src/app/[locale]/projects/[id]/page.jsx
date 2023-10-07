"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container, LiveLink, CodeLink } from "../../../../components";
import { useProjects } from "../../../../data/data";

const Project = ({ params }) => {
	const projects = useProjects();
	const project = projects[params.id - 1];
	const nextProject = projects[params.id];
	const t = useTranslations("projects-section");
	return (
		<main className="-mb-[70px] pt-[110px]">
			<Container className="flex flex-col items-center">
				<div>
					<h1 className="text-center text-3xl font-bold text-textSecondary md:text-6xl">
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
						src={project.img}
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
						{projects.length != params.id && (
							<>
								<a
									className="intems-center group mx-auto flex max-w-[70%] flex-col text-center "
									href={`/projects/${+params.id + 1}`}
								>
									<span className="text-gray">{t("next-project")}</span>
									<span className="-mb-5 mt-2 text-3xl font-semibold text-textSecondary transition group-hover:opacity-30 md:-mb-10 md:mt-5 md:text-8xl">
										{nextProject.title}
									</span>
									<Image
										className="relativ -z-1 mx-auto translate-y-10 rounded-xl transition group-hover:translate-y-2 md:translate-y-16"
										src={nextProject.img}
										width={300}
										height={200}
										alt={nextProject.title}
									></Image>
								</a>
								<div className="relative z-10 mx-auto h-[70px] w-[80%] border-t-[2px] border-solid border-gray/30 bg-white dark:bg-bgDark "></div>
							</>
						)}
					</div>
				</div>
			</Container>
		</main>
	);
};
export default Project;
