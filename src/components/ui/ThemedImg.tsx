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
}

const ThemedImg: React.FC<ThemedImgProps> = ({
	className,
	width,
	height,
	srcLight,
	srcDark,
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

	let src: string;
	switch (resolvedTheme) {
		case "light":
			src = srcLight;
			break;
		case "dark":
			src = srcDark ? srcDark : srcLight;
			break;
	}

	return <Image className={className} width={width} height={height} src={src} alt={alt}></Image>;
};
export default ThemedImg;
