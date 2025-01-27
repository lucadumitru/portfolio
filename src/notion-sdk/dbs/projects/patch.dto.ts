import type {
	RichTextItemRequest,
	UpdatePageBodyParameters,
} from '../../core/types/notion-api.types';

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never;

export interface ProjectsPropertiesPatch {
	gitLink?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'url' }>['url'];
	macPreview?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'files' }>['files'];
	mainImage?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'files' }>['files'];
	previewLink?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'url' }>['url'];
	status?: TypeFromRecord<UpdatePageBodyParameters['properties'], { type?: 'status' }>['status'];
	description?:
		| string
		| RichTextItemRequest[]
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] };
	slug?:
		| string
		| RichTextItemRequest[]
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] };
	stack?:
		| string
		| RichTextItemRequest[]
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] };
	text?:
		| string
		| RichTextItemRequest[]
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] };
	title?:
		| string
		| RichTextItemRequest[]
		| { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] };
	videPreview?: TypeFromRecord<
		UpdatePageBodyParameters['properties'],
		{ type?: 'files' }
	>['files'];
}

export class ProjectsPatchDTO {
	__data: UpdatePageBodyParameters;

	constructor(opts: {
		properties?: ProjectsPropertiesPatch;
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

		if (props?.slug !== undefined) {
			this.__data.properties['Kd%7Dc'] = {
				type: 'rich_text',
				rich_text:
					typeof props.slug === 'string'
						? [{ type: 'text', text: { content: props.slug } }]
						: Array.isArray(props.slug)
							? props.slug
							: props.slug === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.slug.text,
												link: props.slug?.url ? { url: props.slug.url } : undefined,
											},
											annotations: props.slug.annotations,
										},
									],
			};
		}

		if (props?.stack !== undefined) {
			this.__data.properties['P%3B%3A%40'] = {
				type: 'rich_text',
				rich_text:
					typeof props.stack === 'string'
						? [{ type: 'text', text: { content: props.stack } }]
						: Array.isArray(props.stack)
							? props.stack
							: props.stack === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.stack.text,
												link: props.stack?.url ? { url: props.stack.url } : undefined,
											},
											annotations: props.stack.annotations,
										},
									],
			};
		}

		if (props?.mainImage !== undefined) {
			this.__data.properties['P%3FFB'] = {
				type: 'files',
				files: props.mainImage,
			};
		}

		if (props?.previewLink !== undefined) {
			this.__data.properties['i%60B%7D'] = {
				type: 'url',
				url: props.previewLink,
			};
		}

		if (props?.description !== undefined) {
			this.__data.properties['pC%3Di'] = {
				type: 'rich_text',
				rich_text:
					typeof props.description === 'string'
						? [{ type: 'text', text: { content: props.description } }]
						: Array.isArray(props.description)
							? props.description
							: props.description === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.description.text,
												link: props.description?.url
													? { url: props.description.url }
													: undefined,
											},
											annotations: props.description.annotations,
										},
									],
			};
		}

		if (props?.gitLink !== undefined) {
			this.__data.properties.yGBU = {
				type: 'url',
				url: props.gitLink,
			};
		}

		if (props?.title !== undefined) {
			this.__data.properties.title = {
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

		if (props?.videPreview !== undefined) {
			this.__data.properties['O%3CfP'] = {
				type: 'files',
				files: props.videPreview,
			};
		}

		if (props?.text !== undefined) {
			this.__data.properties['j%3D%3Fc'] = {
				type: 'rich_text',
				rich_text:
					typeof props.text === 'string'
						? [{ type: 'text', text: { content: props.text } }]
						: Array.isArray(props.text)
							? props.text
							: props.text === null
								? []
								: [
										{
											type: 'text',
											text: {
												content: props.text.text,
												link: props.text?.url ? { url: props.text.url } : undefined,
											},
											annotations: props.text.annotations,
										},
									],
			};
		}

		if (props?.macPreview !== undefined) {
			this.__data.properties['kBv%5D'] = {
				type: 'files',
				files: props.macPreview,
			};
		}

		if (props?.status !== undefined) {
			this.__data.properties['aS%7Bi'] = {
				type: 'status',
				status: props.status,
			};
		}
	}
}
