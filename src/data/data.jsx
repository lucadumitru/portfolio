import { useTranslations } from "next-intl";

export const technologies = [
	{ name: "html", icon: "/icons/stack/html.svg" },
	{ name: "css", icon: "/icons/stack/css.svg" },
	{ name: "js", icon: "/icons/stack/js.svg" },
	{ name: "react", icon: "/icons/stack/react.svg" },
	{ name: "next", icon: "/icons/stack/next.webp" },
	{ name: "tailwind", icon: "/icons/stack/tailwind.svg" },
	{ name: "sass", icon: "/icons/stack/sass.svg" },
	{ name: "vs-code", icon: "/icons/stack/vscode.svg" },
	{ name: "figma", icon: "/icons/stack/figma.png" },
	{ name: "git-hub", icon: "/icons/stack/git-hub.svg", iconDark: "/icons/stack/git-white.svg" },
];

export function useProjects() {
	const p = useTranslations("projects");
	return [
		{
			id: 1,
			title: "Portfolio",
			text: p("portfolio"),
			img: "/projects/portfolio/img/portfolio.svg",
			video: {
				preview: "/projects/portfolio/video/portfolio-preview.mov",
				// macbook: "/projects/portfolio/video/portfolio-preview.mov",
			},
			stack: "HTML , JavaScript, TS, React, Tailwind, Next, Next-Intl",
			git: "https://github.com/lucadumitru/portfolio",
			preview: "https://lucadevelop.com/",
		},
		{
			id: 2,
			title: "The Box",
			text: p("the-box"),
			img: "/projects/the-box/img/the-box.svg",
			stack: "HTML , JavaScript, SASS, React",
			git: "https://github.com/lucadumitru/the-box",
			preview: "https://the-box.lucadevelop.com/",
		},
		{
			id: 3,
			title: "Freaks of Nature",
			text: p("freaks"),
			img: "/projects/freaks/img/freaks.svg",
			video: {
				preview: "/projects/freaks/video/freaks-preview.mov",
				macbook: "/projects/freaks/video/freaks-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/freaks-landing",
			preview: "http://freaksofnature.lucadevelop.com/",
		},
		{
			id: 4,
			title: "Quickfit",
			text: p("quickfit"),
			img: "/projects/quickfit/img/quickfit.svg",
			video: {
				macbook: "/projects/quickfit/video/quickfit-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS, Spline",
			git: "http://github.https://github.com/lucadumitru/quickfitcom",
			preview: "http://quickfit.lucadevelop.com/",
		},
		{
			id: 5,
			title: "NFT Marketplace",
			text: p("nft"),
			img: "/projects/nft/img/nft.svg",
			video: {
				macbook: "/projects/quickfit/video/quickfit-hero.mp4",
			},
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/nft-marketplace",
			preview: "http://nft.lucadevelop.com/",
		},
		{
			id: 6,
			title: "Funiro",
			text: p("funiro"),
			img: "/projects/funiro/img/funiro.svg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/funiro",
			preview: "http://funiro.lucadevelop.com/",
		},
		{
			id: 7,
			title: "FarmVest",
			text: p("funiro"),
			img: "/projects/farmvest/img/farmvest.svg",
			stack: "HTML , JavaScript, SASS",
			git: "https://github.com/lucadumitru/farm-vest",
			preview: "http://farm-vest.lucadevelop.com/",
		},
	];
}
