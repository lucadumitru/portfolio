import { cn } from '@/src/lib/utils';

import { type TypographyVariantProps, typographyVariantsCVA } from './Typography.variants';

export interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		Omit<TypographyVariantProps, 'defaultVariants'> {
	children: React.ReactNode;
	tag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography = ({
	children,
	variant = 'text',
	className,
	tag: Tag = 'div',
	...props
}: TypographyProps) => {
	return (
		<Tag {...props} className={cn(typographyVariantsCVA({ variant }), className)}>
			{children}
		</Tag>
	);
};
