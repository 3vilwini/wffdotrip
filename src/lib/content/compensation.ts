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
		[Language.NL]: '/ uur',
		id: '5207257'
	},
	[CompensationFrequency.DAILY]: {
		[Language.EN]: '/ day',
		[Language.FR]: '/ jour',
		[Language.IT]: '/ giorno',
		[Language.NL]: '/ dag',
		id: '5207256'
	},
	[CompensationFrequency.WEEKLY]: {
		[Language.EN]: '/ week',
		[Language.FR]: '/ semaine',
		[Language.IT]: '/ settimana',
		[Language.NL]: '/ week',
		id: '5207255'
	},
	[CompensationFrequency.MONTHLY]: {
		[Language.EN]: '/ month',
		[Language.FR]: '/ mois',
		[Language.IT]: '/ mese',
		[Language.NL]: '/ maand',
		id: '5207254'
	},
	[CompensationFrequency.FLAT_FEE]: {
		[Language.EN]: 'flat fee',
		[Language.FR]: 'forfait',
		[Language.IT]: 'compenso forfettario',
		[Language.NL]: 'afgesproken bedrag',
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
		[Language.NL]: 'niet gedekt'
	},
	[AddlCompensationCoverage.PARTIALLY_COVERED]: {
		[Language.EN]: 'partially covered',
		[Language.FR]: 'partiellement couvert',
		[Language.IT]: 'parzialmente coperti',
		[Language.NL]: 'gedeeltelijk gedekt'
	},
	[AddlCompensationCoverage.COVERED]: {
		[Language.EN]: 'fully covered',
		[Language.FR]: 'intégralement couvert',
		[Language.IT]: 'completamente coperti',
		[Language.NL]: 'volledig gedekt'
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
		[Language.EN]: 'Sale of work',
		[Language.FR]: 'Vente d’œuvres',
		[Language.IT]: 'Vendita dell’opera',
		[Language.NL]: 'Verkoop van werk'
	},
	[AddlCompItem.PRODUCTION_BUDGET]: {
		[Language.EN]: 'Production budget',
		[Language.FR]: 'Budget de production',
		[Language.IT]: 'Budget di produzione',
		[Language.NL]: 'Productie budget '
	},
	[AddlCompItem.TRANSPORT_OF_WORK]: {
		[Language.EN]: 'Transport of works',
		[Language.FR]: 'Transport d’œuvres',
		[Language.IT]: 'Trasporto delle opere',
		[Language.NL]: 'Transport van werk'
	},
	[AddlCompItem.TRAVEL]: {
		[Language.EN]: 'Travel',
		[Language.FR]: 'Transport',
		[Language.IT]: 'Viaggio',
		[Language.NL]: 'Reiskosten'
	},
	[AddlCompItem.ACCOMMODATION]: {
		[Language.EN]: 'Accommodation',
		[Language.FR]: 'Hébergement',
		[Language.IT]: 'Alloggio',
		[Language.NL]: 'Huisvesting/accomodatie'
	},
	[AddlCompItem.MEALS]: {
		[Language.EN]: 'Meals',
		[Language.FR]: 'Repas',
		[Language.IT]: 'Pasti',
		[Language.NL]: 'Maaltijden'
	},
	[AddlCompItem.PER_DIEM]: {
		[Language.EN]: 'Per diem',
		[Language.FR]: 'Per diem',
		[Language.IT]: 'Diaria',
		[Language.NL]: 'Dagvergoeding'
	},
	[AddlCompItem.HEALTH_INSURANCE]: {
		[Language.EN]: 'Health insurance',
		[Language.FR]: 'Mutuelle',
		[Language.IT]: 'Assicurazione sanitaria',
		[Language.NL]: 'Gezondheidsverzekering'
	},
	[AddlCompItem.PUBLIC_TRANSPORTATION]: {
		[Language.EN]: 'Public transportation',
		[Language.FR]: 'Transport public',
		[Language.IT]: 'Trasporto pubblico',
		[Language.NL]: 'Openbaar vervoer'
	},
	[AddlCompItem.COMMISSION]: {
		[Language.EN]: 'Commission',
		[Language.FR]: 'Commission',
		[Language.IT]: 'Commissione',
		[Language.NL]: 'Commissie'
	},
	[AddlCompItem.ACCESSIBILITY_BUDGET]: {
		[Language.EN]: 'Accessibility budget',
		[Language.FR]: 'Budget d’accessibilité',
		[Language.IT]: 'Budget di accessibilità',
		[Language.NL]: 'Access budget'
	}
};

