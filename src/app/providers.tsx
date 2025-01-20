'use client';

import type { ThemeProviderProps } from 'next-themes';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

import { MenuContext } from '../contexts/MenuContext';

interface ProvidersProps extends ThemeProviderProps {}

export const Providers = ({ children, ...props }: ProvidersProps) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<MenuContext value={{ isOpen, toggleIsOpen: setIsOpen }}>
			<NextThemesProvider attribute={'class'} {...props}>
				{children}
			</NextThemesProvider>
		</MenuContext>
	);
};
