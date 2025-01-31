import type { LinkProps } from 'next/link';

import Link from 'next/link';

import { buttonVariantsCVA } from '@/components/ui';
import { cn } from '@/src/lib/utils';

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
			href={href}
			aria-label='download resume'
			className={cn(className, buttonVariantsCVA({ variant: 'tertiary', size: 'small' }))}
			download
		>
			Resume
		</Link>
	);
};
