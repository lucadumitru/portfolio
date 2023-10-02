"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemedImg = ({ className, width, height, srcLight, srcDark, alt }) => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	let src;
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
