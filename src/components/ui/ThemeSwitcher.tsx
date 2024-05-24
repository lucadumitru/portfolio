"use client";

import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const systemDark =
		theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	function toggleDarkMode() {
		setTheme(theme === "dark" ? "light" : "dark");
	}
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-[30px]"></div>;
	}

	return (
		<DarkModeSwitch
			onKeyDown={(e) => e.key === "Enter" && toggleDarkMode()}
			tabIndex={0}
			checked={(mounted && theme === "dark") || systemDark}
			onChange={systemDark ? () => setTheme("light") : toggleDarkMode}
			size={30}
		/>
	);
};
