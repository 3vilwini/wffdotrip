export const getAllRows = async () => {
	const options = {
		method: 'GET',
		headers: {
			Authorization: 'Token 14u0xgaBt3kLdjPsfVWOh0GajJZMt1fm'
		}
	};
	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?user_field_names=true',
			options
		);
		console.log(response);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const submitForm = async (data) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: 'Token 14u0xgaBt3kLdjPsfVWOh0GajJZMt1fm',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	console.log(options);
	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?user_field_names=true',
			options
		);
		let body = await response.json();
		console.log(body);
		return response;
	} catch (error) {
		console.error(error);
		return;
	}
};
