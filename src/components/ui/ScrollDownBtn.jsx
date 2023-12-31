import scrollDownIcon from "@/../public/icons/scroll-down-arrow.svg";
import Link from "./Link";

const ScrollDownBtn = ({ className }) => {
	return (
		<Link className={className} href="#stack" img={scrollDownIcon} alt="Scroll down icon"></Link>
	);
};
export default ScrollDownBtn;
