import { Hero, Stack, Projects, Contact } from '@/components/sections';
import type { Person } from 'schema-dts';
import { getBase64 } from './api/requests';

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
const heroImg = '/profile_2.jpg';

export const dynamic = 'force-dynamic';

const Home = async () => {
	const { base64 } = await getBase64(heroImg);

	return (
		<main className="mt-[70px] flex flex-col gap-[50px] md:gap-[150px]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Hero base64={base64} imgSrc={heroImg}></Hero>
			<Stack></Stack>
			<Projects></Projects>
			<Contact></Contact>
		</main>
	);
};

export default Home;
