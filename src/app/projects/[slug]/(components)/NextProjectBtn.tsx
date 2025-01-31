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

export const NextProjectBtn: React.FC<NextProjectBtnProps> = ({
	nextProjectImg,
	nextProjectSlug,
	nextProjectTitle,
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		offset: ['0 1', '1.5 1'],
		target: ref,
	});
	const bottomToTop = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<div className='relative max-h-[18.75rem] overflow-hidden border-b-[0.125rem] border-lightGray/15 text-center'>
			<Link
				href={`/projects/${nextProjectSlug}`}
				ref={ref}
				className='group inline-flex w-[70%] flex-col items-center'
			>
				<span className='text-gray'>Next project</span>
				<span className='-mb-5 mt-2 text-3xl font-semibold text-textSecondary transition group-hover:opacity-30 dark:text-white md:-mb-10 md:mt-5 md:text-8xl'>
					{nextProjectTitle}
				</span>
				<motion.div
					style={{
						top: bottomToTop,
					}}
					className='relative'
				>
					<Image
						alt={`${nextProjectTitle} img`}
						className='mx-auto translate-y-10 rounded-xl transition group-hover:translate-y-2 md:translate-y-16'
						height={200}
						src={nextProjectImg}
						width={300}
						priority
					/>
				</motion.div>
			</Link>
		</div>
	);
};
