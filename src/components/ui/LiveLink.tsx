import Link from 'next/link';

import linkIconWhite from '@/public/icons/link-white.svg';
import linkIcon from '@/public/icons/link.svg';

import { ThemedImg } from '.';

interface LiveLinkProps {
	className?: string;
	href: string;
	variant?: 'button' | 'link';
}

export const LiveLink: React.FC<LiveLinkProps> = ({ className, href, variant }) => {
	const linkStyle = 'hover:underline ';
	const buttonStyle =
		'p-3 border rounded-full hover:shadow-md transition-shadow dark:hover:shadow-white';
	return (
		<Link
			className={`flex flex-row-reverse items-center gap-2 text-xs sm:text-sm ${
				variant === 'button' ? buttonStyle : linkStyle
			} ${className}`}
			href={href}
			target='_blank'
		>
			<span>Live Preview</span>
			<ThemedImg alt='Link icon' srcDark={linkIconWhite} srcLight={linkIcon}></ThemedImg>
		</Link>
	);
};
