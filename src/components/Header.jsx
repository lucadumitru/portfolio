"use client";

import { useState, useEffect } from "react";
import { Container, NavLinks, Socials, Logo, ThemeSwitcher, BackBtn, ResumeBtn } from ".";
import { usePathname } from "next/navigation";

import { Fade as Hamburger } from "hamburger-react";
import LocaleSwitcher from "./ui/LocaleSwitcher";

const Header = ({ locale }) => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	const projectPath = pathname.includes("/projects/");
	useEffect(() => {
		const html = document.querySelector("html");
		isOpen ? html.classList.add("lock") : html.classList.remove("lock");
	}, [isOpen]);
	return (
		<header className="fixed z-50 w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]">
				{!projectPath ? <Logo></Logo> : <BackBtn></BackBtn>}
				{!projectPath && (
					<>
						<NavLinks {...{ isOpen, setOpen }}></NavLinks>
						<div className="hidden md:block">
							<ResumeBtn locale={locale}></ResumeBtn>
						</div>
					</>
				)}
				<div className="flex items-center gap-5">
					<Socials className="hidden md:flex"></Socials>
					<ThemeSwitcher></ThemeSwitcher>
					<LocaleSwitcher></LocaleSwitcher>
					{!projectPath && (
						<div className="md:hidden">
							<Hamburger toggled={isOpen} toggle={setOpen} />
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
