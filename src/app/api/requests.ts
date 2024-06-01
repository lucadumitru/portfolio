export const getBase64 = async (src: string) => {
	const res = await fetch((process.env.NEXT_PUBLIC_URL as string) + '/api/get-base-64', {
		method: 'POST',
		body: JSON.stringify({ src: `./public${src}` }),
	});
	return res.json();
};
