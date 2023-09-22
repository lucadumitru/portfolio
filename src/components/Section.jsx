import { Container, Title } from '.';

const Section = ({ title, subtitle, children, className, id }) => {
	return (
		<section id={id} className='mdscroll-mt-[120px] mt-[50px] scroll-mt-[80px]  md:mt-[200px]'>
			<Container>
				<Title tag='h2' className='text-center text-[24px] font-bold md:text-[48px]'>
					{title}
				</Title>
				<div className='mt-[10px] text-center text-[16px] text-gray md:mt-[30px] md:text-[32px]'>
					{subtitle}
				</div>
				<div className={`mt-[25px] md:mt-[80px] xl:mt-[120px]`}>{children}</div>
			</Container>
		</section>
	);
};

export default Section;
