import { WithOptional, Join, PathsToStringProps } from '../../core/types/helper.types';
import {
	DatabaseObjectResponse,
	StringRequest,
	CreatedTimePropertyItemObjectResponse,
	FilesPropertyItemObjectResponse,
	RichTextPropertyItemObjectResponse,
	StatusPropertyItemObjectResponse,
	TitlePropertyItemObjectResponse,
	UrlPropertyItemObjectResponse,
	ExistencePropertyFilter,
	QueryDatabaseBodyParameters,
	TimestampCreatedTimeFilter,
	TimestampLastEditedTimeFilter,
	DatePropertyFilter,
	TextPropertyFilter,
} from '../../core/types/notion-api.types';
import { PROJECTS_PROPS_TO_IDS } from './constants';

export interface ProjectsResponse
	extends WithOptional<
		Omit<DatabaseObjectResponse, 'properties'>,
		'title' | 'description' | 'is_inline' | 'url' | 'public_url'
	> {
	properties: {
		Slug: RichTextPropertyItemObjectResponse;
		Stack: RichTextPropertyItemObjectResponse;
		'Main Image': FilesPropertyItemObjectResponse;
		'Preview Link': UrlPropertyItemObjectResponse;
		Description: RichTextPropertyItemObjectResponse;
		'Git Link': UrlPropertyItemObjectResponse;
		Title: TitlePropertyItemObjectResponse;
		'Vide Preview': FilesPropertyItemObjectResponse;
		Text: RichTextPropertyItemObjectResponse;
		'Mac Preview': FilesPropertyItemObjectResponse;
		Status: Omit<StatusPropertyItemObjectResponse, 'status'> & {
			status:
				| { id: StringRequest; name: 'Draft'; color: 'default' }
				| { id: StringRequest; name: 'Published'; color: 'green' };
		};
		'Created time': CreatedTimePropertyItemObjectResponse;
	};
}

export type ProjectsResponseProperties = keyof ProjectsResponse['properties'];
export type ProjectsPath = Join<PathsToStringProps<ProjectsResponse>>;

type ProjectsSlugPropertyFilter = TextPropertyFilter;
type ProjectsStackPropertyFilter = TextPropertyFilter;
type ProjectsMainImagePropertyFilter = ExistencePropertyFilter;
type ProjectsPreviewLinkPropertyFilter = TextPropertyFilter;
type ProjectsDescriptionPropertyFilter = TextPropertyFilter;
type ProjectsGitLinkPropertyFilter = TextPropertyFilter;
type ProjectsTitlePropertyFilter = TextPropertyFilter;
type ProjectsVidePreviewPropertyFilter = ExistencePropertyFilter;
type ProjectsTextPropertyFilter = TextPropertyFilter;
type ProjectsMacPreviewPropertyFilter = ExistencePropertyFilter;

export type ProjectsStatusPropertyType = ProjectsResponse['properties']['Status']['status']['name'];

type ProjectsStatusPropertyFilter =
	| {
			equals: ProjectsStatusPropertyType;
	  }
	| {
			does_not_equal: ProjectsStatusPropertyType;
	  }
	| ExistencePropertyFilter;

type ProjectsCreatedTimePropertyFilter = DatePropertyFilter;

export type ProjectsPropertyFilter =
	| { slug: ProjectsSlugPropertyFilter }
	| { stack: ProjectsStackPropertyFilter }
	| { mainImage: ProjectsMainImagePropertyFilter }
	| { previewLink: ProjectsPreviewLinkPropertyFilter }
	| { description: ProjectsDescriptionPropertyFilter }
	| { gitLink: ProjectsGitLinkPropertyFilter }
	| { title: ProjectsTitlePropertyFilter }
	| { videPreview: ProjectsVidePreviewPropertyFilter }
	| { text: ProjectsTextPropertyFilter }
	| { macPreview: ProjectsMacPreviewPropertyFilter }
	| { status: ProjectsStatusPropertyFilter }
	| { createdTime: ProjectsCreatedTimePropertyFilter };

export type ProjectsQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
	sorts?: Array<
		| {
				property: keyof typeof PROJECTS_PROPS_TO_IDS;
				direction: 'ascending' | 'descending';
		  }
		| {
				timestamp: 'created_time' | 'last_edited_time';
				direction: 'ascending' | 'descending';
		  }
	>;
	filter?:
		| {
				or: Array<
					| ProjectsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: ProjectsQuery['filter']
							or: Array<ProjectsPropertyFilter>;
					  }
					| {
							// and: ProjectsQuery['filter']
							and: Array<ProjectsPropertyFilter>;
					  }
				>;
		  }
		| {
				and: Array<
					| ProjectsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: ProjectsQuery['filter']
							or: Array<ProjectsPropertyFilter>;
					  }
					| {
							// and: ProjectsQuery['filter']
							and: Array<ProjectsPropertyFilter>;
					  }
				>;
		  }
		| ProjectsPropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter;
};

export type ProjectsQueryFilter = ProjectsQuery['filter'];

export type ProjectsQueryResponse = {
	results: ProjectsResponse[];
	next_cursor: string | null;
	has_more: boolean;
};
