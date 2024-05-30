import Image from "next/image";
import { Link, LiveLink, CodeLink } from "@/components/ui";

import { m } from "framer-motion";
import { fadeInAnimationVariants } from "@/utils";

import type { Article } from "schema-dts";

interface CardProps {
	project: Project;
	index: number;
}

export const Card: React.FC<CardProps> = ({ project, index }) => {
	const jsonLd: Article = {
		"@type": "Article",
		name: project.title,
		description: project.description,
		image: project.img?.svg,
		url: `https://lucadevelop.com`,
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
		<m.article
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			custom={index}
			className="m-width-full shadow-custom relative flex flex-col overflow-hidden rounded-[20px] bg-white shadow-card dark:bg-[#363636]"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<a aria-label={project.title + " link"} href={`/projects/${project.slug}`}>
				{!project.video || !project.video.preview ? (
					<Image
						className="h-[200px] w-full object-cover transition hover:scale-105 md:h-[260px]"
						width="200"
						height="200"
						src={project.img?.svg || ""}
						alt={project.title + " img"}
						style={{ width: "auto", height: "auto" }}
					></Image>
				) : (
					<video
						autoPlay
						className="h-[200px] w-full object-cover transition hover:scale-105 md:h-[260px]"
						loop
						playsInline
						muted
						preload="auto"
					>
						<source src={project.video.preview} />
						<track kind="captions"></track>
					</video>
				)}
			</a>
			<div className="flex grow flex-col items-start p-[25px]">
				<h3 className="text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]">
					<Link href={`/projects/${project.slug}`}>{project.title}</Link>
				</h3>
				<p className="mt-[15px] flex grow text-[16px] font-light text-[gray] dark:text-[#CCCCCC]">
					{project.description.length >= 150
						? project.description.substring(0, 150) + "..."
						: project.description}
				</p>
				<div className="mt-[12px] text-textSecondary dark:text-[#CCCCCC]">
					Tech stack:{" "}
					<span className="font-light">
						{project.stack && project.stack.length >= 60
							? project.stack.substring(0, 60) + "..."
							: project.stack}
					</span>
				</div>
				<div className="mt-[12px] flex w-full items-center justify-between gap-x-3 text-[14px] dark:text-white md:mt-[20px]">
					<LiveLink href={project.preview}></LiveLink>
					<CodeLink href={project.git}></CodeLink>
				</div>
			</div>
		</m.article>
	);
};
