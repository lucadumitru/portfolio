import { Hero, Stack, Projects, Contact } from "@/components/sections";

const Home = () => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Dumitru Luca",
		jobTitle: "Frontend Developer",
		image: "/public/profile-1000.jpg",
		url: "https://lucadevelop.com",
		email: "luca.dumitru25@gmail.com",
		gender: "Male",
		sameAs: [
			"https://www.linkedin.com/in/dumitru-luca-4a91821ba/",
			"https://github.com/lucadumitru",
			"https://t.me/dumitruluca",
			"https://www.instagram.com/dumitru_luca25/",
		],
		memberOf: {
			"@type": "Organization",
			name: "Lucadevelop",
			url: "https://lucadevelop.com",
		},
	};
	return (
		<main className="flex flex-col gap-[50px] md:gap-[150px]">
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