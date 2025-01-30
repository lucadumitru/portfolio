import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

export type TypographyVariantProps = VariantProps<typeof typographyVariantsCVA>;

export const typographyVariants = {
	variant: {
		'section-title': 'text-2xl font-bold md:text-5xl',
		subtitle: 'text-[1.125rem] text-gray md:text-[2rem]',
		text: 'text-base font-light text-gray dark:text-lightGray',
		content: 'text-lightContent font-medium dark:text-white font-me',
		title: 'md:text-[2.5rem] font-bold text-[1.75rem] lg:text-[3.4375rem]',
		'list-title': 'md:text-xl text-gray text-[1.125rem]',
	},
};

export const typographyVariantsCVA = cva('text-textSecondary dark:text-white', {
	variants: typographyVariants,
	defaultVariants: {
		variant: 'text',
	},
});
