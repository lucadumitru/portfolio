"use client";

import { useTranslations } from "next-intl";
import Container from "./Container";

const Contact = () => {
	const t = useTranslations("contact");
	return (
		<section id="contact" className="mb-[50px] mt-[50px] text-center md:mb-[100px] md:mt-[80px]">
			<Container>
				<h2 className="text-lg font-semibold text-textSecondary dark:text-white md:text-5xl ">
					{t("cta")}{" "}
				</h2>
				<a
					className="relative mt-1 inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 md:mt-3 md:text-3xl"
					href="mailto:luca.dumitru25@icloud.com"
				>
					luca.dumitru25@icloud.com
				</a>
			</Container>
		</section>
	);
};
export default Contact;
