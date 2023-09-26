"use client";

import { Container, Title, useDarkMode } from ".";
import { useTranslations } from "next-intl";
import { technologies } from "./../data/data";
import Image from "next/image";

const Stack = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const t = useTranslations("stack");
	return (
		<section
			id="#stack"
			className="mdscroll-mt-[120px] mt-[50px] scroll-mt-[80px]  md:mt-[200px]"
		>
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					{t("title")}
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					{t("subtitle")}
				</div>
				<div className="mt-[25px] grid grid-cols-4 items-center  gap-[25px] md:mt-[80px] md:grid-cols-5 md:gap-[40px] xl:mt-[120px]">
					{technologies.map((el, index) => (
						<Image
							key={index}
							className="justify-self-center"
							width={120}
							height={120}
							src={isDarkMode === "dark" && el.iconDark ? el.iconDark : el.icon}
							alt={el.name + "icon"}
						></Image>
					))}
				</div>
			</Container>
		</section>
	);
};
export default Stack;
