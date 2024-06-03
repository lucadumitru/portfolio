import { Container, ScrollDownBtn } from '@/components/ui';
import { HeroTitle } from './components/HeroTitle';
import Image from 'next/image';
import React from 'react';

const heroImg = '/profile_2.jpg';

export const Hero: React.FC = () => {
	const [isImgLoaded, setIsImgLoaded] = React.useState(false);
	return (
		<section id="home" className="flex min-h-[calc(100dvh-70px)] scroll-m-[40px] short:py-[40px]">
			<Container className="flex min-h-full w-full flex-col justify-between">
				<div className="flex grow flex-col gap-2 md:grid md:grid-cols-2 md:items-center">
					<div className="min-h-[170px]">
						<HeroTitle />
					</div>
					<div className="flex justify-center md:justify-end">
						<div className="flex h-[370px] w-[370px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500">
							<Image
								priority
								className={`h-[350px] w-[350px] shrink-0 rounded-full object-cover transition ${
									isImgLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								width={350}
								height={350}
								src={heroImg}
								alt="Luca Dumitru profile img"
								onLoad={() => setIsImgLoaded(true)}
							/>
						</div>
					</div>
				</div>
				<div className="mt-4 hidden items-center justify-center short:flex">
					<ScrollDownBtn className="inline animate-bounce text-center"></ScrollDownBtn>
				</div>
			</Container>
		</section>
	);
};
