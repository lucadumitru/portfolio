import { ExperiencesResponse } from './types';

export class ExperiencesResponseDTO {
	__data: ExperiencesResponse;
	id: ExperiencesResponse['id'];
	title: ExperiencesResponse['title'];
	description: ExperiencesResponse['description'];
	parent: ExperiencesResponse['parent'];
	createdBy: ExperiencesResponse['created_by'];
	lastEditedBy: ExperiencesResponse['last_edited_by'];
	createdTime: ExperiencesResponse['created_time'];
	lastEditedTime: ExperiencesResponse['last_edited_time'];
	isInline: ExperiencesResponse['is_inline'];
	archived: ExperiencesResponse['archived'];
	url: ExperiencesResponse['url'];
	publicUrl: ExperiencesResponse['public_url'];
	properties: ExperiencesPropertiesResponseDTO;

	constructor(res: ExperiencesResponse) {
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
		this.properties = new ExperiencesPropertiesResponseDTO(res.properties);
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

export class ExperiencesPropertiesResponseDTO {
	__props: ExperiencesResponse['properties'];
	__data;

	constructor(props: ExperiencesResponse['properties']) {
		this.__props = props;
		this.__data = {
			period: this.__props['Period'],
			company: this.__props['Company'],
			jobType: this.__props['Job Type'],
			location: this.__props['Location'],
			title: this.__props['Title'],
		};
	}

	get period() {
		return this.__props['Period']?.date;
	}

	get company() {
		return {
			text: this.__props['Company']?.rich_text
				? this.__props['Company'].rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props['Company']?.rich_text
				? this.__props['Company'].rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props['Company']?.rich_text,
		};
	}

	get jobType() {
		return this.__props['Job Type']?.select;
	}

	get location() {
		return {
			text: this.__props['Location']?.rich_text
				? this.__props['Location'].rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props['Location']?.rich_text
				? this.__props['Location'].rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props['Location']?.rich_text,
		};
	}

	get title() {
		return {
			text: this.__props['Title']?.title
				? this.__props['Title'].title.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props['Title']?.title
				? this.__props['Title'].title
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			title: this.__props['Title']?.title,
		};
	}
}
