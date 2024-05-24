import { MetadataRoute } from "next";
import { projects } from "@/data/data";

export default function sitemap(): MetadataRoute.Sitemap {
	const generatedUrls = projects.map((project) => ({
		url: `https://lucadevelop.com/projects/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as "monthly",
		priority: 0.8,
	}));
	return [
		{
			url: "https://lucadevelop.com",
			lastModified: new Date(),
			changeFrequency: "monthly" as "monthly",
			priority: 1,
		},
		...generatedUrls,
	];
}
