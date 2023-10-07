"use client";

import { useState, useEffect } from "react";
import { Container, NavLinks, Socials, Logo, ThemeSwitcher } from ".";

//Ui
import { Fade as Hamburger } from "hamburger-react";
import LocaleSwitcher from "./ui/LocaleSwitcher";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		const html = document.querySelector("html");
		isOpen ? html.classList.add("lock") : html.classList.remove("lock");
	}, [isOpen]);

	return (
		<header className="fixed z-10  w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]">
				<Logo></Logo>
				<NavLinks {...{ isOpen, setOpen }}></NavLinks>
				<div className="flex items-center gap-5">
					<Socials></Socials>
					<ThemeSwitcher></ThemeSwitcher>
					<LocaleSwitcher className="hidden md:block"></LocaleSwitcher>
					<div className="md:hidden">
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
