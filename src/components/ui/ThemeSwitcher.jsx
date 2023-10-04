"use client";

import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	function toggleDarkMode() {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return <DarkModeSwitch checked={theme === "dark"} onChange={toggleDarkMode} size={30} />;
};
export default ThemeSwitcher;
