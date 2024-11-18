import { Container, Title } from '@/components/ui';
import { technologies } from '@/src/data/data';
import { StackItems } from './components/StackItems';

export const Stack = () => {
	return (
		<section className="scroll-mt-[80px] md:scroll-mt-[150px]" id="stack">
			<Container>
				<Title className="text-center text-[24px] font-bold md:text-[48px]" tag="h2">
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
