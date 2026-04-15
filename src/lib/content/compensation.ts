import { Language } from '$lib/content/country';

export const enum CompensationFrequency {
	HOURLY = 'HOURLY',
	DAILY = 'DAILY',
	WEEKLY = 'WEEKLY',
	MONTHLY = 'MONTHLY',
	FLAT_FEE = 'FLAT_FEE'
}

export const compensationFrequencyOptions = {
	[CompensationFrequency.HOURLY]: {
		[Language.EN]: '/ hour',
		[Language.FR]: '/ heure',
		[Language.IT]: '/ ora',
		[Language.NL]: 'Hourly ES',
		id: '5207257'
	},
	[CompensationFrequency.DAILY]: {
		[Language.EN]: '/ day',
		[Language.FR]: '/ jour',
		[Language.IT]: '/ giorno',
		[Language.NL]: 'Daily ES',
		id: '5207256'
	},
	[CompensationFrequency.WEEKLY]: {
		[Language.EN]: '/ week',
		[Language.FR]: '/ semaine',
		[Language.IT]: '/ settimana',
		[Language.NL]: 'Weekly ES',
		id: '5207255'
	},
	[CompensationFrequency.MONTHLY]: {
		[Language.EN]: '/ month',
		[Language.FR]: '/ mois',
		[Language.IT]: '/ mese',
		[Language.NL]: 'Monthly ES',
		id: '5207254'
	},
	[CompensationFrequency.FLAT_FEE]: {
		[Language.EN]: 'flat fee',
		[Language.FR]: 'forfait',
		[Language.IT]: 'Compenso forfettario',
		[Language.NL]: 'Flat Fee ES',
		id: '5207253'
	}
};

export const enum AddlCompensationCoverage {
	NOT_COVERED = 'NOT_COVERED',
	PARTIALLY_COVERED = 'PARTIALLY_COVERED',
	COVERED = 'COVERED'
}

export const addlCompensationCoverageOptions = {
	[AddlCompensationCoverage.NOT_COVERED]: {
		[Language.EN]: 'not covered',
		[Language.FR]: 'pas couvert',
		[Language.IT]: 'non coperti',
		[Language.NL]: 'not covered ES'
	},
	[AddlCompensationCoverage.PARTIALLY_COVERED]: {
		[Language.EN]: 'partially covered',
		[Language.FR]: 'partiellement couvert',
		[Language.IT]: 'parzialmente coperti',
		[Language.NL]: 'partially covered ES'
	},
	[AddlCompensationCoverage.COVERED]: {
		[Language.EN]: 'fully covered',
		[Language.FR]: 'intégralement couvert',
		[Language.IT]: 'completamente coperti',
		[Language.NL]: 'was covered ES'
	}
};

export const enum AddlCompItem {
	SALE_OF_WORK = 'SALE_OF_WORK',
	PRODUCTION_BUDGET = 'PRODUCTION_BUDGET',
	TRANSPORT_OF_WORK = 'TRANSPORT_OF_WORK',
	TRAVEL = 'TRAVEL',
	ACCOMMODATION = 'ACCOMMODATION',
	MEALS = 'MEALS',
	PER_DIEM = 'PER_DIEM',
	HEALTH_INSURANCE = 'HEALTH_INSURANCE',
	PUBLIC_TRANSPORTATION = 'PUBLIC_TRANSPORTATION',
	COMMISSION = 'COMMISSION',
	ACCESSIBILITY_BUDGET = 'ACCESSIBILITY_BUDGET'
}

export const addlCompItemOptions = {
	[AddlCompItem.SALE_OF_WORK]: {
		[Language.EN]: 'Sale of Work',
		[Language.FR]: 'Vente d’œuvres',
		[Language.IT]: 'Vendita dell’opera',
		[Language.NL]: 'Sale of work ES'
	},
	[AddlCompItem.PRODUCTION_BUDGET]: {
		[Language.EN]: 'Production Budget',
		[Language.FR]: 'Budget de production',
		[Language.IT]: 'Budget di produzione',
		[Language.NL]: 'Production budget ES'
	},
	[AddlCompItem.TRANSPORT_OF_WORK]: {
		[Language.EN]: 'Transport of Works',
		[Language.FR]: 'Transport d’œuvres',
		[Language.IT]: 'Trasporto delle opere',
		[Language.NL]: 'Transport of work ES'
	},
	[AddlCompItem.TRAVEL]: {
		[Language.EN]: 'Travel',
		[Language.FR]: 'Transport',
		[Language.IT]: 'Viaggio',
		[Language.NL]: 'Travel ES'
	},
	[AddlCompItem.ACCOMMODATION]: {
		[Language.EN]: 'Accommodation',
		[Language.FR]: 'Hébergement',
		[Language.IT]: 'Alloggio',
		[Language.NL]: 'Accommodation ES'
	},
	[AddlCompItem.MEALS]: {
		[Language.EN]: 'Meals',
		[Language.FR]: 'Repas',
		[Language.IT]: 'Pasti',
		[Language.NL]: 'Meals ES'
	},
	[AddlCompItem.PER_DIEM]: {
		[Language.EN]: 'Per Diem',
		[Language.FR]: 'Per diem',
		[Language.IT]: 'Diaria',
		[Language.NL]: 'Per Diem ES'
	},
	[AddlCompItem.HEALTH_INSURANCE]: {
		[Language.EN]: 'Health Insurance',
		[Language.FR]: 'Mutuelle',
		[Language.IT]: 'Assicurazione sanitaria',
		[Language.NL]: 'Health Insurance ES'
	},
	[AddlCompItem.PUBLIC_TRANSPORTATION]: {
		[Language.EN]: 'Public Transportation',
		[Language.FR]: 'Transport public',
		[Language.IT]: 'Trasporto pubblico',
		[Language.NL]: 'Public Transportation ES'
	},
	[AddlCompItem.COMMISSION]: {
		[Language.EN]: 'Commission',
		[Language.FR]: 'Commission',
		[Language.IT]: 'Commissione',
		[Language.NL]: 'Commission ES'
	},
	[AddlCompItem.ACCESSIBILITY_BUDGET]: {
		[Language.EN]: 'Accessibility Budget',
		[Language.FR]: 'Budget d’accessibilité',
		[Language.IT]: 'Budget di accessibilità',
		[Language.NL]: 'Accessibility Budget ES'
	}
};
