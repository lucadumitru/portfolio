import { ThemedImg } from ".";

// Icons
import gitIcon from "/public/icons/git-small.svg";
import gitIconWhite from "/public/icons/git-small-white.svg";

interface CodeLinkProps {
	href: string;
	className?: string;
}

export const CodeLink: React.FC<CodeLinkProps> = ({ href, className }) => {
	return (
		<a
			href={href}
			target="_blank"
			className={`flex flex-row-reverse items-center gap-2 text-xs hover:underline sm:text-sm ${className}`}
		>
			<span>View Code</span>
			<ThemedImg srcDark={gitIconWhite} srcLight={gitIcon} alt="Git icon"></ThemedImg>
		</a>
	);
};
