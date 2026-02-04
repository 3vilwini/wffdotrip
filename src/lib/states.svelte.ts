export const enum Language {
	EN = 'EN',
	FR = 'FR',
	IT = 'IT',
	ES = 'ES'
}

export const siteState = $state({
	language: Language.EN,
	userEmail: '',
	user: {},
	formSubmitted: false,
	currFormSection: '',
	showFilterPanel: false
});

export const filteredResultsState = $state({
	rows: null
});
