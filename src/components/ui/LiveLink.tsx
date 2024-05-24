import { ThemedImg } from ".";
import linkIcon from "/public/icons/link.svg";
import linkIconWhite from "/public/icons/link-white.svg";

interface LiveLinkProps {
	href: string;
	className?: string;
	variant?: "link" | "button";
}

export const LiveLink: React.FC<LiveLinkProps> = ({ href, className, variant }) => {
	const linkStyle = "hover:underline ";
	const buttonStyle =
		"p-3 border rounded-full hover:shadow-md transition-shadow dark:hover:shadow-white";
	return (
		<a
			href={href}
			target="_blank"
			className={`flex flex-row-reverse  items-center gap-2 text-xs sm:text-sm ${
				variant === "button" ? buttonStyle : linkStyle
			}  ${className}`}
		>
			<span>Live Preview</span>
			<ThemedImg srcDark={linkIconWhite} srcLight={linkIcon} alt="Link icon"></ThemedImg>
		</a>
	);
};
