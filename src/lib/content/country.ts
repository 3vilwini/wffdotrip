export const enum Language {
	EN = 'EN',
	FR = 'FR',
	IT = 'IT',
	NL = 'NL'
}

export const enum Country {
	UK = 'UK',
	FRANCE = 'FRANCE',
	ITALY = 'ITALY',
	NETHERLANDS = 'NETHERLANDS'
}

export const countryShortCode = {
	[Country.UK]: 'UK',
	[Country.FRANCE]: 'FR',
	[Country.ITALY]: 'IT',
	[Country.NETHERLANDS]: 'NL'
};

export const countryIcons = {
	[Country.UK]: '❋',
	[Country.FRANCE]: '✸',
	[Country.ITALY]: '✤',
	[Country.NETHERLANDS]: '✣'
};

export const currency = {
	[Country.UK]: '£',
	[Country.FRANCE]: '€',
	[Country.ITALY]: '€',
	[Country.NETHERLANDS]: '€'
};


export const languageOptions = {
	[Language.EN]: 'English',
	[Language.FR]: 'Français',
	[Language.IT]: 'Italiano',
	[Language.NL]: 'Dutch'
};

export const countryOptions = {
	[Country.UK]: {
		[Language.EN]: 'UK',
		[Language.FR]: 'Royaume-Uni',
		[Language.IT]: 'Regno Unito',
		[Language.NL]: 'Verenigd Koninkrijk',
		id: '5207042'
	},
	[Country.FRANCE]: {
		[Language.EN]: 'France',
		[Language.FR]: 'France',
		[Language.IT]: 'Francia',
		[Language.NL]: 'Frankrijk',
		id: '5207043'
	},
	[Country.ITALY]: {
		[Language.EN]: 'Italy',
		[Language.FR]: 'Italie',
		[Language.IT]: 'Italia',
		[Language.NL]: 'Italië',
		id: '5207041'
	},
	[Country.NETHERLANDS]: {
		[Language.EN]: 'Netherlands',
		[Language.FR]: 'Pays-Bas',
		[Language.IT]: 'Paesi Bassi',
		[Language.NL]: 'Nederland',
		id: '5207044'
	}
};
