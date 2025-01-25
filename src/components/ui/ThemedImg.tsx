'use client';

import type { ImageProps } from 'next/image';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

interface ThemedImgProps extends Omit<ImageProps, 'src'> {
	src?: string;
	srcDark: string;
	srcLight: string;
}

export const ThemedImg = ({
	alt,
	className,
	height,
	src,
	srcDark,
	srcLight,
	width,
	...props
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
			alt={alt}
			className={className}
			height={height}
			src={src || srcLight}
			width={width}
			priority
			{...props}
		/>
	);
};
