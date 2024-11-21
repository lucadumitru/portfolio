'use client';

import { Fade as Hamburger } from 'hamburger-react';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BackBtn, Container, LogoLink, NavLinks, ResumeBtn, ThemeSwitcher } from '@/components/ui';

interface HeaderProps {
	children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();

	const isHomePage = pathname === '/';

	const onClick = () => {
		setOpen(!isOpen);
		document.body.classList.toggle('overflow-hidden');
	};

	return (
		<header className='fixed z-50 w-full bg-white dark:bg-bgDark'>
			<Container className='mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]'>
				{isHomePage ? <LogoLink className='relative z-10' /> : <BackBtn />}
				{isHomePage && (
					<>
						<NavLinks {...{ isOpen, setOpen }} />
						<div className='hidden md:block'>
							<ResumeBtn />
						</div>
					</>
				)}
				<div className='flex items-center gap-5'>
					{children}
					<ThemeSwitcher />
					{isHomePage && (
						<div className='md:hidden'>
							<Hamburger label='menu button' toggle={onClick} toggled={isOpen} />
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};
