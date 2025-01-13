import Link from 'next/link';

import { LogoIcon } from './icons';

interface LogoLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({ className, href = '/' }) => {
	return (
		<Link aria-label='logo' className={`${className} hover:animate-wiggle`} href={href}>
			<LogoIcon className='h-10 w-10' />
		</Link>
	);
};
