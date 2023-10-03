"use client";

import { Title, Container } from ".";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	const t = useTranslations("hero");
	return (
		<section id="home" className="min-h-screen ">
			<Container className="flex h-full h-screen min-h-[700px] flex-col items-center justify-center gap-[10px] sm:flex-row md:justify-between ">
				<div className="min-h-[300px] w-full md:w-[750px]">
					<Title
						className=" text-[32px] font-bold md:text-left md:text-[40px] lg:text-[55px]"
						tag="h1"
					>
						{t("title1")} <br></br>
						<span className="bg-gradient-to-r from-cyan-500  to-fuchsia-500 bg-clip-text text-transparent">
							{t("name")}
						</span>{" "}
						<br />
						{t("title2")}{" "}
						<TypeAnimation
							sequence={[
								t("sequence1"),
								1000,
								t("sequence2"),
								1000,
								t("sequence3"),
								1000,
								t("sequence4"),
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</Title>
				</div>
				<div className="shrink-0 rounded-full bg-gradient-to-r from-cyan-500  to-fuchsia-500">
					<Image
						className="h-[250px] w-[250px] rounded-full object-cover p-2 sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]"
						width={350}
						height={350}
						src="/hero-img.jpg"
						alt="Hero img"
					></Image>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
