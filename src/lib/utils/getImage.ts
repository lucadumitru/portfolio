'use server';

import { Buffer } from 'node:buffer';
import { getPlaiceholder } from 'plaiceholder';

export const getImage = async (src: string) => {
	try {
		const response = await fetch(src);

		if (!response.ok) {
			throw new Error(`Failed to fetch image: ${response.statusText}`);
		}

		const buffer = Buffer.from(await response.arrayBuffer());

		try {
			const {
				metadata: { height, width },
				...placeholder
			} = await getPlaiceholder(buffer, { size: 10 });

			return {
				...placeholder,
				img: { src, height, width },
			};
		} catch {
			// If Plaiceholder fails, provide a fallback
			return {
				base64:
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAbElEQVR42u3PMREAAAgEIL9/PDfTGMHdgwZkul6IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMhlAeGMp/lN2haGAAAAAElFTkSuQmCC', // Replace with a real base64 string for a placeholder
				img: { src, height: 100, width: 100 }, // Default height and width
			};
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error processing image:', error.message);
		}
		throw error;
	}
};
