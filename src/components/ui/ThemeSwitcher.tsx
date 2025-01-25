'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { cn } from '@/src/lib/utils';

export const ThemeSwitcher = ({
	className,
	...props
}: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
	const [isMounted, setIsMounted] = React.useState(false);
	const { setTheme, theme } = useTheme();

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const systemDark =
		theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches;

	const toggleDarkMode = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	if (!isMounted) {
		return <div className='size-8' />;
	}

	return (
		<button
			{...props}
			aria-label='theme switcher'
			className={cn('size-8 overflow-hidden rounded-full', className)}
			type='button'
			onKeyDown={(event) => event.key === 'Enter' && toggleDarkMode()}
		>
			<DarkModeSwitch
				checked={theme === 'dark' || systemDark}
				className='*:fill-current'
				size={32}
				color='currentColor'
				onChange={systemDark ? () => setTheme('light') : toggleDarkMode}
			/>
		</button>
	);
};
