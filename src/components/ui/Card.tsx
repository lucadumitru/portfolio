import type { Article } from 'schema-dts';
import { m } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import { CodeLink, LiveLink } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';

interface CardProps {
	blurredImage?: string;
	index: number;
	project: Project;
}

export const Card = ({ blurredImage, index, project }: CardProps) => {
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
		<m.article
			viewport={{
				once: true,
			}}
			className='relative flex flex-col rounded-[20px] bg-white shadow-card will-change-transform dark:bg-[#363636]'
			custom={index}
			initial='initial'
			variants={fadeInAnimationVariants}
			whileInView='animate'
		>
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type='application/ld+json'
			/>
			<Link
				aria-label={`${project.title} link'`}
				className='overflow-hidden rounded-t-[20px]'
				href={`/projects/${project.slug}`}
			>
				{!project.video || !project.video.preview ? (
					<Image
						alt={`${project.title} img'`}
						blurDataURL={blurredImage}
						className='max-h-[200px] min-w-full object-cover transition hover:scale-105'
						height={200}
						placeholder='blur'
						src={project.img.svg}
						width={200}
					/>
				) : (
					<video
						autoPlay
						loop
						muted
						playsInline
						className='max-h-[200px] w-full object-cover transition hover:scale-105'
						preload='auto'
					>
						<source src={project.video.preview} />
						<track kind='captions' />
					</video>
				)}
			</Link>
			<div className='flex grow flex-col items-start p-[25px]'>
				<h3 className='text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]'>
					<Link className='hover:underline' href={`/projects/${project.slug}`}>
						{project.title}
					</Link>
				</h3>
				<p className='mt-[15px] line-clamp-4 grow text-[16px] font-light text-black dark:text-[#CCCCCC]'>
					{project.description}
				</p>
				<div className='mt-[12px] text-textSecondary dark:text-[#CCCCCC]'>
					Tech stack: <span className='line-clamp-2 font-light'>{project.stack}</span>
				</div>
				<div className='mt-[12px] flex w-full items-center justify-between gap-x-3 text-[14px] dark:text-white md:mt-[20px]'>
					{project.preview && <LiveLink href={project.preview} />}
					<CodeLink href={project.git} />
				</div>
			</div>
		</m.article>
	);
};
