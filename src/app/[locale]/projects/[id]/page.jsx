import { Container } from "../../../../components";
import { projects } from "../../../../data/data";

const Project = ({ params }) => {
	const projectId = params.id - 1;
	return (
		<main className="pt-[110px]">
			<Container>
				<div>{projects[projectId].title}</div>
			</Container>
		</main>
	);
};
export default Project;
