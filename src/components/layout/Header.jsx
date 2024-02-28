"use client";

import { useState } from "react";

import { Container, NavLinks, Logo, ThemeSwitcher, BackBtn, ResumeBtn } from "@/components/ui";
import { Socials } from "@/components/common";
import { usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	const projectPath = pathname.includes("/projects/");
	return (
		<header className="fixed z-50 w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]">
				{!projectPath ? <Logo></Logo> : <BackBtn></BackBtn>}
				{!projectPath && (
					<>
						<NavLinks {...{ isOpen, setOpen }}></NavLinks>
						<div className="hidden md:block">
							<ResumeBtn></ResumeBtn>
						</div>
					</>
				)}
				<div className="flex items-center gap-5">
					<Socials className="hidden md:flex"></Socials>
					<ThemeSwitcher></ThemeSwitcher>
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
