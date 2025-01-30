import { EducationsResponse } from './types';

export class EducationsResponseDTO {
	__data: EducationsResponse;
	id: EducationsResponse['id'];
	title: EducationsResponse['title'];
	description: EducationsResponse['description'];
	parent: EducationsResponse['parent'];
	createdBy: EducationsResponse['created_by'];
	lastEditedBy: EducationsResponse['last_edited_by'];
	createdTime: EducationsResponse['created_time'];
	lastEditedTime: EducationsResponse['last_edited_time'];
	isInline: EducationsResponse['is_inline'];
	archived: EducationsResponse['archived'];
	url: EducationsResponse['url'];
	publicUrl: EducationsResponse['public_url'];
	properties: EducationsPropertiesResponseDTO;

	constructor(res: EducationsResponse) {
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
		this.properties = new EducationsPropertiesResponseDTO(res.properties);
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

export class EducationsPropertiesResponseDTO {
	__props: EducationsResponse['properties'];
	__data;

	constructor(props: EducationsResponse['properties']) {
		this.__props = props;
		this.__data = {
			location: this.__props['Location'],
			period: this.__props['Period'],
			institution: this.__props['Institution'],
			studyType: this.__props['Study Type'],
			title: this.__props['Title'],
		};
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

	get period() {
		return this.__props['Period']?.date;
	}

	get institution() {
		return {
			text: this.__props['Institution']?.rich_text
				? this.__props['Institution'].rich_text.reduce((acc, item) => acc + item.plain_text, '')
				: undefined,
			links: this.__props['Institution']?.rich_text
				? this.__props['Institution'].rich_text
						.filter((item) => item.href?.length)
						.map((item) => item.href)
				: [],
			rich_text: this.__props['Institution']?.rich_text,
		};
	}

	get studyType() {
		return this.__props['Study Type']?.select;
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
