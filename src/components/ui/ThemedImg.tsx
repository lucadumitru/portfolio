"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ThemedImgProps {
	className?: string;
	width?: number;
	height?: number;
	srcLight: string;
	srcDark: string;
	alt: string;
	src?: string;
}

export const ThemedImg: React.FC<ThemedImgProps> = ({
	className,
	width,
	height,
	srcLight,
	srcDark,
	src,
	alt,
}) => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	switch (resolvedTheme) {
		case "light":
			src = srcLight;
			break;
		case "dark":
			src = srcDark ? srcDark : srcLight;
			break;
	}

	return (
		<Image
			className={className}
			width={width}
			height={height}
			src={src || srcLight}
			alt={alt}
		></Image>
	);
};
