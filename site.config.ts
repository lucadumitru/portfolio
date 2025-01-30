export const siteConfig = {
	vercelToolbar: {
		enabled: false,
	},
	isProduction: process.env.NODE_ENV === 'production',
	isDev: process.env.NODE_ENV === 'development',
};
