'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ThemedImg } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';

interface StackItemsProps {
	technologies: Technology[];
}

export const StackItems = ({ technologies }: StackItemsProps) => {
	return (
		<LazyMotion features={domAnimation}>
			<ul className='mt-[25px] grid min-h-[280px] grid-cols-4 items-center gap-[25px] md:mt-[80px] md:grid-cols-5 md:gap-[40px] xl:mt-[120px]'>
				{technologies.map((technology, index) => (
					<m.li
						key={technology.name}
						viewport={{
							once: true,
						}}
						className='will-change-transform'
						custom={index}
						initial='initial'
						variants={fadeInAnimationVariants}
						whileInView='animate'
					>
						<ThemedImg
							alt={`${technology.name} icon`}
							className='justify-self-center'
							height={120}
							srcDark={technology.iconDark ?? ''}
							srcLight={technology.icon}
							width={120}
						/>
					</m.li>
				))}
			</ul>
		</LazyMotion>
	);
};
