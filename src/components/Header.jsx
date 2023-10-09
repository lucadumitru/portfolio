"use client";

import { useState, useEffect } from "react";
import { Container, NavLinks, Socials, Logo, ThemeSwitcher, Link } from ".";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

//Ui
import { Fade as Hamburger } from "hamburger-react";
import LocaleSwitcher from "./ui/LocaleSwitcher";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	const projectPath = pathname.includes("/projects/");
	const t = useTranslations("nav");
	useEffect(() => {
		const html = document.querySelector("html");
		isOpen ? html.classList.add("lock") : html.classList.remove("lock");
	}, [isOpen]);

	return (
		<header className="fixed z-50 w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]">
				{!projectPath ? <Logo></Logo> : <Link href="/">{t("back")}</Link>}
				<NavLinks {...{ isOpen, setOpen }}></NavLinks>
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
