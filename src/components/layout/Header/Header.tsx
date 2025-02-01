'use client';

import { motion, useScroll } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import React from 'react';

import { LogoLink } from '@/components/common';
import { Container } from '@/components/ui';
import { MenuContext } from '@/src/contexts/MenuContext';

import { NavLinks, ResumeBtn, ThemeSwitcher } from './components';

interface HeaderProps {
	children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
	const { isOpen, toggleIsOpen } = React.useContext(MenuContext);
	const { scrollYProgress } = useScroll();

	const onClick = () => {
		toggleIsOpen(!isOpen);
		document.documentElement.classList.toggle('overflow-y-hidden');
	};

	return (
		<header
			className='border-lightGray/15 dark:bg-bgDark fixed z-50 w-full border-b-[0.125rem] bg-white'
			role='banner'
		>
			<Container className='flex min-h-[4.5rem] items-center justify-between gap-3 py-3 md:py-4'>
				<LogoLink className='relative z-10' />
				<>
					<NavLinks />
					<ResumeBtn className='hidden md:block' />
				</>
				<div className='flex items-center gap-5'>
					{children}
					<ThemeSwitcher className='relative text-yellow-500 transition-all hover:rotate-45 dark:text-white' />

					<div className='md:hidden'>
						<Hamburger label='menu button' toggle={onClick} toggled={isOpen} />
					</div>
				</div>
			</Container>
			<motion.div
				style={{
					scaleX: scrollYProgress,
				}}
				className='absolute right-0 -bottom-0.5 left-0 z-10 h-0.5 origin-left bg-linear-to-r from-cyan-500 to-fuchsia-500'
				id='scroll-indicator'
			/>
		</header>
	);
};
