import { Hero, Stack, Projects, Contact } from "@/components/sections";

import type { Person } from "schema-dts";

const jsonLd: Person = {
	"@type": "Person",
	name: "Dumitru Luca",
	jobTitle: "Frontend Developer",
	image: "/profile_2.jpg",
	url: "https://www.lucadevelop.com",
	email: "luca.dumitru25@icloud.com",
	gender: "Male",
	sameAs: [
		"https://www.linkedin.com/in/dumitru-luca-4a91821ba/",
		"https://github.com/lucadumitru",
		"https://t.me/dumitruluca",
		"https://www.instagram.com/dumitru_luca25/",
	],
	brand: "Lucadevelop",
	address: {
		"@type": "PostalAddress",
		addressRegion: "AN",
		addressLocality: "Seville",
		addressCountry: "Spain",
		postalCode: "41009",
	},
};

const Home = () => {
	return (
		<main className="mt-[70px] flex flex-col gap-[50px] md:gap-[150px]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Hero></Hero>
			<Stack></Stack>
			<Projects></Projects>
			<Contact></Contact>
		</main>
	);
};

export default Home;
