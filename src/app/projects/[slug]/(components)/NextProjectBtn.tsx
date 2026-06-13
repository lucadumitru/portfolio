'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

interface NextProjectBtnProps {
	nextProjectImg: string;
	nextProjectSlug: string;
	nextProjectTitle: string;
}

export const NextProjectBtn = ({
	nextProjectImg,
	nextProjectSlug,
	nextProjectTitle,
}: NextProjectBtnProps) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		offset: ['0 1', '1.5 1'],
		target: ref,
	});
	const bottomToTop = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<div className='border-lightGray/15 relative max-h-[18.75rem] overflow-hidden border-b-[0.125rem] text-center'>
			<Link
				ref={ref}
				className='group inline-flex w-[70%] flex-col items-center'
				href={`/projects/${nextProjectSlug}`}
			>
				<span className='text-gray'>Next project</span>
				<span className='text-textSecondary mt-2 -mb-5 text-3xl font-semibold transition group-hover:opacity-30 md:mt-5 md:-mb-10 md:text-8xl dark:text-white'>
					{nextProjectTitle}
				</span>
				<motion.div
					style={{
						top: bottomToTop,
					}}
					className='relative'
				>
					<Image
						priority
						alt={`${nextProjectTitle} img`}
						className='mx-auto translate-y-10 rounded-xl transition group-hover:translate-y-2 md:translate-y-16'
						height={200}
						src={nextProjectImg}
						width={300}
					/>
				</motion.div>
			</Link>
		</div>
	);
};
