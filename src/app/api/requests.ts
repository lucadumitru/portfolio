import { BASE_URL } from '@/utils';

export const getBase64 = async (src: string) => {
	const res = await fetch(BASE_URL + '/api/get-base-64', {
		method: 'POST',
		body: JSON.stringify({ src: `./public${src}` }),
	});
	return res.json();
};
