import { Header, Footer } from "@/components";

import { DarkModeProvider } from "./../context/DarkModeContext";

import { Poppins, DM_Sans } from "next/font/google";

import "./globals.css";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
	return (
		<DarkModeProvider>
			<html lang="en" className="scroll-smooth">
				<body className={`${poppins.className} dark:bg-bgDark bg-white `}>
					<Header></Header>
					{children}
					<Footer ></Footer>
				</body>
			</html>
		</DarkModeProvider>
	);
}
