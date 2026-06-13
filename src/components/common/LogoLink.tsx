import Link from 'next/link';

import { LogoIcon } from '../ui/icons';

interface LogoLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export const LogoLink = ({ className, href = '/' }: LogoLinkProps) => (
	<Link aria-label='logo' className={`${className} hover:animate-wiggle`} href={href}>
		<LogoIcon className='h-10 w-10' />
	</Link>
);
