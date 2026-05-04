import { Language, Country } from '$lib/content/country';

export const indexHeaderLabels = {
	worker: {
		[Language.EN]: 'Worker',
		[Language.FR]: 'Travailleur·se',
		[Language.IT]: 'Lavoratorə',
		[Language.NL]: 'Werknemer'
	},
	employer: {
		[Language.EN]: 'Employer',
		[Language.FR]: 'Employeur',
		[Language.IT]: 'Datorə di lavoro',
		[Language.NL]: 'Werkgever'
	},
	contract: {
		[Language.EN]: 'Contract',
		[Language.FR]: 'Contrat',
		[Language.IT]: 'Contratto',
		[Language.NL]: 'Contract'
	},
	wage: {
		[Language.EN]: 'Wage',
		[Language.FR]: 'Paie',
		[Language.IT]: 'Retribuzione',
		[Language.NL]: 'Loon'
	}
};

export const navMenuItems = {
	faq: {
		[Language.EN]: 'FAQ',
		[Language.FR]: 'FAQ',
		[Language.IT]: 'FAQ',
		[Language.NL]: 'FAQ'
	},
	privacy: {
		[Language.EN]: 'Privacy & data',
		[Language.FR]: 'Confidentialité & données',
		[Language.IT]: 'Privacy e dati',
		[Language.NL]: 'Privacy & gegevens'
	},
	cost: {
		[Language.EN]: 'How much does this website cost?',
		[Language.FR]: 'Combien coûte cette plateforme ?',
		[Language.IT]: 'Quanto costa questo sito web?',
		[Language.NL]: 'Wat kost deze website?'
	}
};

export const fieldLabels = {
	country: {
		[Language.EN]: 'Country',
		[Language.FR]: 'Pays',
		[Language.IT]: 'Paese',
		[Language.NL]: 'Land'
	},
	city: {
		[Language.EN]: 'City (optional)',
		[Language.FR]: 'Ville (facultatif)',
		[Language.IT]: 'Città (facoltativo)',
		[Language.NL]: 'Stad (optioneel)'
	},
	year: {
		[Language.EN]: 'Year',
		[Language.FR]: 'Année',
		[Language.IT]: 'Anno',
		[Language.NL]: 'Jaar (optioneel)'
	},
	employerType: {
		[Language.EN]: 'Employer category',
		[Language.FR]: 'Catégorie d’employeur',
		[Language.IT]: 'Tipologia di datore di lavoro',
		[Language.NL]: 'Werkgever type'
	},
	employerName: {
		[Language.EN]: 'Employer name (optional)',
		[Language.FR]: 'Nom de l’employeur (facultatif)',
		[Language.IT]: 'Nome del datore di lavoro (facoltativo)',
		[Language.NL]: 'Naam werkgever (optioneel)'
	},
	numEmployees: {
		[Language.EN]: '# of employees',
		[Language.FR]: '# d’employé·es',
		[Language.IT]: '# di dipendentə',
		[Language.NL]: '# aantal werknemers'
	},
	contractType: {
		[Language.EN]: 'Contract type',
		[Language.FR]: 'Type de contrat',
		[Language.IT]: 'Tipologia di contratto',
		[Language.NL]: 'Contract type'
	},
	workerStatus: {
		[Language.EN]: {
			[Country.UK]: 'Worker status (UK)',
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
			[Country.UK]: 'Werknemer status (UK)',
			[Country.NETHERLANDS]: ' Werknemer status (NL)',
			[Country.ITALY]: 'Werknemer status (IT)',
			[Country.FRANCE]: 'Werknemer status (FR)'
		}
	},
	contractLength: {
		[Language.EN]: 'Contract length (optional)',
		[Language.FR]: 'Durée du contrat (facultatif)',
		[Language.IT]: 'Durata del contratto (facoltativo)',
		[Language.NL]: 'Contract duur (optioneel)'
	},
	contractNumHours: {
		[Language.EN]: '# of hours (optional)',
		[Language.FR]: '# d’heures (facultatif)',
		[Language.IT]: '# di ore (facoltativo)',
		[Language.NL]: '# uren (optioneel)'
	},
	perWeek: {
		[Language.EN]: 'hours / week',
		[Language.FR]: 'heures / semaine',
		[Language.IT]: 'ore / settimana',
		[Language.NL]: 'uren / week '
	},
	workerType: {
		[Language.EN]: 'Worker category',
		[Language.FR]: 'Catégorie de travailleur·se',
		[Language.IT]: 'Categoria del lavoratorə',
		[Language.NL]: 'Werknemer categorie'
	},
	projectType: {
		[Language.EN]: 'Project type (optional)',
		[Language.FR]: 'Type de projet (facultatif)',
		[Language.IT]: 'Tipologia di progetto (facoltativo)',
		[Language.NL]: 'Project type (optioneel)'
	},
	jobTitle: {
		[Language.EN]: 'Job title (optional)',
		[Language.FR]: 'Intitulé de poste (facultatif)',
		[Language.IT]: 'Titolo di lavoro (facoltativo)',
		[Language.NL]: 'Functietitel (optioneel)'
	},
	jobDetails: {
		[Language.EN]: 'Details (optional)',
		[Language.FR]: 'Détails (facultatif)',
		[Language.IT]: 'Dettagli (facoltativo)',
		[Language.NL]: 'Detail (optioneel)'
	},
	jobExperience: {
		[Language.EN]: 'Experience (optional)',
		[Language.FR]: 'Expérience (facultatif)',
		[Language.IT]: 'Esperienza (facoltativo)',
		[Language.NL]: 'Ervaring (optioneel)'
	},
	jobObtainedVia: {
		[Language.EN]: 'Job obtained via (optional)',
		[Language.FR]: 'Travail obtenu via (facultatif)',
		[Language.IT]: 'Modalità di ottenimento del lavoro (facoltativo)',
		[Language.NL]: 'Baan verkregen via (optioneel)'
	},
	compensationAmount: {
		[Language.EN]: 'Amount',
		[Language.FR]: 'Montant',
		[Language.IT]: 'Importo',
		[Language.NL]: 'Bedrag'
	},
	compensationPercentage: {
		[Language.EN]: 'Percentage',
		[Language.FR]: 'Pourcentage',
		[Language.IT]: 'Percentuale',
		[Language.NL]: 'Percentage'
	},
	compensationFrequency: {
		[Language.EN]: 'frequency',
		[Language.FR]: 'fréquence',
		[Language.IT]: 'frequenza',
		[Language.NL]: 'frequentie'
	},
	compensationLate: {
		[Language.EN]: 'I was paid late',
		[Language.FR]: 'J’ai été payé·e en retard',
		[Language.IT]: 'Sono statə pagatə in ritardo',
		[Language.NL]: 'Ik werd te laat betaald'
	},
	satisfiedWithCompensation: {
		[Language.EN]: 'I was satisfied with the compensation',
		[Language.FR]: 'La rémunération m’est apparue satisfaisante',
		[Language.IT]: 'Ero soddisfattə del compenso',
		[Language.NL]: 'Ik was tevreden over de vergoeding'
	},
	satisfiedWithConditions: {
		[Language.EN]: 'I was satisfied with the working conditions',
		[Language.FR]: 'Les conditions de travail me sont apparues satisfaisantes',
		[Language.IT]: 'Ero soddisfattə delle condizioni di lavoro',
		[Language.NL]: 'Ik was tevreden over de werkomstandigheden'
	},
	treatedFairly: {
		[Language.EN]: 'I felt fairly treated against my colleagues',
		[Language.FR]: 'Je me suis senti·e traité·e de manière équitable par rapport à mes collègues',
		[Language.IT]: 'Mi sono sentitə trattatə in modo equo rispetto ai miei colleghi',
		[Language.NL]: 'Ik werd gelijkwaardig als mijn collega’s behandeld'
	},
	addlComp: {
		[Language.EN]: 'Additional compensation',
		[Language.FR]: 'Compensations additionelles',
		[Language.IT]: 'Compensi aggiuntivi',
		[Language.NL]: 'Extra vergoeding'
	},
	employees: {
		[Language.EN]: 'employees',
		[Language.FR]: 'employé·es',
		[Language.IT]: 'dipendentə',
		[Language.NL]: 'werknemers'
	},
	yearsOfExperience: {
		[Language.EN]: 'years of experience',
		[Language.FR]: 'années d’expérience',
		[Language.IT]: 'anni di esperienza',
		[Language.NL]: 'jaren ervaring'
	},
	submitAnEntry: {
		[Language.EN]: 'Submit an entry',
		[Language.FR]: 'Partager une rémuneration',
		[Language.IT]: 'Condividere una remunerazione',
		[Language.NL]: 'Een inzending indienen'
	}
};

export const miscLabels = {
	confirmDelete: {
		[Language.EN]: 'Are you sure you want to delete this entry?',
		[Language.FR]: 'Êtes-vous sûr·e de vouloir supprimer cette entrée ?',
		[Language.IT]: 'Sei sicurə di voler eliminare questa voce?',
		[Language.NL]: 'Weet je zeker dat je deze invoer wilt verwijderen?'
	},
	delete: {
		[Language.EN]: 'Delete',
		[Language.FR]: 'Supprimer',
		[Language.IT]: 'Elimina',
		[Language.NL]: 'Verwijderen'
	},
	cancel: {
		[Language.EN]: 'Cancel',
		[Language.FR]: 'Annuler',
		[Language.IT]: 'Annulla',
		[Language.NL]: 'Annuleren'
	}
};
export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 ou avant',
	[Language.IT]: '2010 o anni precedenti',
	[Language.NL]: '2010 of eerder'
};
