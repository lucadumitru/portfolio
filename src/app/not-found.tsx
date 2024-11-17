import Image from 'next/image';
import Link from 'next/link';

const GlobalNotFoundPage = () => {
	return (
		<main className="flex grow flex-col items-center justify-center gap-4">
			<Image
				width={100}
				height={100}
				alt="Pile of Poo"
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pile%20of%20Poo.png"
			/>
			<h1 className="text-2xl">
				<span className="font-bold">404</span> | Page not found
			</h1>
			<Link href={'/'} className="hover:underline">
				Go to <span className="font-semibold">Main Page</span>
			</Link>
		</main>
	);
};

export default GlobalNotFoundPage;
