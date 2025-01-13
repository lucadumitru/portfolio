'use client';

import { motion } from 'framer-motion';

import { ThemedImg } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';

interface StackItemsProps {
	technologies: Technology[];
}

export const StackItems = ({ technologies }: StackItemsProps) => {
	return (
		<motion.ul className='mt-[25px] grid min-h-[370px] grid-cols-3 items-center gap-[25px] md:mt-[80px] md:grid-cols-5 md:gap-[40px] xl:mt-[120px]'>
			{technologies.map((technology, index) => (
				<motion.li
					key={technology.name}
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
						alt={`${technology.name} icon`}
						className='justify-self-center'
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
