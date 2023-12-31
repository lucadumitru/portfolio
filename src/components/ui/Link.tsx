import Image from "next/image";

interface LinkProps {
	href: string;
	img?: string;
	className?: string;
	onClick?: () => void;
	imgWidth?: number;
	imgHeight?: number;
	alt?: string;
	children?: React.ReactNode;
	target?: string;
}

const Link: React.FC<LinkProps> = ({
	href,
	img,
	children,
	className,
	onClick,
	imgWidth,
	imgHeight,
	alt = "Image",
	target,
}) => {
	return (
		<a
			tabIndex={1}
			target={target}
			onClick={onClick}
			href={href}
			className={`${
				className || ""
			} flex items-center justify-center gap-[10px] md:hover:underline `}
		>
			{img && (
				<Image
					width={imgWidth}
					height={imgHeight}
					src={img}
					alt={alt}
					className={`transform transition duration-200 ease-in-out ${
						!children && "hover:scale-110"
					}`}
				></Image>
			)}
			<span className="z-1 relative ">{children}</span>
		</a>
	);
};

export default Link;
