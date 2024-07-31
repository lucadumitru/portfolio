import { Link } from '.';

export const ScrollDownBtn = ({ className }: { className?: string }) => {
	return (
		<Link
			className={className}
			href="#stack"
			imgWidth={40}
			imgHeight={40}
			img="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
			alt="Scroll down icon"
		/>
	);
};
