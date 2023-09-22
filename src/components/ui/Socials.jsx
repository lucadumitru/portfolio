"use client";

import Link from "./Link";

import gitIcon from "@/../public/icons/git.svg";
import linkedInIcon from "@/../public/icons/linkedin.svg";
import twitterIcon from "@/../public/icons/twitter.svg";

const Socials = () => {
	return (
		<div className="flex items-center gap-x-[10px] md:gap-x-[20px]">
			<Link href="http://github.com" img={gitIcon}></Link>
			<Link href="http://twitter.com" img={twitterIcon}></Link>
			<Link href="http://linkedin.com" img={linkedInIcon}></Link>
		</div>
	);
};

export default Socials;
