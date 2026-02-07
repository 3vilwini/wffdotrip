import { URLSearchParams } from 'url';

import { BASEROW_SECRET_KEY } from '$env/static/private';
export const getAllVerifiedRows = async () => {
	const options = {
		method: 'GET',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`
		}
	};
	const params = new URLSearchParams({
		user_field_names: 'true',
		filters: JSON.stringify({
			filter_type: 'AND',
			filters: [{ type: 'boolean', field: 'verified', value: '1' }]
		}),
		order_by: '-Created on',
		groups: []
	});

	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?' + params,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const getRowsByFilter = async (filterObj: any) => {
	const options = {
		method: 'GET',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`
		}
	};
	const params = new URLSearchParams({
		user_field_names: 'true',
		filters: JSON.stringify(filterObj),
		order_by: '-Created on',
		groups: []
	});

	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?' + params,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const getRowsByUserID = async (userID: string) => {
	const options = {
		method: 'GET',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`
		}
	};
	const params = new URLSearchParams({
		user_field_names: 'true',
		filters: JSON.stringify({
			filter_type: 'AND',
			filters: [{ type: 'equal', field: 'user_id', value: userID }]
		}),
		groups: []
	});

	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?' + params,
			options
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const editRow = async (row_id: string, data) => {
	const options = {
		method: 'PATCH',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		const response = await fetch(
			`https://api.baserow.io/api/database/rows/table/797535/${row_id}/?user_field_names=true`,
			options
		);
		return response;
	} catch (error) {
		return error;
	}
};

export const deleteRow = async (row_id: string) => {
	const options = {
		method: 'DELETE',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`,
			'Content-Type': 'application/json'
		}
	};
	try {
		const response = await fetch(
			`https://api.baserow.io/api/database/rows/table/797535/${row_id}/`,
			options
		);
		return response;
	} catch (error) {
		return error;
	}
};

export const submitForm = async (data) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Token ${BASEROW_SECRET_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		const response = await fetch(
			'https://api.baserow.io/api/database/rows/table/797535/?user_field_names=true',
			options
		);
		return response;
	} catch (error) {
		return error;
	}
};
