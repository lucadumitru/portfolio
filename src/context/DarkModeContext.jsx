"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(null);

	// Apply dark mode class to HTML element when isDarkMode changes
	useEffect(() => {
		setIsDarkMode(() => {
			if (localStorage.getItem("darkMode")) {
				return localStorage.getItem("darkMode");
			}
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}
			return "light";
		});
	});

	useEffect(() => {
		const html = document.querySelector("html");
		if (isDarkMode === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}, [isDarkMode]);

	// Toggle dark mode and update localStorage
	const toggleDarkMode = () => {
		setIsDarkMode((prev) => {
			const newMode = prev === "light" ? "dark" : "light";
			localStorage.setItem("darkMode", newMode);
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
