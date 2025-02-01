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
				telegram: '#0088cc',
				linkedin: '#0E76A8',
				instagram: '#DD2A7B',
			},
			boxShadow: {
				card: '2px 2px 100px 0px rgba(0, 0, 0, 0.20)',
			},
			backgroundImage: {
				macbook: "url('/devices/macbook-pro-1920x1080.png')",
				imac: "url('/devices/imac.png')",
				iphone: "url('/devices/iphone14.png')",
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-5deg)',
					},
					'50%': {
						transform: 'rotate(5deg)',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 0.3s ease-in-out',
			},
		},
	},
	plugins: [],
};
