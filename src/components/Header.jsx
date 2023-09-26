"use client";

import { useState, useEffect } from "react";
import { Container, NavLinks, Socials, Logo, useDarkMode } from ".";

//Ui
import { Fade as Hamburger } from "hamburger-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LocaleSwitcher from "./ui/LocaleSwitcher";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	useEffect(() => {
		const html = document.querySelector("html");
		isOpen ? html.classList.add("lock") : html.classList.remove("lock");
	}, [isOpen]);

	return (
		<header className="fixed z-10  w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-5 py-[10px] md:py-[15px]">
				<Logo></Logo>
				<div className="flex items-center md:gap-x-[50px]">
					<NavLinks {...{ isOpen, setOpen }}></NavLinks>
					<Socials></Socials>
				</div>
				<LocaleSwitcher className="hidden md:block"></LocaleSwitcher>
				<DarkModeSwitch checked={isDarkMode === "dark"} onChange={toggleDarkMode} size={30} />
				<div className="md:hidden">
					<Hamburger
						color={isDarkMode === "dark" ? "#fff" : "#000"}
						toggled={isOpen}
						toggle={setOpen}
					/>
				</div>
			</Container>
		</header>
	);
};

export default Header;
