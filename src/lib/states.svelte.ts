import { Country } from "$lib/content/country";
import { ContractType } from "$lib/content/jobDetails";
import { WorkerType } from "$lib/content/workerType";
export const enum Language {
	EN = 'EN',
	FR = 'FR',
	IT = 'IT',
	NL = 'NL'
}

export const siteState = $state({
	language: Language.EN,
	userEmail: '',
	user: {},
	formSubmitted: false,
	currFormSection: '',
	showFilterPanel: false,
	indexW: 0
});

export const formState = $state({
	selectedCountry: undefined,
	selectedYear: undefined,
	selectedContractType: undefined,
	selectedWorkerType: undefined
} as {
	selectedCountry: Country | undefined;
	selectedYear: number | undefined;
	selectedContractType: ContractType | undefined;
	selectedWorkerType: WorkerType | undefined;
});

export const filteredResultsState = $state({
	rows: null,
	filtersApplied: {
		country: [],
		workerType: [],
		employerType: [],
		contractType: [],
		compensationFrequency: []
	}
});

export const yarndingsText = 'abcdefgijmnEFGHIPSTU';
