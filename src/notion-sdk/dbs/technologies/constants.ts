export const TECHNOLOGIES_PROP_VALUES = {};

export const TECHNOLOGIES_PROPS_TO_IDS = {
	image: 'OZN%3D',
	darkThemeImage: 'knbN',
	name: 'title',
} as const;
export const TECHNOLOGIES_IDS_TO_PROPS = {
	'OZN%3D': 'image',
	knbN: 'darkThemeImage',
	title: 'name',
} as const;
export const TECHNOLOGIES_PROPS_TO_TYPES = {
	image: 'files',
	darkThemeImage: 'files',
	name: 'title',
} as const;

export type TechnologiesDTOProperties = keyof typeof TECHNOLOGIES_PROPS_TO_IDS;
