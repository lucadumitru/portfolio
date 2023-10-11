"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface NextProjectBtnProps {
	nextProjectImg: string;
	nextProjectTitle: string;
	nextProjectId: number;
}

const NextProjectBtn: React.FC<NextProjectBtnProps> = ({
	nextProjectImg,
	nextProjectTitle,
	nextProjectId,
}) => {
	const t = useTranslations("projects-section");
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.5 1"],
	});
	const bottomToTop = useTransform(scrollYProgress, [0, 1], [150, 0]);
	return (
		<div className="relative text-center before:absolute before:-bottom-[100px] before:left-0 before:z-10  before:h-[100px] before:w-full before:border-t-[2px] before:border-gray/30 before:bg-white before:content-[''] before:dark:bg-bgDark">
			<a
				ref={ref}
				className="intems-center group inline-flex w-[70%] flex-col"
				href={`/projects/${+nextProjectId}`}
			>
				<span className="text-gray">{t("next-project")}</span>
				<span className="-mb-5 mt-2 text-3xl font-semibold text-textSecondary transition group-hover:opacity-30 dark:text-white md:-mb-10 md:mt-5 md:text-8xl">
					{nextProjectTitle}
				</span>
				<motion.div
					className="relative"
					style={{
						top: bottomToTop,
					}}
				>
					<Image
						className="relativ -z-1 mx-auto translate-y-10 rounded-xl transition group-hover:translate-y-2 md:translate-y-16"
						src={nextProjectImg}
						width={300}
						height={200}
						alt={nextProjectTitle + " img"}
					></Image>
				</motion.div>
			</a>
		</div>
	);
};
export default NextProjectBtn;
