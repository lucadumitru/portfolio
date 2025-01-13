import Image from 'next/image';
import Link from 'next/link';

import gitIcon from '@/public/icons/git.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import linkedInIcon from '@/public/icons/linkedin.svg';
import telegramIcon from '@/public/icons/telegram.svg';

interface SocialsProps {
	className?: string;
}

const socialLinks = [
	{ label: 'Telegram', href: 'https://t.me/dumitruluca', icon: telegramIcon },
	{ label: 'Github', href: 'https://github.com/lucadumitru', icon: gitIcon },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/dumitru-luca-4a91821ba/',
		icon: linkedInIcon,
	},
	{ label: 'Instagram', href: 'https://www.instagram.com/dumitru_luca25/', icon: instagramIcon },
];

export const Socials = ({ className }: SocialsProps) => {
	return (
		<div className={`flex items-center justify-center gap-x-[10px] md:gap-x-[20px] ${className}`}>
			{socialLinks.map((link) => (
				<Link
					aria-label={`${link.label} link`}
					className='transition-transform hover:scale-110'
					href={link.href}
					key={link.label}
					target='_blank'
				>
					<Image alt={`${link.label} icon`} src={link.icon} />
				</Link>
			))}
		</div>
	);
};
