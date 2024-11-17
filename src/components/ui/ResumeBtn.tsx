import Link from 'next/link';

export const ResumeBtn = () => {
	return (
		<Link
			aria-label="download resume"
			tabIndex={0}
			className="text-s rounded-3xl bg-green-200 px-4 py-1 text-green-900 transition hover:bg-[#018C0F] hover:text-[#D7FFE0]"
			href={`/resume/Resume_Luca_Dumitru-eng.pdf`}
			download
		>
			Resume
		</Link>
	);
};
