import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		formats: ['image/webp'],
	},
	webpack: (config, { isServer }) => {
		// Fixes packages that depend on fs/module module
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},
};

export default withPlaiceholder(nextConfig);
