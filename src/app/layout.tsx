import { Header, Footer } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { poppins } from "./fonts";
import Provider from "./provider";

export const metadata = {
	metadataBase: new URL("https://lucadevelop.com"),
	title: "Lucadevelop | Luca Dumitru Frontend Developer portfolio webpage",
	description:
		"Welcome to the portfolio of Luca Dumitru, a passionate Frontend Developer dedicated to crafting immersive web experiences. Explore a showcase of projects highlighting proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Next.js. Get inspired by innovative designs, seamless user interactions, and a commitment to excellence in every line of code.",
	keywords:
		"lucadevelop, portfolio, javascript, developer, frontend developer, react, nextjs, html, css, tailwind, react developer, react developer sevilla, JS",
	openGraph: {
		images: "/og-image.jpg",
		description:
			"Welcome to the portfolio of Luca Dumitru, a passionate Frontend Developer dedicated to crafting immersive web experiences. Explore a showcase of projects highlighting proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Next.js. Get inspired by innovative designs, seamless user interactions, and a commitment to excellence in every line of code.",
		title: "Lucadevelop | Luca Dumitru Frontend Developer portfolio webpage",
		type: "website",
		url: "https://lucadevelop.com",
	},
	other: { "google-site-verification": "h8NXcWJd10wnCYsE9VzIXd6dFmoj1zDUcNLTEgAc6YA" },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html suppressHydrationWarning className="scroll-smooth" lang="en-US">
			<body
				className={`${poppins.className} flex min-h-screen flex-col bg-white dark:bg-bgDark`}
			>
				<Provider>
					<Header></Header>
					{children}
					<Footer></Footer>
				</Provider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
};

export default RootLayout;
