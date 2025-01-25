import type { Article } from 'schema-dts';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { getFileUrl } from '@/src/lib/utils';

import { GitIcon, LinkIcon } from './icons';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	project: ProjectsResponseDTO;
}

export const Card = ({ project, ...props }: CardProps) => {
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
		<article
			{...props}
			className='relative flex flex-col rounded-2xl bg-white shadow-card will-change-transform dark:bg-[#363636]'
		>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<Link
				href={`/projects/${project.properties.__data.slug.rich_text[0].plain_text}`}
				prefetch
				aria-label={`${project.properties.__data.title.title[0].plain_text} link'`}
				className='overflow-hidden rounded-t-2xl'
			>
				{!!project?.properties.__data.videPreview.files.length ? (
					<video
						muted
						playsInline
						className='aspect-video max-h-[12.5rem] w-full object-cover transition hover:scale-105'
						autoPlay
						loop
						preload='auto'
					>
						<source src={getFileUrl(project.properties.__data.videPreview.files)} />
						<track kind='captions' />
					</video>
				) : (
					<Image
						alt={`${project.properties.__data.title.title[0].plain_text} img'`}
						className='aspect-video max-h-[12.5rem] min-w-full object-cover transition hover:scale-105'
						height={200}
						src={getFileUrl(project.properties.__data.mainImage.files)}
						width={200}
						priority
					/>
				)}
			</Link>
			<div className='flex grow flex-col items-start gap-3 p-6'>
				<h3 className='text-xl font-medium dark:text-lightGray md:text-2xl'>
					<Link
						href={`/projects/${project.properties.__data.slug.rich_text[0].plain_text}`}
						className='hover:underline'
					>
						{project.properties.__data.title.title[0].plain_text}
					</Link>
				</h3>
				<p className='line-clamp-4 grow font-light dark:text-lightGray'>
					{project.properties.__data.description.rich_text[0].plain_text}
				</p>
				<div className='text-textSecondary dark:text-lightGray'>
					Tech stack:{' '}
					<span className='line-clamp-2 font-light'>
						{project.properties.__data.stack.rich_text[0].plain_text}
					</span>
				</div>
				<div className='mt-1 flex w-full items-center justify-between gap-x-3 text-sm'>
					{project.properties.__data.previewLink.url && (
						<Link
							href={project.properties.__data.previewLink.url}
							className='flex items-center gap-2 hover:underline'
						>
							<LinkIcon className='size-5' />
							Live Preview
						</Link>
					)}
					{project.properties.__data.gitLink.url && (
						<Link
							href={project.properties.__data.gitLink.url}
							className='flex items-center gap-2 hover:underline'
						>
							<GitIcon className='size-5' />
							View Code
						</Link>
					)}
				</div>
			</div>
		</article>
	);
};
