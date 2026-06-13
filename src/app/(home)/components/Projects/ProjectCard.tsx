'use client';

import type { HTMLMotionProps } from 'framer-motion';
import type { Article } from 'schema-dts';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ProjectsResponseDTO } from '@/src/notion-sdk/dbs/projects';

import { GitIcon, LinkIcon } from '@/src/components/ui/icons';
import { fadeInAnimationVariants } from '@/src/lib/constants';
import { getFileUrl } from '@/src/lib/utils';

interface ProjectCardProps extends HTMLMotionProps<'article'> {
	imagePlaceholder?: string;
	index: number;
	project: ProjectsResponseDTO;
}

export const ProjectCard = ({ imagePlaceholder, index, project, ...props }: ProjectCardProps) => {
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
		<motion.article
			{...props}
			className='shadow-card relative flex w-full flex-col rounded-2xl bg-white will-change-transform dark:bg-[#363636]'
			initial='initial'
			transition={{ delay: index * 0.3 }}
			variants={fadeInAnimationVariants}
			viewport={{ once: true }}
			whileInView='animate'
		>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type='application/ld+json'
			/>

			<Link
				prefetch
				aria-label={`${project.properties.__data.title.title[0].plain_text} link'`}
				className='overflow-hidden rounded-t-2xl'
				href={`/projects/${project.properties.__data.slug.rich_text[0].plain_text}`}
			>
				{!!project?.properties.__data.videPreview.files.length ? (
					<video
						autoPlay
						loop
						muted
						playsInline
						className='aspect-video max-h-[12.5rem] w-full object-cover transition hover:scale-105'
						poster={imagePlaceholder}
						preload='metadata'
					>
						<source
							src={getFileUrl(project.properties.__data.videPreview.files)}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				) : (
					<Image
						priority
						alt={`${project.properties.__data.title.title[0].plain_text} img'`}
						blurDataURL={imagePlaceholder}
						className='aspect-video max-h-[12.5rem] min-w-full object-cover transition hover:scale-105'
						height={200}
						placeholder={imagePlaceholder ? 'blur' : 'empty'}
						src={getFileUrl(project.properties.__data.mainImage.files)}
						width={200}
					/>
				)}
			</Link>
			<div className='flex grow flex-col items-start gap-3 p-6'>
				<h3 className='dark:text-lightGray text-xl font-medium md:text-2xl'>
					<Link
						className='hover:underline'
						href={`/projects/${project.properties.__data.slug.rich_text[0].plain_text}`}
					>
						{project.properties.__data.title.title[0].plain_text}
					</Link>
				</h3>
				<p className='dark:text-lightGray line-clamp-4 grow font-light'>
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
							className='flex items-center gap-2 hover:underline'
							href={project.properties.__data.previewLink.url}
						>
							<LinkIcon className='size-5' />
							Live Preview
						</Link>
					)}
					{project.properties.__data.gitLink.url && (
						<Link
							className='flex items-center gap-2 hover:underline'
							href={project.properties.__data.gitLink.url}
						>
							<GitIcon className='size-5' />
							View Code
						</Link>
					)}
				</div>
			</div>
		</motion.article>
	);
};
