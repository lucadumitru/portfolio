/* eslint-disable perfectionist/sort-objects */
import type { MetadataRoute } from 'next';
import { projects } from '@/src/data/data';

export default function sitemap(): MetadataRoute.Sitemap {
	const generatedUrls = projects.map((project) => ({
		url: `https://lucadevelop.com/projects/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.8,
	}));
	return [
		{
			url: 'https://lucadevelop.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		...generatedUrls,
	];
}
