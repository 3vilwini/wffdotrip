import type { Actions, PageLoad } from './$types';
import { getAllVerifiedRows, getRowsByFilter } from '$lib/baserow';
import { getIndexPage } from '$lib/sanity';
import {
	compensationFrequencyOptions,
	contractTypeOptions,
	countryOptions,
	employerTypeOptions,
	workerTypeOptions
} from '$lib/staticContent';
import { shuffle } from '$lib/utils';
export const load = (async ({ locals }) => {
	const indexPage = await getIndexPage();
	const rows = await getAllVerifiedRows();
	shuffle(rows.results);
	return { rows, indexPage };
}) satisfies PageLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const filterObj: {
			filter_type: string;
			filters: { type: string; field: string; value: boolean | string }[];
		} = {
			filter_type: 'AND',
			filters: [{ type: 'boolean', field: 'verified', value: '1' }]
		};

		const countryFilters: string[] = [];
		const workerTypeFilters: string[] = [];
		const employerTypeFilters: string[] = [];
		const contractTypeFilters: string[] = [];
		const compensationFrequencyFilters: string[] = [];

		formData.forEach((value, key) => {
			if (key.startsWith('country-')) {
				const country = key.split('-')[1];
				const id = countryOptions[country].id;
				countryFilters.push(id);
			} else if (key.startsWith('worker_type-')) {
				const workerTypeGroup = key.split('-')[1];
				const workerTypes = workerTypeOptions[workerTypeGroup].options;
				Object.values(workerTypes).forEach((workerType) => {
					const id = workerType.id;
					workerTypeFilters.push(id);
				});
			} else if (key.startsWith('employer_type-')) {
				const employerTypeGroup = key.split('-')[1];
				const employerTypes = employerTypeOptions[employerTypeGroup].options;
				Object.values(employerTypes).forEach((employerType) => {
					const id = employerType.id;
					employerTypeFilters.push(id);
				});
			} else if (key.startsWith('contract_type-')) {
				const contractType = key.split('-')[1];
				const id = contractTypeOptions[contractType].id;
				contractTypeFilters.push(id);
			} else if (key.startsWith('compensation_frequency-')) {
				const compensationFrequency = key.split('-')[1];
				const id = compensationFrequencyOptions[compensationFrequency].id;
				compensationFrequencyFilters.push(id);
			}
		});

		filterObj.filters.push({
			type: 'single_select_is_any_of',
			field: 'country',
			value: countryFilters.join(',')
		});
		filterObj.filters.push({
			type: 'single_select_is_any_of',
			field: 'worker_type',
			value: workerTypeFilters.join(',')
		});
		filterObj.filters.push({
			type: 'single_select_is_any_of',
			field: 'employer_type',
			value: employerTypeFilters.join(',')
		});
		filterObj.filters.push({
			type: 'single_select_is_any_of',
			field: 'contract_type',
			value: contractTypeFilters.join(',')
		});
		filterObj.filters.push({
			type: 'single_select_is_any_of',
			field: 'compensation_frequency',
			value: compensationFrequencyFilters.join(',')
		});

		if (request.method === 'POST') {
			console.log(filterObj);
			try {
				const response = await getRowsByFilter(filterObj);

				if (response) {
					return { success: true, response };
				}
			} catch (error: any) {
				console.error(error);
				const errorMessage = error?.message ? error.message : 'error occurred when submitting form';
				return fail(422, { error: errorMessage });
			}
		}
	}
} satisfies Actions;
