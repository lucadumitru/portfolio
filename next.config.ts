import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
