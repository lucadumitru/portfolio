import { Container, Typography } from '@/components/ui';
import { technologies } from '@/src/data/data';

import { StackItems } from './components/StackItems';

export const StackSection = () => {
	return (
		<Container as='section' className='md:scroll-mt-[150px]'>
			<Typography
				className='scroll-mt-20 text-center'
				id='stack'
				tag='h2'
				variant='section-title'
				data-section-title
			>
				My Tech Stack
			</Typography>
			<Typography className='mt-3 text-center md:mt-8' variant='subtitle'>
				Technologies I’ve been working with recently
			</Typography>
			<StackItems technologies={technologies} />
		</Container>
	);
};
