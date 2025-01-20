'use client';

import { motion } from 'framer-motion';

import { ThemedImg } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';

interface StackItemsProps {
	technologies: Technology[];
}

export const StackItems = ({ technologies }: StackItemsProps) => {
	return (
		<motion.ul className='mt-6 grid min-h-[23.125rem] grid-cols-3 items-center gap-2 md:mt-20 md:grid-cols-5 md:gap-10 xl:mt-[7.5rem]'>
			{technologies.map((technology, index) => (
				<motion.li
					className='will-change-transform [&:nth-of-type(10n-1)]:hidden md:[&:nth-of-type(10n-1)]:block'
					custom={index}
					initial='initial'
					key={technology.name}
					variants={fadeInAnimationVariants}
					viewport={{
						once: true,
					}}
					whileInView='animate'
				>
					<ThemedImg
						alt={`${technology.name} icon`}
						className='w-20 justify-self-center md:w-[7.5rem]'
						height={120}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						srcDark={technology.iconDark ?? ''}
						srcLight={technology.icon}
						width={120}
					/>
				</motion.li>
			))}
		</motion.ul>
	);
};
