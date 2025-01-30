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
import { EDUCATIONS_PROPS_TO_IDS } from './constants';

export interface EducationsResponse
	extends WithOptional<
		Omit<DatabaseObjectResponse, 'properties'>,
		'title' | 'description' | 'is_inline' | 'url' | 'public_url'
	> {
	properties: {
		Location: RichTextPropertyItemObjectResponse;
		Period: DatePropertyItemObjectResponse;
		Institution: RichTextPropertyItemObjectResponse;
		'Study Type': Omit<SelectPropertyItemObjectResponse, 'select'> & {
			select: { id: StringRequest; name: 'Full Time'; color: 'gray' };
		};
		Title: TitlePropertyItemObjectResponse;
	};
}

export type EducationsResponseProperties = keyof EducationsResponse['properties'];
export type EducationsPath = Join<PathsToStringProps<EducationsResponse>>;

type EducationsLocationPropertyFilter = TextPropertyFilter;
type EducationsPeriodPropertyFilter = DatePropertyFilter;
type EducationsInstitutionPropertyFilter = TextPropertyFilter;

export type EducationsStudyTypePropertyType =
	EducationsResponse['properties']['Study Type']['select']['name'];

type EducationsStudyTypePropertyFilter =
	| {
			equals: EducationsStudyTypePropertyType;
	  }
	| {
			does_not_equal: EducationsStudyTypePropertyType;
	  }
	| ExistencePropertyFilter;

type EducationsTitlePropertyFilter = TextPropertyFilter;

export type EducationsPropertyFilter =
	| { location: EducationsLocationPropertyFilter }
	| { period: EducationsPeriodPropertyFilter }
	| { institution: EducationsInstitutionPropertyFilter }
	| { studyType: EducationsStudyTypePropertyFilter }
	| { title: EducationsTitlePropertyFilter };

export type EducationsQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
	sorts?: Array<
		| {
				property: keyof typeof EDUCATIONS_PROPS_TO_IDS;
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
					| EducationsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: EducationsQuery['filter']
							or: Array<EducationsPropertyFilter>;
					  }
					| {
							// and: EducationsQuery['filter']
							and: Array<EducationsPropertyFilter>;
					  }
				>;
		  }
		| {
				and: Array<
					| EducationsPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: EducationsQuery['filter']
							or: Array<EducationsPropertyFilter>;
					  }
					| {
							// and: EducationsQuery['filter']
							and: Array<EducationsPropertyFilter>;
					  }
				>;
		  }
		| EducationsPropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter;
};

export type EducationsQueryFilter = EducationsQuery['filter'];

export type EducationsQueryResponse = {
	results: EducationsResponse[];
	next_cursor: string | null;
	has_more: boolean;
};
