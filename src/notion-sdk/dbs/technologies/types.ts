import { WithOptional, Join, PathsToStringProps } from '../../core/types/helper.types';
import {
	DatabaseObjectResponse,
	StringRequest,
	FilesPropertyItemObjectResponse,
	TitlePropertyItemObjectResponse,
	ExistencePropertyFilter,
	QueryDatabaseBodyParameters,
	TimestampCreatedTimeFilter,
	TimestampLastEditedTimeFilter,
	TextPropertyFilter,
} from '../../core/types/notion-api.types';
import { TECHNOLOGIES_PROPS_TO_IDS } from './constants';

export interface TechnologiesResponse
	extends WithOptional<
		Omit<DatabaseObjectResponse, 'properties'>,
		'title' | 'description' | 'is_inline' | 'url' | 'public_url'
	> {
	properties: {
		Image: FilesPropertyItemObjectResponse;
		'Dark Theme Image': FilesPropertyItemObjectResponse;
		Name: TitlePropertyItemObjectResponse;
	};
}

export type TechnologiesResponseProperties = keyof TechnologiesResponse['properties'];
export type TechnologiesPath = Join<PathsToStringProps<TechnologiesResponse>>;

type TechnologiesImagePropertyFilter = ExistencePropertyFilter;
type TechnologiesDarkThemeImagePropertyFilter = ExistencePropertyFilter;
type TechnologiesNamePropertyFilter = TextPropertyFilter;

export type TechnologiesPropertyFilter =
	| { image: TechnologiesImagePropertyFilter }
	| { darkThemeImage: TechnologiesDarkThemeImagePropertyFilter }
	| { name: TechnologiesNamePropertyFilter };

export type TechnologiesQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
	sorts?: Array<
		| {
				property: keyof typeof TECHNOLOGIES_PROPS_TO_IDS;
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
					| TechnologiesPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: TechnologiesQuery['filter']
							or: Array<TechnologiesPropertyFilter>;
					  }
					| {
							// and: TechnologiesQuery['filter']
							and: Array<TechnologiesPropertyFilter>;
					  }
				>;
		  }
		| {
				and: Array<
					| TechnologiesPropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| {
							// or: TechnologiesQuery['filter']
							or: Array<TechnologiesPropertyFilter>;
					  }
					| {
							// and: TechnologiesQuery['filter']
							and: Array<TechnologiesPropertyFilter>;
					  }
				>;
		  }
		| TechnologiesPropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter;
};

export type TechnologiesQueryFilter = TechnologiesQuery['filter'];

export type TechnologiesQueryResponse = {
	results: TechnologiesResponse[];
	next_cursor: string | null;
	has_more: boolean;
};
