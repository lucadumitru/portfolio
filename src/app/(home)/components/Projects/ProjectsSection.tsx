import React from 'react';

import { Container, Typography } from '@/components/ui';

import { Projects } from './Projects';

export const ProjectsSection = () => {
	return (
		<Container as='section' className='flex flex-col pb-[6.25rem]'>
			<Typography
				className='scroll-mt-20 text-center'
				id='projects'
				tag='h2'
				variant='section-title'
				data-section-title
			>
				Projects
			</Typography>
			<Typography className='mt-3 text-center md:mt-8' variant='subtitle'>
				Things I’ve built so far
			</Typography>
			<Projects />
		</Container>
	);
};
