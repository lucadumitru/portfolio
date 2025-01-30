import { WithOptional, Join, PathsToStringProps } from '../../core/types/helper.types';
import {
	DatabaseObjectResponse,
	StringRequest,
	DatePropertyItemObjectResponse,
	RichTextPropertyItemObjectResponse,
	SelectPropertyItemObjectResponse,
	TitlePropertyItemObjectResponse,
	ExistencePropertyFilter,
	QueryDatabaseBodyParameters,
	TimestampCreatedTimeFilter,
	TimestampLastEditedTimeFilter,
	DatePropertyFilter,
	TextPropertyFilter,
} from '../../core/types/notion-api.types';
import { EXPERIENCES_PROPS_TO_IDS } from './constants';

export interface ExperiencesResponse
	extends WithOptional<
		Omit<DatabaseObjectResponse, 'properties'>,
		'title' | 'description' | 'is_inline' | 'url' | 'public_url'
	> {
	properties: {
		Period: DatePropertyItemObjectResponse;
		Company: RichTextPropertyItemObjectResponse;
		'Job Type': Omit<SelectPropertyItemObjectResponse, 'select'> & {
			select:
				| { id: StringRequest; name: 'Full TIme'; color: 'yellow' }
				| { id: StringRequest; name: 'Intership'; color: 'gray' }
				| { id: StringRequest; name: 'Part Time'; color: 'blue' };
		};
		Location: RichTextPropertyItemObjectResponse;
		Title: TitlePropertyItemObjectResponse;
	};
}

export type ExperiencesResponseProperties = keyof ExperiencesResponse['properties'];
export type ExperiencesPath = Join<PathsToStringProps<ExperiencesResponse>>;

type ExperiencesPeriodPropertyFilter = DatePropertyFilter;
type ExperiencesCompanyPropertyFilter = TextPropertyFilter;

export type ExperiencesJobTypePropertyType =
	ExperiencesResponse['properties']['Job Type']['select']['name'];

type ExperiencesJobTypePropertyFilter =
	| {
			equals: ExperiencesJobTypePropertyType;
	  }
	| {
			does_not_equal: ExperiencesJobTypePropertyType;
	  }
	| ExistencePropertyFilter;

type ExperiencesLocationPropertyFilter = TextPropertyFilter;
type ExperiencesTitlePropertyFilter = TextPropertyFilter;

export type ExperiencesPropertyFilter =
	| { period: ExperiencesPeriodPropertyFilter }
	| { company: ExperiencesCompanyPropertyFilter }
	| { jobType: ExperiencesJobTypePropertyFilter }
	| { location: ExperiencesLocationPropertyFilter }
	| { title: ExperiencesTitlePropertyFilter };

export type ExperiencesQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
	sorts?: Array<
		| {
				property: keyof typeof EXPERIENCES_PROPS_TO_IDS;
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
					| ExperiencesPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: ExperiencesQuery['filter']
							or: Array<ExperiencesPropertyFilter>;
					  }
					| {
							// and: ExperiencesQuery['filter']
							and: Array<ExperiencesPropertyFilter>;
					  }
				>;
		  }
		| {
				and: Array<
					| ExperiencesPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: ExperiencesQuery['filter']
							or: Array<ExperiencesPropertyFilter>;
					  }
					| {
							// and: ExperiencesQuery['filter']
							and: Array<ExperiencesPropertyFilter>;
					  }
				>;
		  }
		| ExperiencesPropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter;
};

export type ExperiencesQueryFilter = ExperiencesQuery['filter'];

export type ExperiencesQueryResponse = {
	results: ExperiencesResponse[];
	next_cursor: string | null;
	has_more: boolean;
};
