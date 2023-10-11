import { Metadata } from "next";
import { Project } from "../../../../components";
import { projectsTitles } from "../../../../data/data";

type Props = {
	params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const projectTitle = projectsTitles[+params.id - 1];
	return {
		title: `${projectTitle} - Luca Dumitru`,
	};
}

const Page = ({ params }: Props) => {
	return <Project params={params}></Project>;
};
export default Page;
