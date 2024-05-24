import { Contact } from "@/components/sections";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Contact></Contact>
		</>
	);
};
export default ProjectLayout;
