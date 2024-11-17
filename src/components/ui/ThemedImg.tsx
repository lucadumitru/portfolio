'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

interface ThemedImgProps {
	className?: string;
	width?: number;
	height?: number;
	srcLight: string;
	srcDark: string;
	alt: string;
	src?: string;
}

export const ThemedImg = ({
	className,
	width,
	height,
	srcLight,
	srcDark,
	src,
	alt,
}: ThemedImgProps) => {
	const { resolvedTheme } = useTheme();

	switch (resolvedTheme) {
		case 'light':
			src = srcLight;
			break;
		case 'dark':
			src = srcDark ? srcDark : srcLight;
			break;

		default:
	}

	return (
		<Image
			priority
			className={className}
			width={width}
			height={height}
			src={src || srcLight}
			alt={alt}
		/>
	);
};
