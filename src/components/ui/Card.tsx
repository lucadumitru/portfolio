import type { Article } from 'schema-dts';

import { motion } from 'framer-motion';
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
		<motion.article
			className='relative flex flex-col rounded-[20px] bg-white shadow-card will-change-transform dark:bg-[#363636]'
			initial='initial'
			variants={fadeInAnimationVariants}
			whileInView='animate'
			transition={{ delay: index * 0.3 }}
			viewport={{ once: true }}
		>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Link
				href={`/projects/${project.slug}`}
				aria-label={`${project.title} link'`}
				className='overflow-hidden rounded-t-[20px]'
			>
				{!project.video || !project.video.preview ? (
					<Image
						alt={`${project.title} img'`}
						blurDataURL={blurredImage}
						className='aspect-video max-h-[200px] min-w-full object-cover transition hover:scale-105'
						height={200}
						src={project.img.svg}
						width={200}
						placeholder='blur'
					/>
				) : (
					<video
						muted
						playsInline
						className='aspect-video max-h-[200px] w-full object-cover transition hover:scale-105'
						autoPlay
						loop
						preload='auto'
					>
						<source src={project.video.preview} />
						<track kind='captions' />
					</video>
				)}
			</Link>
			<div className='flex grow flex-col items-start p-[25px]'>
				<h3 className='text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]'>
					<Link href={`/projects/${project.slug}`} className='hover:underline'>
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
					{project.git && <CodeLink href={project.git} />}
				</div>
			</div>
		</motion.article>
	);
};
