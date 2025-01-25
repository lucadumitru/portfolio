import type { ProjectsResponse } from './types';

export class ProjectsResponseDTO {
	__data: ProjectsResponse;
	id: ProjectsResponse['id'];
	title: ProjectsResponse['title'];
	description: ProjectsResponse['description'];
	parent: ProjectsResponse['parent'];
	createdBy: ProjectsResponse['created_by'];
	lastEditedBy: ProjectsResponse['last_edited_by'];
	createdTime: ProjectsResponse['created_time'];
	lastEditedTime: ProjectsResponse['last_edited_time'];
	isInline: ProjectsResponse['is_inline'];
	archived: ProjectsResponse['archived'];
	url: ProjectsResponse['url'];
	publicUrl: ProjectsResponse['public_url'];
	properties: ProjectsPropertiesResponseDTO;

	constructor(res: ProjectsResponse) {
		this.__data = res;
		this.id = res.id;
		this.title = res.title;
		this.description = res.description;
		this.parent = res.parent;
		this.createdBy = res.created_by;
		this.lastEditedBy = res.last_edited_by;
		this.createdTime = res.created_time;
		this.lastEditedTime = res.last_edited_time;
		this.isInline = res.is_inline;
		this.archived = res.archived;
		this.url = res.url;
		this.publicUrl = res.public_url;
		this.properties = new ProjectsPropertiesResponseDTO(res.properties);
	}

	get cover() {
		return {
			type: this.__data.cover?.type,
			url:
				this.__data.cover?.type === 'external'
					? this.__data.cover?.external?.url
					: this.__data.cover?.file?.url,
		};
	}

	get icon() {
		return {
			type: this.__data.icon?.type,
			url:
				this.__data.icon?.type === 'external'
					? this.__data.icon?.external?.url
					: this.__data.icon?.type === 'file'
						? this.__data.icon?.file?.url
						: undefined,
			emoji: this.__data.icon?.type === 'emoji' ? this.__data.icon?.emoji : undefined,
		};
	}
}

export class ProjectsPropertiesResponseDTO {
	__props: ProjectsResponse['properties'];
	__data;

	constructor(props: ProjectsResponse['properties']) {
		this.__props = props;
		this.__data = {
			slug: this.__props.Slug,
			stack: this.__props.Stack,
			mainImage: this.__props['Main Image'],
			previewLink: this.__props['Preview Link'],
			description: this.__props.Description,
			gitLink: this.__props['Git Link'],
			title: this.__props.Title,
			id: this.__props.ID,
			videPreview: this.__props['Vide Preview'],
			text: this.__props.Text,
			macPreview: this.__props['Mac Preview'],
			status: this.__props.Status,
			createdTime: this.__props['Created time'],
		};
	}

	get slug() {
		return {
			text: this.__props.Slug?.rich_text
				? this.__props.Slug.rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props.Slug?.rich_text
				? this.__props.Slug.rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props.Slug?.rich_text,
		};
	}

	get stack() {
		return {
			text: this.__props.Stack?.rich_text
				? this.__props.Stack.rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props.Stack?.rich_text
				? this.__props.Stack.rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props.Stack?.rich_text,
		};
	}

	get mainImage() {
		return {
			urls: this.__props['Main Image'].files.map((item) =>
				item.type === 'external'
					? item.external.url
					: item.type === 'file'
						? item.file.url
						: undefined,
			),
		};
	}

	get previewLink() {
		return this.__props['Preview Link']?.url;
	}

	get description() {
		return {
			text: this.__props.Description?.rich_text
				? this.__props.Description.rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props.Description?.rich_text
				? this.__props.Description.rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props.Description?.rich_text,
		};
	}

	get gitLink() {
		return this.__props['Git Link']?.url;
	}

	get title() {
		return {
			text: this.__props.Title?.title
				? this.__props.Title.title.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props.Title?.title
				? this.__props.Title.title.filter((item) => item.href?.length).map((item) => item.href)
				: [],
			title: this.__props.Title?.title,
		};
	}

	get id() {
		return this.__props.ID?.unique_id;
	}

	get videPreview() {
		return {
			urls: this.__props['Vide Preview'].files.map((item) =>
				item.type === 'external'
					? item.external.url
					: item.type === 'file'
						? item.file.url
						: undefined,
			),
		};
	}

	get text() {
		return {
			text: this.__props.Text?.rich_text
				? this.__props.Text.rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props.Text?.rich_text
				? this.__props.Text.rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props.Text?.rich_text,
		};
	}

	get macPreview() {
		return {
			urls: this.__props['Mac Preview'].files.map((item) =>
				item.type === 'external'
					? item.external.url
					: item.type === 'file'
						? item.file.url
						: undefined,
			),
		};
	}

	get status() {
		return this.__props.Status?.status;
	}

	get createdTime() {
		return this.__props['Created time']?.created_time;
	}
}
