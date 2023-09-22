import { Title, Container } from '.';
import Image from 'next/image';

const Hero = () => {
	return (
		<section id='home' className='scroll-mt-[200px]'>
			<Container className='flex flex-col items-center justify-center justify-between gap-x-[20px] gap-y-[20px] md:flex-row'>
				<div className='max-w-[636px]'>
					<Title className='text-[30px] font-bold md:text-[40px] lg:text-[55px]' tag='h1'>
						Hi 👋, My name is <br></br>
						<span className='bg-gradient-to-r from-cyan-500  to-fuchsia-500 bg-clip-text text-transparent'>
							Luca Dumitru
						</span>{' '}
						I build things for web
					</Title>
				</div>
				<div className='shrink-0 rounded-full bg-gradient-to-r from-cyan-500  to-fuchsia-500'>
					<Image
						className='rounded-full p-2'
						width={350}
						height={350}
						src='/hero-img.jpg'
						alt='Hero img'
					></Image>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
