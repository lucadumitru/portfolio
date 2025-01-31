'use client';

import type { ImageProps } from 'next/image';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

interface ThemedImgProps extends ImageProps {
	srcDark: string;
}

export const ThemedImg = ({ alt, src, srcDark, ...props }: ThemedImgProps) => {
	const [isMounted, setIsMounted] = React.useState(false);
	const { resolvedTheme } = useTheme();

	switch (resolvedTheme) {
		case 'dark':
			src = srcDark || src;
			break;
	}

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <Image alt={alt} src={src || srcDark} priority {...props} />;
};
