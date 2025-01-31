import { TechnologiesResponse, TechnologiesQuery, TechnologiesQueryResponse } from './types';
import { TechnologiesPatchDTO } from './patch.dto';
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db';
import {
	TECHNOLOGIES_PROPS_TO_TYPES,
	TECHNOLOGIES_PROPS_TO_IDS,
	TechnologiesDTOProperties,
} from './constants';

export class TechnologiesDatabase extends GenericDatabaseClass<
	TechnologiesResponse,
	TechnologiesPatchDTO,
	TechnologiesQuery,
	TechnologiesQueryResponse,
	TechnologiesDTOProperties
> {
	protected notionDatabaseId: string;

	constructor(options: DatabaseOptions) {
		super(options);

		this.notionDatabaseId = '18ccb76062e380fe8226cd3fa85607ea';
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
					throw new Error(`Technologies: Invalid filter value for ${key}: ${value}`);
				}
			} else {
				if (!(key in TECHNOLOGIES_PROPS_TO_TYPES)) {
					throw new Error(`Technologies: Invalid filter key: ${key}`);
				}

				const propType =
					TECHNOLOGIES_PROPS_TO_TYPES[key as keyof typeof TECHNOLOGIES_PROPS_TO_TYPES];
				const propId = TECHNOLOGIES_PROPS_TO_IDS[key as keyof typeof TECHNOLOGIES_PROPS_TO_IDS];

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
						TECHNOLOGIES_PROPS_TO_IDS[
							sort.property as keyof typeof TECHNOLOGIES_PROPS_TO_IDS
						],
					direction: sort.direction,
				};
			}

			return sort;
		});
	}

	protected queryRemapFilterProperties(filterProps?: string[]) {
		return filterProps?.map(
			(p) => TECHNOLOGIES_PROPS_TO_IDS[p as keyof typeof TECHNOLOGIES_PROPS_TO_IDS],
		);
	}
}
