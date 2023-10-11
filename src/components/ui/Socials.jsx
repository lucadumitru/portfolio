"use client";

import Link from "./Link";

import gitIcon from "@/../public/icons/git.svg";
import linkedInIcon from "@/../public/icons/linkedin.svg";
import instagramIcon from "@/../public/icons/instagram.svg";
import phoneCallIcon from "@/../public/icons/phone-call.svg";

const Socials = ({ className }) => {
	return (
		<div className={`flex items-center justify-center gap-x-[10px] md:gap-x-[20px] ${className}`}>
			<Link href="tel:+34642467996" img={phoneCallIcon}></Link>
			<Link href="https://github.com/lucadumitru" img={gitIcon} target="_blank"></Link>
			<Link
				href="https://www.linkedin.com/in/dumitru-luca-4a91821ba/"
				img={linkedInIcon}
				target="_blank"
			></Link>
			<Link
				href="https://www.instagram.com/dumitru_luca25/"
				img={instagramIcon}
				target="_blank"
			></Link>
		</div>
	);
};

export default Socials;
