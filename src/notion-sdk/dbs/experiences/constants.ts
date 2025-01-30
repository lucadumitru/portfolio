export const EXPERIENCES_PROP_VALUES = {
	jobType: ['Full TIme', 'Intership', 'Part Time'] as const,
};

export const EXPERIENCES_PROPS_TO_IDS = {
	period: 'K%5EJF',
	company: 'TtT~',
	jobType: 'io_g',
	location: 'njiw',
	title: 'title',
} as const;
export const EXPERIENCES_IDS_TO_PROPS = {
	'K%5EJF': 'period',
	'TtT~': 'company',
	io_g: 'jobType',
	njiw: 'location',
	title: 'title',
} as const;
export const EXPERIENCES_PROPS_TO_TYPES = {
	period: 'date',
	company: 'rich_text',
	jobType: 'select',
	location: 'rich_text',
	title: 'title',
} as const;

export type ExperiencesDTOProperties = keyof typeof EXPERIENCES_PROPS_TO_IDS;
