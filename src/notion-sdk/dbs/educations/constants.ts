export const EDUCATIONS_PROP_VALUES = {
	studyType: ['Full Time'] as const,
};

export const EDUCATIONS_PROPS_TO_IDS = {
	location: 'Z%3B%60R',
	period: 'g%3E%5CT',
	institution: 'gor%7B',
	studyType: 'siEY',
	title: 'title',
} as const;
export const EDUCATIONS_IDS_TO_PROPS = {
	'Z%3B%60R': 'location',
	'g%3E%5CT': 'period',
	'gor%7B': 'institution',
	siEY: 'studyType',
	title: 'title',
} as const;
export const EDUCATIONS_PROPS_TO_TYPES = {
	location: 'rich_text',
	period: 'date',
	institution: 'rich_text',
	studyType: 'select',
	title: 'title',
} as const;

export type EducationsDTOProperties = keyof typeof EDUCATIONS_PROPS_TO_IDS;
