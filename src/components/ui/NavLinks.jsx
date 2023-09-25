"use client";

import { dmSans } from "@/app/layout";
import Link from "./Link";

const NavLinks = ({ isOpen, setOpen, data }) => {
	const links = [
		{
			name: "Home",
			href: "#home",
		},
		{
			name: "About",
			href: "#about",
		},
		{
			name: "Tech Stack",
			href: "#tech",
		},
		{
			name: "Projects",
			href: "#projects",
		},
		{
			name: "Contact",
			href: "#contact",
		},
	];
	const handleMenu = () => {
		if (isOpen) {
			setOpen(!isOpen);
		}
	};
	return (
		<nav>
			<div
				className={`dark:before:bg-bgDark dark:bg-bgDark fixed top-0 h-full  w-full bg-white before:fixed before:top-0 before:h-[76px] before:w-full before:border-b-[2px] before:border-solid before:border-gray/30 before:bg-white before:content-[''] md:relative md:left-0 md:bg-transparent md:before:hidden ${
					dmSans.className
				} ${
					!isOpen
						? "left-[-100%] before:left-[-100%]"
						: "left-0 overflow-scroll p-[30px] pt-[110px] text-center transition-[left] before:left-0 before:transition-[left]"
				}`}
			>
				<ul className=" flex flex-col gap-x-[10px] gap-y-[20px] md:flex-row md:flex-wrap md:gap-x-[40px]  md:gap-y-[0px] lg:gap-x-[60px] ">
					{links.map((link, index) => (
						<li key={index}>
							<Link
								className={`dark:text-white ${isOpen && "text-[25px]"}`}
								onClick={handleMenu}
								href={link.href}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavLinks;
