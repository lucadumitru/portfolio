/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com', port: '' }],
		minimumCacheTTL: 2678400,
	},
	experimental: {},
};

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

module.exports = withVercelToolbar(nextConfig);
