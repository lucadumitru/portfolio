import { Link } from ".";
import logo from "/public/logo.svg";

export const Logo = ({ className }) => {
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
