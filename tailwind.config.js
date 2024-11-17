/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				short: { raw: '(min-height: 680px)' },
			},
			colors: {
				gray: '#666',
				textSecondary: '#42446E',
				bgDark: '#191919',
			},
			boxShadow: {
				card: '2px 2px 100px 0px rgba(0, 0, 0, 0.20)',
			},
			backgroundImage: {
				macbook: "url('/devices/macbook-pro.png')",
				imac: "url('/devices/imac.png')",
				iphone: "url('/devices/iphone14.png')",
			},
			keyframes: {
				back: {
					from: { transform: '5px 0' },
					to: { translate: '0 0' },
				},
				'small-rotate': {
					from: {
						transform: {
							rotate: '0deg',
						},
					},
					to: {
						transform: {
							rotate: '120deg',
						},
					},
				},
			},
			animation: {
				back: 'back 0.4s cubic-bezier(0, 0, 0.2, 1) ',
				'small-rotate': 'small-rotate 0.4s cubic-bezier(0, 0, 0.2, 1) ',
			},
		},
	},
	plugins: [],
};
