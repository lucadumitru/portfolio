'use client';

import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const systemDark =
		theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches;
	function toggleDarkMode() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<button aria-label="theme switcher" onKeyDown={(e) => e.key === 'Enter' && toggleDarkMode()}>
			<DarkModeSwitch
				checked={theme === 'dark' || systemDark}
				onChange={systemDark ? () => setTheme('light') : toggleDarkMode}
				size={30}
			/>
		</button>
	);
};
