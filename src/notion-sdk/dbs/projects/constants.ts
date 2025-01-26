export const PROJECTS_PROP_VALUES = {
	status: ['Draft', 'Published'] as const,
};

export const PROJECTS_PROPS_TO_IDS = {
	slug: 'Kd%7Dc',
	stack: 'P%3B%3A%40',
	mainImage: 'P%3FFB',
	previewLink: 'i%60B%7D',
	description: 'pC%3Di',
	gitLink: 'yGBU',
	title: 'title',
	videPreview: 'O%3CfP',
	text: 'j%3D%3Fc',
	macPreview: 'kBv%5D',
	status: 'aS%7Bi',
	createdTime: '%7DUjn',
} as const;
export const PROJECTS_IDS_TO_PROPS = {
	'Kd%7Dc': 'slug',
	'P%3B%3A%40': 'stack',
	'P%3FFB': 'mainImage',
	'i%60B%7D': 'previewLink',
	'pC%3Di': 'description',
	yGBU: 'gitLink',
	title: 'title',
	'O%3CfP': 'videPreview',
	'j%3D%3Fc': 'text',
	'kBv%5D': 'macPreview',
	'aS%7Bi': 'status',
	'%7DUjn': 'createdTime',
} as const;
export const PROJECTS_PROPS_TO_TYPES = {
	slug: 'rich_text',
	stack: 'rich_text',
	mainImage: 'files',
	previewLink: 'url',
	description: 'rich_text',
	gitLink: 'url',
	title: 'title',
	videPreview: 'files',
	text: 'rich_text',
	macPreview: 'files',
	status: 'status',
	createdTime: 'created_time',
} as const;

export type ProjectsDTOProperties = keyof typeof PROJECTS_PROPS_TO_IDS;
