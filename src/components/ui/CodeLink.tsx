import { ThemedImg } from ".";

// Icons
import gitIcon from "/public/icons/git-small.svg";
import gitIconWhite from "/public/icons/git-small-white.svg";

interface CodeLinkProps {
	href: string;
	className?: string;
	variant?: "link" | "button";
}

export const CodeLink: React.FC<CodeLinkProps> = ({ href, className, variant }) => {
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
			<span>View Code</span>
			<ThemedImg srcDark={gitIconWhite} srcLight={gitIcon} alt="Git icon"></ThemedImg>
		</a>
	);
};
