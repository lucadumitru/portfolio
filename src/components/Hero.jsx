"use client";

import { Title, Container } from ".";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<section id="home" className="scroll-mt-[200px]">
			<Container className="flex flex-col items-center justify-center justify-between gap-[10px] sm:flex-row">
				<div className="min-h-[200px] w-full  sm:min-h-[340px] md:w-[750px]">
					<Title
						className=" text-[30px] font-bold md:text-left md:text-[40px] lg:text-[55px]"
						tag="h1"
					>
						Hi 👋, My name is <br></br>
						<span className="bg-gradient-to-r from-cyan-500  to-fuchsia-500 bg-clip-text text-transparent">
							Luca Dumitru
						</span>{" "}
						<br />I build{" "}
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"things for web",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"responsive websites",
								1000,
								"interactive web apps",
								1000,
								"user-friendly interfaces",
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
						className="rounded-full p-2"
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
