'use client';

import { dmSans } from '@/src/app/fonts';
import { Link, ResumeBtn } from '@/components/ui';
import { Socials } from '../common';

interface NavLinksProps {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const navLinks = [
	{
		name: 'Home',
		href: '#home',
	},
	{
		name: 'Stack',
		href: '#stack',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
	{
		name: 'Contact',
		href: '#contact',
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
					itemType="https://schema.org/SiteNavigationElement"
					className=" inline-flex flex-col gap-x-[10px] gap-y-[20px] md:flex-row md:flex-wrap md:gap-x-[30px]  md:gap-y-[0px] "
				>
					{navLinks.map((navLink, index) => (
						<li key={index}>
							<Link
								itemProp="url"
								className={`dark:text-white ${isOpen && 'text-[25px]'}`}
								onClick={() => setOpen((prev) => prev === true && false)}
								href={navLink.href}
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
