"use client";

import { Container, Title, Card } from ".";
import { useTranslations } from "next-intl";

const Projects = () => {
	const t = useTranslations("projects-section");
	const p = useTranslations("projects");
	const projects = [
		{
			id: 1,
			title: "The Box",
			text: p("the-box"),
			img: "/projects/the-box.jpg",
			stack: "HTML , JavaScript, SASS, React",
			git: "https://github.com/lucadumitru/the-box",
			preview: "https://the-box.lucadevelop.com/",
		},
		{
			id: 2,
			title: "Freaks of Nature",
			text: p("freaks"),
			img: "/projects/freaks.jpg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/freaks-landing",
			preview: "http://freaksofnature.lucadevelop.com/",
		},
		{
			id: 3,
			title: "Quickfit",
			text: p("quickfit"),
			img: "/projects/quickfit.jpg",
			stack: "HTML , JavaScript, SASS, Spline",
			git: "http://github.https://github.com/lucadumitru/quickfitcom",
			preview: "http://quickfit.lucadevelop.com/",
		},
		{
			id: 4,
			title: "NFT Marketplace",
			text: p("nft"),
			img: "/projects/nft.jpg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/nft-marketplace",
			preview: "http://nft.lucadevelop.com/",
		},
		{
			id: 5,
			title: "Funiro",
			text: p("funiro"),
			img: "/projects/funiro.jpg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/funiro",
			preview: "http://funiro.lucadevelop.com/",
		},
		{
			id: 6,
			title: "FarmVest",
			text: p("funiro"),
			img: "/projects/farmvest.jpg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/farm-vest",
			preview: "http://farm-vest.lucadevelop.com/",
		},
	];
	return (
		<section
			id="projects"
			className="mdscroll-mt-[120px] mt-[50px] scroll-mt-[80px]  md:mt-[200px]"
		>
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					{t("title")}
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					{t("subtitle")}
				</div>
				<div className="mt-[25px] grid grid-cols-1 gap-[45px] gap-y-[20px] md:mt-[80px] md:grid-cols-2 md:gap-y-[40px] lg:grid-cols-3 xl:mt-[120px]">
					{projects.map((project) => (
						<Card key={project.id} project={project}></Card>
					))}
				</div>
			</Container>
		</section>
	);
};
export default Projects;
