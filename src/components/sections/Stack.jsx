import { Container, Title, ThemedImg } from "@/components/ui";
import { technologies } from "../../data/data";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../animations/animations";

export const Stack = () => {
	return (
		<section id="stack" className="scroll-mt-[80px] overflow-hidden md:scroll-mt-[120px]">
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					My Tech Stack
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					Technologies I’ve been working with recently
				</div>
				<ul className="mt-[25px] grid min-h-[280px] grid-cols-4 items-center  gap-[25px]  md:mt-[80px] md:grid-cols-5 md:gap-[40px] xl:mt-[120px]">
					{technologies.map((el, index) => (
						<motion.li
							key={index}
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{
								once: true,
							}}
							custom={index}
						>
							<ThemedImg
								className="justify-self-center"
								width={120}
								height={120}
								srcDark={el.iconDark}
								srcLight={el.icon}
								alt={el.name + " icon"}
							></ThemedImg>
						</motion.li>
					))}
				</ul>
			</Container>
		</section>
	);
};
