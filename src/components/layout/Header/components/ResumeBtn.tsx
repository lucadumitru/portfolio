import type { LinkProps } from 'next/link';

import Link from 'next/link';

import { buttonVariantsCVA } from '@/components/ui';

interface ResumeBtnProps extends Omit<LinkProps, 'href'> {
	className?: string;
	href?: string;
}

export const ResumeBtn = ({
	href = '/resume/resume_luca_dumitru-eng.pdf',
	className,
	...props
}: ResumeBtnProps) => {
	return (
		<Link
			{...props}
			href={href}
			aria-label='download resume'
			className={buttonVariantsCVA({ variant: 'tertiary', size: 'small', className })}
			download
		>
			Resume
		</Link>
	);
};
