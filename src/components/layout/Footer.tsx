import Link from 'next/link';

import { Socials } from '@/components/common';
import { Container, LogoLink } from '@/components/ui';
import { dmSans } from '@/src/app/fonts';

export const Footer = () => {
	return (
		<footer className='z-5 relative'>
			<Container className='pt-5'>
				<div
					className={`flex items-center gap-2 ${dmSans.className} justify-center gap-2 border-b-[0.125rem] border-solid border-gray/30 pb-7 pt-7 font-medium text-textSecondary md:justify-between`}
				>
					<LogoLink className='hidden md:block' />
					<Socials />
				</div>
				<div className='flex flex-wrap justify-center gap-x-1 py-4 pr-2 text-gray md:justify-between md:py-7'>
					<div>
						Designed by{' '}
						<Link
							className='bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent'
							href='https://www.figma.com/file/UD0kJT0EqQMk2wzxgwrYPo/Developer-Portfolio-Design-(Community)-(Copy)?type=design&node-id=0-1&mode=design&t=7Rmo8zH6QAL3CWkU-0'
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
				</div>
			</Container>
		</footer>
	);
};
