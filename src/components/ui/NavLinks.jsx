"use client";

import { dmSans } from "./../../../src/app/[locale]/layout";
import Link from "./Link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

const NavLinks = ({ isOpen, setOpen }) => {
	const t = useTranslations("nav");
	const links = [
		{
			name: t("home"),
			href: "#home",
		},
		{
			name: t("about"),
			href: "#about",
		},
		{
			name: t("stack"),
			href: "#tech",
		},
		{
			name: t("projects"),
			href: "#projects",
		},
		{
			name: t("contact"),
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
				className={`fixed top-0 h-full w-full bg-white  before:fixed before:top-0 before:h-[76px] before:w-full before:border-b-[2px] before:border-solid before:border-gray/30 before:bg-white before:content-[''] dark:bg-bgDark dark:before:bg-bgDark md:relative md:left-0 md:bg-transparent md:before:hidden ${
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
				{isOpen && <LocaleSwitcher></LocaleSwitcher>}
			</div>
		</nav>
	);
};

export default NavLinks;
