import { cn } from '@/src/lib/utils';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
	className?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ children, className, tag, ...props }: TitleProps) => {
	const Tag = tag || 'div';
	return (
		<Tag {...props} className={cn('text-textSecondary dark:text-white', className)}>
			{children}
		</Tag>
	);
};
