import type { FilesPropertyItemObjectResponse } from '@/src/notion-sdk/core/types/notion-api.types';

export const getFileUrl = (files: FilesPropertyItemObjectResponse['files']) => {
	if (files[0].type === 'file') {
		return files[0].file.url;
	} else if (files[0].type === 'external') {
		return files[0].external.url;
	} else {
		return '';
	}
};
