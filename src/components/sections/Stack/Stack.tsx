import { Container, Title } from '@/components/ui';
import { technologies } from '@/src/data/data';

import { StackItems } from './components/StackItems';

export const Stack = () => {
	return (
		<section className='md:scroll-mt-[150px]'>
			<Container>
				<Title
					className='scroll-mt-20 text-center text-[24px] font-bold md:text-[48px]'
					data-section-title
					id='stack'
					tag='h2'
				>
					My Tech Stack
				</Title>
				<div className='mt-3 text-center text-[1.125rem] text-gray md:mt-8 md:text-[2rem]'>
					Technologies I’ve been working with recently
				</div>
				<StackItems technologies={technologies} />
			</Container>
		</section>
	);
};
