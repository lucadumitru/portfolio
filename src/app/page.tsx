import type { Person } from 'schema-dts';

import React from 'react';

import { HeroSection, ProjectsSection, StackSection } from '@/components/sections';

export const revalidate = 3600; // 1 hour

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

const HomePage = () => {
	return (
		<main className='flex flex-col gap-[3.125rem] pt-[4.375rem] md:gap-[9.375rem]' role='main'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HeroSection />
			<StackSection />
			<ProjectsSection />
		</main>
	);
};

export default HomePage;
