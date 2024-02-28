"use client";

import { Title, Container, ScrollDownBtn } from "@/components/ui";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
	return (
		<section id="home" className="mt-[-50px] min-h-screen">
			<Container className="h-screen min-h-[700px] ">
				<div className="flex h-full flex-col items-center justify-around pt-[120px] md:justify-center">
					<div className="flex w-full flex-col  items-center justify-center gap-[10px] sm:flex-row md:grow md:justify-between ">
						<div className="flex min-h-[300px] w-full grow items-start pt-[50px] md:w-[750px] md:items-center">
							<Title
								className=" text-[28px] font-bold md:text-left md:text-[40px] lg:text-[55px]"
								tag="h1"
							>
								Hi 👋, My name is <br></br>
								<span className="bg-gradient-to-r from-cyan-500  to-fuchsia-500 bg-clip-text text-transparent">
									<strong>Luca Dumitru</strong>
								</span>{" "}
								<br />I build{" "}
								<TypeAnimation
									sequence={[
										"things for web",
										1000,
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
						<div className="shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500  md:mt-0 ">
							<Image
								className="h-[230px] w-[230px] rounded-full object-cover p-2  sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]"
								width={350}
								height={350}
								src="/profile-1000.jpg"
								alt="Hero img"
							></Image>
						</div>
					</div>
					<ScrollDownBtn className="mt-5 hidden animate-bounce md:flex"></ScrollDownBtn>
				</div>
			</Container>
		</section>
	);
};
