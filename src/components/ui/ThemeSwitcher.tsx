'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ThemeSwitcher = () => {
	const [isMounted, setIsMounted] = React.useState(false);
	const { setTheme, theme } = useTheme();

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const systemDark =
		theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches;
	function toggleDarkMode() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	if (!isMounted) {
		return <div className='w-[30px]' />;
	}

	return (
		<button
			aria-label='theme switcher'
			type='button'
			onKeyDown={(e) => e.key === 'Enter' && toggleDarkMode()}
		>
			<DarkModeSwitch
				checked={theme === 'dark' || systemDark}
				size={30}
				onChange={systemDark ? () => setTheme('light') : toggleDarkMode}
			/>
		</button>
	);
};
