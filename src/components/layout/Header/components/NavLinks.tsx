'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Socials } from '@/components/common';
import { dmSans } from '@/src/assets/fonts/fonts';
import { MenuContext } from '@/src/contexts/MenuContext';
import { cn } from '@/src/lib/utils';

import { ResumeBtn } from './ResumeBtn';

interface NavLink {
	href: string;
	name: string;
}

const navLinks: NavLink[] = [
	{
		href: '/about',
		name: 'About',
	},
];

export const NavLinks = () => {
	const { isOpen, toggleIsOpen } = React.useContext(MenuContext);
	const pathName = usePathname();
	const isHomePage = pathName === '/';
	const [sectionLinks, setSectionLinks] = React.useState<NavLink[]>([]);
	const [activeSection, setActiveSection] = React.useState('');

	React.useEffect(() => {
		if (!isHomePage) return;

		const sectionsTitles = document.querySelectorAll('[data-section-title]');
		if (!sectionsTitles) return;

		setSectionLinks(
			Array.from(sectionsTitles).map((sectionTitle) => ({
				href: `#${sectionTitle.id}`,
				name: sectionTitle.id,
			})),
		);

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
	}, [pathName]);

	const onClick = () => {
		if (isOpen) {
			toggleIsOpen(!isOpen);
		}

		document.documentElement.classList.remove('overflow-y-hidden');
	};

	return (
		<nav className='flex items-center md:min-w-[21rem] md:gap-x-12' role='navigation'>
			<div
				className={`before:border-lightGray/15 dark:bg-bgDark dark:before:bg-bgDark fixed top-0 h-full w-full bg-white transition-[left] before:fixed before:top-0 before:z-20 before:h-[4.62rem] before:w-full before:border-b-[0.125rem] before:border-solid before:bg-white before:transition-[left] before:content-[''] md:relative md:left-0 md:bg-transparent md:before:hidden ${
					dmSans.className
				} ${
					!isOpen
						? 'left-[-100%] before:left-[-100%]'
						: 'left-0 overflow-scroll p-7 pt-[6.875rem] text-center before:left-0'
				}`}
			>
				<ul
					className='flex flex-col justify-start gap-x-3 gap-y-5 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-0'
					itemType='https://schema.org/SiteNavigationElement'
					itemScope
				>
					{isHomePage &&
						sectionLinks.map((sectionLink) => (
							<li key={sectionLink.href}>
								<Link
									href={sectionLink.href}
									className={cn(
										'relative block transition-all hover:underline dark:text-white',
										isOpen && 'text-2xl',
										{
											'text-textSecondary scale-110':
												sectionLink.name.toLowerCase() === activeSection,
										},
									)}
									aria-label={`${sectionLink.name} link`}
									itemProp='url'
									onClick={onClick}
								>
									<span className='capitalize'>{sectionLink.name}</span>
								</Link>
							</li>
						))}
					{!isHomePage && (
						<li>
							<Link
								href={'/'}
								className={cn(
									'relative block transition-all hover:underline dark:text-white',
									isOpen && 'text-2xl',
								)}
								aria-label={`home page link`}
								itemProp='url'
								onClick={onClick}
							>
								Home
							</Link>
						</li>
					)}
					{navLinks.map((navLink) => (
						<li key={navLink.href}>
							<Link
								href={navLink.href}
								className={cn(
									'relative block transition-all hover:underline dark:text-white',
									isOpen && 'text-2xl',
								)}
								aria-label={`${navLink.name} link`}
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
