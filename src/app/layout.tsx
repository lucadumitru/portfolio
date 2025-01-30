import type { Metadata, Viewport } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelToolbar } from '@vercel/toolbar/next';

import { Socials } from '@/components/common';
import { Cta, Footer, Header } from '@/components/layout';
import { siteConfig } from '@/site.config';
import { poppins } from '@/src/assets/fonts';

import { Providers } from './providers';

import '@/src/assets/styles/globals.css';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
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
		'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION ?? '',
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

				{siteConfig.isProduction && (
					<>
						<Analytics />
						<SpeedInsights />
					</>
				)}

				{siteConfig.isDev && siteConfig.vercelToolbar.enabled && <VercelToolbar />}
			</body>
		</html>
	);
};

export default RootLayout;
