import { Language, Country } from '$lib/content/country';

export const numEmployeesOptions = {
	'0_EMPLOYEES': '0',
	'1_TO_2_EMPLOYEES': '1-2',
	'3_TO_5_EMPLOYEES': '3-5',
	'6_TO_10_EMPLOYEES': '6-10',
	'11_TO_20_EMPLOYEES': '11-20',
	'21_TO_50_EMPLOYEES': '21-50',
	'51_TO_100_EMPLOYEES': '51-100',
	'101_TO_200_EMPLOYEES': '101-200',
	'201_PLUS_EMPLOYEES': '201+'
};

export const enum ContractType {
	FULLTIME = 'FULLTIME',
	PARTTIME = 'PARTTIME',
	FULLTIME_TEMP = 'FULLTIME_TEMP',
	PARTTIME_TEMP = 'PARTTIME_TEMP',
	INDEPENDENT = 'INDEPENDENT',
	INTERNSHIP = 'INTERNSHIP',
	APPRENTICESHIP = 'APPRENTICESHIP',
	ZERO_HOURS = 'ZERO_HOURS'
}

export const contractTypeOptions = {
	[ContractType.FULLTIME]: {
		[Language.EN]: 'Full-time',
		[Language.FR]: 'CDI temps plein',
		[Language.IT]: 'Tempo pieno',
		[Language.NL]: 'Voltijds',
		id: '5207121'
	},
	[ContractType.PARTTIME]: {
		[Language.EN]: 'Part-time',
		[Language.FR]: 'CDI temps partiel',
		[Language.IT]: 'Part-time',
		[Language.NL]: 'Deeltijds',
		id: '5207124'
	},
	[ContractType.FULLTIME_TEMP]: {
		[Language.EN]: 'Full-time (fixed-term)',
		[Language.FR]: 'CDD temps plein',
		[Language.IT]: 'Tempo pieno (TI)',
		[Language.NL]: 'Voltijds (tijdelijk)',
		id: '5207122'
	},
	[ContractType.PARTTIME_TEMP]: {
		[Language.EN]: 'Part-time (fixed-term)',
		[Language.FR]: 'CDD temps partiel',
		[Language.IT]: 'Part-time (TD)',
		[Language.NL]: 'Deeltijds (tijdelijk)',
		id: '5207120'
	},
	[ContractType.INDEPENDENT]: {
		[Language.EN]: 'Freelance',
		[Language.FR]: 'Indépendant',
		[Language.IT]: 'Freelance',
		[Language.NL]: 'Freelancecontract/zzp',
		id: '5207125'
	},
	[ContractType.INTERNSHIP]: {
		[Language.EN]: 'Internship',
		[Language.FR]: 'Stage',
		[Language.IT]: 'Tirocinio',
		[Language.NL]: 'Stageovereenkomst',
		id: '5207123'
	},
	[ContractType.APPRENTICESHIP]: {
		[Language.EN]: 'Apprenticeship',
		[Language.FR]: 'Apprentissage',
		[Language.IT]: 'Apprendistato',
		[Language.NL]: 'Leerovereenkomst',
		id: '5207126'
	},
	[ContractType.ZERO_HOURS]: {
		[Language.EN]: 'Zero Hours',
		[Language.FR]: 'Zero Hours',
		[Language.IT]: 'Zero Hours',
		[Language.NL]: 'Nulurencontract',
		id: '5768112'
	}
};

export const workerStatusOptions = {
	[Country.FRANCE]: [
		'Artiste-auteur·ice',
		'Auto-entrepreneur·euse',
		'Salarié·e',
		'Intermittence',
		'Stagiaire',
		'Autre'
	],
	[Country.ITALY]: [
		'Partita IVA (forfettario)',
		'Partita IVA (ordinario)',
		'Prestazione occasionale',
		'Lavoratore dello spettacolo',
		'Dipendente',
		'Tirocinio curriculare',
		'Altro'
	],
	[Country.UK]: [
		'Self Employed',
		'Salaried Employee',
		'Worker',
		'Contractor',
		'Director',
		'Trainee / Intern',
		'Office Holder',
		'Other'
	],

	[Country.NETHERLANDS]: [
		'Zelfstandige/zzp',
		'Werknemer in loondienst',
		'Werknemer',
		'Stagiair',
		'Overig'
	]
};

export const enum ContractLengthUnit {
	HOURS = 'HOURS',
	DAYS = 'DAYS',
	MONTHS = 'MONTHS'
}

export const contractLengthUnitOptions = {
	[ContractLengthUnit.HOURS]: {
		[Language.EN]: 'hours',
		[Language.FR]: 'heures',
		[Language.IT]: 'ore',
		[Language.NL]: 'uren'
	},
	[ContractLengthUnit.DAYS]: {
		[Language.EN]: 'days',
		[Language.FR]: 'jours',
		[Language.IT]: 'giorni',
		[Language.NL]: 'dagen'
	},
	[ContractLengthUnit.MONTHS]: {
		[Language.EN]: 'months',
		[Language.FR]: 'mois',
		[Language.IT]: 'mesi',
		[Language.NL]: 'maanden'
	}
};


export const jobExperienceOptions = {
	'0_EXPERIENCE': '0',
	'1_YEAR_EXPERIENCE': '1',
	'2_YEARS_EXPERIENCE': '2',
	'3_YEARS_EXPERIENCE': '3',
	'4_YEARS_EXPERIENCE': '4',
	'5_YEARS_EXPERIENCE': '5',
	'6_TO_10_YEARS_EXPERIENCE': '6-10',
	'11_TO_15_YEARS_EXPERIENCE': '11-15',
	'16_TO_20_YEARS_EXPERIENCE': '16-20',
	'21_TO_30_YEARS_EXPERIENCE': '21-30',
	'30_PLUS_YEARS_EXPERIENCE': '30+'
};

export const enum JobObtainedVia {
	INTERNAL_PROMOTION = 'INTERNAL_PROMOTION',
	CALL_FOR_APPLICATIONS = 'CALL_FOR_APPLICATIONS',
	CALL_FOR_PROJECTS = 'CALL_FOR_PROJECTS',
	JOB_OFFER = 'JOB_OFFER',
	INVITATION_REFERRAL = 'INVITATION_REFERRAL',
	DIRECT_OUTREACH = 'DIRECT_OUTREACH',
	PURE_NEPOTISM = 'PURE_NEPOTISM'
}

export const jobObtainedViaOptions = {
	[JobObtainedVia.INTERNAL_PROMOTION]: {
		[Language.EN]: 'Internal promotion',
		[Language.FR]: 'Promotion interne',
		[Language.IT]: 'Promozione interna',
		[Language.NL]: 'Interne promotie'
	},
	[JobObtainedVia.CALL_FOR_APPLICATIONS]: {
		[Language.EN]: 'Call for applications',
		[Language.FR]: 'Appel à candidatures',
		[Language.IT]: 'Bando di selezione',
		[Language.NL]: 'Oproep tot aanvraag'
	},
	[JobObtainedVia.CALL_FOR_PROJECTS]: {
		[Language.EN]: 'Call for projects',
		[Language.FR]: 'Appel à projets',
		[Language.IT]: 'Bando per progetto',
		[Language.NL]: 'Projectaanvraag'
	},
	[JobObtainedVia.JOB_OFFER]: {
		[Language.EN]: 'Job offer',
		[Language.FR]: 'Offre d’emploi',
		[Language.IT]: 'Offerta di lavoro',
		[Language.NL]: 'Baan aangeboden'
	},
	[JobObtainedVia.INVITATION_REFERRAL]: {
		[Language.EN]: 'Invitation',
		[Language.FR]: 'Invitation',
		[Language.IT]: 'Invito',
		[Language.NL]: 'Op uitnodiging'
	},
	[JobObtainedVia.DIRECT_OUTREACH]: {
		[Language.EN]: 'Direct outreach',
		[Language.FR]: 'Candidature spontanée',
		[Language.IT]: 'Autocandidatura',
		[Language.NL]: 'Directe benadering'
	},
	[JobObtainedVia.PURE_NEPOTISM]: {
		[Language.EN]: 'Nepotism or friendship',
		[Language.FR]: 'Népotisme ou amitié',
		[Language.IT]: 'Nepotismo o amichettismo',
		[Language.NL]: 'Nepotisme of vriendendienst'
	}
};
