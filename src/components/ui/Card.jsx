"use client";

import Image from "next/image";
import Link from "./Link";

import { LiveLink, CodeLink } from "..";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./../../animations/animations";

const Card = ({ project, index }) => {
	const t = useTranslations("card");
	return (
		<motion.article
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			custom={index}
			className="m-width-full shadow-custom relative flex flex-col  overflow-hidden rounded-[20px] bg-white shadow-card dark:bg-[#363636]"
		>
			<a href={`/projects/${project.id}`}>
				{!project.video || !project.video.preview ? (
					<Image
						className="h-[200px] w-full  object-cover transition hover:scale-105 md:h-[260px]"
						width="200"
						height="200"
						src={project.img.svg}
						alt={project.title + " img"}
					></Image>
				) : (
					<video
						autoPlay
						className="h-[200px] w-full  object-cover transition hover:scale-105 md:h-[260px]"
						loop
						playsInline
						muted
						preload="auto"
					>
						<source src={project.video.preview} />
					</video>
				)}
			</a>
			<div className="flex grow flex-col items-start  p-[25px]">
				<h5 className="text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]">
					<Link href={`/projects/${project.id}`}>{project.title}</Link>
				</h5>
				<p className="mt-[15px] flex grow text-[16px] font-light text-[gray] dark:text-[#CCCCCC]">
					{project.text.length >= 150 ? project.text.substring(0, 150) + "..." : project.text}
				</p>
				<div className="mt-[12px] text-textSecondary dark:text-[#CCCCCC]">
					{t("stack") + ": "}
					<span className="font-light">{project.stack}</span>
				</div>
				<div className="mt-[12px] flex w-full items-center justify-between gap-x-3 text-[14px] dark:text-white md:mt-[20px]">
					<LiveLink href={project.preview} text={t("preview")}></LiveLink>
					<CodeLink href={project.git} text={t("code")}></CodeLink>
				</div>
			</div>
		</motion.article>
	);
};

export default Card;
