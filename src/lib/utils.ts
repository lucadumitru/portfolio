import { type ClassValue, clsx } from 'clsx';
import fs from 'node:fs/promises';

import { getPlaiceholder } from 'plaiceholder';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getBase64 = async (imgPath: string) => {
	try {
		const file = await fs.readFile(`public/${imgPath}`);
		const { base64 } = await getPlaiceholder(file);
		return base64;
	} catch (error: unknown) {
		if (error instanceof Error) return error.message;
		else if (error && typeof error === 'object' && 'message' in error)
			return error.message as string;
		else if (typeof error === 'string') return error;
		else return 'Unexpected error!';
	}
};
