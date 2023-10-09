import { Hero, Stack, Projects, Contact } from "./../../components";

export const metadata = {
	title: "Dumitru Luca  • Front End Developer",
	description: "Luca Dumitru's portfolio web page",
	keywords:
		"portfolio, javascript, developer, front-end developer, react, nextjs, html, css, tailwind",
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
