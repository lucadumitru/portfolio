import { ProjectsDatabase } from '@/src/notion-sdk/dbs/projects/db';

export const projectsDb = new ProjectsDatabase({
	notionSecret: process.env.NOTION_TS_CLIENT_NOTION_SECRET ?? '',
});
