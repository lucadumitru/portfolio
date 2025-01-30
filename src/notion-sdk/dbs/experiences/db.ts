import { ExperiencesResponse, ExperiencesQuery, ExperiencesQueryResponse } from './types';
import { ExperiencesPatchDTO } from './patch.dto';
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db';
import {
	EXPERIENCES_PROPS_TO_TYPES,
	EXPERIENCES_PROPS_TO_IDS,
	ExperiencesDTOProperties,
} from './constants';

export class ExperiencesDatabase extends GenericDatabaseClass<
	ExperiencesResponse,
	ExperiencesPatchDTO,
	ExperiencesQuery,
	ExperiencesQueryResponse,
	ExperiencesDTOProperties
> {
	protected notionDatabaseId: string;

	constructor(options: DatabaseOptions) {
		super(options);

		this.notionDatabaseId = '189cb76062e3806bbc9fd268da5a8b43';
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
					throw new Error(`Experiences: Invalid filter value for ${key}: ${value}`);
				}
			} else {
				if (!(key in EXPERIENCES_PROPS_TO_TYPES)) {
					throw new Error(`Experiences: Invalid filter key: ${key}`);
				}

				const propType =
					EXPERIENCES_PROPS_TO_TYPES[key as keyof typeof EXPERIENCES_PROPS_TO_TYPES];
				const propId = EXPERIENCES_PROPS_TO_IDS[key as keyof typeof EXPERIENCES_PROPS_TO_IDS];

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
						EXPERIENCES_PROPS_TO_IDS[sort.property as keyof typeof EXPERIENCES_PROPS_TO_IDS],
					direction: sort.direction,
				};
			}

			return sort;
		});
	}

	protected queryRemapFilterProperties(filterProps?: string[]) {
		return filterProps?.map(
			(p) => EXPERIENCES_PROPS_TO_IDS[p as keyof typeof EXPERIENCES_PROPS_TO_IDS],
		);
	}
}
