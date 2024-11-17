import { dmSans } from '@/src/app/fonts';
import Image from 'next/image';
import Link from 'next/link';

interface BackBtnProps {
	href?: string;
}

export const BackBtn: React.FC<BackBtnProps> = ({ href = '/' }) => {
	return (
		<Link className={`flex items-center gap-2 hover:underline ${dmSans.className}`} href={href}>
			<Image
				width={30}
				height={30}
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left.png"
				alt="Back icon"
			/>
			Main Page
		</Link>
	);
};
