import { Hero, Stack, Projects, Contact } from "./../../components";

export const metadata = {
	title: "Lucadevelop",
	description: "Luca Dumitru's portfolio web page",
	keywords:
		"lucadevelop, portfolio, javascript, developer, front-end developer, react, nextjs, html, css, tailwind",
	openGraph: {
		images: "/hero-img.jpg",
		description: "Luca Dumitru's portfolio web page",
		title: "Lucadevelop",
		type: "website",
	},
};

export default function Home() {
	return (
		<main className="flex flex-col gap-[50px] md:gap-[150px]">
			<Hero></Hero>
			<Stack></Stack>
			<Projects></Projects>
			<Contact></Contact>
		</main>
	);
}
