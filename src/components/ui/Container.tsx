import { cn } from '@/src/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const Container = ({ children, className }: ContainerProps) => {
	return <div className={cn('mx-auto max-w-[75rem] px-4', className)}>{children}</div>;
};
