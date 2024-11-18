/* eslint-disable perfectionist/sort-objects */
import type { Metadata } from 'next';
import type { Article } from 'schema-dts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CodeLink, Container, LiveLink, NextProjectBtn } from '@/components/ui';
import { projects } from '@/src/data/data';
import { getBase64 } from '@/src/lib/getBase64';

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: '404 - Page not found',
		};
	}

	return {
		title: `${project.title} - Luca Dumitru's web project`,
		description: `${project.description}`,
		keywords: [
			`${project.stack}`,
			`${project.title}`,
			'lucadevelop',
			'portfolio',
			'projects',
			'nextjs',
			'reactjs',
		],
		openGraph: {
			images: `${project.img?.jpg || ''}`,
			description: `${project.description}`,
			title: `${project.title} - Luca Dumitru's web project`,
			type: 'website',
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
		alternates: {
			canonical: `/projects/${project.slug}`,
		},
	};
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;

	const currentProject: Project | undefined = projects.find((project) => project.slug === slug);
	const nextProject: Project | undefined = currentProject && projects[+currentProject.id - 2];

	if (!currentProject) {
		return notFound();
	}

	const blurredImage = await getBase64(currentProject?.img.jpg);

	const jsonLd: Article = {
		'@type': 'Article',
		name: currentProject.title,
		description: currentProject.description,
		image: currentProject.img?.svg,
		url: `https://lucadevelop.com/projects/${currentProject.slug}`,
		keywords: currentProject.stack,
		about: {
			'@type': 'Project',
			name: currentProject.title,
			description: currentProject.description,
			image: currentProject.img?.svg,
			url: `https://lucadevelop.com/projects/${currentProject.slug}`,
		},
		articleBody: currentProject.description,
		inLanguage: 'en',
	};

	return (
		<main className="pt-[110px]">
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type="application/ld+json"
			/>
			<Container className="flex flex-col items-center">
				<div>
					<h1 className="text-center text-3xl font-bold text-textSecondary dark:text-white md:text-6xl">
						{currentProject.title}
					</h1>
					<p className="mt-3 max-w-4xl text-center text-gray md:mt-10">
						{currentProject.description}
					</p>
					<div
						className={`mt-10 flex  gap-5 ${
							currentProject.preview ? 'justify-between' : 'justify-center'
						} `}
					>
						{currentProject.preview && (
							<LiveLink href={currentProject.preview} variant="button"></LiveLink>
						)}
						<CodeLink
							className="justify-self-center"
							href={currentProject.git}
							variant="button"
						/>
					</div>
				</div>
				<div className="mt-[5%] flex w-full flex-col gap-[50px] md:gap-[100px]">
					<Link
						className="mx-auto overflow-hidden rounded-2xl"
						href={currentProject?.preview ?? ''}
					>
						<Image
							priority
							alt={`${currentProject.title} img`}
							blurDataURL={blurredImage}
							height={700}
							placeholder="blur"
							src={currentProject.img.svg}
							width={1000}
						/>
					</Link>
					{currentProject.video && currentProject.video.macbook && (
						<div className="relative w-full bg-macbook bg-contain bg-no-repeat pb-[51%]">
							<video
								autoPlay
								loop
								muted
								playsInline
								className="absolute left-1/2 top-[2px] z-[-1] w-[75%]  -translate-x-2/4 rounded-t-[4%] "
								preload="auto"
								src={currentProject.video.macbook}
							/>
						</div>
					)}
					{currentProject.keyfeatures && (
						<>
							<div className="mb-3 text-center text-2xl font-semibold">Key features:</div>
							<ul className="flex list-inside list-disc flex-col gap-3">
								{currentProject.keyfeatures.map((keyfeature, index) => (
									<li key={index} className="inline-block text-gray">
										<span className="font-bold">
											● {`${keyfeature.key ? `${keyfeature.key}:` : ''}`}{' '}
										</span>
										<p className="inline">{keyfeature.description}</p>
									</li>
								))}
							</ul>
						</>
					)}
					{currentProject.id !== 1 && (
						<div className="relative mb-[100px] mt-10 flex flex-col justify-center">
							<NextProjectBtn
								nextProjectImg={nextProject?.img?.jpg ?? ''}
								nextProjectSlug={nextProject?.slug ?? ''}
								nextProjectTitle={nextProject?.title ?? ''}
							/>
						</div>
					)}
				</div>
			</Container>
		</main>
	);
};
export default ProjectPage;
