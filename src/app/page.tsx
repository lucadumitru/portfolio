import { Hero, Stack, Projects } from '@/components/sections';
import type { Person } from 'schema-dts';

const jsonLd: Person = {
	'@type': 'Person',
	name: 'Dumitru Luca',
	jobTitle: 'Frontend Developer',
	image: '/profile_2.jpg',
	url: 'https://lucadevelop.com',
	email: 'luca.dumitru25@icloud.com',
	gender: 'Male',
	sameAs: [
		'https://linkedin.com/in/dumitru-luca-4a91821ba/',
		'https://github.com/lucadumitru',
		'https://t.me/dumitruluca',
		'https://instagram.com/dumitru_luca25/',
	],
	brand: 'Lucadevelop',
	address: {
		'@type': 'PostalAddress',
		addressRegion: 'AN',
		addressLocality: 'Seville',
		addressCountry: 'Spain',
		postalCode: '41009',
	},
};

const Home = async () => {
	return (
		<main className="flex flex-col gap-[50px] pt-[70px] md:gap-[150px]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Hero />
			<Stack />
			<Projects />
		</main>
	);
};

export default Home;
