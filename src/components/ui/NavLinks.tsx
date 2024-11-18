'use client';

import Link from 'next/link';
import { ResumeBtn } from '@/components/ui';
import { dmSans } from '@/src/app/fonts';
import { Socials } from '../common';

interface NavLinksProps {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
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

export const NavLinks: React.FC<NavLinksProps> = ({ isOpen, setOpen }) => {
	return (
		<nav className="flex items-center md:gap-x-[50px]">
			<div
				className={`fixed top-0 h-full w-full bg-white transition-[left] before:fixed before:top-0 before:z-20 before:h-[76px] before:w-full before:border-b-[2px] before:border-solid before:border-gray/30 before:bg-white before:transition-[left] before:content-[''] dark:bg-bgDark dark:before:bg-bgDark md:relative md:left-0 md:bg-transparent md:before:hidden ${
					dmSans.className
				} ${
					!isOpen
						? 'left-[-100%] before:left-[-100%]'
						: 'left-0 overflow-scroll p-[30px] pt-[110px] text-center before:left-0 '
				}`}
			>
				<ul
					itemScope
					className=" inline-flex flex-col gap-x-[10px] gap-y-[20px] md:flex-row md:flex-wrap md:gap-x-[30px]  md:gap-y-[0px] "
					itemType="https://schema.org/SiteNavigationElement"
				>
					{navLinks.map((navLink) => (
						<li key={navLink.href}>
							<Link
								className={`hover:underline dark:text-white ${isOpen && 'text-[25px]'}`}
								href={navLink.href}
								itemProp="url"
								onClick={() => setOpen((prev) => prev === true && false)}
							>
								{navLink.name}
							</Link>
						</li>
					))}
				</ul>
				{isOpen && (
					<div className="mt-5 flex flex-col items-center gap-7">
						<ResumeBtn />
						<Socials />
					</div>
				)}
			</div>
		</nav>
	);
};
