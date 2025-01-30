import { buttonVariantsCVA, Typography } from '@/src/components';
import { BuildingIcon, CalendarIcon, LocationIcon } from '@/src/components/ui/icons';

interface ExperienceItemProps {
	company?: string;
	endDate?: string | null;
	location?: string;
	startDate?: string;
	title?: string;
	type?: string;
}

export const ExperienceItem = ({
	company,
	endDate,
	location,
	startDate,
	title,
	type,
}: ExperienceItemProps) => {
	return (
		<li className='w-full list-none space-y-3 border-b border-lightGray/20 pb-3'>
			<div className='flex items-center justify-between gap-1'>
				{title && (
					<Typography tag='h3' variant='list-title'>
						{title}
					</Typography>
				)}
				{type && (
					<span
						className={buttonVariantsCVA({
							variant: 'tertiary',
							size: 'small',
							className: 'pointer-events-none whitespace-nowrap',
						})}
					>
						{type}
					</span>
				)}
			</div>
			<div className='flex flex-wrap gap-2 text-lightContent dark:text-lightGray'>
				{company && (
					<div className='flex w-1/4 grow items-start gap-2'>
						<BuildingIcon className='mt-1 size-4' />
						<span>{company}</span>
					</div>
				)}
				{location && (
					<div className='flex min-w-[7rem] items-center justify-end gap-2 md:justify-start'>
						<LocationIcon className='size-4' />
						<span>{location}</span>
					</div>
				)}
				{startDate && (
					<div className='flex grow items-center justify-end gap-2'>
						<CalendarIcon className='size-4' />
						<span>
							{startDate} - {endDate || 'Present'}
						</span>
					</div>
				)}
			</div>
		</li>
	);
};
