import Link from 'next/link';

import { LogoLink, Socials } from '@/components/common';
import { Container } from '@/components/ui';
import { dmSans } from '@/src/assets/fonts/fonts';

export const Footer = () => {
	return (
		<footer className='z-5 relative pt-5' role='contentinfo'>
			<Container
				className={`flex items-center gap-2 ${dmSans.className} justify-center gap-2 py-4 font-medium text-textSecondary md:justify-between`}
			>
				<LogoLink className='hidden md:block' />
				<Socials />
			</Container>
			<div className='h-0.5 w-full bg-lightGray/15' />
			<Container className='flex flex-wrap justify-center gap-x-1 py-4 text-gray md:justify-between'>
				<div>
					Designed by{' '}
					<Link
						href='https://www.figma.com/file/UD0kJT0EqQMk2wzxgwrYPo/Developer-Portfolio-Design-(Community)-(Copy)?type=design&node-id=0-1&mode=design&t=7Rmo8zH6QAL3CWkU-0'
						className='bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent'
						target='_blank'
					>
						PavanMG
					</Link>
				</div>
				<div className='text-center'>
					Built by{' '}
					<span className='bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent'>
						Luca Dumitru{' '}
					</span>
					<span>
						with <span className='text-fuchsia-600'>Love</span> and{' '}
						<span className='text-fuchsia-800'>Coffee</span>
					</span>
				</div>
			</Container>
		</footer>
	);
};
