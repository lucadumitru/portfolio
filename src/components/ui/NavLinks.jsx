"use client";

import { dmSans } from "../../app/[locale]/fonts";
import Link from "./Link";
import { useTranslations } from "next-intl";
import Socials from "./Socials";
import ResumeBtn from "./ResumeBtn";

const NavLinks = ({ isOpen, setOpen, locale }) => {
	const t = useTranslations("nav");
	const links = [
		{
			name: t("home"),
			href: "#home",
		},
		// {
		// 	name: t("about"),
		// 	href: "#about",
		// },
		{
			name: t("stack"),
			href: "#stack",
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
		<nav className="flex items-center md:gap-x-[50px]">
			<div
				className={`fixed top-0 h-full w-full bg-white  before:fixed before:top-0 before:z-20 before:h-[76px] before:w-full before:border-b-[2px] before:border-solid before:border-gray/30 before:bg-white before:content-[''] dark:bg-bgDark dark:before:bg-bgDark md:relative md:left-0 md:bg-transparent md:before:hidden ${
					dmSans.className
				} ${
					!isOpen
						? "left-[-100%] before:left-[-100%]"
						: "left-0 overflow-scroll p-[30px] pt-[110px] text-center transition-[left] before:left-0 before:transition-[left]"
				}`}
			>
				<ul className=" inline-flex flex-col gap-x-[10px] gap-y-[20px] md:flex-row md:flex-wrap md:gap-x-[30px]  md:gap-y-[0px] ">
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
				{isOpen && (
					<div className="mt-5 flex flex-col items-center gap-7">
						<ResumeBtn locale={locale}></ResumeBtn>
						<Socials></Socials>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavLinks;
