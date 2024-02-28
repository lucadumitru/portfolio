import { ThemedImg } from ".";
import linkIcon from "/public/icons/link.svg";
import linkIconWhite from "/public/icons/link-white.svg";

interface LiveLinkProps {
	href: string;
	className?: string;
}

export const LiveLink: React.FC<LiveLinkProps> = ({ href, className }) => {
	return (
		<a
			href={href}
			target="_blank"
			className={`flex flex-row-reverse items-center gap-2 text-xs hover:underline sm:text-sm ${className}`}
		>
			<span>Live Preview</span>
			<ThemedImg srcDark={linkIconWhite} srcLight={linkIcon} alt="Link icon"></ThemedImg>
		</a>
	);
};
