import { EducationsDatabase } from '@/src/notion-sdk/dbs/educations/db';
import { ExperiencesDatabase } from '@/src/notion-sdk/dbs/experiences/db';
import { ProjectsDatabase } from '@/src/notion-sdk/dbs/projects/db';

import { TechnologiesDatabase } from './../../notion-sdk/dbs/technologies/db';

export const projectsDb = new ProjectsDatabase({
	notionSecret: process.env.NOTION_TS_CLIENT_NOTION_SECRET ?? '',
});

export const educationsDb = new EducationsDatabase({
	notionSecret: process.env.NOTION_TS_CLIENT_NOTION_SECRET ?? '',
});

export const experiencesDb = new ExperiencesDatabase({
	notionSecret: process.env.NOTION_TS_CLIENT_NOTION_SECRET ?? '',
});

export const technologiesDb = new TechnologiesDatabase({
	notionSecret: process.env.NOTION_TS_CLIENT_NOTION_SECRET ?? '',
});
