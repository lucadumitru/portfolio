import { Container, Title } from '@/components/ui';
import { StackItems } from './components/StackItems';
import { technologies } from '@/src/data/data';

export const Stack = () => {
	return (
		<section id="stack" className="scroll-mt-[80px] md:scroll-mt-[150px]">
			<Container>
				<Title tag="h2" className="text-center text-[24px] font-bold md:text-[48px]">
					My Tech Stack
				</Title>
				<div className="mt-[10px] text-center text-[18px] text-gray md:mt-[30px] md:text-[32px]">
					Technologies I’ve been working with recently
				</div>
				<StackItems technologies={technologies} />
			</Container>
		</section>
	);
};
