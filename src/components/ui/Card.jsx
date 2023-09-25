"use client";

import Image from "next/image";
import Link from "./Link";

import { useDarkMode } from "..";

//Assets
import linkIcon from "/public/icons/link.svg";
import linkIconWhite from "/public/icons/link-white.svg";
import gitIcon from "/public/icons/git-small.svg";
import gitIconWhite from "/public/icons/git-small-white.svg";

const Card = ({ project }) => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	return (
		<article className="m-width-full shadow-custom shadow-card relative  overflow-hidden rounded-[20px] bg-white dark:bg-[#363636]">
			<a href={project.preview}>
				<Image
					className="obje h-[200px] w-full  object-cover transition hover:scale-105 md:h-[260px]"
					width="200"
					height="200"
					src={project.img}
					alt={project.title + "img"}
				></Image>
			</a>
			<div className="flex flex-col items-start p-[25px]">
				<h5 className="text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]">
					<Link href={project.preview}>{project.title}</Link>
				</h5>
				<p className="mt-[15px] text-[18px] font-light text-[gray] dark:text-[#CCCCCC]">
					{project.text}
				</p>
				<div className="text-textSecondary mt-[12px] dark:text-[#CCCCCC]">
					Tech stack: <span className="font-light">{project.stack}</span>
				</div>
				<div className="mt-[12px] flex w-full items-center justify-between gap-x-[5px] text-[14px] dark:text-white md:mt-[20px]">
					<Link href={project.preview} img={isDarkMode === "dark" ? linkIconWhite : linkIcon}>
						Live Preview
					</Link>
					<Link href={project.git} img={isDarkMode === "dark" ? gitIconWhite : gitIcon}>
						View Code
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Card;
