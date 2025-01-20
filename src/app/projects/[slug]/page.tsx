import type { Metadata } from 'next';
import type { Article } from 'schema-dts';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { buttonVariants, Container, NextProjectBtn } from '@/components/ui';
import { GitIcon, LinkIcon } from '@/src/components/ui/icons';
import { projects } from '@/src/data/data';
import { cn, getBase64 } from '@/src/lib/utils';

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
	return projects.map((project) => ({
		slug: project.slug,
	}));
};

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
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
};

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
		<main className='pt-[110px]'>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type='application/ld+json'
			/>
			<Container className='flex flex-col items-center'>
				<div className='max-w-4xl'>
					<h1 className='text-center text-3xl font-bold text-textSecondary dark:text-white md:text-6xl'>
						{currentProject.title}
					</h1>
					{currentProject.stack && (
						<div className='mt-10 text-center text-xl font-semibold text-textSecondary dark:text-white md:text-xl'>
							{currentProject.stack}
						</div>
					)}
					<p className='mt-3 text-justify text-gray md:mt-10'>{currentProject.description}</p>

					<div className='mt-10 flex justify-between gap-5'>
						{currentProject.preview && (
							<Link
								className={cn(
									'mx-auto flex items-center gap-2',
									buttonVariants({ variant: 'primary', size: 'medium' }),
								)}
								href={currentProject.preview}
							>
								<LinkIcon className='size-5' />
								Live Preview
							</Link>
						)}
						{currentProject.git && (
							<Link
								className={cn(
									'mx-auto flex items-center gap-2',
									buttonVariants({ variant: 'primary', size: 'medium' }),
								)}
								href={currentProject.git}
							>
								<GitIcon className='size-5' />
								View Code
							</Link>
						)}
					</div>
				</div>
				<div className='mt-[5%] flex w-full flex-col gap-[50px] md:gap-[70px]'>
					<Link
						className='mx-auto overflow-hidden rounded-2xl'
						href={currentProject?.preview ?? ''}
					>
						<Image
							alt={`${currentProject.title} img`}
							blurDataURL={blurredImage}
							height={700}
							placeholder='blur'
							priority
							src={currentProject.img.svg ?? currentProject.img.jpg}
							width={1000}
						/>
					</Link>
					{currentProject.video?.macbook && (
						<div className='relative w-full bg-macbook bg-contain bg-no-repeat pb-[50%]'>
							<video
								autoPlay
								className='absolute left-1/2 top-[3%] z-[-1] aspect-video w-[80%] -translate-x-2/4 rounded-md'
								loop
								muted
								playsInline
								preload='auto'
								src={currentProject.video.macbook}
							/>
						</div>
					)}
					{currentProject.keyfeatures && (
						<div className='space-y-5'>
							<div className='text-center text-2xl font-semibold'>Key features:</div>
							<ul className='flex list-inside list-disc flex-col gap-3'>
								{currentProject.keyfeatures.map((keyfeature, index) => (
									<li className='inline-block text-gray' key={index}>
										<span className='font-bold'>
											● {`${keyfeature.key ? `${keyfeature.key}:` : ''}`}{' '}
										</span>
										<p className='inline'>{keyfeature.description}</p>
									</li>
								))}
							</ul>
						</div>
					)}
					{currentProject.id !== 1 && (
						<div className='relative mb-[100px] mt-10 flex flex-col justify-center'>
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
