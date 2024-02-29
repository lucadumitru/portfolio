const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
	compiler: {
		removeConsole: { exclude: ["info", "error", "warn"] },
		styledComponents: true,
	},
};

module.exports = withBundleAnalyzer(nextConfig);
