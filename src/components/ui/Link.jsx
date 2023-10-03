import Image from "next/image";

const Link = ({ href, img, children, className, onClick, imgWidth, imgHeight, alt = "Image" }) => {
	return (
		<a
			target="_blank"
			onClick={onClick}
			href={href}
			className={`${
				className || ""
			} flex items-center  justify-center gap-[10px] md:hover:underline`}
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
			<span>{children}</span>
		</a>
	);
};

export default Link;
