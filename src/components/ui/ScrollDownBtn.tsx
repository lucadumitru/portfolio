import scrollDownIcon from "@/../public/icons/scroll-down-arrow.svg";
import { Link } from ".";

export const ScrollDownBtn = ({ className }: { className?: string }) => {
	return (
		<Link className={className} href="#stack" img={scrollDownIcon} alt="Scroll down icon"></Link>
	);
};
