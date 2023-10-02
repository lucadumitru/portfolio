import { Hero, Stack, Projects } from "./../../components";

export const metadata = {
	title: "Luca Dumitru | Front End Developer",
	description: "Luca Dumitru's portfolio web page",
	keywords:
		"portfolio, javascript, developer, front-end developer, react, nextjs, html, css, tailwind",
};

export default function Home() {
	return (
		//pt-[110px] md:pt-[200px]
		<main className="">
			<Hero></Hero>
			<Stack></Stack>
			<Projects></Projects>
		</main>
	);
}
