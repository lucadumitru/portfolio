import { dmSans } from "../../app/[locale]/fonts";
import ThemedImg from "./ThemedImg";
import backArrow from "/public/icons/back-arrow.svg";
import backArrowWhite from "/public/icons/back-arrow-white.svg";
import { useTranslations } from "next-intl";

interface BackBtnProps {
	href: string;
}

const BackBtn: React.FC<BackBtnProps> = ({ href }) => {
	const t = useTranslations("nav");
	return (
		<a
			href={href}
			className={`${dmSans.className} group flex items-center gap-3 hover:underline`}
		>
			<ThemedImg
				className="group-hover:animate-back"
				srcLight={backArrow}
				srcDark={backArrowWhite}
				alt="Back arrow icon"
			></ThemedImg>
			<span>{t("back")}</span>
		</a>
	);
};
export default BackBtn;
