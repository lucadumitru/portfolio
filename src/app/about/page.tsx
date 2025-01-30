import { format } from 'date-fns';

import { Container, Typography } from '@/src/components';
import { getEducations, getExperiences } from '@/src/lib/api/data';

import { ExperienceItem } from './components/ExperienceItem';

export const revalidate = 86_400; // 1 day

const AboutPage = async () => {
	const experiences = await getExperiences();
	const educations = await getEducations();

	return (
		<Container as='main' className='max-w-screen-md grow space-y-12 pt-[7rem]'>
			<section className='space-y-7'>
				<Typography tag='h1' variant='section-title'>
					About Me
				</Typography>
				<Typography tag='p' variant='text'>
					I am a Front-End developer with 3 years of experience. I have strong knowledge of
					HTML, CSS, and JavaScript. I also have experience working with libraries and
					frameworks like React.js and Next.js. I pay special attention to writing clean and
					quality code. I have skills in fully adapting websites for different devices and SEO
					optimization. As a front-end developer, I am always in the process of learning and
					improving my skills.
				</Typography>
			</section>
			{!!experiences.length && (
				<section className='space-y-8'>
					<Typography tag='h1' variant='section-title'>
						Work Experience
					</Typography>
					<ul className='space-y-7'>
						{experiences.map((experience) => (
							<ExperienceItem
								key={experience.id}
								endDate={
									experience.properties.__data.period.date?.end &&
									format(experience.properties.__data.period.date?.end, 'LLL yyyy')
								}
								startDate={
									experience.properties.__data.period.date?.start &&
									format(experience.properties.__data.period.date?.start, 'LLL yyyy')
								}
								title={experience.properties.__data.title.title[0].plain_text}
								type={experience.properties.__data.jobType.select.name}
								company={experience.properties.__data.company.rich_text[0].plain_text}
								location={experience.properties.__data.location.rich_text[0].plain_text}
							/>
						))}
					</ul>
				</section>
			)}
			{!!educations.length && (
				<section className='space-y-8'>
					<Typography tag='h1' variant='section-title'>
						Education
					</Typography>
					<ul className='space-y-7'>
						{educations.map((education) => (
							<ExperienceItem
								key={education.id}
								endDate={
									education.properties.__data.period.date?.end &&
									format(education.properties.__data.period.date?.end, 'LLL yyyy')
								}
								startDate={
									education.properties.__data.period.date?.start &&
									format(education.properties.__data.period.date?.start, 'LLL yyyy')
								}
								title={education.properties.__data.title.title[0].plain_text}
								type={education.properties.__data.studyType.select.name}
								company={education.properties.__data.institution.rich_text[0].plain_text}
								location={education.properties.__data.location.rich_text[0].plain_text}
							/>
						))}
					</ul>
				</section>
			)}
		</Container>
	);
};

export default AboutPage;
