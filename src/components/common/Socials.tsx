import Link from 'next/link';

import { GitIcon, InstagramIcon, LinkedInIcon, TelegramIcon } from '@/components/ui/icons';

interface SocialsProps {
	className?: string;
}

export interface SocialLink {
	href: string;
	icon: React.FC<React.SVGAttributes<SVGSVGElement>>;
	iconHoverColor?: string;
	label: string;
}

const socialLinks: SocialLink[] = [
	{
		label: 'Telegram',
		href: 'https://t.me/dumitruluca',
		icon: TelegramIcon,
		iconHoverColor: 'hover:text-telegram',
	},
	{
		label: 'Github',
		href: 'https://github.com/lucadumitru',
		icon: GitIcon,
		iconHoverColor: 'hover:text-black dark:hover:text-white',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/dumitru-luca-4a91821ba/',
		icon: LinkedInIcon,
		iconHoverColor: 'hover:text-linkedin',
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/dumitru_luca25/',
		icon: InstagramIcon,
		iconHoverColor: 'hover:text-instagram',
	},
];

export const Socials = ({ className }: SocialsProps) => {
	return (
		<div className={`flex items-center justify-center gap-x-[10px] md:gap-x-[20px] ${className}`}>
			{socialLinks.map(({ label, href, icon: Icon, iconHoverColor }) => (
				<Link
					href={href}
					key={label}
					aria-label={`${label} link`}
					className='rounded-full transition-transform hover:scale-110'
					target='_blank'
				>
					<Icon className={`size-8 text-gray transition-all ${iconHoverColor}`} />
				</Link>
			))}
		</div>
	);
};
