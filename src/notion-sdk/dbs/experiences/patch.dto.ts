import { ExperiencesResponse } from './types';
import { UpdatePageBodyParameters, RichTextItemRequest } from '../../core/types/notion-api.types';

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never;

export type ExperiencesPropertiesPatch = {
	period?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'date' }>['date'];
	company?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
	jobType?: ExperiencesResponse['properties']['Job Type']['select']['name'];
	location?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
	title?:
		| string
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] }
		| RichTextItemRequest[];
};

export class ExperiencesPatchDTO {
	__data: UpdatePageBodyParameters;

	constructor(opts: {
		properties?: ExperiencesPropertiesPatch;
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

		if (props?.period !== undefined) {
			this.__data.properties['K%5EJF'] = {
				type: 'date',
				date: props.period,
			};
		}

		if (props?.company !== undefined) {
			this.__data.properties['TtT~'] = {
				type: 'rich_text',
				rich_text:
					typeof props.company === 'string'
						? [{ type: 'text', text: { content: props.company } }]
						: Array.isArray(props.company)
							? props.company
							: props.company === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.company.text,
												link: props.company?.url
													? { url: props.company.url }
													: undefined,
											},
											annotations: props.company.annotations,
										},
									],
			};
		}

		if (props?.jobType !== undefined) {
			this.__data.properties['io_g'] = {
				type: 'select',
				select: { name: props.jobType },
			};
		}

		if (props?.location !== undefined) {
			this.__data.properties['njiw'] = {
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
