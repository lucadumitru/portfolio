'use client';

import { type ThemeProviderProps } from 'next-themes';
// import { ThemeProvider as NextThemesProvider } from 'next-themes';
import dynamic from 'next/dynamic';

const NextThemesProvider = dynamic(() => import('next-themes').then((e) => e.ThemeProvider), {
	ssr: false,
});

export const Provider = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider attribute={'class'} {...props}>
			{children}
		</NextThemesProvider>
	);
};
