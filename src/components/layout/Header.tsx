'use client';

import { motion, useScroll } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Container, LogoLink, NavLinks, ResumeBtn, ThemeSwitcher } from '@/components/ui';
import { dmSans } from '@/src/app/fonts';
import { MenuContext } from '@/src/contexts/MenuContext';

interface HeaderProps {
	children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
	const { isOpen, toggleIsOpen } = React.useContext(MenuContext);
	const { scrollYProgress } = useScroll();
	const pathname = usePathname();

	const isHomePage = pathname === '/';

	const onClick = () => {
		toggleIsOpen(!isOpen);
		document.documentElement.classList.toggle('overflow-y-hidden');
	};

	return (
		<header
			className='fixed z-50 w-full border-b-[0.125rem] border-lightGray/15 bg-white dark:bg-bgDark'
			role='banner'
		>
			<Container className='flex min-h-[4.5rem] items-center justify-between gap-3 py-3 md:py-4'>
				{isHomePage ? (
					<LogoLink className='relative z-10' />
				) : (
					<Link
						href={'/'}
						className={`flex items-center gap-2 hover:underline ${dmSans.className}`}
					>
						<Image
							alt='Back icon'
							height={30}
							src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left.png'
							width={30}
							priority
							unoptimized
						/>
						<span className='relative top-0.5 block'>Main Page</span>
					</Link>
				)}

				{isHomePage && (
					<>
						<NavLinks />
						<ResumeBtn className='hidden md:block' />
					</>
				)}

				<div className='flex items-center gap-5'>
					{children}
					<ThemeSwitcher className='relative text-yellow-500 transition-all hover:rotate-45 dark:text-white' />
					{isHomePage && (
						<div className='md:hidden'>
							<Hamburger label='menu button' toggle={onClick} toggled={isOpen} />
						</div>
					)}
				</div>
			</Container>
			<motion.div
				style={{
					scaleX: scrollYProgress,
				}}
				className='absolute -bottom-0.5 left-0 right-0 z-10 h-0.5 origin-left bg-gradient-to-r from-cyan-500 to-fuchsia-500'
				id='scroll-indicator'
			/>
		</header>
	);
};
