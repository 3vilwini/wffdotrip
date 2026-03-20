import { Language, siteState } from './states.svelte';

export const enum Country {
	UK = 'UK',
	FRANCE = 'FRANCE',
	ITALY = 'ITALY',
	SPAIN = 'SPAIN'
}

export const countryShortCode = {
	[Country.UK]: 'UK',
	[Country.FRANCE]: 'FR',
	[Country.ITALY]: 'IT',
	[Country.SPAIN]: 'SP'
};

export const countryIcons = {
	[Country.UK]: '❋',
	[Country.FRANCE]: '✸',
	[Country.ITALY]: '✤',
	[Country.SPAIN]: '✣'
}

export const currency = {
	[Country.UK]: '£',
	[Country.FRANCE]: '€',
	[Country.ITALY]: '€',
	[Country.SPAIN]: '€'
};

export const indexHeaderLabels = {
	worker: {
		[Language.EN]: 'Worker',
		[Language.FR]: 'Travailleur·se',
		[Language.IT]: 'Worker (IT)',
		[Language.ES]: 'Worker (ES)'
	},
	employer: {
		[Language.EN]: 'Employer',
		[Language.FR]: 'Employeur',
		[Language.IT]: 'Employer (IT)',
		[Language.ES]: 'Employer (ES)'
	},
	contract: {
		[Language.EN]: 'Contract',
		[Language.FR]: 'Contrat',
		[Language.IT]: 'Contract (IT)',
		[Language.ES]: 'Contract (ES)'
	},
	wage: {
		[Language.EN]: 'Wage',
		[Language.FR]: 'Paie',
		[Language.IT]: 'Wage (IT)',
		[Language.ES]: 'Wage (ES)'
	}
};

export const navMenuItems = {
	faq: {
		[Language.EN]: 'FAQ',
		[Language.FR]: 'FAQ',
		[Language.IT]: 'FAQ',
		[Language.ES]: 'FAQ'
	},
	privacy: {
		[Language.EN]: 'Privacy & data',
		[Language.FR]: 'Confidentialité & données',
		[Language.IT]: 'Privacy & data (IT)',
		[Language.ES]: 'Privacy & data (ES)'
	},
	cost: {
		[Language.EN]: 'How much does this website cost?',
		[Language.FR]: 'Combien coûte cette plateforme ?',
		[Language.IT]: 'How much does this website cost? (IT)',
		[Language.ES]: 'How much does this website cost? (ES)'
	}
};

export const fieldLabels = {
	country: {
		[Language.EN]: 'Country',
		[Language.FR]: 'Pays',
		[Language.IT]: 'Country in italian',
		[Language.ES]: 'Country in spanish'
	},
	city: {
		[Language.EN]: 'City (optional)',
		[Language.FR]: 'Ville (optionnel)',
		[Language.IT]: 'City in italian',
		[Language.ES]: 'City in spanish'
	},
	year: {
		[Language.EN]: 'Year',
		[Language.FR]: 'Année',
		[Language.IT]: 'Year in italian',
		[Language.ES]: 'Year in spanish'
	},
	employerType: {
		[Language.EN]: 'Employer Category',
		[Language.FR]: 'Catégorie d’employeur',
		[Language.IT]: 'Employer Type in italian',
		[Language.ES]: 'Employer Type in spanish'
	},
	employerName: {
		[Language.EN]: 'Employer Name (optional)',
		[Language.FR]: 'Nom de l’employeur (optionnel)',
		[Language.IT]: 'Employer Name (optional) in italian',
		[Language.ES]: 'Employer Name (optional) in spanish'
	},
	numEmployees: {
		[Language.EN]: '# of Employees',
		[Language.FR]: '# d’employé·es',
		[Language.IT]: '# of Employees in italian',
		[Language.ES]: '# of Employees in spanish'
	},
	contractType: {
		[Language.EN]: 'Contract Type',
		[Language.FR]: 'Type de contrat',
		[Language.IT]: 'Contract Type in italian',
		[Language.ES]: 'Contract Type in spanish'
	},
	workerStatus: {
		[Language.EN]: {
			[Country.UK]: 'Worker Status (UK)',
			[Country.SPAIN]: 'Worker Status',
			[Country.ITALY]: 'Worker Status (IT)',
			[Country.FRANCE]: 'Worker Status (FR)'
		},
		[Language.FR]: {
			[Country.UK]: 'Statut / régime (UK)',
			[Country.SPAIN]: 'Statut / régime',
			[Country.ITALY]: 'Statut / régime (IT)',
			[Country.FRANCE]: 'Statut / régime (FR)'
		},
		[Language.IT]: {
			[Country.UK]: 'UK Worker status (IT)',
			[Country.SPAIN]: 'Spanish Worker status (IT)',
			[Country.ITALY]: 'Italian Worker status (IT)',
			[Country.FRANCE]: 'French Worker status (IT)'
		},
		[Language.ES]: {
			[Country.UK]: 'UK Worker status (ES)',
			[Country.SPAIN]: 'Spanish Worker status (ES)',
			[Country.ITALY]: 'Italian Worker status (ES)',
			[Country.FRANCE]: 'French Worker status (ES)'
		}
	},
	contractLength: {
		[Language.EN]: 'Contract Length (optional)',
		[Language.FR]: 'Durée du contrat (optionnel)',
		[Language.IT]: 'Contract Length (optional) in italian',
		[Language.ES]: 'Contract Length (optional) in spanish'
	},
	contractNumHours: {
		[Language.EN]: '# hours (optional)',
		[Language.FR]: '# d’heures (optionnel)',
		[Language.IT]: '# of hours (optional) in italian',
		[Language.ES]: '# of hours (optional) in spanish'
	},
	perWeek: {
		[Language.EN]: 'hours / week',
		[Language.FR]: 'heures / semaine',
		[Language.IT]: 'hours per week in italian',
		[Language.ES]: 'hours per week in spanish'
	},
	workerType: {
		[Language.EN]: 'Worker Category',
		[Language.FR]: 'Catégorie de travailleur·ses',
		[Language.IT]: 'Worker category in italian',
		[Language.ES]: 'Worker category in spanish'
	},
	jobTitle: {
		[Language.EN]: 'Labor Category (optional)',
		[Language.FR]: 'Type de projet (optionnel)',
		[Language.IT]: 'Job title (optional) in italian',
		[Language.ES]: 'Job title (optional) in spanish'
	},
	jobDetails: {
		[Language.EN]: 'Details (optional)',
		[Language.FR]: 'Détails (optionnel)',
		[Language.IT]: 'Details (optional) in italian',
		[Language.ES]: 'Details (optional) in spanish'
	},
	jobExperience: {
		[Language.EN]: 'Experience (optional)',
		[Language.FR]: 'Expérience (optionnel)',
		[Language.IT]: 'Experience (optional) in italian',
		[Language.ES]: 'Experience (optional) in spanish'
	},
	jobObtainedVia: {
		[Language.EN]: 'Job obtained via (optional)',
		[Language.FR]: 'Travail obtenu via (optionnel)',
		[Language.IT]: 'Job obtained via (optional) in italian',
		[Language.ES]: 'Job obtained via (optional) in spanish'
	},
	compensationAmount: {
		[Language.EN]: 'Amount',
		[Language.FR]: 'Montant',
		[Language.IT]: 'Amount in italian',
		[Language.ES]: 'Amount in spanish'
	},
	compensationFrequency: {
		[Language.EN]: 'frequency',
		[Language.FR]: 'fréquence',
		[Language.IT]: 'frequency in italian',
		[Language.ES]: 'frequency in spanish'
	},
	compensationLate: {
		[Language.EN]: 'I was paid late',
		[Language.FR]: 'J’ai été payé·e en retard',
		[Language.IT]: 'I was paid late in italian',
		[Language.ES]: 'I was paid late in spanish'
	},
	satisfiedWithCompensation: {
		[Language.EN]: 'I was satisfied with the compensation',
		[Language.FR]: 'La rémunération m’est apparue satisfaisante',
		[Language.IT]: 'I was satisfied with the compensation in italian',
		[Language.ES]: 'I was satisfied with the compensation in spanish'
	},
	satisfiedWithConditions: {
		[Language.EN]: 'I was satisfied with the working conditions',
		[Language.FR]: 'Les conditions de travail me sont apparues satisfaisantes',
		[Language.IT]: 'I was satisfied with the working conditions in italian',
		[Language.ES]: 'I was satisfied with the working conditions in spanish'
	},
	treatedFairly: {
		[Language.EN]: 'I felt fairly treated against my colleagues',
		[Language.FR]: 'Je me suis senti·e traité·e de manière équitable par rapport à mes collègues',
		[Language.IT]: 'I felt fairly treated against my colleagues in italian',
		[Language.ES]: 'I felt fairly treated against my colleagues in spanish'
	},
	addlComp: {
		[Language.EN]: 'Additional compensation',
		[Language.FR]: 'Compensations additionelles',
		[Language.IT]: 'Additional compensation in italian',
		[Language.ES]: 'Additional compensation in spanish'
	},
	employees: {
		[Language.EN]: 'employees',
		[Language.FR]: 'employé·es',
		[Language.IT]: 'employees in italian',
		[Language.ES]: 'employees in spanish'
	},
	yearsOfExperience: {
		[Language.EN]: 'year(s) of experience',
		[Language.FR]: 'année(s) d’expérience',
		[Language.IT]: 'year(s) of experience in italian',
		[Language.ES]: 'year(s) of experience in spanish'
	},
	submitAnEntry: {
		[Language.EN]: 'Submit an entry',
		[Language.FR]: 'Partager une rémuneration',
		[Language.IT]: 'Submit an entry in italian',
		[Language.ES]: 'Submit an entry in spanish'
	}
};

export const languageOptions = {
	[Language.EN]: 'English',
	[Language.FR]: 'Français',
	[Language.IT]: 'Italiano'
	// [Language.ES]: 'Español'
};

export const countryOptions = {
	[Country.UK]: {
		[Language.EN]: 'UK',
		[Language.FR]: 'Royaume-Uni',
		[Language.IT]: 'UK in italian',
		[Language.ES]: 'UK in spanish',
		id: '5207042'
	},
	[Country.FRANCE]: {
		[Language.EN]: 'France',
		[Language.FR]: 'France',
		[Language.IT]: 'France in italian',
		[Language.ES]: 'France in spanish',
		id: '5207043'
	},
	[Country.ITALY]: {
		[Language.EN]: 'Italy',
		[Language.FR]: 'Italie',
		[Language.IT]: 'Italy in italian',
		[Language.ES]: 'Italy in spanish',
		id: '5207041'
	},
	// [Country.SPAIN]: {
	// 	[Language.EN]: 'Spain',
	// 	[Language.FR]: 'Spain in french',
	// 	[Language.IT]: 'Spain in italian',
	// 	[Language.ES]: 'Spain in spanish',
	// 	id: '5207044'
	// }
};

export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 ou avant',
	[Language.IT]: '2010 or before in italian',
	[Language.ES]: '2010 or before in spanish'
};

export const enum EmployerTypeSubgroup {
	CULTURAL_INSTITUTIONS = 'CULTURAL_INSTITUTIONS',
	EDUCATION_AND_RESEARCH = 'EDUCATION_AND_RESEARCH',
	GOVERNMENT_AND_FUNDING_BODIES = 'GOVERNMENT_AND_FUNDING_BODIES',
	COMMERCIAL_AND_MARKET = 'COMMERCIAL_AND_MARKET',
	PUBLISHING = 'PUBLISHING',
	PRODUCTION_AND_CREATION = 'PRODUCTION_AND_CREATION',
	EVENTS = 'EVENTS',
	ARTIST_SUPPORT_STRUCTURES = 'ARTIST_SUPPORT_STRUCTURES',
	OTHER = 'OTHER'
}

export const enum EmployerType {
	MUSEUM = 'MUSEUM',
	ART_CENTER = 'ART_CENTER',
	REGIONAL_CULTURAL_INSTITUTION = 'REGIONAL_CULTURAL_INSTITUTION',
	NATIONAL_CULTURAL_INSTITUTION = 'NATIONAL_CULTURAL_INSTITUTION',
	GALLERY = 'GALLERY',
	ARTIST_RUN_SPACE = 'ARTIST_RUN_SPACE',
	FOUNDATION = 'FOUNDATION',
	CULTURAL_CENTER = 'CULTURAL_CENTER',
	THIRD_PLACES = 'THIRD_PLACES',
	NON_PROFIT_ORGANIZATION = 'NON_PROFIT_ORGANIZATION',
	PUBLIC_SCHOOL = 'PUBLIC_SCHOOL',
	PRIVATE_SCHOOL = 'PRIVATE_SCHOOL',
	PUBLIC_UNIVERSITY = 'PUBLIC_UNIVERSITY',
	PRIVATE_UNIVERSITY = 'PRIVATE_UNIVERSITY',
	LIBRARY = 'LIBRARY',
	ARCHIVE = 'ARCHIVE',
	RESEARCH_CENTER = 'RESEARCH_CENTER',
	LABORATORY = 'LABORATORY',
	NATIONAL_CULTURAL_AUTHORITY = 'NATIONAL_CULTURAL_AUTHORITY',
	ARTS_COUNCIL = 'ARTS_COUNCIL',
	LOCAL_GOVT = 'LOCAL_GOVT',
	PUBLIC_FUNDING_AGENCY = 'PUBLIC_FUNDING_AGENCY',
	ENDOWMENT_FUND = 'ENDOWMENT_FUND',
	CULTURAL_DIPLOMACY_BODY = 'CULTURAL_DIPLOMACY_BODY',
	AUCTION_HOUSE = 'AUCTION_HOUSE',
	ART_DEALER = 'ART_DEALER',
	ART_ADVISOR = 'ART_ADVISOR',
	ONLINE_SALES_PLATFORM = 'ONLINE_SALES_PLATFORM',
	PUBLISHING_HOUSE = 'PUBLISHING_HOUSE',
	MEDIA = 'MEDIA',
	MAGAZINE = 'MAGAZINE',
	ONLINE_PLATFORM = 'ONLINE_PLATFORM',
	ARTIST_STUDIO = 'ARTIST_STUDIO',
	FABRICATION_WORKSHOP = 'FABRICATION_WORKSHOP',
	FAB_LAB = 'FAB_LAB',
	ART_LOGISTICS = 'ART_LOGISTICS',
	FESTIVAL = 'FESTIVAL',
	BIENNIAL = 'BIENNIAL',
	TRIENNIAL = 'TRIENNIAL',
	FAIR = 'FAIR',
	LOCAL_EVENT = 'LOCAL_EVENT',
	UNION = 'UNION',
	ARTIST_SERVICES_ORGANIZATION = 'ARTIST_SERVICES_ORGANIZATION',
	RIGHTS_ORGANIZATION = 'RIGHTS_ORGANIZATION',
	RESIDENCY_PROGRAM = 'RESIDENCY_PROGRAM',
	COOPERATIVE_STRUCTURE = 'COOPERATIVE_STRUCTURE',
	OTHER = 'OTHER'
}

export const employerTypeOptions = {
	[EmployerTypeSubgroup.CULTURAL_INSTITUTIONS]: {
		groupLabel: {
			[Language.EN]: 'Cultural Institutions',
			[Language.FR]: 'Cultural Institutions in french',
			[Language.IT]: 'Cultural Institutions in italian',
			[Language.ES]: 'Cultural Institutions in spanish'
		},
		options: {
			[EmployerType.MUSEUM]: {
				[Language.EN]: 'Museum',
				[Language.FR]: 'Museum in french',
				[Language.IT]: 'Museum in italian',
				[Language.ES]: 'Museum in spanish',
				id: '5207059'
			},
			[EmployerType.ART_CENTER]: {
				[Language.EN]: 'Art Center',
				[Language.FR]: 'Art Center in french',
				[Language.IT]: 'Art Center in italian',
				[Language.ES]: 'Art Center in spanish',
				id: '5207060'
			},
			[EmployerType.REGIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'Regional Cultural Institution (FRAC, Kunstverein)',
				[Language.FR]: 'Regional Cultural Institution (FRAC, Kunstverein) in french',
				[Language.IT]: 'Regional Cultural Institution (FRAC, Kunstverein) in italian',
				[Language.ES]: 'Regional Cultural Institution (FRAC, Kunstverein) in spanish',
				id: '5207061'
			},
			[EmployerType.NATIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'National Cultural Institution (EPCC...)',
				[Language.FR]: 'National Cultural Institution (EPCC...) in french',
				[Language.IT]: 'National Cultural Institution (EPCC...) in italian',
				[Language.ES]: 'National Cultural Institution (EPCC...) in spanish',
				id: '5207062'
			},
			[EmployerType.GALLERY]: {
				[Language.EN]: 'Gallery',
				[Language.FR]: 'Gallery in french',
				[Language.IT]: 'Gallery in italian',
				[Language.ES]: 'Gallery in spanish',
				id: '5207063'
			},
			[EmployerType.ARTIST_RUN_SPACE]: {
				[Language.EN]: 'Artist-Run Space',
				[Language.FR]: 'Artist-Run Space in french',
				[Language.IT]: 'Artist-Run Space in italian',
				[Language.ES]: 'Artist-Run Space in spanish',
				id: '5207064'
			},
			[EmployerType.FOUNDATION]: {
				[Language.EN]: 'Foundation',
				[Language.FR]: 'Foundation in french',
				[Language.IT]: 'Foundation in italian',
				[Language.ES]: 'Foundation in spanish',
				id: '5207065'
			},
			[EmployerType.CULTURAL_CENTER]: {
				[Language.EN]: 'Cultural Center',
				[Language.FR]: 'Cultural Center in french',
				[Language.IT]: 'Cultural Center in italian',
				[Language.ES]: 'Cultural Center in spanish',
				id: '5207066'
			},
			[EmployerType.THIRD_PLACES]: {
				[Language.EN]: 'Third Places',
				[Language.FR]: 'Third Places in french',
				[Language.IT]: 'Third Places in italian',
				[Language.ES]: 'Third Places in spanish',
				id: '5207067'
			},
			[EmployerType.NON_PROFIT_ORGANIZATION]: {
				[Language.EN]: 'Non-Profit Organization',
				[Language.FR]: 'Non-Profit Organization in french',
				[Language.IT]: 'Non-Profit Organization in italian',
				[Language.ES]: 'Non-Profit Organization in spanish',
				id: '5207068'
			}
		}
	},
	[EmployerTypeSubgroup.EDUCATION_AND_RESEARCH]: {
		groupLabel: {
			[Language.EN]: 'Education & Research',
			[Language.FR]: 'Education & Research in french',
			[Language.IT]: 'Education & Research in italian',
			[Language.ES]: 'Education & Research in spanish'
		},
		options: {
			[EmployerType.PUBLIC_SCHOOL]: {
				[Language.EN]: 'Public School',
				[Language.FR]: 'Public School in french',
				[Language.IT]: 'Public School in italian',
				[Language.ES]: 'Public School in spanish',
				id: '5207069'
			},
			[EmployerType.PRIVATE_SCHOOL]: {
				[Language.EN]: 'Private School',
				[Language.FR]: 'Private School in french',
				[Language.IT]: 'Private School in italian',
				[Language.ES]: 'Private School in spanish',
				id: '5207070'
			},
			[EmployerType.PUBLIC_UNIVERSITY]: {
				[Language.EN]: 'Public University',
				[Language.FR]: 'Public University in french',
				[Language.IT]: 'Public University in italian',
				[Language.ES]: 'Public University in spanish',
				id: '5207071'
			},
			[EmployerType.PRIVATE_UNIVERSITY]: {
				[Language.EN]: 'Private University',
				[Language.FR]: 'Private University in french',
				[Language.IT]: 'Private University in italian',
				[Language.ES]: 'Private University in spanish',
				id: '5207072'
			},
			[EmployerType.LIBRARY]: {
				[Language.EN]: 'Library',
				[Language.FR]: 'Library in french',
				[Language.IT]: 'Library in italian',
				[Language.ES]: 'Library in spanish',
				id: '5207073'
			},
			[EmployerType.ARCHIVE]: {
				[Language.EN]: 'Archive',
				[Language.FR]: 'Archive in french',
				[Language.IT]: 'Archive in italian',
				[Language.ES]: 'Archive in spanish',
				id: '5207074'
			},
			[EmployerType.FOUNDATION]: {
				[Language.EN]: 'Foundation',
				[Language.FR]: 'Foundation in french',
				[Language.IT]: 'Foundation in italian',
				[Language.ES]: 'Foundation in spanish',
				id: '5207065'
			},
			[EmployerType.RESEARCH_CENTER]: {
				[Language.EN]: 'Research Center',
				[Language.FR]: 'Research Center in french',
				[Language.IT]: 'Research Center in italian',
				[Language.ES]: 'Research Center in spanish',
				id: '5207075'
			},
			[EmployerType.LABORATORY]: {
				[Language.EN]: 'Laboratory',
				[Language.FR]: 'Laboratory in french',
				[Language.IT]: 'Laboratory in italian',
				[Language.ES]: 'Laboratory in spanish',
				id: '5207076'
			}
		}
	},
	[EmployerTypeSubgroup.GOVERNMENT_AND_FUNDING_BODIES]: {
		groupLabel: {
			[Language.EN]: 'Government & Funding Bodies',
			[Language.FR]: 'Government & Funding Bodies in french',
			[Language.IT]: 'Government & Funding Bodies in italian',
			[Language.ES]: 'Government & Funding Bodies in spanish'
		},
		options: {
			[EmployerType.NATIONAL_CULTURAL_AUTHORITY]: {
				[Language.EN]: 'National Cultural Authority',
				[Language.FR]: 'National Cultural Authority in french',
				[Language.IT]: 'National Cultural Authority in italian',
				[Language.ES]: 'National Cultural Authority in spanish',
				id: '5207077'
			},
			[EmployerType.ARTS_COUNCIL]: {
				[Language.EN]: 'Arts Council or Arm’s-Length Body',
				[Language.FR]: 'Arts Council or Arm’s-Length Body in french',
				[Language.IT]: 'Arts Council or Arm’s-Length Body in italian',
				[Language.ES]: 'Arts Council or Arm’s-Length Body in spanish',
				id: '5207078'
			},
			[EmployerType.LOCAL_GOVT]: {
				[Language.EN]: 'Regional or Local Government',
				[Language.FR]: 'Regional or Local Government in french',
				[Language.IT]: 'Regional or Local Government in italian',
				[Language.ES]: 'Regional or Local Government in spanish',
				id: '5207079'
			},
			[EmployerType.PUBLIC_FUNDING_AGENCY]: {
				[Language.EN]: 'Public Funding Agency',
				[Language.FR]: 'Public Funding Agency in french',
				[Language.IT]: 'Public Funding Agency in italian',
				[Language.ES]: 'Public Funding Agency in spanish',
				id: '5207080'
			},
			[EmployerType.ENDOWMENT_FUND]: {
				[Language.EN]: 'Endowment Fund or Public-Interest Foundation',
				[Language.FR]: 'Endowment Fund or Public-Interest Foundation in french',
				[Language.IT]: 'Endowment Fund or Public-Interest Foundation in italian',
				[Language.ES]: 'Endowment Fund or Public-Interest Foundation in spanish',
				id: '5207081'
			},
			[EmployerType.CULTURAL_DIPLOMACY_BODY]: {
				[Language.EN]: 'Cultural Diplomacy Body (Embassy / Cultural Institute)',
				[Language.FR]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in french',
				[Language.IT]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in italian',
				[Language.ES]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in spanish',
				id: '5207082'
			}
		}
	},
	[EmployerTypeSubgroup.COMMERCIAL_AND_MARKET]: {
		groupLabel: {
			[Language.EN]: 'Commercial & Market',
			[Language.FR]: 'Commercial & Market in french',
			[Language.IT]: 'Commercial & Market in italian',
			[Language.ES]: 'Commercial & Market in spanish'
		},
		options: {
			[EmployerType.AUCTION_HOUSE]: {
				[Language.EN]: 'Auction House',
				[Language.FR]: 'Auction House in french',
				[Language.IT]: 'Auction House in italian',
				[Language.ES]: 'Auction House in spanish',
				id: '5207083'
			},
			[EmployerType.ART_DEALER]: {
				[Language.EN]: 'Art Dealer',
				[Language.FR]: 'Art Dealer in french',
				[Language.IT]: 'Art Dealer in italian',
				[Language.ES]: 'Art Dealer in spanish',
				id: '5207084'
			},
			[EmployerType.ART_ADVISOR]: {
				[Language.EN]: 'Art Advisor',
				[Language.FR]: 'Art Advisor in french',
				[Language.IT]: 'Art Advisor in italian',
				[Language.ES]: 'Art Advisor in spanish',
				id: '5207085'
			},
			[EmployerType.ONLINE_SALES_PLATFORM]: {
				[Language.EN]: 'Online Sales Platform',
				[Language.FR]: 'Online Sales Platform in french',
				[Language.IT]: 'Online Sales Platform in italian',
				[Language.ES]: 'Online Sales Platform in spanish',
				id: '5207086'
			}
		}
	},
	[EmployerTypeSubgroup.PUBLISHING]: {
		groupLabel: {
			[Language.EN]: 'Publishing',
			[Language.FR]: 'Publishing in french',
			[Language.IT]: 'Publishing in italian',
			[Language.ES]: 'Publishing in spanish'
		},
		options: {
			[EmployerType.PUBLISHING_HOUSE]: {
				[Language.EN]: 'Publishing House',
				[Language.FR]: 'Publishing House in french',
				[Language.IT]: 'Publishing House in italian',
				[Language.ES]: 'Publishing House in spanish',
				id: '5207087'
			},
			[EmployerType.MEDIA]: {
				[Language.EN]: 'Media',
				[Language.FR]: 'Media in french',
				[Language.IT]: 'Media in italian',
				[Language.ES]: 'Media in spanish',
				id: '5207088'
			},
			[EmployerType.MAGAZINE]: {
				[Language.EN]: 'Magazine',
				[Language.FR]: 'Magazine in french',
				[Language.IT]: 'Magazine in italian',
				[Language.ES]: 'Magazine in spanish',
				id: '5207089'
			},
			[EmployerType.ONLINE_PLATFORM]: {
				[Language.EN]: 'Online Platform',
				[Language.FR]: 'Online Platform in french',
				[Language.IT]: 'Online Platform in italian',
				[Language.ES]: 'Online Platform in spanish',
				id: '5207090'
			}
		}
	},
	[EmployerTypeSubgroup.PRODUCTION_AND_CREATION]: {
		groupLabel: {
			[Language.EN]: 'Production & Creation',
			[Language.FR]: 'Production & Creation in french',
			[Language.IT]: 'Production & Creation in italian',
			[Language.ES]: 'Production & Creation in spanish'
		},
		options: {
			[EmployerType.ARTIST_STUDIO]: {
				[Language.EN]: "Artist's Studio",
				[Language.FR]: "Artist's Studio in french",
				[Language.IT]: "Artist's Studio in italian",
				[Language.ES]: "Artist's Studio in spanish",
				id: '5207091'
			},
			[EmployerType.FABRICATION_WORKSHOP]: {
				[Language.EN]: 'Fabrication Workshops',
				[Language.FR]: 'Fabrication Workshops in french',
				[Language.IT]: 'Fabrication Workshops in italian',
				[Language.ES]: 'Fabrication Workshops in spanish',
				id: '5207092'
			},
			[EmployerType.FAB_LAB]: {
				[Language.EN]: 'Fab Lab',
				[Language.FR]: 'Fab Lab in french',
				[Language.IT]: 'Fab Lab in italian',
				[Language.ES]: 'Fab Lab in spanish',
				id: '5207093'
			},
			[EmployerType.ART_LOGISTICS]: {
				[Language.EN]: 'Art Logistics (Shipping, Storage, Handling)',
				[Language.FR]: 'Art Logistics (Shipping, Storage, Handling) in french',
				[Language.IT]: 'Art Logistics (Shipping, Storage, Handling) in italian',
				[Language.ES]: 'Art Logistics (Shipping, Storage, Handling) in spanish',
				id: '5207094'
			}
		}
	},
	[EmployerTypeSubgroup.EVENTS]: {
		groupLabel: {
			[Language.EN]: 'Events',
			[Language.FR]: 'Events in french',
			[Language.IT]: 'Events in italian',
			[Language.ES]: 'Events in spanish'
		},
		options: {
			[EmployerType.FESTIVAL]: {
				[Language.EN]: 'Festival',
				[Language.FR]: 'Festival in french',
				[Language.IT]: 'Festival in italian',
				[Language.ES]: 'Festival in spanish',
				id: '5207095'
			},
			[EmployerType.BIENNIAL]: {
				[Language.EN]: 'Biennial',
				[Language.FR]: 'Biennial in french',
				[Language.IT]: 'Biennial in italian',
				[Language.ES]: 'Biennial in spanish',
				id: '5207096'
			},
			[EmployerType.TRIENNIAL]: {
				[Language.EN]: 'Triennial',
				[Language.FR]: 'Triennial in french',
				[Language.IT]: 'Triennial in italian',
				[Language.ES]: 'Triennial in spanish',
				id: '5207097'
			},
			[EmployerType.FAIR]: {
				[Language.EN]: 'Fair',
				[Language.FR]: 'Fair in french',
				[Language.IT]: 'Fair in italian',
				[Language.ES]: 'Fair in spanish',
				id: '5207098'
			},
			[EmployerType.LOCAL_EVENT]: {
				[Language.EN]: 'Local Event',
				[Language.FR]: 'Local Event in french',
				[Language.IT]: 'Local Event in italian',
				[Language.ES]: 'Local Event in spanish',
				id: '5207099'
			}
		}
	},
	[EmployerTypeSubgroup.ARTIST_SUPPORT_STRUCTURES]: {
		groupLabel: {
			[Language.EN]: 'Artist Support Structures',
			[Language.FR]: 'Artist Support Structures in french',
			[Language.IT]: 'Artist Support Structures in italian',
			[Language.ES]: 'Artist Support Structures in spanish'
		},
		options: {
			[EmployerType.UNION]: {
				[Language.EN]: 'Union',
				[Language.FR]: 'Union in french',
				[Language.IT]: 'Union in italian',
				[Language.ES]: 'Union in spanish',
				id: '5207100'
			},
			[EmployerType.ARTIST_SERVICES_ORGANIZATION]: {
				[Language.EN]: 'Artist Services Organization',
				[Language.FR]: 'Artist Services Organization in french',
				[Language.IT]: 'Artist Services Organization in italian',
				[Language.ES]: 'Artist Services Organization in spanish',
				id: '5207101'
			},
			[EmployerType.RIGHTS_ORGANIZATION]: {
				[Language.EN]: 'Rights Organization (ADAGP, Artist Rights Society)',
				[Language.FR]: 'Rights Organization (ADAGP, Artist Rights Society) in french',
				[Language.IT]: 'Rights Organization (ADAGP, Artist Rights Society) in italian',
				[Language.ES]: 'Rights Organization (ADAGP, Artist Rights Society) in spanish',
				id: '5207102'
			},
			[EmployerType.RESIDENCY_PROGRAM]: {
				[Language.EN]: 'Residency Program',
				[Language.FR]: 'Residency Program in french',
				[Language.IT]: 'Residency Program in italian',
				[Language.ES]: 'Residency Program in spanish',
				id: '5207103'
			},
			[EmployerType.COOPERATIVE_STRUCTURE]: {
				[Language.EN]: 'Cooperative Structure',
				[Language.FR]: 'Cooperative Structure in french',
				[Language.IT]: 'Cooperative Structure in italian',
				[Language.ES]: 'Cooperative Structure in spanish',
				id: '5207104'
			}
		}
	},
	[EmployerTypeSubgroup.OTHER]: {
		groupLabel: {
			[Language.EN]: 'Other',
			[Language.FR]: 'Other in french',
			[Language.IT]: 'Other in italian',
			[Language.ES]: 'Other in spanish'
		},
		options: {
			[EmployerType.OTHER]: {
				[Language.EN]: 'Other',
				[Language.FR]: 'Other in french',
				[Language.IT]: 'Other in italian',
				[Language.ES]: 'Other in spanish',
				id: '5207105'
			}
		}
	}
};

export const getEmployerTypeLabel = (employerType: EmployerType): string => {
	for (const subgroupKey in employerTypeOptions) {
		const subgroup = employerTypeOptions[subgroupKey as EmployerTypeSubgroup];
		if (employerType in subgroup.options) {
			return subgroup.options[employerType][siteState.language];
		}
	}
	return employerType;
};

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
	APPRENTICESHIP = 'APPRENTICESHIP'
}

export const contractTypeOptions = {
	[ContractType.FULLTIME]: {
		[Language.EN]: 'Full-time',
		[Language.FR]: 'Full-time FR',
		[Language.IT]: 'Full-time IT',
		[Language.ES]: 'Full-time ES',
		id: '5207121'
	},
	[ContractType.PARTTIME]: {
		[Language.EN]: 'Part-time',
		[Language.FR]: 'Part-time FR',
		[Language.IT]: 'Part-time IT',
		[Language.ES]: 'Part-time ES',
		id: '5207124'
	},
	[ContractType.FULLTIME_TEMP]: {
		[Language.EN]: 'Full-time (temporary)',
		[Language.FR]: 'Full-time (temporary) FR',
		[Language.IT]: 'Full-time (temporary) IT',
		[Language.ES]: 'Full-time (temporary) ES',
		id: '5207122'
	},
	[ContractType.PARTTIME_TEMP]: {
		[Language.EN]: 'Part-time (temporary)',
		[Language.FR]: 'Part-time (temporary) FR',
		[Language.IT]: 'Part-time (temporary) IT',
		[Language.ES]: 'Part-time (temporary) ES',
		id: '5207120'
	},
	[ContractType.INDEPENDENT]: {
		[Language.EN]: 'Independent',
		[Language.FR]: 'Independent FR',
		[Language.IT]: 'Independent IT',
		[Language.ES]: 'Independent ES',
		id: '5207125'
	},
	[ContractType.INTERNSHIP]: {
		[Language.EN]: 'Internship',
		[Language.FR]: 'Internship FR',
		[Language.IT]: 'Internship IT',
		[Language.ES]: 'Internship ES',
		id: '5207123'
	},
	[ContractType.APPRENTICESHIP]: {
		[Language.EN]: 'Apprenticeship',
		[Language.FR]: 'Apprenticeship FR',
		[Language.IT]: 'Apprenticeship IT',
		[Language.ES]: 'Apprenticeship ES',
		id: '5207126'
	}
};

export const workerStatusOptions = {
	[Country.FRANCE]: [
		'Artiste-auteur·ice',
		'Auto-entrepreneur·euse',
		'Salarié·e',
		'Intermittence',
		'Stagiaire',
		'Other'
	],
	[Country.ITALY]: [
		'Partita IVA (forfettario)',
		'Partita IVA (ordinario)',
		'Prestazione Occasionale',
		'Lavoratore dello Spettacolo',
		'Employee',
		'Tirocinio curriculare',
		'Other'
	],
	[Country.UK]: [
		'Sole Trader',
		'Limited Company',
		'Worker status',
		'PAYE Employee',
		'Umbrella company / agency payroll',
		'Intern',
		'Other'
	],

	[Country.SPAIN]: ['Other ES']
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
		[Language.IT]: 'hours IT',
		[Language.ES]: 'hours ES'
	},
	[ContractLengthUnit.DAYS]: {
		[Language.EN]: 'days',
		[Language.FR]: 'jours',
		[Language.IT]: 'days IT',
		[Language.ES]: 'days ES'
	},
	[ContractLengthUnit.MONTHS]: {
		[Language.EN]: 'months',
		[Language.FR]: 'mois',
		[Language.IT]: 'months IT',
		[Language.ES]: 'months ES'
	}
};

export const enum WorkerTypeSubgroup {
	CREATION = 'CREATION',
	WRITING = 'WRITING',
	CURATION = 'CURATION',
	PRODUCTION = 'PRODUCTION',
	MEDIATION_AND_HOSPITALITY = 'MEDIATION_AND_HOSPITALITY',
	MANAGEMENT_AND_ADMIN = 'MANAGEMENT_AND_ADMIN',
	COMMUNICATION_AND_DOCUMENTATION = 'COMMUNICATION_AND_DOCUMENTATION',
	OPERATIONS_AND_IT = 'OPERATIONS_AND_IT',
	LEGAL_AND_FINANCE = 'LEGAL_AND_FINANCE',
	OTHER = 'OTHER'
}

export const enum WorkerType {
	ARTIST = 'ARTIST',
	PERFORMING_ARTIST = 'PERFORMING_ARTIST',
	WRITER = 'WRITER',
	ART_CRITIC = 'ART_CRITIC',
	EDITOR = 'EDITOR',
	JOURNALIST = 'JOURNALIST',
	TRANSLATOR = 'TRANSLATOR',
	COPYWRITER = 'COPYWRITER',
	GHOSTWRITER = 'GHOSTWRITER',
	ARCHIVIST = 'ARCHIVIST',
	CURATOR = 'CURATOR',
	RESEARCHER = 'RESEARCHER',
	ART_HISTORIAN = 'ART_HISTORIAN',
	ARTISTIC_PROGAMMER = 'ARTISTIC_PROGAMMER',
	CURATORIAL_FELLOW = 'CURATORIAL_FELLOW',
	CURATORIAL_ASSISTANT = 'CURATORIAL_ASSISTANT',
	PUBLIC_PROGRAMS_COORDINATOR = 'PUBLIC_PROGRAMS_COORDINATOR',
	RESEARCH_ASSOCIATE = 'RESEARCH_ASSOCIATE',
	ARTIST_ASSISTANT = 'ARTIST_ASSISTANT',
	PRODUCTION_MANAGER = 'PRODUCTION_MANAGER',
	PRODUCTION_ASSISTANT = 'PRODUCTION_ASSISTANT',
	FABRICATOR = 'FABRICATOR',
	ARTISAN = 'ARTISAN',
	TECHNICIAN = 'TECHNICIAN',
	LIGHTING_TECHNICIAN = 'LIGHTING_TECHNICIAN',
	LIGHTING_DESIGNER = 'LIGHTING_DESIGNER',
	PROJECTION_AV_SPECIALIST = 'PROJECTION_AV_SPECIALIST',
	SOUND_TECHNICIAN = 'SOUND_TECHNICIAN',
	SOUND_DESIGNER = 'SOUND_DESIGNER',
	EXHIBITION_DESIGNER = 'EXHIBITION_DESIGNER',
	ART_HANDLER = 'ART_HANDLER',
	THREED_VISUALIZER = 'THREED_VISUALIZER',
	UI_UX = 'UI_UX',
	STAGE_MANAGER = 'STAGE_MANAGER',
	COSTUME_DESIGNER = 'COSTUME_DESIGNER',
	CULTURAL_MEDIATOR = 'CULTURAL_MEDIATOR',
	TOUR_GUIDE = 'TOUR_GUIDE',
	TRAINER_EDUCATOR = 'TRAINER_EDUCATOR',
	TICKETING_AGENT = 'TICKETING_AGENT',
	HOST = 'HOST',
	STUDIO_MANAGER = 'STUDIO_MANAGER',
	PROJECT_MANAGER = 'PROJECT_MANAGER',
	EVENT_PRODUCER = 'EVENT_PRODUCER',
	EXHIBITION_MANAGER = 'EXHIBITION_MANAGER',
	PROGRAM_COORDINATOR = 'PROGRAM_COORDINATOR',
	PROJECT_ASSISTANT = 'PROJECT_ASSISTANT',
	RESIDENCY_COORDINATOR = 'RESIDENCY_COORDINATOR',
	ARTS_ADMINISTRATOR = 'ARTS_ADMINISTRATOR',
	PROGRAM_DIRECTOR = 'PROGRAM_DIRECTOR',
	COLLECTIONS_MANAGER = 'COLLECTIONS_MANAGER',
	GALLERY_MANAGER = 'GALLERY_MANAGER',
	GALLERY_ASSISTANT = 'GALLERY_ASSISTANT',
	ARTIST_LIAISON = 'ARTIST_LIAISON',
	GENERAL_COORDINATOR = 'GENERAL_COORDINATOR',
	GENERAL_DIRECTOR = 'GENERAL_DIRECTOR',
	ADMINISTRATIVE_SUPPORT = 'ADMINISTRATIVE_SUPPORT',
	CHIEF_OF_STAFF = 'CHIEF_OF_STAFF',
	HR_STAFF_MANAGER = 'HR_STAFF_MANAGER',
	GRAPHIC_DESIGNER = 'GRAPHIC_DESIGNER',
	PHOTOGRAPHER = 'PHOTOGRAPHER',
	WEB_DEVELOPER = 'WEB_DEVELOPER',
	WEB_DESIGNER = 'WEB_DESIGNER',
	VIDEOGRAPHER = 'VIDEOGRAPHER',
	COMMUNITY_MANAGER = 'COMMUNITY_MANAGER',
	DIGITAL_CONTENT_MANAGER = 'DIGITAL_CONTENT_MANAGER',
	SOCIAL_MEDIA_STRATEGIST = 'SOCIAL_MEDIA_STRATEGIST',
	MARKETING_MANAGER = 'MARKETING_MANAGER',
	PRESS_LIAISON = 'PRESS_LIAISON',
	SECURITY_AGENT = 'SECURITY_AGENT',
	CUSTODIAL_STAFF = 'CUSTODIAL_STAFF',
	FACILITIES_MANAGER = 'FACILITIES_MANAGER',
	IT_SUPPORT = 'IT_SUPPORT',
	SYSTEMS_ADMIN = 'SYSTEMS_ADMIN',
	COLLECTIONS_DATABASE_MANAGER = 'COLLECTIONS_DATABASE_MANAGER',
	FINANCIAL_ADMINISTRATOR = 'FINANCIAL_ADMINISTRATOR',
	ACCOUNTANT = 'ACCOUNTANT',
	ART_SALES_ASSOCIATE = 'ART_SALES_ASSOCIATE',
	GRANTS_MANAGER = 'GRANTS_MANAGER',
	ART_ADVISOR = 'ART_ADVISOR',
	STRATEGY_POLICY_OFFICER = 'STRATEGY_POLICY_OFFICER',
	DEVELOPMENT_DIRECTOR = 'DEVELOPMENT_DIRECTOR',
	FUNDRAISING_OFFICER = 'FUNDRAISING_OFFICER',
	SPONSORSHIP_COORDINATOR = 'SPONSORSHIP_COORDINATOR',
	MEMBERSHIP_PATRON_RELATIONS_MANAGER = 'MEMBERSHIP_PATRON_RELATIONS_MANAGER',
	LEGAL_ADVISOR = 'LEGAL_ADVISOR',
	ART_LAWYER = 'ART_LAWYER',
	CONTRACTS_MANAGER = 'CONTRACTS_MANAGER',
	OTHER = 'OTHER'
}

export const workerTypeOptions = {
	[WorkerTypeSubgroup.CREATION]: {
		groupLabel: {
			[Language.EN]: 'Artmaking',
			[Language.FR]: 'Création',
			[Language.IT]: 'Creation in italian',
			[Language.ES]: 'Creation in spanish'
		},
		options: {
			[WorkerType.ARTIST]: {
				label: {
					[Language.EN]: 'Visual Artist',
					[Language.FR]: 'Artiste',
					[Language.IT]: 'Artist in italian',
					[Language.ES]: 'Artist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: 'médiums utilisés, œuvres nouvelles ou anciennes, nombre d’œuvres produites, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207127'
			},
			[WorkerType.PERFORMING_ARTIST]: {
				label: {
					[Language.EN]: 'Performing Artist',
					[Language.FR]: 'Artiste interprète',
					[Language.IT]: 'Perfroming Artist in italian',
					[Language.ES]: 'Perfroming Artist in spanish'
				},
				detail: {
					[Language.EN]: '- type of performance, duration, number of collaborators, etc.',
					[Language.FR]: '- type de performance, durée, nombre de collaborateurs, etc.',
					[Language.IT]: '(IT) type of performance, duration, number of collaborators, etc.',
					[Language.ES]: '(ES) type of performance, duration, number of collaborators, etc.'
				},
				id: '5207128'
			}
		}
	},
	[WorkerTypeSubgroup.WRITING]: {
		groupLabel: {
			[Language.EN]: 'Writing',
			[Language.FR]: 'Écriture',
			[Language.IT]: 'Writing in italian',
			[Language.ES]: 'Writing in spanish'
		},
		options: {
			[WorkerType.WRITER]: {
				label: {
					[Language.EN]: 'Writer',
					[Language.FR]: 'Auteur·ice',
					[Language.IT]: 'Writer in italian',
					[Language.ES]: 'Writer in spanish'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207129'
			},
			[WorkerType.ART_CRITIC]: {
				label: {
					[Language.EN]: 'Art critic',
					[Language.FR]: 'Critique d’art',
					[Language.IT]: 'Art critic in italian',
					[Language.ES]: 'Art critic in spanish'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207130'
			},
			[WorkerType.EDITOR]: {
				label: {
					[Language.EN]: 'Editor',
					[Language.FR]: 'Editeur·ice',
					[Language.IT]: 'Editor in italian',
					[Language.ES]: 'Editor in spanish'
				},
				detail: {
					[Language.EN]: '- format, publication type, number of texts, number of contributors, languages, etc.',
					[Language.FR]: '- nombre de textes, nombre de contributeur·ices, langues, format, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207131'
			},
			[WorkerType.JOURNALIST]: {
				label: {
					[Language.EN]: 'Journalist',
					[Language.FR]: 'Journaliste',
					[Language.IT]: 'Journalist in italian',
					[Language.ES]: 'Journalist in spanish'
				},
				detail: {
					[Language.EN]: '- subjects covered, number of articles or interviews conducted, etc.',
					[Language.FR]: '- thématiques, nombre d’articles ou d’entretiens réalisés, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207132'
			},
			[WorkerType.TRANSLATOR]: {
				label: {
					[Language.EN]: 'Translator',
					[Language.FR]: 'Traducteur·ice',
					[Language.IT]: 'translator in italian',
					[Language.ES]: 'translator in spanish'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207133'
			},
			[WorkerType.COPYWRITER]: {
				label: {
					[Language.EN]: 'Copywriter',
					[Language.FR]: 'Rédacteur·rice',
					[Language.IT]: 'Copywriter in italian',
					[Language.ES]: 'Copywriter in spanish'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207134'
			},
			[WorkerType.GHOSTWRITER]: {
				label: {
					[Language.EN]: 'Ghostwriter',
					[Language.FR]: 'Collaborateur·ice éditorial·e',
					[Language.IT]: 'Ghostwriter in italian',
					[Language.ES]: 'Ghostwriter in spanish'
				},
				detail: {
					[Language.EN]: '- client profile, page/word count, type of texts, etc.',
					[Language.FR]: '- profil du client, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207135'
			},
			[WorkerType.ARCHIVIST]: {
				label: {
					[Language.EN]: 'Archivist',
					[Language.FR]: 'Archiviste',
					[Language.IT]: 'Archivist in italian',
					[Language.ES]: 'Archivist in spanish'
				},
				detail: {
					[Language.EN]: '- type of collection, cataloging systems, digitization volume, etc.',
					[Language.FR]: '- type de la collection, systèmes de catalogage utilisés, volume de numérisation, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207136'
			}
		}
	},
	[WorkerTypeSubgroup.CURATION]: {
		groupLabel: {
			[Language.EN]: 'Curation',
			[Language.FR]: 'Curation',
			[Language.IT]: 'Curation in italian',
			[Language.ES]: 'Curation in spanish'
		},
		options: {
			[WorkerType.CURATOR]: {
				label: {
					[Language.EN]: 'Curator',
					[Language.FR]: 'Curateur·ice',
					[Language.IT]: 'Curator in italian',
					[Language.ES]: 'Curator in spanish'
				},
				detail: {
					[Language.EN]: '- exhibition space size, number of artists, thematic focus, etc.',
					[Language.FR]: '- taille de l’espace d’exposition, nombre d’artistes, axe thématique, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207137'
			},
			[WorkerType.RESEARCHER]: {
				label: {
					[Language.EN]: 'Researcher',
					[Language.FR]: 'Chercheur·se',
					[Language.IT]: 'Researcher in italian',
					[Language.ES]: 'Researcher in spanish'
				},
				detail: {
					[Language.EN]: '- scope of research, archives accessed, outputs produced, etc.',
					[Language.FR]: '- champ de recherche, archives consultées, productions/résultats réalisés, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207138'
			},
			[WorkerType.ART_HISTORIAN]: {
				label: {
					[Language.EN]: 'Art Historian',
					[Language.FR]: 'Historien·ne de l’art',
					[Language.IT]: 'Art Historian in italian',
					[Language.ES]: 'Art Historian in spanish'
				},
				detail: {
					[Language.EN]: '- specialization, lectures given, research periods, etc.',
					[Language.FR]: '- spécialisation, conférences données, périodes de recherche, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207139'
			},
			[WorkerType.ARTISTIC_PROGAMMER]: {
				label: {
					[Language.EN]: 'Artistic Programmer',
					[Language.FR]: 'Programmateur·ice',
					[Language.IT]: 'Artistic Programmer in italian',
					[Language.ES]: 'Artistic Programmer in spanish'
				},
				detail: {
					[Language.EN]: '- event format, number of artists, audience size, etc.',
					[Language.FR]: '- format d’événement, nombre d’artistes, taille du public, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207140'
			},
			[WorkerType.CURATORIAL_FELLOW]: {
				label: {
					[Language.EN]: 'Curatorial Fellow',
					[Language.FR]: 'Curateur·ice associé·e',
					[Language.IT]: 'Curatorial Fellow in italian',
					[Language.ES]: 'Curatorial Fellow in spanish'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]: '- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207141'
			},
			[WorkerType.CURATORIAL_ASSISTANT]: {
				label: {
					[Language.EN]: 'Curatorial Assistant',
					[Language.FR]: 'Assistant·e curateur·ice',
					[Language.IT]: 'Curatorial Assistant in italian',
					[Language.ES]: 'Curatorial Assistant in spanish'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]: '- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207142'
			},
			[WorkerType.PUBLIC_PROGRAMS_COORDINATOR]: {
				label: {
					[Language.EN]: 'Public Programs Coordinator',
					[Language.FR]: 'Coordinateur·ice des programmes',
					[Language.IT]: 'Public Programs Coordinator in italian',
					[Language.ES]: 'Public Programs Coordinator in spanish'
				},
				detail: {
					[Language.EN]: '- event types, number of programs, partner types, etc.',
					[Language.FR]: '- types et nombre d’événements, types de partenaires, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207143'
			},
			[WorkerType.RESEARCH_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Research Associate',
					[Language.FR]: 'Chercheur·se associé·e',
					[Language.IT]: 'Research Associate in italian',
					[Language.ES]: 'Research Associate in spanish'
				},
				detail: {
					[Language.EN]: '- research scope, collaborations, etc.',
					[Language.FR]: '- champ de recherche, collaborations, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207144'
			}
		}
	},
	[WorkerTypeSubgroup.PRODUCTION]: {
		groupLabel: {
			[Language.EN]: 'Production',
			[Language.FR]: 'Production in french',
			[Language.IT]: 'Production in italian',
			[Language.ES]: 'Production in spanish'
		},
		options: {
			[WorkerType.ARTIST_ASSISTANT]: {
				label: {
					[Language.EN]: 'Artist Assistant',
					[Language.FR]: 'Assistant·e d’artiste',
					[Language.IT]: 'Artist Assistant in italian',
					[Language.ES]: 'Artist Assistant in spanish'
				},
				detail: {
					[Language.EN]: '- tasks, techniques, scale of studio, etc.',
					[Language.FR]: '- missions, techniques, taiille de l’atelier, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207145'
			},
			[WorkerType.PRODUCTION_MANAGER]: {
				label: {
					[Language.EN]: 'Production Manager',
					[Language.FR]: 'Chargé·e de production',
					[Language.IT]: 'Production Manager in italian',
					[Language.ES]: 'Production Manager in spanish'
				},
				detail: {
					[Language.EN]: '- project budgets, team size, timelines managed, locations, etc.',
					[Language.FR]: '- budgets des projets, taille des équipes, calendrier, lieux, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207146'
			},
			[WorkerType.PRODUCTION_ASSISTANT]: {
				label: {
					[Language.EN]: 'Production Assistant',
					[Language.FR]: 'Assistant·e de production',
					[Language.IT]: 'Production Assistant in italian',
					[Language.ES]: 'Production Assistant in spanish'
				},
				detail: {
					[Language.EN]: '- teams supported, materials, etc.',
					[Language.FR]: '- taille de l’équipe, matériaux et techniques, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207147'
			},
			[WorkerType.FABRICATOR]: {
				label: {
					[Language.EN]: 'Fabricator (metal, wood, 3D printing)',
					[Language.FR]: 'Technicien·ne de fabrication',
					[Language.IT]: 'Fabricator (metal, wood, 3D printing) in italian',
					[Language.ES]: 'Fabricator (metal, wood, 3D printing) in spanish'
				},
				detail: {
					[Language.EN]: '- materials, tools, objects built, etc.',
					[Language.FR]: '- matériaux, outils, objets réalisés/construits, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207148'
			},
			[WorkerType.ARTISAN]: {
				label: {
					[Language.EN]: 'Craftsperson',
					[Language.FR]: 'Artisan d’art',
					[Language.IT]: 'Artisan in italian',
					[Language.ES]: 'Artisan in spanish'
				},
				detail: {
					[Language.EN]: '- craft specialty, materials, techniques, objects produced, etc.',
					[Language.FR]: '- spécialité, matériaux, techniques, objets produits, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207149'
			},
			[WorkerType.TECHNICIAN]: {
				label: {
					[Language.EN]: 'Technician',
					[Language.FR]: 'Regisseur·se',
					[Language.IT]: 'Technician in italian',
					[Language.ES]: 'Technician in spanish'
				},
				detail: {
					[Language.EN]: '- project type, specializations, equipment, etc.',
					[Language.FR]: '- type de projet, spécialités, équipements, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207150'
			},
			[WorkerType.LIGHTING_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Lighting Technician',
					[Language.FR]: 'Ingenieur·e lumière',
					[Language.IT]: 'Lighting Technician in italian',
					[Language.ES]: 'Lighting Technician in spanish'
				},
				detail: {
					[Language.EN]: '- space type, lighting systems, etc.',
					[Language.FR]: '- type d’espace, systèmes d’éclairage, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207151'
			},
			[WorkerType.LIGHTING_DESIGNER]: {
				label: {
					[Language.EN]: 'Lighting Designer',
					[Language.FR]: 'Concepteur·rice lumière',
					[Language.IT]: 'Lighting Designer in italian',
					[Language.ES]: 'Lighting Designer in spanish'
				},
				detail: {
					[Language.EN]: '- space type, concepts developed, cueing, etc.',
					[Language.FR]: '- type d’espace et de création, repérages, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207152'
			},
			[WorkerType.PROJECTION_AV_SPECIALIST]: {
				label: {
					[Language.EN]: 'Projection / AV Specialist',
					[Language.FR]: 'Technicien·ne audivisuel·le',
					[Language.IT]: 'Projection / AV Specialist in italian',
					[Language.ES]: 'Projection / AV Specialist in spanish'
				},
				detail: {
					[Language.EN]: '- space type, projectors used, mapping, etc.',
					[Language.FR]: '- type d’espace, projecteurs utilisés, type de création, mapping, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207153'
			},
			[WorkerType.SOUND_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Sound Technician',
					[Language.FR]: 'Technicien·ne son',
					[Language.IT]: 'Sound Technician in italian',
					[Language.ES]: 'Sound Technician in spanish'
				},
				detail: {
					[Language.EN]: '- project type, equipment, etc.',
					[Language.FR]: '- type de projet, équipements, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207154'
			},
			[WorkerType.SOUND_DESIGNER]: {
				label: {
					[Language.EN]: 'Sound Designer',
					[Language.FR]: 'Concepteur·rice sonore',
					[Language.IT]: 'Sound Designer in italian',
					[Language.ES]: 'Sound Designer in spanish'
				},
				detail: {
					[Language.EN]: '- project type, software used, channels, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207155'
			},
			[WorkerType.EXHIBITION_DESIGNER]: {
				label: {
					[Language.EN]: 'Exhibition Designer',
					[Language.FR]: 'Scénographe d’exposition',
					[Language.IT]: 'Exhibition Designer in italian',
					[Language.ES]: 'Exhibition Designer in spanish'
				},
				detail: {
					[Language.EN]: '- project type, software used, number of renderings, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, nombre de rendus, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207156'
			},
			[WorkerType.ART_HANDLER]: {
				label: {
					[Language.EN]: 'Art Handler',
					[Language.FR]: 'Installateur·ice d’œuvres',
					[Language.IT]: 'Art Handler in italian',
					[Language.ES]: 'Art Handler in spanish'
				},
				detail: {
					[Language.EN]: '- artwork type, number of works, packing methods, etc.',
					[Language.FR]: '- type d’œuvres, nombre d’œuvres, méthodes d’emballage, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207157'
			},
			[WorkerType.THREED_VISUALIZER]: {
				label: {
					[Language.EN]: '3D Visualizer',
					[Language.FR]: 'Concepteur·ice 3D',
					[Language.IT]: '3D Visualizer (exhibition mock-ups, renders) in italian',
					[Language.ES]: '3D Visualizer (exhibition mock-ups, renders) in spanish'
				},
				detail: {
					[Language.EN]: '- project type, software, number of visualizations, etc.',
					[Language.FR]: '- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207158'
			},
			[WorkerType.UI_UX]: {
				label: {
					[Language.EN]: 'UI/UX Designer (as art production)',
					[Language.FR]: 'Designer UI/UX',
					[Language.IT]: 'UI/UX Designer (as art production) in italian',
					[Language.ES]: 'UI/UX Designer (as art production) in spanish'
				},
				detail: {
					[Language.EN]: '- project type, complexity, accessibility considerations, etc.',
					[Language.FR]: '- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207159'
			},
			[WorkerType.STAGE_MANAGER]: {
				label: {
					[Language.EN]: 'Stage Manager',
					[Language.FR]: 'Régisseur·se de plateau',
					[Language.IT]: 'Stage Manager in italian',
					[Language.ES]: 'Stage Manager in spanish'
				},
				detail: {
					[Language.EN]: '- rehearsal cadence, cast/crew size, etc.',
					[Language.FR]: '- fréquence des répétitions, taille de la distribution/équipe technique, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207160'
			},
			[WorkerType.COSTUME_DESIGNER]: {
				label: {
					[Language.EN]: 'Costume Designer',
					[Language.FR]: 'Créateur·rice de costumes',
					[Language.IT]: 'Costume designer in italian',
					[Language.ES]: 'Costume designer in spanish'
				},
				detail: {
					[Language.EN]: '- costume count, materials, fittings, character research, etc.',
					[Language.FR]: '- nombre de costumes, matériaux, essayages, recherches, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207161'
			}
		}
	},
	[WorkerTypeSubgroup.MEDIATION_AND_HOSPITALITY]: {
		groupLabel: {
			[Language.EN]: 'Mediation & Hospitality',
			[Language.FR]: 'Mediation & Hospitality in french',
			[Language.IT]: 'Mediation & Hospitality in italian',
			[Language.ES]: 'Mediation & Hospitality in spanish'
		},
		options: {
			[WorkerType.CULTURAL_MEDIATOR]: {
				label: {
					[Language.EN]: 'Cultural Mediator',
					[Language.FR]: 'Cultural Mediator in french',
					[Language.IT]: 'Cultural Mediator in italian',
					[Language.ES]: 'Cultural Mediator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207162'
			},
			[WorkerType.TOUR_GUIDE]: {
				label: {
					[Language.EN]: 'Tour Guide',
					[Language.FR]: 'Tour Guide in french',
					[Language.IT]: 'Tour Guide in italian',
					[Language.ES]: 'Tour Guide in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207163'
			},
			[WorkerType.TRAINER_EDUCATOR]: {
				label: {
					[Language.EN]: 'Trainer/Educator',
					[Language.FR]: 'Trainer/Educator in french',
					[Language.IT]: 'Trainer/Educator in italian',
					[Language.ES]: 'Trainer/Educator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207164'
			},
			[WorkerType.TICKETING_AGENT]: {
				label: {
					[Language.EN]: 'Ticketing Agent',
					[Language.FR]: 'Ticketing Agent in french',
					[Language.IT]: 'Ticketing Agent in italian',
					[Language.ES]: 'Ticketing Agent in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207165'
			},
			[WorkerType.HOST]: {
				label: {
					[Language.EN]: 'Host',
					[Language.FR]: 'Host in french',
					[Language.IT]: 'Host in italian',
					[Language.ES]: 'Host in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207166'
			}
		}
	},
	[WorkerTypeSubgroup.MANAGEMENT_AND_ADMIN]: {
		groupLabel: {
			[Language.EN]: 'Management & Admin',
			[Language.FR]: 'Management & Admin in french',
			[Language.IT]: 'Management & Admin in italian',
			[Language.ES]: 'Management & Admin in spanish'
		},
		options: {
			[WorkerType.STUDIO_MANAGER]: {
				label: {
					[Language.EN]: 'Studio Manager',
					[Language.FR]: 'Studio Manager in french',
					[Language.IT]: 'Studio Manager in italian',
					[Language.ES]: 'Studio Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207167'
			},
			[WorkerType.PROJECT_MANAGER]: {
				label: {
					[Language.EN]: 'Project Manager',
					[Language.FR]: 'Project Manager in french',
					[Language.IT]: 'Project Manager in italian',
					[Language.ES]: 'Project Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207168'
			},
			[WorkerType.EVENT_PRODUCER]: {
				label: {
					[Language.EN]: 'Event Producer',
					[Language.FR]: 'Event Producer in french',
					[Language.IT]: 'Event Producer in italian',
					[Language.ES]: 'Event Producer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207169'
			},
			[WorkerType.EXHIBITION_MANAGER]: {
				label: {
					[Language.EN]: 'Exhibition Manager',
					[Language.FR]: 'Exhibition Manager in french',
					[Language.IT]: 'Exhibition Manager in italian',
					[Language.ES]: 'Exhibition Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207170'
			},
			[WorkerType.PROGRAM_COORDINATOR]: {
				label: {
					[Language.EN]: 'Program Coordinator',
					[Language.FR]: 'Program Coordinator in french',
					[Language.IT]: 'Program Coordinator in italian',
					[Language.ES]: 'Program Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207171'
			},
			[WorkerType.PROJECT_ASSISTANT]: {
				label: {
					[Language.EN]: 'Program Coordinator',
					[Language.FR]: 'Program Coordinator in french',
					[Language.IT]: 'Program Coordinator in italian',
					[Language.ES]: 'Program Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207172'
			},
			[WorkerType.RESIDENCY_COORDINATOR]: {
				label: {
					[Language.EN]: 'Residency Coordinator',
					[Language.FR]: 'Residency Coordinator in french',
					[Language.IT]: 'Residency Coordinator in italian',
					[Language.ES]: 'Residency Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207173'
			},
			[WorkerType.ARTS_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Arts Administrator',
					[Language.FR]: 'Arts Administrator in french',
					[Language.IT]: 'Arts Administrator in italian',
					[Language.ES]: 'Arts Administrator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207174'
			},
			[WorkerType.PROGRAM_DIRECTOR]: {
				label: {
					[Language.EN]: 'Program Director',
					[Language.FR]: 'Program Director in french',
					[Language.IT]: 'Program Director in italian',
					[Language.ES]: 'Program Director in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207175'
			},
			[WorkerType.COLLECTIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Collections Manager',
					[Language.FR]: 'Collections Manager in french',
					[Language.IT]: 'Collections Manager in italian',
					[Language.ES]: 'Collections Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207176'
			},
			[WorkerType.GALLERY_MANAGER]: {
				label: {
					[Language.EN]: 'Gallery Manager',
					[Language.FR]: 'Gallery Manager in french',
					[Language.IT]: 'Gallery Manager in italian',
					[Language.ES]: 'Gallery Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207177'
			},
			[WorkerType.GALLERY_ASSISTANT]: {
				label: {
					[Language.EN]: 'Gallery Assistant',
					[Language.FR]: 'Gallery Assistant in french',
					[Language.IT]: 'Gallery Assistant in italian',
					[Language.ES]: 'Gallery Assistant in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207178'
			},
			[WorkerType.ARTIST_LIAISON]: {
				label: {
					[Language.EN]: 'Artist Liaison',
					[Language.FR]: 'Artist Liaison in french',
					[Language.IT]: 'Artist Liaison in italian',
					[Language.ES]: 'Artist Liaison in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207179'
			},
			[WorkerType.GENERAL_COORDINATOR]: {
				label: {
					[Language.EN]: 'General Coordinator',
					[Language.FR]: 'General Coordinator in french',
					[Language.IT]: 'General Coordinator in italian',
					[Language.ES]: 'General Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207180'
			},
			[WorkerType.GENERAL_DIRECTOR]: {
				label: {
					[Language.EN]: 'General Director',
					[Language.FR]: 'General Director in french',
					[Language.IT]: 'General Director in italian',
					[Language.ES]: 'General Director in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207181'
			},
			[WorkerType.ADMINISTRATIVE_SUPPORT]: {
				label: {
					[Language.EN]: 'Administrative Support',
					[Language.FR]: 'Administrative Support in french',
					[Language.IT]: 'Administrative Support in italian',
					[Language.ES]: 'Administrative Support in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207182'
			},
			[WorkerType.CHIEF_OF_STAFF]: {
				label: {
					[Language.EN]: 'Chief of Staff',
					[Language.FR]: 'Chief of Staff in french',
					[Language.IT]: 'Chief of Staff in italian',
					[Language.ES]: 'Chief of Staff in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207183'
			},
			[WorkerType.HR_STAFF_MANAGER]: {
				label: {
					[Language.EN]: 'HR / Staff Manager',
					[Language.FR]: 'HR / Staff Manager in french',
					[Language.IT]: 'HR / Staff Manager in italian',
					[Language.ES]: 'HR / Staff Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207184'
			}
		}
	},
	[WorkerTypeSubgroup.COMMUNICATION_AND_DOCUMENTATION]: {
		groupLabel: {
			[Language.EN]: 'Communcation & Documentation',
			[Language.FR]: 'Communcation & Documentation in french',
			[Language.IT]: 'Communcation & Documentation in italian',
			[Language.ES]: 'Communcation & Documentation in spanish'
		},
		options: {
			[WorkerType.GRAPHIC_DESIGNER]: {
				label: {
					[Language.EN]: 'Graphic designer (books, posters, exhibitions)',
					[Language.FR]: 'Graphic designer (books, posters, exhibitions) in french',
					[Language.IT]: 'Graphic designer (books, posters, exhibitions) in italian',
					[Language.ES]: 'Graphic designer (books, posters, exhibitions) in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207185'
			},
			[WorkerType.PHOTOGRAPHER]: {
				label: {
					[Language.EN]: 'Photographer (documentation, portraits, installation shots)',
					[Language.FR]: 'Photographer (documentation, portraits, installation shots) in french',
					[Language.IT]: 'Photographer (documentation, portraits, installation shots) in italian',
					[Language.ES]: 'Photographer (documentation, portraits, installation shots) in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207186'
			},
			[WorkerType.WEB_DEVELOPER]: {
				label: {
					[Language.EN]: 'Web Developer',
					[Language.FR]: 'Web Developer in french',
					[Language.IT]: 'Web Developer in italian',
					[Language.ES]: 'Web Developer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207187'
			},
			[WorkerType.WEB_DESIGNER]: {
				label: {
					[Language.EN]: 'Web Designer',
					[Language.FR]: 'Web Designer in french',
					[Language.IT]: 'Web Designer in italian',
					[Language.ES]: 'Web Designer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207188'
			},
			[WorkerType.VIDEOGRAPHER]: {
				label: {
					[Language.EN]: 'Videographer',
					[Language.FR]: 'Videographer in french',
					[Language.IT]: 'Videographer in italian',
					[Language.ES]: 'Videographer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207189'
			},
			[WorkerType.COMMUNITY_MANAGER]: {
				label: {
					[Language.EN]: 'Community Manager',
					[Language.FR]: 'Community Manager in french',
					[Language.IT]: 'Community Manager in italian',
					[Language.ES]: 'Community Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207190'
			},
			[WorkerType.DIGITAL_CONTENT_MANAGER]: {
				label: {
					[Language.EN]: 'Digital Content Manager',
					[Language.FR]: 'Digital Content Manager in french',
					[Language.IT]: 'Digital Content Manager in italian',
					[Language.ES]: 'Digital Content Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207191'
			},
			[WorkerType.SOCIAL_MEDIA_STRATEGIST]: {
				label: {
					[Language.EN]: 'Social Media Strategist',
					[Language.FR]: 'Social Media Strategist in french',
					[Language.IT]: 'Social Media Strategist in italian',
					[Language.ES]: 'Social Media Strategist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207192'
			},
			[WorkerType.MARKETING_MANAGER]: {
				label: {
					[Language.EN]: 'Marketing Manager',
					[Language.FR]: 'Marketing Manager in french',
					[Language.IT]: 'Marketing Manager in italian',
					[Language.ES]: 'Marketing Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207193'
			},
			[WorkerType.PRESS_LIAISON]: {
				label: {
					[Language.EN]: 'Press Liaison',
					[Language.FR]: 'Press Liaison in french',
					[Language.IT]: 'Press Liaison in italian',
					[Language.ES]: 'Press Liaison in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207194'
			}
		}
	},
	[WorkerTypeSubgroup.OPERATIONS_AND_IT]: {
		groupLabel: {
			[Language.EN]: 'Operations & IT',
			[Language.FR]: 'Operations & IT in french',
			[Language.IT]: 'Operations & IT in italian',
			[Language.ES]: 'Operations & IT in spanish'
		},
		options: {
			[WorkerType.SECURITY_AGENT]: {
				label: {
					[Language.EN]: 'Security agent',
					[Language.FR]: 'Security agent in french',
					[Language.IT]: 'Security agent in italian',
					[Language.ES]: 'Security agent in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207195'
			},
			[WorkerType.CUSTODIAL_STAFF]: {
				label: {
					[Language.EN]: 'Custodial Staff',
					[Language.FR]: 'Custodial Staff in french',
					[Language.IT]: 'Custodial Staff in italian',
					[Language.ES]: 'Custodial Staff in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207196'
			},
			[WorkerType.FACILITIES_MANAGER]: {
				label: {
					[Language.EN]: 'Facilities Manager',
					[Language.FR]: 'Facilities Manager in french',
					[Language.IT]: 'Facilities Manager in italian',
					[Language.ES]: 'Facilities Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207197'
			},
			[WorkerType.IT_SUPPORT]: {
				label: {
					[Language.EN]: 'IT Support',
					[Language.FR]: 'IT Support in french',
					[Language.IT]: 'IT Support in italian',
					[Language.ES]: 'IT Support in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207198'
			},
			[WorkerType.SYSTEMS_ADMIN]: {
				label: {
					[Language.EN]: 'Systems Admin',
					[Language.FR]: 'Systems Admin in french',
					[Language.IT]: 'Systems Admin in italian',
					[Language.ES]: 'Systems Admin in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207199'
			},
			[WorkerType.COLLECTIONS_DATABASE_MANAGER]: {
				label: {
					[Language.EN]: 'Collections Database Manager',
					[Language.FR]: 'Collections Database Manager in french',
					[Language.IT]: 'Collections Database Manager in italian',
					[Language.ES]: 'Collections Database Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207200'
			}
		}
	},
	[WorkerTypeSubgroup.LEGAL_AND_FINANCE]: {
		groupLabel: {
			[Language.EN]: 'Legal & Finance',
			[Language.FR]: 'Legal & Finance in french',
			[Language.IT]: 'Legal & Finance in italian',
			[Language.ES]: 'Legal & Finance in spanish'
		},
		options: {
			[WorkerType.FINANCIAL_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Financial Administrator',
					[Language.FR]: 'Financial Administrator in french',
					[Language.IT]: 'Financial Administrator in italian',
					[Language.ES]: 'Financial Administrator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207201'
			},
			[WorkerType.ACCOUNTANT]: {
				label: {
					[Language.EN]: 'Accountant',
					[Language.FR]: 'Accountant in french',
					[Language.IT]: 'Accountant in italian',
					[Language.ES]: 'Accountant in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207202'
			},
			[WorkerType.ART_SALES_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Art Sales Associate',
					[Language.FR]: 'Art Sales Associate in french',
					[Language.IT]: 'Art Sales Associate in italian',
					[Language.ES]: 'Art Sales Associate in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207203'
			},
			[WorkerType.GRANTS_MANAGER]: {
				label: {
					[Language.EN]: 'Grants Manager',
					[Language.FR]: 'Grants Manager in french',
					[Language.IT]: 'Grants Manager in italian',
					[Language.ES]: 'Grants Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207204'
			},
			[WorkerType.ART_ADVISOR]: {
				label: {
					[Language.EN]: 'Art Advisor',
					[Language.FR]: 'Art Advisor in french',
					[Language.IT]: 'Art Advisor in italian',
					[Language.ES]: 'Art Advisor in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207205'
			},
			[WorkerType.STRATEGY_POLICY_OFFICER]: {
				label: {
					[Language.EN]: 'Strategy / Policy Officer',
					[Language.FR]: 'Strategy / Policy Officer in french',
					[Language.IT]: 'Strategy / Policy Officer in italian',
					[Language.ES]: 'Strategy / Policy Officer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207206'
			},
			[WorkerType.DEVELOPMENT_DIRECTOR]: {
				label: {
					[Language.EN]: 'Development Director',
					[Language.FR]: 'Development Director in french',
					[Language.IT]: 'Development Director in italian',
					[Language.ES]: 'Development Director in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207207'
			},
			[WorkerType.FUNDRAISING_OFFICER]: {
				label: {
					[Language.EN]: 'Fundraising Officer',
					[Language.FR]: 'Fundraising Officer in french',
					[Language.IT]: 'Fundraising Officer in italian',
					[Language.ES]: 'Fundraising Officer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207208'
			},
			[WorkerType.SPONSORSHIP_COORDINATOR]: {
				label: {
					[Language.EN]: 'Sponsorship Coordinator',
					[Language.FR]: 'Sponsorship Coordinator in french',
					[Language.IT]: 'Sponsorship Coordinator in italian',
					[Language.ES]: 'Sponsorship Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207209'
			},
			[WorkerType.MEMBERSHIP_PATRON_RELATIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Membership/Patron Relations Manager',
					[Language.FR]: 'Membership/Patron Relations Manager in french',
					[Language.IT]: 'Membership/Patron Relations Manager in italian',
					[Language.ES]: 'Membership/Patron Relations Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207210'
			},
			[WorkerType.LEGAL_ADVISOR]: {
				label: {
					[Language.EN]: 'Legal Advisor',
					[Language.FR]: 'Legal Advisor in french',
					[Language.IT]: 'Legal Advisor in italian',
					[Language.ES]: 'Legal Advisor in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207211'
			},
			[WorkerType.ART_LAWYER]: {
				label: {
					[Language.EN]: 'Art Lawyer',
					[Language.FR]: 'Art Lawyer in french',
					[Language.IT]: 'Art Lawyer in italian',
					[Language.ES]: 'Art Lawyer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207212'
			},
			[WorkerType.CONTRACTS_MANAGER]: {
				label: {
					[Language.EN]: 'Contracts Manager',
					[Language.FR]: 'Contracts Manager in french',
					[Language.IT]: 'Contracts Manager in italian',
					[Language.ES]: 'Contracts Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207213'
			}
		}
	},
	[WorkerTypeSubgroup.OTHER]: {
		groupLabel: {
			[Language.EN]: 'Other',
			[Language.FR]: 'Other in french',
			[Language.IT]: 'Other in italian',
			[Language.ES]: 'Other in spanish'
		},
		options: {
			[WorkerType.OTHER]: {
				label: {
					[Language.EN]: 'Other',
					[Language.FR]: 'Other in french',
					[Language.IT]: 'Other in italian',
					[Language.ES]: 'Other in spanish'
				},
				detail: {
					[Language.EN]: 'department title, task types, team size, etc.',
					[Language.FR]: '(FR) department title, task types, team size, etc.',
					[Language.IT]: '(IT) department title, task types, team size, etc.',
					[Language.ES]: '(ES) department title, task types, team size, etc.'
				},
				id: '5207214'
			}
		}
	}
};

export const getWorkerTypeHelpText = (workerType: WorkerType | undefined): string => {
	if (workerType) {
		for (const subgroupKey in workerTypeOptions) {
			const subgroup = workerTypeOptions[subgroupKey as WorkerTypeSubgroup];
			if (workerType in subgroup.options) {
				return subgroup.options[workerType].detail[siteState.language];
			}
		}
	}

	return '';
};

export const getWorkerTypeLabel = (workerType: WorkerType): string => {
	for (const subgroupKey in workerTypeOptions) {
		const subgroup = workerTypeOptions[subgroupKey as WorkerTypeSubgroup];
		if (workerType in subgroup.options) {
			return subgroup.options[workerType].label[siteState.language];
		}
	}
	return workerType;
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
		[Language.EN]: 'Internal Promotion',
		[Language.FR]: 'Internal Promotion FR',
		[Language.IT]: 'Internal Promotion IT',
		[Language.ES]: 'Internal Promotion ES'
	},
	[JobObtainedVia.CALL_FOR_APPLICATIONS]: {
		[Language.EN]: 'Call for Applications',
		[Language.FR]: 'Call for Applications FR',
		[Language.IT]: 'Call for Applications IT',
		[Language.ES]: 'Call for Applications ES'
	},
	[JobObtainedVia.CALL_FOR_PROJECTS]: {
		[Language.EN]: 'Call for Projects',
		[Language.FR]: 'Call for Projects FR',
		[Language.IT]: 'Call for Projects IT',
		[Language.ES]: 'Call for Projects ES'
	},
	[JobObtainedVia.JOB_OFFER]: {
		[Language.EN]: 'Job Offer',
		[Language.FR]: 'Job Offer FR',
		[Language.IT]: 'Job Offer IT',
		[Language.ES]: 'Job Offer ES'
	},
	[JobObtainedVia.INVITATION_REFERRAL]: {
		[Language.EN]: 'Invitation Referral',
		[Language.FR]: 'Invitation Referral FR',
		[Language.IT]: 'Invitation Referral IT',
		[Language.ES]: 'Invitation Referral ES'
	},
	[JobObtainedVia.DIRECT_OUTREACH]: {
		[Language.EN]: 'Direct Outreach',
		[Language.FR]: 'Direct Outreach FR',
		[Language.IT]: 'Direct Outreach IT',
		[Language.ES]: 'Direct Outreach ES'
	},
	[JobObtainedVia.PURE_NEPOTISM]: {
		[Language.EN]: 'Pure Nepotism',
		[Language.FR]: 'Pure Nepotism FR',
		[Language.IT]: 'Pure Nepotism IT',
		[Language.ES]: 'Pure Nepotism ES'
	}
};

export const enum CompensationFrequency {
	HOURLY = 'HOURLY',
	DAILY = 'DAILY',
	WEEKLY = 'WEEKLY',
	MONTHLY = 'MONTHLY',
	FLAT_FEE = 'FLAT_FEE'
}

export const compensationFrequencyOptions = {
	[CompensationFrequency.HOURLY]: {
		[Language.EN]: 'Hourly',
		[Language.FR]: 'Hourly FR',
		[Language.IT]: 'Hourly IT',
		[Language.ES]: 'Hourly ES',
		id: '5207257'
	},
	[CompensationFrequency.DAILY]: {
		[Language.EN]: 'Daily',
		[Language.FR]: 'Daily FR',
		[Language.IT]: 'Daily IT',
		[Language.ES]: 'Daily ES',
		id: '5207256'
	},
	[CompensationFrequency.WEEKLY]: {
		[Language.EN]: 'Weekly',
		[Language.FR]: 'Weekly FR',
		[Language.IT]: 'Weekly IT',
		[Language.ES]: 'Weekly ES',
		id: '5207255'
	},
	[CompensationFrequency.MONTHLY]: {
		[Language.EN]: 'Monthly',
		[Language.FR]: 'Monthly FR',
		[Language.IT]: 'Monthly IT',
		[Language.ES]: 'Monthly ES',
		id: '5207254'
	},
	[CompensationFrequency.FLAT_FEE]: {
		[Language.EN]: 'Flat Fee',
		[Language.FR]: 'Flat Fee FR',
		[Language.IT]: 'Flat Fee IT',
		[Language.ES]: 'Flat Fee ES',
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
		[Language.FR]: 'not covered FR',
		[Language.IT]: 'not covered IT',
		[Language.ES]: 'not covered ES'
	},
	[AddlCompensationCoverage.PARTIALLY_COVERED]: {
		[Language.EN]: 'partially covered',
		[Language.FR]: 'partially covered FR',
		[Language.IT]: 'partially covered IT',
		[Language.ES]: 'partially covered ES'
	},
	[AddlCompensationCoverage.COVERED]: {
		[Language.EN]: 'was covered',
		[Language.FR]: 'was covered FR',
		[Language.IT]: 'was covered IT',
		[Language.ES]: 'was covered ES'
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
	COMMISSION = 'COMMISSION'
}

export const addlCompItemOptions = {
	[AddlCompItem.SALE_OF_WORK]: {
		[Language.EN]: 'Sale of work',
		[Language.FR]: 'Sale of work FR',
		[Language.IT]: 'Sale of work IT',
		[Language.ES]: 'Sale of work ES'
	},
	[AddlCompItem.PRODUCTION_BUDGET]: {
		[Language.EN]: 'Production budget',
		[Language.FR]: 'Production budget FR',
		[Language.IT]: 'Production budget IT',
		[Language.ES]: 'Production budget ES'
	},
	[AddlCompItem.TRANSPORT_OF_WORK]: {
		[Language.EN]: 'Transport of work',
		[Language.FR]: 'Transport of work FR',
		[Language.IT]: 'Transport of work IT',
		[Language.ES]: 'Transport of work ES'
	},
	[AddlCompItem.TRAVEL]: {
		[Language.EN]: 'Travel',
		[Language.FR]: 'Travel FR',
		[Language.IT]: 'Travel IT',
		[Language.ES]: 'Travel ES'
	},
	[AddlCompItem.ACCOMMODATION]: {
		[Language.EN]: 'Accommodation',
		[Language.FR]: 'Accommodation FR',
		[Language.IT]: 'Accommodation IT',
		[Language.ES]: 'Accommodation ES'
	},
	[AddlCompItem.MEALS]: {
		[Language.EN]: 'Meals',
		[Language.FR]: 'Meals FR',
		[Language.IT]: 'Meals IT',
		[Language.ES]: 'Meals ES'
	},
	[AddlCompItem.PER_DIEM]: {
		[Language.EN]: 'Per Diem',
		[Language.FR]: 'Per Diem FR',
		[Language.IT]: 'Per Diem IT',
		[Language.ES]: 'Per Diem ES'
	},
	[AddlCompItem.HEALTH_INSURANCE]: {
		[Language.EN]: 'Health Insurance',
		[Language.FR]: 'Health Insurance FR',
		[Language.IT]: 'Health Insurance IT',
		[Language.ES]: 'Health Insurance ES'
	},
	[AddlCompItem.PUBLIC_TRANSPORTATION]: {
		[Language.EN]: 'Public Transportation',
		[Language.FR]: 'Public Transportation FR',
		[Language.IT]: 'Public Transportation IT',
		[Language.ES]: 'Public Transportation ES'
	},
	[AddlCompItem.COMMISSION]: {
		[Language.EN]: 'Commission',
		[Language.FR]: 'Commission FR',
		[Language.IT]: 'Commission IT',
		[Language.ES]: 'Commission ES'
	}
};
