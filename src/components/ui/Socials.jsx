"use client";

import Link from "./Link";

import gitIcon from "@/../public/icons/git.svg";
import linkedInIcon from "@/../public/icons/linkedin.svg";
import instagramIcon from "@/../public/icons/instagram.svg";

const Socials = () => {
	return (
		<div className="flex items-center gap-x-[10px] md:gap-x-[20px]">
			<Link href="https://github.com/lucadumitru" img={gitIcon}></Link>
			<Link href="https://www.linkedin.com/in/dumitru-luca-4a91821ba/" img={linkedInIcon}></Link>
			<Link href="https://www.instagram.com/dumitru_luca25/" img={instagramIcon}></Link>
		</div>
	);
};

export default Socials;
