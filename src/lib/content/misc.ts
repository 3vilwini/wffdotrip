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
		[Language.NL]: 'Jaar'
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
	},
	//TODO: FILL OUT TRANSLATIONS
	signOut: {
		[Language.EN]: 'Sign Out',
		[Language.FR]: 'Sign Out',
		[Language.IT]: 'Sign Out',
		[Language.NL]: 'Sign Out'
	},
	//TODO: FILL OUT TRANSLATIONS
	dashboard: {
		[Language.EN]: 'Dashboard',
		[Language.FR]: 'Dashboard',
		[Language.IT]: 'Dashboard',
		[Language.NL]: 'Dashboard'
	},
	//TODO: FILL OUT TRANSLATIONS
	edit: {
		[Language.EN]: 'Edit',
		[Language.FR]: 'Edit',
		[Language.IT]: 'Edit',
		[Language.NL]: 'Edit'
	},
	//TODO: FILL OUT TRANSLATIONS
	submitEdits: {
		[Language.EN]: 'Submit Edits',
		[Language.FR]: 'Submit Edits',
		[Language.IT]: 'Submit Edits',
		[Language.NL]: 'Submit Edits'
	},
	//TODO: FILL OUT TRANSLATIONS
	yourSubmissions: {
		[Language.EN]: 'Your Submissions',
		[Language.FR]: 'Your Submissions',
		[Language.IT]: 'Your Submissions',
		[Language.NL]: 'Your Submissions'
	},
	//TODO: FILL OUT TRANSLATIONS
	filter: {
		[Language.EN]: 'Filter',
		[Language.FR]: 'Filter',
		[Language.IT]: 'Filter',
		[Language.NL]: 'Filter'
	},
	//TODO: FILL OUT TRANSLATIONS
	filteredResults: {
		[Language.EN]: 'Filtered Results',
		[Language.FR]: 'Filtered Results',
		[Language.IT]: 'Filtered Results',
		[Language.NL]: 'Filtered Results'
	},
	//TODO: FILL OUT TRANSLATIONS
	search: {
		[Language.EN]: 'Search',
		[Language.FR]: 'Search',
		[Language.IT]: 'Search',
		[Language.NL]: 'Search'
	},
	//TODO: FILL OUT TRANSLATIONS
	formThanks: {
		[Language.EN]: 'Thanks, your submission has been recorded!',
		[Language.FR]: 'Thanks, your submission has been recorded!',
		[Language.IT]: 'Thanks, your submission has been recorded!',
		[Language.NL]: 'Thanks, your submission has been recorded!'
	},
	//TODO: FILL OUT TRANSLATIONS
	formThanks2: {
		[Language.EN]: 'Thanks for your submissions!',
		[Language.FR]: 'Thanks for your submissions!',
		[Language.IT]: 'Thanks for your submissions!',
		[Language.NL]: 'Thanks for your submissions!'
	},
	//TODO: FILL OUT TRANSLATIONS
	entriesAreManuallyApproved: {
		[Language.EN]:
			'Entries are manually approved before appearing, but your identity remains completely anonymous.',
		[Language.FR]:
			'Entries are manually approved before appearing, but your identity remains completely anonymous.',
		[Language.IT]:
			'Entries are manually approved before appearing, but your identity remains completely anonymous.',
		[Language.NL]:
			'Entries are manually approved before appearing, but your identity remains completely anonymous.'
	},
	//TODO: FILL OUT TRANSLATIONS
	backToIndex: {
		[Language.EN]: 'Back to Index',
		[Language.FR]: 'Back to Index',
		[Language.IT]: 'Back to Index',
		[Language.NL]: 'Back to Index'
	},

	//TODO: FILL OUT TRANSLATIONS
	backToForm: {
		[Language.EN]: 'Back to Form',
		[Language.FR]: 'Back to Form',
		[Language.IT]: 'Back to Form',
		[Language.NL]: 'Back to Form'
	},
	//TODO: FILL OUT TRANSLATIONS
	submitNewEntry: {
		[Language.EN]: 'Submit New Entry',
		[Language.FR]: 'Submit New Entry',
		[Language.IT]: 'Submit New Entry',
		[Language.NL]: 'Submit New Entry'
	},
	//TODO: FILL OUT TRANSLATIONS
	entries: {
		[Language.EN]: 'Entries',
		[Language.FR]: 'Entries',
		[Language.IT]: 'Entries',
		[Language.NL]: 'Entries'
	},
	//TODO: FILL OUT TRANSLATIONS
	backToAllEntries: {
		[Language.EN]: 'Back to all entries',
		[Language.FR]: 'Back to all entries',
		[Language.IT]: 'Back to all entries',
		[Language.NL]: 'Back to all entries'
	},
	//TODO: FILL OUT TRANSLATIONS
	formErrorMessage: {
		[Language.EN]:
			'There has been an error submitting the form. Please try again later or contact TK@TK.com',
		[Language.FR]:
			'There has been an error submitting the form. Please try again later or contact TK@TK.com',
		[Language.IT]:
			'There has been an error submitting the form. Please try again later or contact TK@TK.com',
		[Language.NL]:
			'There has been an error submitting the form. Please try again later or contact TK@TK.com'
	},
	//TODO: FILL OUT TRANSLATIONS
	showAllRows: {
		[Language.EN]: 'Show All Rows',
		[Language.FR]: 'Show All Rows',
		[Language.IT]: 'Show All Rows',
		[Language.NL]: 'Show All Rows'
	},
	logInOrSignUpToViewDashboard: {
		[Language.EN]: 'Log-in or Sign up to view Dashboard',
		[Language.FR]: 'Log-in or Sign up to view Dashboard',
		[Language.IT]: 'Log-in or Sign up to view Dashboard',
		[Language.NL]: 'Log-in or Sign up to view Dashboard'
	},
	currentlyInBeta: {
		[Language.EN]: 'currently in private beta ♡ by workers for workers ♡',
		[Language.FR]: 'currently in private beta ♡ by workers for workers ♡',
		[Language.IT]: 'currently in private beta ♡ by workers for workers ♡',
		[Language.NL]: 'currently in private beta ♡ by workers for workers ♡'
		
	}
};
export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 ou avant',
	[Language.IT]: '2010 o anni precedenti',
	[Language.NL]: '2010 of eerder'
};
