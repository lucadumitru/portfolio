import { dmSans } from '@/src/app/fonts';
import { Link } from '.';

interface BackBtnProps {
	href?: string;
}

export const BackBtn: React.FC<BackBtnProps> = ({ href = '/' }) => {
	return (
		<Link
			className={`flex items-center gap-2 ${dmSans.className}`}
			href={href}
			imgWidth={30}
			imgHeight={30}
			img="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left.png"
			alt="Scroll down icon"
		>
			Main Page
		</Link>
	);
};
