import Image from 'next/image';
import { Link, LiveLink, CodeLink } from '@/components/ui';

import { m } from 'framer-motion';
import { fadeInAnimationVariants } from '@/utils';

import type { Article } from 'schema-dts';

interface CardProps {
	project: Project;
	index: number;
}

export const Card: React.FC<CardProps> = ({ project, index }) => {
	const jsonLd: Article = {
		'@type': 'Article',
		name: project.title,
		description: project.description,
		image: project.img?.svg,
		url: `https://lucadevelop.com`,
		keywords: project.stack,
		about: {
			'@type': 'Project',
			name: project.title,
			description: project.description,
			image: project.img?.svg,
			url: `https://lucadevelop.com/projects/${project.slug}`,
		},
		articleBody: project.description,
		inLanguage: 'en',
	};

	return (
		<m.article
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			custom={index}
			className="shadow-custom relative flex flex-col overflow-hidden rounded-[20px] bg-white shadow-card dark:bg-[#363636]"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<a
				className="overflow-hidden"
				aria-label={project.title + ' link'}
				href={`/projects/${project.slug}`}
			>
				{!project.video || !project.video.preview ? (
					<Image
						className="max-h-[200px] min-w-full object-cover transition hover:scale-105 "
						width="200"
						height="200"
						src={project.img?.svg || ''}
						alt={project.title + ' img'}
						style={{ width: 'auto', height: 'auto' }}
					></Image>
				) : (
					<video
						autoPlay
						className="max-h-[200px] w-full object-cover transition hover:scale-105"
						loop
						playsInline
						muted
						preload="auto"
					>
						<source src={project.video.preview} />
						<track kind="captions"></track>
					</video>
				)}
			</a>
			<div className="flex grow flex-col items-start p-[25px]">
				<h3 className="text-[20px] font-medium dark:text-[#CCCCCC] md:text-[28px]">
					<Link href={`/projects/${project.slug}`}>{project.title}</Link>
				</h3>
				<p className="mt-[15px] line-clamp-4 grow text-[16px] font-light text-[gray] dark:text-[#CCCCCC]">
					{project.description}
				</p>
				<div className="mt-[12px] text-textSecondary dark:text-[#CCCCCC]">
					Tech stack: <span className="line-clamp-2 font-light">{project.stack}</span>
				</div>
				<div className="mt-[12px] flex w-full items-center justify-between gap-x-3 text-[14px] dark:text-white md:mt-[20px]">
					{project.preview && <LiveLink href={project.preview}></LiveLink>}
					<CodeLink href={project.git}></CodeLink>
				</div>
			</div>
		</m.article>
	);
};
