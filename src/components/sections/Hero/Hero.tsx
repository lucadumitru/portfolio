import { Container, ScrollDownBtn } from "@/components/ui";
import Image from "next/image";
import { HeroTitle } from "./components/HeroTitle";

const heroImg = "/profile_2.jpg";

export const Hero = () => {
	return (
		<section id="home" className="screen short:py-0 flex min-h-[calc(100vh-70px)] py-[40px]">
			<Container className="flex min-h-full w-full flex-col justify-between">
				<div className="flex grow flex-col gap-2 md:grid md:grid-cols-2 md:items-center">
					<div className="min-h-[170px]">
						<HeroTitle />
					</div>
					<div className="flex justify-center">
						<div className="flex h-[370px] w-[370px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500">
							<Image
								priority
								className="h-[350px] w-[350px] shrink-0 rounded-full object-cover"
								width={350}
								height={350}
								src={heroImg}
								alt="Luca Dumitru profile img"
							></Image>
						</div>
					</div>
				</div>
				<div className="mt-4 flex items-center justify-center">
					<ScrollDownBtn className="inline animate-bounce text-center"></ScrollDownBtn>
				</div>
			</Container>
		</section>
	);
};
