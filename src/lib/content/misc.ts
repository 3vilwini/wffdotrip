import { Language, Country } from '$lib/content/country';

export const indexHeaderLabels = {
	worker: {
		[Language.EN]: 'Worker',
		[Language.FR]: 'Travailleur·se',
		[Language.IT]: 'Lavoratorə',
		[Language.NL]: 'Worker (NL)'
	},
	employer: {
		[Language.EN]: 'Employer',
		[Language.FR]: 'Employeur',
		[Language.IT]: 'Datorə di lavoro',
		[Language.NL]: 'Employer (NL)'
	},
	contract: {
		[Language.EN]: 'Contract',
		[Language.FR]: 'Contrat',
		[Language.IT]: 'Contratto',
		[Language.NL]: 'Contract (NL)'
	},
	wage: {
		[Language.EN]: 'Wage',
		[Language.FR]: 'Paie',
		[Language.IT]: 'Retribuzione',
		[Language.NL]: 'Wage (NL)'
	}
};

export const navMenuItems = {
	faq: {
		[Language.EN]: 'FAQ',
		[Language.FR]: 'FAQ',
		[Language.IT]: 'FAQ',
		[Language.NL]: 'FAQ (NL)'
	},
	privacy: {
		[Language.EN]: 'Privacy & data',
		[Language.FR]: 'Confidentialité & données',
		[Language.IT]: 'Privacy e dati',
		[Language.NL]: 'Privacy & data (NL)'
	},
	cost: {
		[Language.EN]: 'How much does this website cost?',
		[Language.FR]: 'Combien coûte cette plateforme ?',
		[Language.IT]: 'Quanto costa questo sito web?',
		[Language.NL]: 'How much does this website cost? (NL)'
	}
};

export const fieldLabels = {
	country: {
		[Language.EN]: 'Country',
		[Language.FR]: 'Pays',
		[Language.IT]: 'Paese',
		[Language.NL]: 'Country (NL)'
	},
	city: {
		[Language.EN]: 'City (optional)',
		[Language.FR]: 'Ville (facultatif)',
		[Language.IT]: 'Città (facoltativo)',
		[Language.NL]: 'City (optional) (NL)'
	},
	year: {
		[Language.EN]: 'Year',
		[Language.FR]: 'Année',
		[Language.IT]: 'Anno',
		[Language.NL]: 'Year (NL)'
	},
	employerType: {
		[Language.EN]: 'Employer Category',
		[Language.FR]: 'Catégorie d’employeur',
		[Language.IT]: 'Tipologia di datore di lavoro',
		[Language.NL]: 'Employer Category (NL)'
	},
	employerName: {
		[Language.EN]: 'Employer Name (optional)',
		[Language.FR]: 'Nom de l’employeur (facultatif)',
		[Language.IT]: 'Nome del datore di lavoro (facoltativo)',
		[Language.NL]: 'Employer Name (optional) (NL)'
	},
	numEmployees: {
		[Language.EN]: '# of Employees',
		[Language.FR]: '# d’employé·es',
		[Language.IT]: '# di dipendentə',
		[Language.NL]: '# of Employees (NL)'
	},
	contractType: {
		[Language.EN]: 'Contract Type',
		[Language.FR]: 'Type de contrat',
		[Language.IT]: 'Tipologia di contratto',
		[Language.NL]: 'Contract Type (NL)'
	},
	workerStatus: {
		[Language.EN]: {
			[Country.UK]: 'Worker Status (UK)',
			[Country.NETHERLANDS]: 'Worker Status (NL)',
			[Country.ITALY]: 'Worker Status (IT)',
			[Country.FRANCE]: 'Worker Status (FR)'
		},
		[Language.FR]: {
			[Country.UK]: 'Statut / régime (UK)',
			[Country.NETHERLANDS]: 'Statut / régime (NL)',
			[Country.ITALY]: 'Statut / régime (IT)',
			[Country.FRANCE]: 'Statut / régime (FR)'
		},
		[Language.IT]: {
			[Country.UK]: 'Status del lavoratorə (UK)',
			[Country.NETHERLANDS]: 'Status del lavoratorə (NL)',
			[Country.ITALY]: 'Status del lavoratorə (IT)',
			[Country.FRANCE]: 'Status del lavoratorɜ (FR)'
		},
		[Language.NL]: {
			[Country.UK]: 'UK Worker status (NL)',
			[Country.NETHERLANDS]: 'Dutch Worker status (NL)',
			[Country.ITALY]: 'Italian Worker status (NL)',
			[Country.FRANCE]: 'French Worker status (NL)'
		}
	},
	contractLength: {
		[Language.EN]: 'Contract Length (optional)',
		[Language.FR]: 'Durée du contrat (facultatif)',
		[Language.IT]: 'Durata del contratto (facoltativo)',
		[Language.NL]: 'Contract Length (optional) (NL)'
	},
	contractNumHours: {
		[Language.EN]: '# of Hours (optional)',
		[Language.FR]: '# d’heures (facultatif)',
		[Language.IT]: '# di ore (facoltativo)',
		[Language.NL]: '# of Hours (optional) (NL)'
	},
	perWeek: {
		[Language.EN]: 'hours / week',
		[Language.FR]: 'heures / semaine',
		[Language.IT]: 'ore / settimana',
		[Language.NL]: 'hours / week (NL)'
	},
	workerType: {
		[Language.EN]: 'Worker Category',
		[Language.FR]: 'Catégorie de travailleur·se',
		[Language.IT]: 'Categoria del lavoratorə',
		[Language.NL]: 'Worker Category (NL)'
	},
	projectType: {
		[Language.EN]: 'Project Category',
		[Language.FR]: 'Type de projet',
		[Language.IT]: 'Tipologia di progetto',
		[Language.NL]: 'Project Category (NL)'
	},
	jobTitle: {
		[Language.EN]: 'Project Category (optional)',
		[Language.FR]: 'Type de projet (facultatif)',
		[Language.IT]: 'Tipologia di progetto (facoltativo)',
		[Language.NL]: 'Job title (optional) (NL)'
	},
	jobDetails: {
		[Language.EN]: 'Details (optional)',
		[Language.FR]: 'Détails (facultatif)',
		[Language.IT]: 'Dettagli (facoltativo)',
		[Language.NL]: 'Details (optional) (NL)'
	},
	jobExperience: {
		[Language.EN]: 'Experience (optional)',
		[Language.FR]: 'Expérience (facultatif)',
		[Language.IT]: 'Esperienza (facoltativo)',
		[Language.NL]: 'Experience (optional) (NL)'
	},
	jobObtainedVia: {
		[Language.EN]: 'Job Obtained Via (optional)',
		[Language.FR]: 'Travail obtenu via (facultatif)',
		[Language.IT]: 'Modalità di ottenimento del lavoro (facoltativo)',
		[Language.NL]: 'Job obtained via (optional) (NL)'
	},
	compensationAmount: {
		[Language.EN]: 'Amount',
		[Language.FR]: 'Montant',
		[Language.IT]: 'Importo',
		[Language.NL]: 'Amount (NL)'
	},
	compensationPercentage: {
		[Language.EN]: 'Percentage',
		[Language.FR]: 'Pourcentage',
		[Language.IT]: 'Percentuale',
		[Language.NL]: 'Percentage (NL)'
	},
	compensationFrequency: {
		[Language.EN]: 'frequency',
		[Language.FR]: 'fréquence',
		[Language.IT]: 'frequenza',
		[Language.NL]: 'frequency (NL)'
	},
	compensationLate: {
		[Language.EN]: 'I was paid late',
		[Language.FR]: 'J’ai été payé·e en retard',
		[Language.IT]: 'Sono statə pagatə in ritardo',
		[Language.NL]: 'I was paid late (NL)'
	},
	satisfiedWithCompensation: {
		[Language.EN]: 'I was satisfied with the compensation',
		[Language.FR]: 'La rémunération m’est apparue satisfaisante',
		[Language.IT]: 'Ero soddisfattə del compenso',
		[Language.NL]: 'I was satisfied with the compensation (NL)'
	},
	satisfiedWithConditions: {
		[Language.EN]: 'I was satisfied with the working conditions',
		[Language.FR]: 'Les conditions de travail me sont apparues satisfaisantes',
		[Language.IT]: 'Ero soddisfattə delle condizioni di lavoro',
		[Language.NL]: 'I was satisfied with the working conditions (NL)'
	},
	treatedFairly: {
		[Language.EN]: 'I felt fairly treated against my colleagues',
		[Language.FR]: 'Je me suis senti·e traité·e de manière équitable par rapport à mes collègues',
		[Language.IT]: 'Mi sono sentitə trattatə in modo equo rispetto ai miei colleghi',
		[Language.NL]: 'I felt fairly treated against my colleagues (NL)'
	},
	addlComp: {
		[Language.EN]: 'Additional Compensation',
		[Language.FR]: 'Compensations additionelles',
		[Language.IT]: 'Compensi aggiuntivi',
		[Language.NL]: 'Additional Compensation (NL)'
	},
	employees: {
		[Language.EN]: 'employees',
		[Language.FR]: 'employé·es',
		[Language.IT]: 'dipendentə',
		[Language.NL]: 'employees (NL)'
	},
	yearsOfExperience: {
		[Language.EN]: 'year(s) of experience',
		[Language.FR]: 'année(s) d’expérience',
		[Language.IT]: 'anni di esperienza',
		[Language.NL]: 'year(s) of experience (NL)'
	},
	submitAnEntry: {
		[Language.EN]: 'Submit an entry',
		[Language.FR]: 'Partager une rémuneration',
		[Language.IT]: 'Condividere una remunerazione',
		[Language.NL]: 'Submit an entry (NL)'
	}
};

export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 ou avant',
	[Language.IT]: '2010 o anni precedenti',
	[Language.NL]: '2010 or before (NL)'
};
