import { dmSans } from "@/app/fonts";
import { ThemedImg } from ".";
import backArrow from "/public/icons/back-arrow.svg";
import backArrowWhite from "/public/icons/back-arrow-white.svg";
import { useRouter } from "next/navigation";

interface BackBtnProps {
	href: string;
}

export const BackBtn: React.FC<BackBtnProps> = () => {
	return (
		<a href="/" className={`${dmSans.className} group flex items-center gap-3 hover:underline`}>
			<ThemedImg
				className="group-hover:animate-back"
				srcLight={backArrow}
				srcDark={backArrowWhite}
				alt="Back arrow icon"
			></ThemedImg>
			<span>Main Page</span>
		</a>
	);
};
