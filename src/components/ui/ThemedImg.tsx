'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

interface ThemedImgProps {
	alt: string;
	className?: string;
	height?: number;
	src?: string;
	srcDark: string;
	srcLight: string;
	width?: number;
}

export const ThemedImg = ({
	alt,
	className,
	height,
	src,
	srcDark,
	srcLight,
	width,
}: ThemedImgProps) => {
	const [isMounted, setIsMounted] = React.useState(false);
	const { resolvedTheme } = useTheme();

	switch (resolvedTheme) {
		case 'light':
			src = srcLight;
			break;
		case 'dark':
			src = srcDark || srcLight;
			break;

		default:
	}

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Image
			priority
			alt={alt}
			className={className}
			height={height}
			src={src || srcLight}
			width={width}
		/>
	);
};
