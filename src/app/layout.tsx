import type { Viewport } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import { VercelToolbar } from '@vercel/toolbar/next';

import { Cta, Footer, Header } from '@/components/layout';

import { Socials } from '../components';
import { poppins } from './fonts';
import { Providers } from './providers';

import './globals.css';
import 'react-notion/src/styles.css';
import 'react-notion-x/src/styles.css';
import 'katex/dist/katex.min.css';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata = {
	metadataBase: new URL('https://lucadevelop.com'),
	alternates: {
		canonical: 'https://lucadevelop.com',
	},
	title: 'Lucadevelop | Luca Dumitru Frontend Developer portfolio webpage',
	description:
		'Welcome to the portfolio of Luca Dumitru, a passionate Frontend Developer dedicated to crafting immersive web experiences. Explore a showcase of projects highlighting proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Next.js. Get inspired by innovative designs, seamless user interactions, and a commitment to excellence in every line of code.',
	keywords:
		'lucadevelop, portfolio, javascript, developer, frontend developer, react, nextjs, html, css, tailwind, react developer, react developer sevilla, JS',
	openGraph: {
		images: '/og-image.jpg',
		description:
			'Welcome to the portfolio of Luca Dumitru, a passionate Frontend Developer dedicated to crafting immersive web experiences. Explore a showcase of projects highlighting proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Next.js. Get inspired by innovative designs, seamless user interactions, and a commitment to excellence in every line of code.',
		title: 'Lucadevelop | Luca Dumitru Frontend Developer portfolio webpage',
		type: 'website',
		url: 'https://lucadevelop.com',
	},
	other: {
		'google-site-verification': 'h8NXcWJd10wnCYsE9VzIXd6dFmoj1zDUcNLTEgAc6YA',
	},
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className='overflow-x-hidden scroll-smooth' lang='en-US' suppressHydrationWarning>
			<body
				className={`${poppins.className} flex min-h-screen min-w-[390px] flex-col overflow-x-hidden bg-white antialiased dark:bg-bgDark`}
			>
				<Providers>
					<Header>
						<Socials className='hidden md:flex' />
					</Header>
					{children}
					<Cta />
					<Footer />
				</Providers>

				{process.env.NODE_ENV === 'production' && (
					<>
						<Analytics />
						<SpeedInsights />
					</>
				)}

				{/* {process.env.NODE_ENV === 'development' && <VercelToolbar />} */}
			</body>
		</html>
	);
};

export default RootLayout;
