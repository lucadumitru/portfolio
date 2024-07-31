'use client';

import { Container } from '@/components/ui';
import Image from 'next/image';

export const Contact = () => {
	return (
		<section
			id="contact"
			className="relative z-10 -mt-1 flex flex-col justify-center bg-white py-[100px] text-center dark:bg-bgDark md:py-[100px]"
		>
			<Container>
				<h2 className="flex flex-col-reverse items-center gap-4 text-[26px] font-semibold text-textSecondary dark:text-white md:flex-row md:text-5xl ">
					Want to create something?
					<Image
						unoptimized
						src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
						alt="Rocket"
						width="25"
						height="25"
						className="h-10 w-10"
					/>
				</h2>
				<a
					tabIndex={0}
					className="relative mt-1 inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 md:mt-3 md:text-3xl"
					href="mailto:luca.dumitru25@icloud.com"
				>
					luca.dumitru25@icloud.com
				</a>
			</Container>
		</section>
	);
};
