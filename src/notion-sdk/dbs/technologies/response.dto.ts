import { TechnologiesResponse } from './types';

export class TechnologiesResponseDTO {
	__data: TechnologiesResponse;
	id: TechnologiesResponse['id'];
	title: TechnologiesResponse['title'];
	description: TechnologiesResponse['description'];
	parent: TechnologiesResponse['parent'];
	createdBy: TechnologiesResponse['created_by'];
	lastEditedBy: TechnologiesResponse['last_edited_by'];
	createdTime: TechnologiesResponse['created_time'];
	lastEditedTime: TechnologiesResponse['last_edited_time'];
	isInline: TechnologiesResponse['is_inline'];
	archived: TechnologiesResponse['archived'];
	url: TechnologiesResponse['url'];
	publicUrl: TechnologiesResponse['public_url'];
	properties: TechnologiesPropertiesResponseDTO;

	constructor(res: TechnologiesResponse) {
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
		this.properties = new TechnologiesPropertiesResponseDTO(res.properties);
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

export class TechnologiesPropertiesResponseDTO {
	__props: TechnologiesResponse['properties'];
	__data;

	constructor(props: TechnologiesResponse['properties']) {
		this.__props = props;
		this.__data = {
			image: this.__props['Image'],
			darkThemeImage: this.__props['Dark Theme Image'],
			name: this.__props['Name'],
		};
	}

	get image() {
		return {
			urls: this.__props['Image'].files.map((item) =>
				item.type === 'external'
					? item.external.url
					: item.type === 'file'
						? item.file.url
						: undefined,
			),
		};
	}

	get darkThemeImage() {
		return {
			urls: this.__props['Dark Theme Image'].files.map((item) =>
				item.type === 'external'
					? item.external.url
					: item.type === 'file'
						? item.file.url
						: undefined,
			),
		};
	}

	get name() {
		return {
			text: this.__props['Name']?.title
				? this.__props['Name'].title.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props['Name']?.title
				? this.__props['Name'].title
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			title: this.__props['Name']?.title,
		};
	}
}
