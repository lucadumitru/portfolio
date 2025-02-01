import { cn } from '@/src/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
	as?: React.HTMLElementType;
	children: React.ReactNode;
}

export const Container = ({ children, as: Tag = 'div', className, ...props }: ContainerProps) => {
	return (
		<Tag {...props} className={cn('mx-auto w-full max-w-(--breakpoint-xl) px-4', className)}>
			{children}
		</Tag>
	);
};
