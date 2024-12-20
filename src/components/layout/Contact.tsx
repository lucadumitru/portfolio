import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';

export const Contact = () => {
	return (
		<section
			className='relative z-10 -mt-1 flex flex-col justify-center bg-white py-[100px] text-center dark:bg-bgDark md:py-[100px]'
			id='contact'
		>
			<Container>
				<h2 className='flex flex-col-reverse items-center gap-4 text-[26px] font-semibold text-textSecondary dark:text-white md:flex-row md:text-5xl'>
					Want to create something?
					<Image
						unoptimized
						alt='Rocket'
						className='h-10 w-10'
						height='25'
						src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png'
						width='25'
					/>
				</h2>
				<Link
					className='relative mt-1 inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 md:mt-3 md:text-3xl'
					href='mailto:luca.dumitru25@icloud.com'
					tabIndex={0}
				>
					luca.dumitru25@icloud.com
				</Link>
			</Container>
		</section>
	);
};
