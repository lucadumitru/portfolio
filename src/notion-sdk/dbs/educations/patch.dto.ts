import { EducationsResponse } from './types';
import { UpdatePageBodyParameters, RichTextItemRequest } from '../../core/types/notion-api.types';

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never;

export type EducationsPropertiesPatch = {
	location?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
	period?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'date' }>['date'];
	institution?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
	studyType?: EducationsResponse['properties']['Study Type']['select']['name'];
	title?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
};

export class EducationsPatchDTO {
	__data: UpdatePageBodyParameters;

	constructor(opts: {
		properties?: EducationsPropertiesPatch;
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

		if (props?.location !== undefined) {
			this.__data.properties['Z%3B%60R'] = {
				type: 'rich_text',
				rich_text:
					typeof props.location === 'string'
						? [{ type: 'text', text: { content: props.location } }]
						: Array.isArray(props.location)
							? props.location
							: props.location === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.location.text,
												link: props.location?.url
													? { url: props.location.url }
													: undefined,
											},
											annotations: props.location.annotations,
										},
									],
			};
		}

		if (props?.period !== undefined) {
			this.__data.properties['g%3E%5CT'] = {
				type: 'date',
				date: props.period,
			};
		}

		if (props?.institution !== undefined) {
			this.__data.properties['gor%7B'] = {
				type: 'rich_text',
				rich_text:
					typeof props.institution === 'string'
						? [{ type: 'text', text: { content: props.institution } }]
						: Array.isArray(props.institution)
							? props.institution
							: props.institution === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.institution.text,
												link: props.institution?.url
													? { url: props.institution.url }
													: undefined,
											},
											annotations: props.institution.annotations,
										},
									],
			};
		}

		if (props?.studyType !== undefined) {
			this.__data.properties['siEY'] = {
				type: 'select',
				select: { name: props.studyType },
			};
		}

		if (props?.title !== undefined) {
			this.__data.properties['title'] = {
				type: 'title',
				title:
					typeof props.title === 'string'
						? [{ type: 'text', text: { content: props.title } }]
						: Array.isArray(props.title)
							? props.title
							: props.title === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.title.text,
												link: props.title?.url ? { url: props.title.url } : undefined,
											},
											annotations: props.title.annotations,
										},
									],
			};
		}
	}
}
