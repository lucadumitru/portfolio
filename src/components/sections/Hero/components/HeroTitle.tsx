import { Title } from "@/components/ui";
import { TypeAnimation } from "react-type-animation";

export const HeroTitle = () => {
	return (
		<Title className=" text-[28px] font-bold md:text-left md:text-[40px] lg:text-[55px]" tag="h1">
			Hi 👋, My name is <br></br>
			<span className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
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
	);
};
