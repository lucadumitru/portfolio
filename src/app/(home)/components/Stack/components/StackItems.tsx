'use client';

import { motion } from 'framer-motion';

import type { TechnologiesResponseDTO } from '@/src/notion-sdk/dbs/technologies/response.dto';

import { ThemedImg } from '@/src/components/common';
import { fadeInAnimationVariants } from '@/src/lib/constants/animations';
import { getFileUrl } from '@/src/lib/utils';

interface StackItemsProps {
	technologies: TechnologiesResponseDTO[];
}

export const StackItems = ({ technologies }: StackItemsProps) => {
	return (
		<motion.ul className='mt-6 grid min-h-[23.125rem] grid-cols-3 items-center gap-2 md:mt-20 md:grid-cols-5 md:gap-10 xl:mt-[7.5rem]'>
			{technologies.map((technology, index) => (
				<motion.li
					key={technology.id}
					className='will-change-transform [&:nth-of-type(10n-1)]:hidden md:[&:nth-of-type(10n-1)]:block'
					initial='initial'
					variants={fadeInAnimationVariants}
					whileInView='animate'
					custom={index}
					viewport={{
						once: true,
					}}
				>
					<ThemedImg
						alt={`${technology.properties.__data.name} icon`}
						className='w-20 justify-self-center md:w-[7.5rem]'
						height={120}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						src={getFileUrl(technology.properties.__data.image.files || '')}
						srcDark={getFileUrl(technology.properties.__data.darkThemeImage.files)}
						width={120}
					/>
				</motion.li>
			))}
		</motion.ul>
	);
};
