import Link from 'next/link';

import { LogoIcon } from '../ui/icons';

interface LogoLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({ className, href = '/' }) => {
	return (
		<Link href={href} aria-label='logo' className={`${className} hover:animate-wiggle`}>
			<LogoIcon className='h-10 w-10' />
		</Link>
	);
};
