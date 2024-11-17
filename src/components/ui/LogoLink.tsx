import Link from 'next/link';
import { LogoIcon } from './icons';

interface LogoLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({ href = '/', className }) => {
	return (
		<Link aria-label="logo" href={href} className={`${className} hover:animate-wiggle`}>
			<LogoIcon className="h-10 w-10" />
		</Link>
	);
};
