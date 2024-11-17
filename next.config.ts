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
	experimental: {
		ppr: 'incremental',
	},
};

export default nextConfig;
