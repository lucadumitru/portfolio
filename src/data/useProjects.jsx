"use client";

import { useTranslations } from "next-intl";

const useProjects = () => {
	const p = useTranslations("projects");
	return [
		{
			id: 1,
			title: "FarmVest",
			text: p("funiro"),
			img: {
				svg: "/projects/farmvest/img/farmvest.svg",
				jpg: "/projects/farmvest/img/farmvest.jpg",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/farm-vest",
			preview: "http://farm-vest.lucadevelop.com/",
		},
		{
			id: 2,
			title: "Funiro",
			text: p("funiro"),
			img: {
				svg: "/projects/funiro/img/funiro.svg",
				jpg: "/projects/funiro/img/funiro.jpg",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/funiro",
			preview: "http://funiro.lucadevelop.com/",
		},
		{
			id: 3,
			title: "NFT Marketplace",
			text: p("nft"),
			img: {
				svg: "/projects/nft/img/nft.svg",
				jpg: "/projects/nft/img/nft.jpg",
			},
			video: {
				macbook: "/projects/quickfit/video/quickfit-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/nft-marketplace",
			preview: "http://nft.lucadevelop.com/",
		},
		{
			id: 4,
			title: "Quickfit",
			text: p("quickfit"),
			img: {
				svg: "/projects/quickfit/img/quickfit.svg",
				jpg: "/projects/quickfit/img/quickfit.jpg",
			},
			video: {
				macbook: "/projects/quickfit/video/quickfit-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS, Spline",
			git: "http://github.https://github.com/lucadumitru/quickfitcom",
			preview: "http://quickfit.lucadevelop.com/",
		},
		{
			id: 5,
			title: "Freaks of Nature",
			text: p("freaks"),
			img: {
				svg: "/projects/freaks/img/freaks.svg",
				jpg: "/projects/freaks/img/freaks.jpg",
			},
			video: {
				preview: "/projects/freaks/video/freaks-preview.mov",
				macbook: "/projects/freaks/video/freaks-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/freaks-landing",
			preview: "http://freaksofnature.lucadevelop.com/",
		},
		{
			id: 6,
			title: "The Box",
			text: p("the-box"),
			img: {
				svg: "/projects/the-box/img/the-box.svg",
				jpg: "/projects/the-box/img/the-box.jpg",
			},
			stack: "HTML , JavaScript, SASS, React",
			git: "https://github.com/lucadumitru/the-box",
			preview: "https://the-box.lucadevelop.com/",
		},
		{
			id: 7,
			title: "Portfolio",
			text: p("portfolio"),
			img: {
				svg: "/projects/portfolio/img/portfolio.svg",
				jpg: "/projects/portfolio/img/portfolio.jpg",
			},
			video: {
				preview: "/projects/portfolio/video/portfolio-preview.mov",
				// macbook: "/projects/portfolio/video/portfolio-preview.mov",
			},
			stack: "HTML , JavaScript, TS, React, Tailwind, Next, Next-Intl",
			git: "https://github.com/lucadumitru/portfolio",
			preview: "https://lucadevelop.com/",
		},
		{
			id: 8,
			title: "Rick and Morty",
			text: "In course...",
			img: {
				svg: "/projects/rickandmorty/img/rickandmorty.svg",
				jpg: "/projects/rickandmorty/img/rickandmorty.jpg",
			},
			video: {
				// preview: "/projects/portfolio/video/portfolio-preview.mov",
				// macbook: "/projects/portfolio/video/portfolio-preview.mov",
			},
			stack: "HTML , JavaScript, TS, React, Tailwind, Next, API, SWR, Eslint",
			git: "https://github.com/lucadumitru/rickandmorty",
			preview: "https://rickandmorty.lucadevelop.com/",
		},
	];
};
export default useProjects;
