import { Container } from "@/components/ui";

export const Contact = () => {
	return (
		<section id="contact" className="my-[50px] text-center md:my-[100px]">
			<Container>
				<h2 className="text-2xl font-semibold text-textSecondary dark:text-white md:text-5xl ">
					Want to create something?
				</h2>
				<a
					tabIndex={1}
					className="relative mt-1 inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100 md:mt-3 md:text-3xl"
					href="mailto:luca.dumitru25@icloud.com"
				>
					luca.dumitru25@icloud.com
				</a>
			</Container>
		</section>
	);
};
