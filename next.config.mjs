import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				hostname: '**',
			},
		],
	},

	webpack: (config, { isServer }) => {
		// Fixes packages that depend on fs/module module
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},
};

if (process.env.NODE_ENV === 'development') {
	nextConfig.productionBrowserSourceMaps = false;
	nextConfig.optimizeFonts = false;
}

export default withPlaiceholder(nextConfig);
