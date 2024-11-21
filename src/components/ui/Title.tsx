interface TitleProps {
	children: React.ReactNode;
	className?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title: React.FC<TitleProps> = ({ children, className, tag }) => {
	const Tag = tag || 'div';
	return <Tag className={`${className} + text-textSecondary dark:text-white`}>{children}</Tag>;
};
