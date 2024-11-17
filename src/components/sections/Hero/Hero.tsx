import { HeroTitle } from './components/HeroTitle';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import heroImg from '@/public/profile-small.webp';

export const Hero = () => {
	return (
		<section
			id="home"
			className="flex min-h-[calc(100dvh-70px)] scroll-m-[40px] flex-col short:py-[40px]"
		>
			<div className="mx-auto my-0 flex w-full max-w-[1200px] grow flex-col gap-2 px-[15px] md:grid md:grid-cols-2 md:items-center">
				<div className="min-h-[170px]">
					<HeroTitle />
				</div>
				<div className="flex justify-center md:justify-end">
					<div className="flex h-[370px] w-[370px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500">
						<Image
							placeholder="blur"
							className="h-[350px] w-[350px] shrink-0 rounded-full object-cover "
							src={heroImg}
							alt="Luca Dumitru profile img"
						/>
					</div>
				</div>
			</div>
			<div className="mx-auto">
				<Link
					className="mt-4 hidden items-center justify-center short:inline-flex"
					href="#stack"
				>
					<Image
						unoptimized
						width={40}
						height={40}
						alt="Scroll down icon"
						src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
					/>
				</Link>
			</div>
		</section>
	);
};
