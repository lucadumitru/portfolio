import axios from "axios";

export const getData = async (url) => {
	try {
		const response = await axios.get(url);
		const data = response.data;
		return data;
	} catch (error) {
		console.error(error.message);
		throw error;
	}
};
