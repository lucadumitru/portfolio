import { Hero, Section, Card } from "@/components";
import Image from "next/image";

import { technologies } from "@/data/data";
import { projects } from "@/data/data";

export const metadata = {
	title: "Luca Dumitru | Front End Developer",
	description: "Luca Dumitru's portfolio web page",
	keywords:
		"portfolio, javascript, developer, front-end developer, react, nextjs, html, css, tailwind",
};

export default function Home() {
	return (
		<main className="pt-[120px] md:pt-[200px]">
			<Hero></Hero>
			<Section
				id="tech"
				title="My Tech Stack"
				subtitle=" Technologies I’ve been working with recently"
			>
				<div className="grid grid-cols-4 items-center gap-[25px]  md:grid-cols-5 md:gap-[40px]">
					{technologies.map((el, index) => (
						<Image
							key={index}
							className="justify-self-center"
							width={120}
							height={120}
							// style={{ width: "auto", height: "auto" }}
							src={el.icon}
							alt={el.name + "icon"}
						></Image>
					))}
				</div>
			</Section>
			<Section id="projects" title="Projects" subtitle="Things I’ve built so far">
				<div className="grid grid-cols-1 gap-[45px] gap-y-[20px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3">
					{projects.map((project) => (
						<Card key={project.id} project={project}></Card>
					))}
				</div>
			</Section>
		</main>
	);
}
