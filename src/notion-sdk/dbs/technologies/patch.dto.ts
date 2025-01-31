import { TechnologiesResponse } from './types';
import { UpdatePageBodyParameters, RichTextItemRequest } from '../../core/types/notion-api.types';

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never;

export type TechnologiesPropertiesPatch = {
	image?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'files' }>['files'];
	darkThemeImage?: TypeFromRecord<
		UpdatePageBodyParameters['properties'],
		{ type?: 'files' }
	>['files'];
	name?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
};

export class TechnologiesPatchDTO {
	__data: UpdatePageBodyParameters;

	constructor(opts: {
		properties?: TechnologiesPropertiesPatch;
		coverUrl?: string;
		icon?: UpdatePageBodyParameters['icon'];
		archived?: UpdatePageBodyParameters['archived'];
	}) {
		const { properties: props, coverUrl, icon, archived } = opts;

		this.__data = {};
		this.__data.properties = {};
		this.__data.cover = coverUrl ? { type: 'external', external: { url: coverUrl } } : undefined;
		this.__data.icon = icon;
		this.__data.archived = archived;

		if (props?.image !== undefined) {
			this.__data.properties['OZN%3D'] = {
				type: 'files',
				files: props.image,
			};
		}

		if (props?.darkThemeImage !== undefined) {
			this.__data.properties['knbN'] = {
				type: 'files',
				files: props.darkThemeImage,
			};
		}

		if (props?.name !== undefined) {
			this.__data.properties['title'] = {
				type: 'title',
				title:
					typeof props.name === 'string'
						? [{ type: 'text', text: { content: props.name } }]
						: Array.isArray(props.name)
							? props.name
							: props.name === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.name.text,
												link: props.name?.url ? { url: props.name.url } : undefined,
											},
											annotations: props.name.annotations,
										},
									],
			};
		}
	}
}
