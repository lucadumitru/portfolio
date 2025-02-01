import type { Metadata } from 'next';
import type { Article } from 'schema-dts';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { buttonVariantsCVA, Container } from '@/components/ui';
import { NotionRichText } from '@/src/components/common';
import { GitIcon, LinkIcon } from '@/src/components/ui/icons';
import { getNextProject, getProject, getProjects } from '@/src/lib/api/data';
import { cn, getFileUrl, getImage } from '@/src/lib/utils';

import { NextProjectBtn } from './(components)';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // 1 hour

export const dynamicParams = true;

export const generateStaticParams = async () => {
	const projects = await getProjects();

	return projects.map((project) => ({
		slug: project.properties.__data.slug.rich_text[0].plain_text,
	}));
};

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const project = await getProject(slug);

	if (!project) {
		return {
			title: '404 - Page not found',
		};
	}

	return {
		title: `${project.properties.__data.title.title[0].plain_text} - Luca Dumitru's web project`,
		description: `${project.description}`,
		keywords: [
			`${project.properties.__data.stack.rich_text[0].plain_text}`,
			`${project.properties.__data.title.title[0].plain_text}`,
			'lucadevelop',
			'portfolio',
			'projects',
			'nextjs',
			'reactjs',
		],
		openGraph: {
			images: getFileUrl(project.properties.__data.mainImage.files),
			description: project.properties.__data.description.rich_text[0].plain_text,
			title: `${project.properties.__data.title.title[0].plain_text} - Luca Dumitru's web project`,
			type: 'website',
			url: `https://lucadevelop.com/projects/${project.properties.__data.slug.rich_text[0].plain_text}`,
		},
		alternates: {
			canonical: `/projects/${project.properties.__data.slug.rich_text[0].plain_text}`,
		},
	};
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;

	const project = await getProject(slug);
	const nextProject = await getNextProject(project.createdTime);

	const { base64, img: mainImage } = await getImage(
		getFileUrl(project.properties.__data.mainImage.files),
	);

	if (!project) {
		return notFound();
	}

	const jsonLd: Article = {
		'@type': 'Article',
		about: {
			'@type': 'Project',
			description: project.properties.__data.description.rich_text[0].plain_text,
			image: getFileUrl(project.properties.__data.mainImage.files),
			name: project.properties.__data.title.title[0].plain_text,
			url: `https://lucadevelop.com/projects/${project.properties.__data.slug.rich_text[0].plain_text}`,
		},
		description: project.properties.__data.description.rich_text[0].plain_text,
		image: getFileUrl(project.properties.__data.mainImage.files),
		inLanguage: 'en',
		keywords: project.properties.__data.stack.rich_text[0].plain_text,
		name: project.properties.__data.title.title[0].plain_text,
		url: `https://lucadevelop.com/projects/${project.properties.__data.slug.rich_text[0].plain_text}`,
		datePublished: project.createdTime,
		author: {
			'@type': 'Person',
			name: 'Luca Dumitru',
		},
	};

	return (
		<main className='pt-[110px]'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Container className='flex flex-col items-center'>
				<section className='max-w-4xl'>
					<h1 className='text-textSecondary text-center text-3xl font-bold md:text-6xl dark:text-white'>
						{project.properties.__data.title.title[0].plain_text}
					</h1>
					{project.properties.__data.stack && (
						<div className='text-textSecondary mt-10 text-center text-xl font-semibold md:text-xl dark:text-white'>
							{project.properties.__data.stack.rich_text[0].plain_text}
						</div>
					)}
					<p className='text-gray mt-3 text-justify md:mt-10'>
						{project.properties.__data.description.rich_text[0].plain_text}
					</p>

					<div className='mt-10 flex justify-between gap-5'>
						{project.properties.__data.previewLink.url && (
							<Link
								href={project.properties.__data.previewLink.url}
								className={cn(
									'mx-auto flex items-center gap-2',
									buttonVariantsCVA({ variant: 'primary', size: 'medium' }),
								)}
							>
								<LinkIcon className='size-5' />
								Live Preview
							</Link>
						)}
						{project.properties.__data.gitLink.url && (
							<Link
								href={project.properties.__data.gitLink.url}
								className={cn(
									'mx-auto flex items-center gap-2',
									buttonVariantsCVA({ variant: 'primary', size: 'medium' }),
								)}
							>
								<GitIcon className='size-5' />
								View Code
							</Link>
						)}
					</div>
				</section>
				<section className='mt-[5%] flex w-full flex-col gap-[50px] md:gap-[70px]'>
					<Link
						href={project.properties.__data.previewLink.url ?? ''}
						className='mx-auto overflow-hidden rounded-2xl'
					>
						<Image
							alt={`${project.properties.__data.title.title[0].plain_text} img`}
							blurDataURL={base64}
							height={700}
							src={mainImage.src}
							width={1000}
							placeholder={base64 ? 'blur' : 'empty'}
							priority
						/>
					</Link>

					{!!project.properties.__data.macPreview.files.length && (
						<div className='bg-macbook relative w-full bg-contain bg-no-repeat pb-[50%]'>
							<video
								muted
								playsInline
								className='absolute top-[3%] left-1/2 z-[-1] aspect-video w-[80.5%] -translate-x-2/4 rounded-md'
								autoPlay
								loop
								poster='https://res.cloudinary.com/dl13jfh2s/image/upload/v1738145581/loader_fxzfpw.gif'
								preload='auto'
							>
								<source
									src={getFileUrl(project.properties.__data.macPreview.files)}
									type='video/mp4'
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					)}
					{!!project.properties.__data.text.rich_text.length && (
						<NotionRichText
							className='text-gray'
							richText={project.properties.__data.text.rich_text}
						/>
					)}
					{nextProject && (
						<div className='relative my-6 flex flex-col justify-center md:my-10'>
							<NextProjectBtn
								nextProjectImg={getFileUrl(nextProject.properties.__data.mainImage.files)}
								nextProjectSlug={nextProject.properties.__data.slug.rich_text[0].plain_text}
								nextProjectTitle={nextProject.properties.__data.title.title[0].plain_text}
							/>
						</div>
					)}
				</section>
			</Container>
		</main>
	);
};
export default ProjectPage;
