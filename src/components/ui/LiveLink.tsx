import { ThemedImg } from "..";
import linkIcon from "/public/icons/link.svg";
import linkIconWhite from "/public/icons/link-white.svg";
import { useTranslations } from "next-intl";

interface LiveLinkProps {
	href: string;
	className?: string;
}

const LiveLink: React.FC<LiveLinkProps> = ({ href, className }) => {
	const t = useTranslations("card");
	return (
		<a
			href={href}
			target="_blank"
			className={`flex flex-row-reverse gap-2 text-xs hover:underline sm:text-sm ${className}`}
		>
			<span>{t("preview")}</span>
			<ThemedImg srcDark={linkIconWhite} srcLight={linkIcon} alt="Link icon"></ThemedImg>
		</a>
	);
};
export default LiveLink;
