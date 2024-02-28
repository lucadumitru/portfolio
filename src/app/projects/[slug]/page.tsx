import { Metadata } from "next";
import { Project } from "@/components/sections";
import { projects } from "@/data/data";

interface ProjectPageProps {
	params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const project = projects.find((project) => project.slug === params.slug) as Project;
	return {
		title: `${project.title} - Luca Dumitru's web project`,
		description: `${project.description}`,
		keywords: `${project.stack}`,
		openGraph: {
			images: `${project.img?.jpg || ""}`,
			description: `${project.description}`,
			title: `${project.title} - Luca Dumitru's web project`,
			type: "website",
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
	};
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
	const currentProject = projects.find((project) => project.slug === params.slug) as Project;
	const nextProject = projects[+currentProject.id - 2] as Project;
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: `${currentProject.title}`,
		description: `${currentProject.description}`,
		url: `https://lucadevelop.com/projects/${currentProject.slug}`,
		author: {
			"@type": "Person",
			name: "Luca Dumitru",
			url: "https://lucadevelop.com",
		},
		keywords: `${currentProject.stack}`,
	};
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Project project={currentProject} nextProject={nextProject}></Project>
		</div>
	);
};
export default ProjectPage;
