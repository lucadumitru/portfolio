import type { Article } from 'schema-dts';

import Image from 'next/image';
import Link from 'next/link';

import { GitIcon, LinkIcon } from './icons';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	blurredImage?: string;
	project: Project;
}

export const Card = ({ blurredImage, project, ...props }: CardProps) => {
	const jsonLd: Article = {
		'@type': 'Article',
		about: {
			'@type': 'Project',
			description: project.description,
			image: project.img?.svg,
			name: project.title,
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
		articleBody: project.description,
		description: project.description,
		image: project.img?.svg,
		inLanguage: 'en',
		keywords: project.stack,
		name: project.title,
		url: `https://lucadevelop.com`,
	};

	return (
		<article
			{...props}
			className='relative flex flex-col rounded-2xl bg-white shadow-card will-change-transform dark:bg-[#363636]'
		>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type='application/ld+json'
			/>
			<Link
				aria-label={`${project.title} link'`}
				className='overflow-hidden rounded-t-2xl'
				href={`/projects/${project.slug}`}
			>
				{project?.video?.preview ? (
					<video
						autoPlay
						className='aspect-video max-h-[12.5rem] w-full object-cover transition hover:scale-105'
						loop
						muted
						playsInline
						preload='auto'
					>
						<source src={project.video.preview} />
						<track kind='captions' />
					</video>
				) : (
					<Image
						alt={`${project.title} img'`}
						blurDataURL={blurredImage}
						className='aspect-video max-h-[12.5rem] min-w-full object-cover transition hover:scale-105'
						height={200}
						placeholder='blur'
						src={project.img.svg || project.img.jpg}
						width={200}
					/>
				)}
			</Link>
			<div className='flex grow flex-col items-start gap-3 p-6'>
				<h3 className='text-xl font-medium dark:text-lightGray md:text-2xl'>
					<Link className='hover:underline' href={`/projects/${project.slug}`}>
						{project.title}
					</Link>
				</h3>
				<p className='line-clamp-4 grow font-light dark:text-lightGray'>
					{project.description}
				</p>
				<div className='text-textSecondary dark:text-lightGray'>
					Tech stack: <span className='line-clamp-2 font-light'>{project.stack}</span>
				</div>
				<div className='mt-1 flex w-full items-center justify-between gap-x-3 text-sm'>
					{project.preview && (
						<Link className='flex items-center gap-2 hover:underline' href={project.preview}>
							<LinkIcon className='size-5' />
							Live Preview
						</Link>
					)}
					{project.git && (
						<Link className='flex items-center gap-2 hover:underline' href={project.git}>
							<GitIcon className='size-5' />
							View Code
						</Link>
					)}
				</div>
			</div>
		</article>
	);
};
