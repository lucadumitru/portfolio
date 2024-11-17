'use client';

import { ThemedImg } from '@/components/ui';
import { fadeInAnimationVariants } from '@/src/lib/animations';
import { domAnimation, LazyMotion, m } from 'framer-motion';

interface StackItemsProps {
	technologies: Technology[];
}

export const StackItems = ({ technologies }: StackItemsProps) => {
	return (
		<LazyMotion features={domAnimation}>
			<ul className="mt-[25px] grid min-h-[280px] grid-cols-4 items-center gap-[25px] md:mt-[80px] md:grid-cols-5 md:gap-[40px] xl:mt-[120px]">
				{technologies.map((el, index) => (
					<m.li
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						<ThemedImg
							className="justify-self-center"
							width={120}
							height={120}
							srcDark={el.iconDark ?? ''}
							srcLight={el.icon}
							alt={el.name + ' icon'}
						/>
					</m.li>
				))}
			</ul>
		</LazyMotion>
	);
};
