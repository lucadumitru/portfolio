import type { Join, PathsToStringProps, WithOptional } from '../../core/types/helper.types';
import type {
	CreatedTimePropertyItemObjectResponse,
	DatabaseObjectResponse,
	DatePropertyFilter,
	ExistencePropertyFilter,
	FilesPropertyItemObjectResponse,
	QueryDatabaseBodyParameters,
	RichTextPropertyItemObjectResponse,
	StatusPropertyItemObjectResponse,
	StringRequest,
	TextPropertyFilter,
	TimestampCreatedTimeFilter,
	TimestampLastEditedTimeFilter,
	TitlePropertyItemObjectResponse,
	UrlPropertyItemObjectResponse,
} from '../../core/types/notion-api.types';
import type { PROJECTS_PROPS_TO_IDS } from './constants';

export interface ProjectsResponse
	extends WithOptional<
		Omit<DatabaseObjectResponse, 'properties'>,
		'description' | 'is_inline' | 'public_url' | 'title' | 'url'
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
	| ExistencePropertyFilter
	| {
			does_not_equal: ProjectsStatusPropertyType;
	  }
	| {
			equals: ProjectsStatusPropertyType;
	  };

type ProjectsCreatedTimePropertyFilter = DatePropertyFilter;

export type ProjectsPropertyFilter =
	| { createdTime: ProjectsCreatedTimePropertyFilter }
	| { description: ProjectsDescriptionPropertyFilter }
	| { gitLink: ProjectsGitLinkPropertyFilter }
	| { macPreview: ProjectsMacPreviewPropertyFilter }
	| { mainImage: ProjectsMainImagePropertyFilter }
	| { previewLink: ProjectsPreviewLinkPropertyFilter }
	| { slug: ProjectsSlugPropertyFilter }
	| { stack: ProjectsStackPropertyFilter }
	| { status: ProjectsStatusPropertyFilter }
	| { text: ProjectsTextPropertyFilter }
	| { title: ProjectsTitlePropertyFilter }
	| { videPreview: ProjectsVidePreviewPropertyFilter };

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
		| ProjectsPropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter
		| {
				and: Array<
					| ProjectsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// and: ProjectsQuery['filter']
							and: Array<ProjectsPropertyFilter>;
					  }
					| {
							// or: ProjectsQuery['filter']
							or: Array<ProjectsPropertyFilter>;
					  }
				>;
		  }
		| {
				or: Array<
					| ProjectsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// and: ProjectsQuery['filter']
							and: Array<ProjectsPropertyFilter>;
					  }
					| {
							// or: ProjectsQuery['filter']
							or: Array<ProjectsPropertyFilter>;
					  }
				>;
		  };
};

export type ProjectsQueryFilter = ProjectsQuery['filter'];

export interface ProjectsQueryResponse {
	has_more: boolean;
	next_cursor: string | null;
	results: ProjectsResponse[];
}
