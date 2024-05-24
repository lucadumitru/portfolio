import { useState } from "react";

import { Container, NavLinks, LogoLink, ThemeSwitcher, BackBtn, ResumeBtn } from "@/components/ui";
import { Socials } from "@/components/common";
import { usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
	const projectPath = pathname.includes("/projects/");

	const onClick = () => {
		setOpen(!isOpen);
		document.body.classList.toggle("overflow-hidden");
	};

	return (
		<header className="fixed z-50 w-full bg-white dark:bg-bgDark">
			<Container className="mx-auto flex items-center justify-between gap-3 py-[10px] md:py-[15px]">
				{!projectPath ? <LogoLink className="relative z-10" /> : <BackBtn></BackBtn>}
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
							<Hamburger label="menu button" toggled={isOpen} toggle={onClick} />
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};
