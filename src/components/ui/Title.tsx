interface TitleProps {
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
	className?: string;
}

export const Title: React.FC<TitleProps> = ({ tag, children, className }) => {
	const Tag = tag || "div";
	return <Tag className={`${className} + text-textSecondary dark:text-white `}>{children}</Tag>;
};
