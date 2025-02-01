'use client';

import { useTheme } from 'next-themes';

import { cn } from '@/src/lib/utils';

interface SpotifyPlayListProps extends React.HTMLAttributes<HTMLIFrameElement> {
	height?: string;
	src?: string;
	title?: string;
	width?: string;
}

export const SpotifyPlayList = ({
	className,
	src,
	height = '352',
	width = '100%',
	title = 'Spotify Playlist',
	...props
}: SpotifyPlayListProps) => {
	const { theme } = useTheme();

	src = `https://open.spotify.com/embed/playlist/0YYfTqhtoQIpHWjfVibeyx?${theme === 'dark' ? 'theme=0' : 'utm_source=generator'}`;

	return (
		<iframe
			{...props}
			className={cn('rounded-xl [&>html>body]:m-0!', className)}
			height={height}
			src={src}
			title={title}
			width={width}
			allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
			loading='lazy'
			sandbox='allow-scripts'
		/>
	);
};
