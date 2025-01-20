import type { LinkProps } from 'next/link';

import Link from 'next/link';

import { cn } from '@/src/lib/utils';

import { buttonVariants } from './Button/Button';

interface ResumeBtnProps extends Omit<LinkProps, 'href'> {
	className?: string;
	href?: string;
}

export const ResumeBtn = ({
	href = '/resume/Resume_Luca_Dumitru-eng.pdf',
	className,
	...props
}: ResumeBtnProps) => {
	return (
		<Link
			{...props}
			aria-label='download resume'
			className={cn(className, buttonVariants({ variant: 'tertiary', size: 'small' }))}
			download
			href={href}
		>
			Resume
		</Link>
	);
};
