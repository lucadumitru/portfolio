"use client";

import Link from "./Link";
import logo from "/public/logo.svg";

const Logo = ({ className }) => {
	return (
		<>
			<Link
				imgWidth={35}
				imgHeight={35}
				className={`z-10  ${className || ""}`}
				img={logo}
				href={"/"}
				alt="logo"
			></Link>
		</>
	);
};
export default Logo;
