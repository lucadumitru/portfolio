/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '***',
				port: '',
			},
		],
	},
	experimental: {},
};

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

module.exports = withVercelToolbar(nextConfig);
