"use client";

import { useTranslations } from "next-intl";

import { Logo, Container, Link, Socials } from ".";
import { dmSans } from "../app/[locale]/fonts";

const Footer = () => {
	const t = useTranslations("footer");
	return (
		<footer className="z-5 relative mt-auto">
			<Container className="pt-[20px] md:pt-[100px]">
				{/* Top */}
				<div
					className={`flex items-center gap-2 ${dmSans.className} justify-center gap-2 border-b-[2px] border-solid border-gray/30 pb-7 pt-7 font-medium text-textSecondary md:justify-between`}
				>
					<Logo className="hidden md:block"></Logo>
					<Socials></Socials>
				</div>
				{/* Bottom */}
				<div className="flex flex-wrap justify-center gap-x-1 py-4 pr-2 text-gray md:justify-between  md:py-7">
					<div>
						{t("designed")}{" "}
						<a
							className="text-cyan-500 hover:underline"
							href="https://www.figma.com/file/UD0kJT0EqQMk2wzxgwrYPo/Developer-Portfolio-Design-(Community)-(Copy)?type=design&node-id=0-1&mode=design&t=7Rmo8zH6QAL3CWkU-0"
							target="_blank"
						>
							PavanMG
						</a>
					</div>
					<div className="text-center">
						{t("build")}{" "}
						<span className="bg-gradient-to-r from-cyan-500  to-fuchsia-500 bg-clip-text text-transparent">
							{t("name")}{" "}
						</span>
						<span>
							{t("with")} <span className="text-fuchsia-600">{t("love")}</span> {t("and")}{" "}
							<span className="text-fuchsia-800">{t("coffee")}</span>
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
