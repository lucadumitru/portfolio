interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={`mx-auto my-0 max-w-[1200px] px-[15px] ${className || ''} `}>{children}</div>
	);
};
