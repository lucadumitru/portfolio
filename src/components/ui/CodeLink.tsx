'use client';

import Link from 'next/link';
import { ThemedImg } from '@/components/ui';

// Icons
import gitIcon from '@/public/icons/git-small.svg';
import gitIconWhite from '@/public/icons/git-small-white.svg';

interface CodeLinkProps {
	className?: string;
	href: string;
	variant?: 'button' | 'link';
}

export const CodeLink: React.FC<CodeLinkProps> = ({ className, href, variant }) => {
	const linkStyle = 'hover:underline ';
	const buttonStyle =
		'p-3 border rounded-full hover:shadow-md transition-shadow dark:hover:shadow-white';
	return (
		<Link
			className={`flex flex-row-reverse  items-center gap-2 text-xs sm:text-sm ${
				variant === 'button' ? buttonStyle : linkStyle
			}  ${className}`}
			href={href}
			target="_blank"
		>
			<span>View Code</span>
			<ThemedImg alt="Git icon" srcDark={gitIconWhite} srcLight={gitIcon} />
		</Link>
	);
};
