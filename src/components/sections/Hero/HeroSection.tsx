import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import heroImg from '@/public/profile.webp';

import { HeroTitle } from './components/HeroTitle';

export const HeroSection = () => {
	return (
		<section
			className='flex min-h-[calc(100dvh-4.5rem)] snap-center scroll-mt-20 flex-col short:py-[40px]'
			id='home'
			data-section-title
		>
			<div className='mx-auto my-0 flex w-full max-w-[1200px] grow flex-col gap-2 px-[15px] md:grid md:grid-cols-2 md:items-center'>
				<div className='min-h-[170px]'>
					<HeroTitle />
				</div>
				<div className='flex justify-center md:justify-end'>
					<div className='flex h-[370px] w-[370px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500'>
						<Image
							alt='Luca Dumitru profile img'
							className='h-[350px] w-[350px] shrink-0 rounded-full object-cover'
							src={heroImg}
							placeholder='blur'
						/>
					</div>
				</div>
			</div>
			<div className='mx-auto'>
				<Link
					href='#stack'
					className='mt-4 hidden items-center justify-center short:inline-flex'
				>
					<Image
						alt='Scroll down icon'
						height={40}
						src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png'
						width={40}
						unoptimized
					/>
				</Link>
			</div>
		</section>
	);
};
