'use client';

import Link from 'next/link';
import React from 'react';

import { ResumeBtn } from '@/components/ui';
import { dmSans } from '@/src/app/fonts';
import { MenuContext } from '@/src/contexts/MenuContext';
import { cn } from '@/src/lib/utils';

import { Socials } from '../common';

const navLinks = [
	{
		href: '#home',
		name: 'Home',
	},
	{
		href: '#stack',
		name: 'Stack',
	},
	{
		href: '#projects',
		name: 'Projects',
	},
	{
		href: '#contact',
		name: 'Contact',
	},
];

export const NavLinks = () => {
	const { isOpen, toggleIsOpen } = React.useContext(MenuContext);
	const [activeSection, setActiveSection] = React.useState('');

	React.useEffect(() => {
		const sectionsTitles = document.querySelectorAll('[data-section-title]');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 1 },
		);

		sectionsTitles.forEach((sectionTitle) => observer.observe(sectionTitle));

		return () => {
			observer.disconnect();
		};
	}, []);

	const onClick = () => {
		if (isOpen) {
			toggleIsOpen(!isOpen);
		}

		document.documentElement.classList.remove('overflow-y-hidden');
	};

	return (
		<nav className='flex items-center md:min-w-[18.75rem] md:gap-x-12' role='navigation'>
			<div
				className={`fixed top-0 h-full w-full bg-white transition-[left] before:fixed before:top-0 before:z-20 before:h-[4.62rem] before:w-full before:border-b-[0.125rem] before:border-solid before:border-lightGray/15 before:bg-white before:transition-[left] before:content-[''] dark:bg-bgDark dark:before:bg-bgDark md:relative md:left-0 md:bg-transparent md:before:hidden ${
					dmSans.className
				} ${
					!isOpen
						? 'left-[-100%] before:left-[-100%]'
						: 'left-0 overflow-scroll p-7 pt-[6.875rem] text-center before:left-0'
				}`}
			>
				<ul
					className='flex flex-col justify-between gap-x-3 gap-y-5 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-0'
					itemScope
					itemType='https://schema.org/SiteNavigationElement'
				>
					{navLinks.map((navLink) => (
						<li key={navLink.href}>
							<Link
								aria-label={`${navLink.name} link`}
								className={cn(
									'relative block transition-all hover:underline dark:text-white',
									isOpen && 'text-2xl',
									navLink.name.toLowerCase() === activeSection &&
										'scale-110 font-semibold text-textSecondary',
								)}
								href={navLink.href}
								itemProp='url'
								onClick={onClick}
							>
								{navLink.name}
							</Link>
						</li>
					))}
				</ul>
				{isOpen && (
					<div className='mt-5 flex flex-col items-center gap-7'>
						<ResumeBtn />
						<Socials />
					</div>
				)}
			</div>
		</nav>
	);
};
