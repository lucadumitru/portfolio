'use client';

import { useTheme } from 'next-themes';
import React from 'react';

import { Switch } from '@/components/ui';
import { cn } from '@/src/lib/utils';

export const ThemeSwitcher = ({ className }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
	const [isMounted, setIsMounted] = React.useState(false);
	const { setTheme, theme } = useTheme();

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const systemDark =
		theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches;

	const toggleDarkMode = () => {
		if (!document.startViewTransition) {
			setTheme(theme === 'dark' ? 'light' : 'dark');
			return;
		}

		document.startViewTransition(() => {
			setTheme(theme === 'dark' ? 'light' : 'dark');
		});
	};

	if (!isMounted) {
		return <div className='size-8' />;
	}

	return (
		<Switch
			aria-label='theme switcher'
			checked={theme === 'dark' || systemDark}
			className={cn('cursor-pointer overflow-hidden', className)}
			defaultChecked={theme === 'dark' || systemDark}
			onCheckedChange={systemDark ? () => setTheme('light') : toggleDarkMode}
		/>
	);
};
