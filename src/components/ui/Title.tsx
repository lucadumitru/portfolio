"use client";

const Title = ({ tag, children, className }) => {
	const Tag = tag || "div";
	return <Tag className={`${className} + text-textSecondary dark:text-white `}>{children}</Tag>;
};

export default Title;
