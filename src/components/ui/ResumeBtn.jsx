"use client";

import { useTranslations } from "next-intl";

const ResumeBtn = ({ locale }) => {
	const t = useTranslations("nav");
	return (
		<a
			className="text-s rounded-3xl bg-[#D7FFE0] px-4 py-1 text-[#018C0F] transition hover:bg-[#018C0F] hover:text-[#D7FFE0]"
			href={`/resume/Resume_Luca_Dumitru-eng.pdf`}
			download
		>
			{t("resume")}
		</a>
	);
};
export default ResumeBtn;
