'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui';
import { rocketLaunchAnimationVariants } from '@/src/lib/constants';

export const Cta = () => {
	return (
		<section className='relative z-10 flex flex-col justify-center bg-white py-[6.25rem] text-center dark:bg-bgDark'>
			<Container>
				<h2
					className='flex flex-col-reverse items-center gap-4 text-2xl font-semibold text-textSecondary dark:text-white md:scroll-mt-20 md:flex-row md:text-5xl'
					id='contact'
					data-section-title
				>
					Want to create something?
					<motion.div
						variants={rocketLaunchAnimationVariants}
						whileInView={'animate'}
						viewport={{ once: true }}
					>
						<Image
							alt='Rocket'
							className='size-10'
							height='25'
							src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png'
							width='25'
							unoptimized
						/>
					</motion.div>
				</h2>
				<Link
					href='mailto:contact@lucadevelop.com'
					className='relative inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-xl font-semibold text-transparent before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 md:mt-3 md:text-4xl'
				>
					contact@lucadevelop.com
				</Link>
			</Container>
		</section>
	);
};
