import { DM_Sans, Poppins } from 'next/font/google';

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
