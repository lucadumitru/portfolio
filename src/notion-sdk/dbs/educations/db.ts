import { EducationsResponse, EducationsQuery, EducationsQueryResponse } from './types';
import { EducationsPatchDTO } from './patch.dto';
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db';
import {
	EDUCATIONS_PROPS_TO_TYPES,
	EDUCATIONS_PROPS_TO_IDS,
	EducationsDTOProperties,
} from './constants';

export class EducationsDatabase extends GenericDatabaseClass<
	EducationsResponse,
	EducationsPatchDTO,
	EducationsQuery,
	EducationsQueryResponse,
	EducationsDTOProperties
> {
	protected notionDatabaseId: string;

	constructor(options: DatabaseOptions) {
		super(options);

		this.notionDatabaseId = '189cb76062e380debe43d59ae1360f70';
	}

	protected queryRemapFilter(filter?: Record<string, unknown>) {
		if (!filter) {
			return undefined;
		}

		const notionFilter = {} as Record<string, unknown>;

		Object.entries(filter).forEach(([key, value]) => {
			if (key === 'and' || key === 'or') {
				if (Array.isArray(value)) {
					notionFilter[key] = value.map((v) => this.queryRemapFilter(v));
				} else {
					throw new Error(`Educations: Invalid filter value for ${key}: ${value}`);
				}
			} else {
				if (!(key in EDUCATIONS_PROPS_TO_TYPES)) {
					throw new Error(`Educations: Invalid filter key: ${key}`);
				}

				const propType =
					EDUCATIONS_PROPS_TO_TYPES[key as keyof typeof EDUCATIONS_PROPS_TO_TYPES];
				const propId = EDUCATIONS_PROPS_TO_IDS[key as keyof typeof EDUCATIONS_PROPS_TO_IDS];

				notionFilter['property'] = propId;
				notionFilter[propType] = value;
			}
		});

		return notionFilter;
	}

	protected queryRemapSorts(sorts?: Record<string, string>[]) {
		return sorts?.map((sort) => {
			if ('property' in sort) {
				return {
					property:
						EDUCATIONS_PROPS_TO_IDS[sort.property as keyof typeof EDUCATIONS_PROPS_TO_IDS],
					direction: sort.direction,
				};
			}

			return sort;
		});
	}

	protected queryRemapFilterProperties(filterProps?: string[]) {
		return filterProps?.map(
			(p) => EDUCATIONS_PROPS_TO_IDS[p as keyof typeof EDUCATIONS_PROPS_TO_IDS],
		);
	}
}
