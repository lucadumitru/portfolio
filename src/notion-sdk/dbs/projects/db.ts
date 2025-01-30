import { ProjectsResponse, ProjectsQuery, ProjectsQueryResponse } from './types';
import { ProjectsPatchDTO } from './patch.dto';
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db';
import { PROJECTS_PROPS_TO_TYPES, PROJECTS_PROPS_TO_IDS, ProjectsDTOProperties } from './constants';

export class ProjectsDatabase extends GenericDatabaseClass<
	ProjectsResponse,
	ProjectsPatchDTO,
	ProjectsQuery,
	ProjectsQueryResponse,
	ProjectsDTOProperties
> {
	protected notionDatabaseId: string;

	constructor(options: DatabaseOptions) {
		super(options);

		this.notionDatabaseId = '183cb76062e380c7bf5dc202090fa7c0';
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
					throw new Error(`Projects: Invalid filter value for ${key}: ${value}`);
				}
			} else {
				if (!(key in PROJECTS_PROPS_TO_TYPES)) {
					throw new Error(`Projects: Invalid filter key: ${key}`);
				}

				const propType = PROJECTS_PROPS_TO_TYPES[key as keyof typeof PROJECTS_PROPS_TO_TYPES];
				const propId = PROJECTS_PROPS_TO_IDS[key as keyof typeof PROJECTS_PROPS_TO_IDS];

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
					property: PROJECTS_PROPS_TO_IDS[sort.property as keyof typeof PROJECTS_PROPS_TO_IDS],
					direction: sort.direction,
				};
			}

			return sort;
		});
	}

	protected queryRemapFilterProperties(filterProps?: string[]) {
		return filterProps?.map(
			(p) => PROJECTS_PROPS_TO_IDS[p as keyof typeof PROJECTS_PROPS_TO_IDS],
		);
	}
}
