import { Metadata } from "next";
import { Project } from "@/components/sections";
import { projects } from "@/data/data";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const project = projects.find((project) => project.slug === params.slug) as Project;

	if (!project) {
		return {
			title: "404 - Page not found",
		};
	}

	return {
		title: `${project.title} - Luca Dumitru's web project`,
		description: `${project.description}`,
		keywords: [
			`${project.stack}`,
			`${project.title}`,
			"lucadevelop",
			"portfolio",
			"projects",
			"nextjs",
			"reactjs",
		],
		openGraph: {
			images: `${project.img?.jpg || ""}`,
			description: `${project.description}`,
			title: `${project.title} - Luca Dumitru's web project`,
			type: "website",
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
		alternates: {
			canonical: `/projects/${project.slug}`,
		},
	};
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
	const currentProject = projects.find((project) => project.slug === params.slug) as Project;
	const nextProject = currentProject && (projects[+currentProject.id - 2] as Project);

	if (!currentProject) {
		return notFound();
	}

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
