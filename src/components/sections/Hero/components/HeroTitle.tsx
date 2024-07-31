import { Title } from '@/components/ui';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroTitle = () => {
	return (
		<Title className="text-[28px] font-bold md:text-left md:text-[40px] lg:text-[55px]" tag="h1">
			Hi{' '}
			<Image
				className="inline h-10 w-10 md:h-14 md:w-14"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
				alt="Waving Hand"
				width="25"
				height="25"
			/>
			, My name is <br />
			<strong className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
				Luca Dumitru
			</strong>
			<br />I build{' '}
			<TypeAnimation
				className="will-change-content"
				sequence={[
					'things for web',
					1000,
					'responsive websites',
					1000,
					'interactive web apps',
					1000,
					'user-friendly interfaces',
					1000,
				]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
			/>
		</Title>
	);
};
