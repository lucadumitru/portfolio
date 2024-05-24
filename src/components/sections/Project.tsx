import Image from "next/image";
import { Container, LiveLink, CodeLink, NextProjectBtn } from "@/components/ui";
import Link from "next/link";

import type { Article } from "schema-dts";

interface ProjectProps {
	project: Project;
	nextProject: Project;
}

export const Project: React.FC<ProjectProps> = ({ project, nextProject }) => {
	const jsonLd: Article = {
		"@type": "Article",
		name: project.title,
		description: project.description,
		image: project.img?.svg,
		url: `https://lucadevelop.com/projects/${project.slug}`,
		keywords: project.stack,
		about: {
			"@type": "Project",
			name: project.title,
			description: project.description,
			image: project.img?.svg,
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
		articleBody: project.description,
		inLanguage: "en",
	};
	return (
		<main className="pt-[110px]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Container className="flex flex-col items-center">
				<div>
					<h1 className="text-center text-3xl font-bold text-textSecondary dark:text-white md:text-6xl">
						{project.title}
					</h1>
					<p className="mt-3 max-w-4xl text-center text-gray md:mt-10">
						{project.description}
					</p>
					<div className="mt-10 flex justify-between gap-5">
						<LiveLink variant="button" href={project.preview}></LiveLink>
						<CodeLink variant="button" href={project.git}></CodeLink>
					</div>
				</div>
				<div className="mt-[5%] flex w-full flex-col gap-[50px] md:gap-[100px]">
					<Link href={project.preview}>
						<Image
							className="rounded-xl"
							src={project.img?.svg || ""}
							alt={project.title + " img"}
							width={1200}
							height={200}
						></Image>
					</Link>
					{project.video && project.video.macbook && (
						<div className="relative w-full bg-macbook bg-contain bg-no-repeat pb-[51%]">
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
					{project.keyfeatures && (
						<div>
							<div className="mb-3 text-center text-2xl font-semibold">Key features:</div>
							<ul className="flex list-inside list-disc flex-col gap-3">
								{project.keyfeatures.map((keyfeature, index) => (
									<li key={index} className="inline-block text-gray">
										<span className="font-bold">
											● {`${keyfeature.key ? keyfeature.key + ":" : ""}`}{" "}
										</span>
										<p className="inline">{keyfeature.description}</p>
									</li>
								))}
							</ul>
						</div>
					)}
					{project.id !== 1 && (
						<div className="relative mb-[100px] mt-10 flex flex-col justify-center">
							<NextProjectBtn
								nextProjectSlug={nextProject.slug || ""}
								nextProjectImg={nextProject.img?.jpg || ""}
								nextProjectTitle={nextProject.title || ""}
							></NextProjectBtn>
						</div>
					)}
				</div>
			</Container>
		</main>
	);
};
