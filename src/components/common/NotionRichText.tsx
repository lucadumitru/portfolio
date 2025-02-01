import Image from 'next/image';
import React from 'react';

import type { RichTextItemResponse } from '@/src/notion-sdk/core/types/notion-api.types';

import { cn } from '@/src/lib/utils';

interface NotionTextProps extends React.HTMLAttributes<HTMLDivElement> {
	richText: RichTextItemResponse[];
}

export const NotionRichText = ({ richText, className, ...props }: NotionTextProps) => {
	return (
		<section {...props} className={cn('mx-auto max-w-(--breakpoint-md) space-y-4', className)}>
			{richText.map((text, index) => {
				if (text.plain_text.toLocaleLowerCase().includes('image') && text.href) {
					return (
						<Image
							key={index}
							alt={text.plain_text}
							className='aspect-video w-full rounded-xl object-cover'
							height='500'
							src={text.href}
							width='500'
							unoptimized
						/>
					);
				}

				if (text.annotations.underline) {
					return (
						<h3
							key={index}
							className='text-textSecondary text-center text-2xl font-semibold dark:text-white'
							style={{ color: text.annotations.color }}
						>
							{text.plain_text}
						</h3>
					);
				}

				return (
					<p
						key={index}
						className={cn('', {
							'font-bold': text.annotations.bold,
							italic: text.annotations.italic,
							'line-through': text.annotations.strikethrough,
						})}
						style={{ color: text.annotations.color }}
					>
						{text.plain_text}
					</p>
				);
			})}
		</section>
	);
};
