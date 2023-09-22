'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	// Retrieve dark mode preference from localStorage
	const isLocalStorageAvailable = typeof localStorage !== 'undefined';
	const storedDarkMode = isLocalStorageAvailable ? localStorage.getItem('darkMode') : undefined;
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (storedDarkMode) {
			return storedDarkMode;
		}
		// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// 	return "dark";
		// }
		return 'light'; // Default to light mode
	});

	// Apply dark mode class to HTML element when isDarkMode changes
	useEffect(() => {
		const html = document.querySelector('html');
		if (isDarkMode === 'dark') {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}, [isDarkMode]);

	// Toggle dark mode and update localStorage
	const toggleDarkMode = () => {
		setIsDarkMode((prev) => {
			const newMode = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('darkMode', newMode);
			return newMode;
		});
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};
