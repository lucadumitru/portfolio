import type { MetadataRoute } from 'next';

import { getProjects } from '@/src/lib/api/data';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const projects = await getProjects();

	const generatedUrls = projects.map((project) => ({
		url: `https://lucadevelop.com/projects/${project.properties.__data.slug.rich_text[0].plain_text}`,
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
};

export default sitemap;
