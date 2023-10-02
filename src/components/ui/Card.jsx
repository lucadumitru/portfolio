"use client";

import Image from "next/image";
import Link from "./Link";

import { useDarkMode, ThemedImg } from "..";
import { useTheme } from "next-themes";

//Assets
import linkIcon from "/public/icons/link.svg";
import linkIconWhite from "/public/icons/link-white.svg";
import gitIcon from "/public/icons/git-small.svg";
import gitIconWhite from "/public/icons/git-small-white.svg";

const Card = ({ project }) => {
	// const { isDarkMode, toggleDarkMode } = useDarkMode();
	const { resolvedTheme } = useTheme();
	return (
		<article className="m-width-full shadow-custom relative flex flex-col  overflow-hidden rounded-[20px] bg-white shadow-card dark:bg-[#363636]">
			<a href={`/projects/${project.id}`}>
				<Image
					className="h-[200px] w-full  object-cover transition hover:scale-105 md:h-[260px]"
					width="200"
					height="200"
					src={project.img}
					alt={project.title + "img"}
				></Image>
			</a>
			<div className="flex grow flex-col items-start  p-[25px]">
				<h5 className="text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]">
					<Link href={`/projects/${project.id}`}>{project.title}</Link>
				</h5>
				<p className="mt-[15px] flex grow text-[16px] font-light text-[gray] dark:text-[#CCCCCC]">
					{project.text.length >= 135 ? project.text.substring(0, 135) + "..." : project.text}
				</p>
				<div className="mt-[12px] text-textSecondary dark:text-[#CCCCCC]">
					Tech stack: <span className="font-light">{project.stack}</span>
				</div>
				<div className="mt-[12px] flex w-full items-center justify-between gap-x-[5px] text-[14px] dark:text-white md:mt-[20px]">
					<a href={project.preview} className="flex flex-row-reverse gap-2 hover:underline">
						<span>Live Preview</span>
						<ThemedImg
							srcDark={linkIconWhite}
							srcLight={linkIcon}
							alt="Link icon"
						></ThemedImg>
					</a>
					<a href={project.preview} className="flex flex-row-reverse gap-2 hover:underline">
						<span>View Code</span>
						<ThemedImg srcDark={gitIconWhite} srcLight={gitIcon} alt="Git icon"></ThemedImg>
					</a>

					{/* <Link
						href={project.preview}
						img={resolvedTheme === "dark" ? linkIconWhite : linkIcon}
					>
						Live Preview
					</Link>
					<Link href={project.git} img={resolvedTheme === "dark" ? gitIconWhite : gitIcon}>
						View Code
					</Link> */}
				</div>
			</div>
		</article>
	);
};

export default Card;
