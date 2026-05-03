import { Language, siteState } from './states.svelte';

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
		[Language.NL]: 'Ervaring(optioneel)'
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
		[Language.EN]: 'Ik was tevreden over de vergoeding',
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
		[Language.EN]: 'year(s) of experience',
		[Language.FR]: 'année(s) d’expérience',
		[Language.IT]: 'anni di esperienza',
		[Language.NL]: 'jaar/jaren ervaring'
	},
	submitAnEntry: {
		[Language.EN]: 'Submit an entry',
		[Language.FR]: 'Partager une rémuneration',
		[Language.IT]: 'Condividere una remunerazione',
		[Language.NL]: 'Een inzending indienen'
	}
};

export const languageOptions = {
	[Language.EN]: 'English',
	[Language.FR]: 'Français',
	[Language.IT]: 'Italiano'
	// [Language.NL]: 'Dutch'
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
	}
	// [Country.NETHERLANDS]: {
	// 	[Language.EN]: 'Netherlands',
	// 	[Language.FR]: 'Pays-Bas',
	// 	[Language.IT]: 'Paesi Bassi',
	// 	[Language.NL]: 'Nederland',
	// 	id: '5207044'
	// }
};

export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 ou avant',
	[Language.IT]: '2010 o anni precedenti',
	[Language.NL]: '2010 of eerder'
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
	NATIONAL_CULTURAL_INSTITUTION = 'NATIONAL_CULTURAL_INSTITUTION',
	REGIONAL_CULTURAL_INSTITUTION = 'REGIONAL_CULTURAL_INSTITUTION',
	LOCAL_CULTURAL_INSTITUTION = 'LOCAL_CULTURAL_INSTITUTION',
	PRIVATE_FOUNDATION = 'PRIVATE_FOUNDATION',
	ARTS_COMMISSIONER = 'ARTS_COMMISSIONER',
	NON_PROFIT_ORGANIZATION = 'NON_PROFIT_ORGANIZATION',
	ARTIST_RUN_SPACE = 'ARTIST_RUN_SPACE',
	PUBLIC_SCHOOL = 'PUBLIC_SCHOOL',
	PRIVATE_SCHOOL = 'PRIVATE_SCHOOL',
	PUBLIC_UNIVERSITY = 'PUBLIC_UNIVERSITY',
	PRIVATE_UNIVERSITY = 'PRIVATE_UNIVERSITY',
	LIBRARY = 'LIBRARY',
	ARCHIVE = 'ARCHIVE',
	RESEARCH_CENTER = 'RESEARCH_CENTER',
	MINISTER_CULTURE = 'MINISTER_CULTURE',
	ARTS_COUNCIL = 'ARTS_COUNCIL',
	LOCAL_GOVT = 'LOCAL_GOVT',
	CULTURAL_DIPLOMACY_BODY = 'CULTURAL_DIPLOMACY_BODY',
	AUCTION_HOUSE = 'AUCTION_HOUSE',
	COMMERCIAL_GALLERY = 'COMMERCIAL_GALLERY',
	ART_DEALER = 'ART_DEALER',
	ART_ADVISOR = 'ART_ADVISOR',
	ART_FAIR = 'ART_FAIR',
	ONLINE_SALES_PLATFORM = 'ONLINE_SALES_PLATFORM',
	CORPORATE_ENTERPRISE = 'CORPORATE_ENTERPRISE',
	PUBLISHING_HOUSE = 'PUBLISHING_HOUSE',
	IND_PUBLISHING_HOUSE = 'IND_PUBLISHING_HOUSE',
	MEDIA = 'MEDIA',
	MAGAZINE = 'MAGAZINE',
	IND_MAGAZINE = 'IND_MAGAZINE',
	ONLINE_PLATFORM = 'ONLINE_PLATFORM',
	ARTIST_STUDIO = 'ARTIST_STUDIO',
	IND_ARTIST = 'IND_ARTIST',
	FABRICATION_WORKSHOP = 'FABRICATION_WORKSHOP',
	FAB_LAB = 'FAB_LAB',
	ART_LOGISTICS = 'ART_LOGISTICS',
	FESTIVAL = 'FESTIVAL',
	BIENNIAL = 'BIENNIAL',
	TRIENNIAL = 'TRIENNIAL',
	LOCAL_EVENT = 'LOCAL_EVENT',
	UNION = 'UNION',
	ARTIST_SERVICES_ORGANIZATION = 'ARTIST_SERVICES_ORGANIZATION',
	PROFESSIONAL_MEMBERSHIP_ORG = 'PROFESSIONAL_MEMBERSHIP_ORG',
	RIGHTS_ORGANIZATION = 'RIGHTS_ORGANIZATION',
	RESIDENCY_PROGRAM = 'RESIDENCY_PROGRAM',
	COOPERATIVE_STRUCTURE = 'COOPERATIVE_STRUCTURE',
	OTHER = 'OTHER',
	STAFFING_AGENCY = 'STAFFING_AGENCY'
}

export const employerTypeOptions = {
	[EmployerTypeSubgroup.CULTURAL_INSTITUTIONS]: {
		groupLabel: {
			[Language.EN]: 'Cultural institutions',
			[Language.FR]: 'Institutions culturelles',
			[Language.IT]: 'Istituzioni culturali',
			[Language.NL]: 'Culturele Instituten'
		},
		options: {
			[EmployerType.NATIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'National cultural institution (e.g. Tate, Rijksmuseum, MAXXI, Centre Pompidou)',
				[Language.FR]: 'Institution culturelle nationale (ex: Tate, Rijksmuseum, MAXXI, Centre Pompidou)',
				[Language.IT]: 'Istituzione pubblica di grandi dimensioni (ex: Tate, Rijksmuseum, MAXXI, Centre Pompidou)',
				[Language.NL]: 'Nationaal cultureel instituut (b.v. Tate, Rijksmuseum, MAXXI, Centre Pompidou)',
				id: '5207062'
			},
			[EmployerType.REGIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'Regional cultural institution (e.g. FACT, Turner Contemporary, Chapter)',
				[Language.FR]: 'Institution culturelle régionale (ex: FRAC)',
				[Language.IT]: 'Istituzione pubblica di medie dimensioni (ex: Castello di Rivoli, CRAC, MART)',
				[Language.NL]: 'Regionale culturele instelling (b.v. Eye, Melly)',
				id: '5207061'
			},
			[EmployerType.LOCAL_CULTURAL_INSTITUTION]: {
				[Language.EN]:'Local cultural institution (e.g. Metroland Cultures, Devonshire Collective)',
				[Language.FR]: 'Institution culturelle locale (ex: La Friche Belle de Mai, CAC Bretigny)',
				[Language.IT]:'Istituzione pubblica di piccole dimensioni (ex: PAC Milano, MAMbo, Galleria Civica di Modena)',
				[Language.NL]: 'Lokale culturele instelling (b.v. Framer Framed, Van Abbemuseum, de Pont)',
				id: '5768056'
			},
			[EmployerType.PRIVATE_FOUNDATION]: {
				[Language.EN]: 'Private cultural institution (e.g. Wellcome Collection, Royal Academy)',
				[Language.FR]: 'Fondation privée (ex: Fondation Cartier, Fondation d’entreprise Ricard)',
				[Language.IT]: 'Istituzione privata o fondazione (ex: Fondazione Prada, Palazzo Grassi)',
				[Language.NL]: 'Particuliere culturele instelling (b.v. Museum Voorlinden, Hartwig Art Foundation)',
				id: '5768057'
			},
			[EmployerType.ARTS_COMMISSIONER]: {
				[Language.EN]: 'Arts commissioner (e.g. Create London, Art Angel)',
				[Language.FR]: 'Fonds de dotation (ex: Kadist, Fonds de dotation agnès b.)',
				[Language.IT]:'Fondazione filantropica per le arti (ex: Dena Foundation for Contemporary Art, Fondazione Nicola Trussardi)',
				[Language.NL]: 'Kunstcommissie/opdrachtgever (b.v. AFK, Mondraanfonds)',
				id: '5768058'
			},
			[EmployerType.NON_PROFIT_ORGANIZATION]: {
				[Language.EN]: 'Non-profit art space (e.g. The Perimeter, Raven Row)',
				[Language.FR]: 'Espace associatif (ex: Bétonsalon, Triangle-Astérides)',
				[Language.IT]: 'Spazi d’arte non profit (ex: Pirelli HangarBicocca, Fondazione ICA Milano)',
				[Language.NL]: 'Non-profit kunstruimte (b.v. De Appel, 1646)',
				id: '5207068'
			},
			[EmployerType.ARTIST_RUN_SPACE]: {
				[Language.EN]: 'Artist-run space',
				[Language.FR]: 'Artist-run space',
				[Language.IT]: 'Artist-run space',
				[Language.NL]: 'Door kunstenaars gerunde ruimte',
				id: '5207064'
			},
			[EmployerType.STAFFING_AGENCY]: {
				[Language.EN]: 'Staffing agency',
				[Language.FR]: 'Agence en sous-traitance',
				[Language.IT]: 'Cooperativa di servizi culturali',
				[Language.NL]: 'Uitzendbureau',
				id: '5768059'
			}
		}
	},
	[EmployerTypeSubgroup.EDUCATION_AND_RESEARCH]: {
		groupLabel: {
			[Language.EN]: 'Education & Research',
			[Language.FR]: 'Éducation & recherche',
			[Language.IT]: 'Educazione & ricerca',
			[Language.NL]: 'Education & Research (NL)'
		},
		options: {
			[EmployerType.PUBLIC_SCHOOL]: {
				[Language.EN]: 'Public School',
				[Language.FR]: 'École publique',
				[Language.IT]: 'Scuola pubblica',
				[Language.NL]: 'Public School (NL)',
				id: '5207069'
			},
			[EmployerType.PRIVATE_SCHOOL]: {
				[Language.EN]: 'Private School',
				[Language.FR]: 'École privée',
				[Language.IT]: 'Scuola privata',
				[Language.NL]: 'Private School (NL)',
				id: '5207070'
			},
			[EmployerType.PUBLIC_UNIVERSITY]: {
				[Language.EN]: 'Public University',
				[Language.FR]: 'Université publique',
				[Language.IT]: 'Università pubblica',
				[Language.NL]: 'Public University (NL)',
				id: '5207071'
			},
			[EmployerType.PRIVATE_UNIVERSITY]: {
				[Language.EN]: 'Private University',
				[Language.FR]: 'Université privée',
				[Language.IT]: 'Università privata',
				[Language.NL]: 'Private University (NL)',
				id: '5207072'
			},
			[EmployerType.LIBRARY]: {
				[Language.EN]: 'Library',
				[Language.FR]: 'Bibliothèque',
				[Language.IT]: 'Biblioteca',
				[Language.NL]: 'Library (NL)',
				id: '5207073'
			},
			[EmployerType.ARCHIVE]: {
				[Language.EN]: 'Archive',
				[Language.FR]: 'Centre d’archives',
				[Language.IT]: 'Archivio',
				[Language.NL]: 'Archive (NL)',
				id: '5207074'
			},
			[EmployerType.RESEARCH_CENTER]: {
				[Language.EN]: 'Research Center',
				[Language.FR]: 'Centre de recherche',
				[Language.IT]: 'Centro di ricerca',
				[Language.NL]: 'Research Center (NL)',
				id: '5207075'
			}
		}
	},
	[EmployerTypeSubgroup.GOVERNMENT_AND_FUNDING_BODIES]: {
		groupLabel: {
			[Language.EN]: 'Government & Funding Bodies',
			[Language.FR]: 'Gouvernement & organismes de financement public',
			[Language.IT]: 'Enti governativi & finanziatori',
			[Language.NL]: 'Government & Funding Bodies (NL)'
		},
		options: {
			[EmployerType.MINISTER_CULTURE]: {
				[Language.EN]: 'Central Government — Culture (e.g. DCMS)',
				[Language.FR]: 'Ministère de la Culture (ex: DRAC)',
				[Language.IT]: 'Ministero della Cultura (ex: MiC)',
				[Language.NL]: 'National Cultural Authority (NL)',
				id: '5207077'
			},
			[EmployerType.ARTS_COUNCIL]: {
				[Language.EN]: 'Arts Council / Arm’s-Length Body (e.g. Arts Council England)',
				[Language.FR]: 'Organisme public culturel (ex: CNAP)',
				[Language.IT]: 'Ente pubblico per la cultura',
				[Language.NL]: 'Arts Council or Arm’s-Length Body (NL)',
				id: '5207078'
			},
			[EmployerType.LOCAL_GOVT]: {
				[Language.EN]: 'Regional or Local Authority',
				[Language.FR]: 'Collectivité ou réseau territorial',
				[Language.IT]: 'Enti regionali, provinciali e municipali',
				[Language.NL]: 'Regional or Local Authority (NL)',
				id: '5207079'
			},
			[EmployerType.CULTURAL_DIPLOMACY_BODY]: {
				[Language.EN]: 'Cultural Diplomacy Body (e.g. Embassy, Cultural Institute)',
				[Language.FR]: 'Organisme de diplomatie culturelle (ex: Institut Français)',
				[Language.IT]: 'Ente di diplomazia culturale (ex: Istituto Italiano di Cultura)',
				[Language.NL]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) (NL)',
				id: '5207082'
			}
		}
	},
	[EmployerTypeSubgroup.COMMERCIAL_AND_MARKET]: {
		groupLabel: {
			[Language.EN]: 'Commercial & Market',
			[Language.FR]: 'Marché de l’art',
			[Language.IT]: 'Mercato dell’arte',
			[Language.NL]: 'Commercial & Market (NL)'
		},
		options: {
			[EmployerType.AUCTION_HOUSE]: {
				[Language.EN]: 'Auction House',
				[Language.FR]: 'Maison de ventes',
				[Language.IT]: 'Case d’asta',
				[Language.NL]: 'Auction House (NL)',
				id: '5207083'
			},
			[EmployerType.COMMERCIAL_GALLERY]: {
				[Language.EN]: 'Commercial Gallery',
				[Language.FR]: 'Galerie d’art',
				[Language.IT]: 'Galleria commerciale',
				[Language.NL]: 'Commercial Gallery (NL)',
				id: '5768089'
			},
			[EmployerType.ART_DEALER]: {
				[Language.EN]: 'Art Dealer',
				[Language.FR]: 'Marchand d’art',
				[Language.IT]: 'Mercante d’arte',
				[Language.NL]: 'Art Dealer (NL)',
				id: '5207084'
			},
			[EmployerType.ART_ADVISOR]: {
				[Language.EN]: 'Art Advisor',
				[Language.FR]: 'Art advisor',
				[Language.IT]: 'Consulente d’arte',
				[Language.NL]: 'Art Advisor (NL)',
				id: '5207085'
			},
			[EmployerType.ART_FAIR]: {
				[Language.EN]: 'Art Fair',
				[Language.FR]: 'Foire d’art contemporain',
				[Language.IT]: 'Fiera d’arte',
				[Language.NL]: 'Art Fair (NL)',
				id: '5768090'
			},
			[EmployerType.ONLINE_SALES_PLATFORM]: {
				[Language.EN]: 'Online Sales Platform',
				[Language.FR]: 'Plateforme de vente en ligne',
				[Language.IT]: 'Piattaforma di vendita online',
				[Language.NL]: 'Online Sales Platform (NL)',
				id: '5207086'
			},
			[EmployerType.CORPORATE_ENTERPRISE]: {
				[Language.EN]: 'Corporate Enterprise',
				[Language.FR]: 'Entreprise privée',
				[Language.IT]: 'Impresa privata',
				[Language.NL]: 'Corporate Enterprise (NL)',
				id: '5768091'
			}
		}
	},
	[EmployerTypeSubgroup.PUBLISHING]: {
		groupLabel: {
			[Language.EN]: 'Publishing',
			[Language.FR]: 'Édition & presse',
			[Language.IT]: 'Editoria',
			[Language.NL]: 'Publishing (NL)'
		},
		options: {
			[EmployerType.PUBLISHING_HOUSE]: {
				[Language.EN]: 'Publishing House',
				[Language.FR]: 'Maison d’édition',
				[Language.IT]: 'Casa editrice',
				[Language.NL]: 'Publishing House (NL)',
				id: '5207087'
			},
			[EmployerType.IND_PUBLISHING_HOUSE]: {
				[Language.EN]: 'Independent Publishing House',
				[Language.FR]: 'Maison d’édition indépendante',
				[Language.IT]: 'Casa editrice indipendente',
				[Language.NL]: 'Independent Publishing House (NL)',
				id: '5768101'
			},
			[EmployerType.MEDIA]: {
				[Language.EN]: 'Media',
				[Language.FR]: 'Média',
				[Language.IT]: 'Media',
				[Language.NL]: 'Media (NL)',
				id: '5207088'
			},
			[EmployerType.MAGAZINE]: {
				[Language.EN]: 'Magazine',
				[Language.FR]: 'Magazine',
				[Language.IT]: 'Rivista',
				[Language.NL]: 'Magazine (NL)',
				id: '5207089'
			},
			[EmployerType.IND_MAGAZINE]: {
				[Language.EN]: 'Independent Magazine',
				[Language.FR]: 'Magazine indépendante',
				[Language.IT]: 'Rivista indipendente',
				[Language.NL]: 'Independent Magazine (NL)',
				id: '5768102'
			},
			[EmployerType.ONLINE_PLATFORM]: {
				[Language.EN]: 'Online Platform',
				[Language.FR]: 'Plateforme éditoriale en ligne',
				[Language.IT]: 'Piattaforma online',
				[Language.NL]: 'Online Platform (NL)',
				id: '5207090'
			}
		}
	},
	[EmployerTypeSubgroup.PRODUCTION_AND_CREATION]: {
		groupLabel: {
			[Language.EN]: 'Production & Creation',
			[Language.FR]: 'Production & création',
			[Language.IT]: 'Produzione & creazione',
			[Language.NL]: 'Production & Creation (NL)'
		},
		options: {
			[EmployerType.ARTIST_STUDIO]: {
				[Language.EN]: "Artist's Studio",
				[Language.FR]: 'Studio d’artiste',
				[Language.IT]: 'Studio d’artista',
				[Language.NL]: "Artist's Studio (NL)",
				id: '5207091'
			},
			[EmployerType.IND_ARTIST]: {
				[Language.EN]: 'Independent Artist',
				[Language.FR]: 'Artiste indépendant·e',
				[Language.IT]: 'Artista indipente',
				[Language.NL]: 'Independent Artist (NL)',
				id: '5768104'
			},
			[EmployerType.FABRICATION_WORKSHOP]: {
				[Language.EN]: 'Fabrication Workshop',
				[Language.FR]: 'Atelier industriel',
				[Language.IT]: 'Laboratori di produzione',
				[Language.NL]: 'Fabrication Workshop (NL)',
				id: '5207092'
			},
			[EmployerType.FAB_LAB]: {
				[Language.EN]: 'Maker Space',
				[Language.FR]: 'Fab lab',
				[Language.IT]: 'Fab lab',
				[Language.NL]: 'Maker Space (NL)',
				id: '5207093'
			},
			[EmployerType.ART_LOGISTICS]: {
				[Language.EN]: 'Art Logistics',
				[Language.FR]: 'Entreprise de logistique',
				[Language.IT]: 'Logistica per l’arte',
				[Language.NL]: 'Art Logistics (NL)',
				id: '5207094'
			}
		}
	},
	[EmployerTypeSubgroup.EVENTS]: {
		groupLabel: {
			[Language.EN]: 'Events',
			[Language.FR]: 'Événements',
			[Language.IT]: 'Eventi',
			[Language.NL]: 'Events (NL)'
		},
		options: {
			[EmployerType.FESTIVAL]: {
				[Language.EN]: 'Festival',
				[Language.FR]: 'Festival',
				[Language.IT]: 'Festival',
				[Language.NL]: 'Festival (NL)',
				id: '5207095'
			},
			[EmployerType.BIENNIAL]: {
				[Language.EN]: 'Biennial',
				[Language.FR]: 'Bienniale',
				[Language.IT]: 'Bienniale',
				[Language.NL]: 'Biennial (NL)',
				id: '5207096'
			},
			[EmployerType.TRIENNIAL]: {
				[Language.EN]: 'Triennial',
				[Language.FR]: 'Trienniale',
				[Language.IT]: 'Trienniale',
				[Language.NL]: 'Triennial (NL)',
				id: '5207097'
			},
			[EmployerType.LOCAL_EVENT]: {
				[Language.EN]: 'Local Event',
				[Language.FR]: 'Evènement local',
				[Language.IT]: 'Evento locale',
				[Language.NL]: 'Local Event (NL)',
				id: '5207099'
			}
		}
	},
	[EmployerTypeSubgroup.ARTIST_SUPPORT_STRUCTURES]: {
		groupLabel: {
			[Language.EN]: 'Artist Support Structures',
			[Language.FR]: 'Structures de soutien aux artistes',
			[Language.IT]: 'Strutture di supporto allə artistə',
			[Language.NL]: 'Artist Support Structures (NL)'
		},
		options: {
			[EmployerType.UNION]: {
				[Language.EN]: 'Union',
				[Language.FR]: 'Syndicat',
				[Language.IT]: 'Sindacato',
				[Language.NL]: 'Union (NL)',
				id: '5207100'
			},
			[EmployerType.ARTIST_SERVICES_ORGANIZATION]: {
				[Language.EN]: 'Artists’ Support Services',
				[Language.FR]: 'Plateforme d’accompagnement d’artistes',
				[Language.IT]: 'Servizi di supporto allə artistə',
				[Language.NL]: 'Artists’ Support Services (NL)',
				id: '5207101'
			},
			[EmployerType.PROFESSIONAL_MEMBERSHIP_ORG]: {
				[Language.EN]: 'Professional Membership Organisation',
				[Language.FR]: 'Association de professionnel·les de l’art (ex: AICA, c-e-a)',
				[Language.IT]: 'Associazioni di categoria (ex: AWI)',
				[Language.NL]: 'Professional Membership Organisation (NL)',
				id: '5768104'
			},
			[EmployerType.RIGHTS_ORGANIZATION]: {
				[Language.EN]: 'Artists’ Rights Organisation',
				[Language.FR]: 'Organisme de gestion collective (ex: ADAGP)',
				[Language.IT]: 'Associazione per i diritti dellə artistə',
				[Language.NL]: 'Artists’ Rights Organisation (NL)',
				id: '5207102'
			},
			[EmployerType.RESIDENCY_PROGRAM]: {
				[Language.EN]: 'Residency Programme',
				[Language.FR]: 'Programme de résidence',
				[Language.IT]: 'Programma di residenza',
				[Language.NL]: 'Residency Programme (NL)',
				id: '5207103'
			},
			[EmployerType.COOPERATIVE_STRUCTURE]: {
				[Language.EN]: 'Cooperative',
				[Language.FR]: 'Coopérative',
				[Language.IT]: 'Cooperativa',
				[Language.NL]: 'Cooperative (NL)',
				id: '5207104'
			}
		}
	},
	[EmployerTypeSubgroup.OTHER]: {
		groupLabel: {
			[Language.EN]: 'Other',
			[Language.FR]: 'Autre',
			[Language.IT]: 'Altro',
			[Language.NL]: 'Other (NL)'
		},
		options: {
			[EmployerType.OTHER]: {
				[Language.EN]: 'Other',
				[Language.FR]: 'Autre',
				[Language.IT]: 'Altro',
				[Language.NL]: 'Other (NL)',
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
	APPRENTICESHIP = 'APPRENTICESHIP',
	ZERO_HOURS = 'ZERO_HOURS'
}

export const contractTypeOptions = {
	[ContractType.FULLTIME]: {
		[Language.EN]: 'Full-time',
		[Language.FR]: 'CDI temps plein',
		[Language.IT]: 'Tempo pieno',
		[Language.NL]: 'Full-time (NL)',
		id: '5207121'
	},
	[ContractType.PARTTIME]: {
		[Language.EN]: 'Part-time',
		[Language.FR]: 'CDI temps partiel',
		[Language.IT]: 'Part-time',
		[Language.NL]: 'Part-time (NL)',
		id: '5207124'
	},
	[ContractType.FULLTIME_TEMP]: {
		[Language.EN]: 'Full-time (fixed-term)',
		[Language.FR]: 'CDD temps plein',
		[Language.IT]: 'Tempo pieno (TI)',
		[Language.NL]: 'Full-time (fixed-term) (NL)',
		id: '5207122'
	},
	[ContractType.PARTTIME_TEMP]: {
		[Language.EN]: 'Part-time (fixed-term)',
		[Language.FR]: 'CDD temps partiel',
		[Language.IT]: 'Part-time (TD)',
		[Language.NL]: 'Part-time (fixed-term) (NL)',
		id: '5207120'
	},
	[ContractType.INDEPENDENT]: {
		[Language.EN]: 'Freelance',
		[Language.FR]: 'Indépendant',
		[Language.IT]: 'Freelance',
		[Language.NL]: 'Freelance (NL)',
		id: '5207125'
	},
	[ContractType.INTERNSHIP]: {
		[Language.EN]: 'Internship',
		[Language.FR]: 'Stage',
		[Language.IT]: 'Tirocinio',
		[Language.NL]: 'Internship (NL)',
		id: '5207123'
	},
	[ContractType.APPRENTICESHIP]: {
		[Language.EN]: 'Apprenticeship',
		[Language.FR]: 'Apprentissage',
		[Language.IT]: 'Apprendistato',
		[Language.NL]: 'Apprenticeship (NL)',
		id: '5207126'
	},
	[ContractType.ZERO_HOURS]: {
		[Language.EN]: 'Zero Hours',
		[Language.FR]: 'Zero Hours',
		[Language.IT]: 'Zero Hours',
		[Language.NL]: 'Zero Hours (NL)',
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

	[Country.NETHERLANDS]: ['Other NL']
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
		[Language.NL]: 'hours NL'
	},
	[ContractLengthUnit.DAYS]: {
		[Language.EN]: 'days',
		[Language.FR]: 'jours',
		[Language.IT]: 'giorni',
		[Language.NL]: 'days NL'
	},
	[ContractLengthUnit.MONTHS]: {
		[Language.EN]: 'months',
		[Language.FR]: 'mois',
		[Language.IT]: 'mesi',
		[Language.NL]: 'months NL'
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
	HEAD_OF_PUBLIC_ENG = 'HEAD_OF_PUBLIC_ENG',
	PUBLIC_ENGAG_OFFICER = 'PUBLIC_ENGAG_OFFICER',
	VISITOR_SERVICES_ASST = 'VISITOR_SERVICES_ASST',
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
	CONTRACTS_MANAGER = 'CONTRACTS_MANAGER'
	/* OTHER = 'OTHER' */
}

export const workerTypeOptions = {
	[WorkerTypeSubgroup.CREATION]: {
		groupLabel: {
			[Language.EN]: 'Artmaking',
			[Language.FR]: 'Création',
			[Language.IT]: 'Praticao artistica',
			[Language.NL]: 'Creation (NL)'
		},
		options: {
			[WorkerType.ARTIST]: {
				label: {
					[Language.EN]: 'Visual Artist',
					[Language.FR]: 'Artiste',
					[Language.IT]: 'Artista visivə',
					[Language.NL]: 'Visual Artist (NL)'
				},
				detail: {
					[Language.EN]: '- mediums used, new or old works, number of works produced, etc.',
					[Language.FR]:
						'- médiums utilisés, œuvres nouvelles ou anciennes, nombre d’œuvres produites, etc.',
					[Language.IT]:
						'- media utilizzati, opere nuove o preesistenti, numero di opere prodotte, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207127'
			},
			[WorkerType.PERFORMING_ARTIST]: {
				label: {
					[Language.EN]: 'Performing Artist',
					[Language.FR]: 'Artiste interprète',
					[Language.IT]: 'Artista performativə',
					[Language.NL]: 'Performing Artist (NL)'
				},
				detail: {
					[Language.EN]: '- type of performance, duration, number of collaborators, etc.',
					[Language.FR]: '- type de performance, durée, nombre de collaborateurs, etc.',
					[Language.IT]: '- tipologia di performance, durata, numero di collaboratori, ecc.',
					[Language.NL]: '(NL) type of performance, duration, number of collaborators, etc.'
				},
				id: '5207128'
			}
		}
	},
	[WorkerTypeSubgroup.WRITING]: {
		groupLabel: {
			[Language.EN]: 'Writing',
			[Language.FR]: 'Écriture',
			[Language.IT]: 'Scrittura',
			[Language.NL]: 'Writing (NL)'
		},
		options: {
			[WorkerType.WRITER]: {
				label: {
					[Language.EN]: 'Writer',
					[Language.FR]: 'Auteur·ice',
					[Language.IT]: 'Scrittorə',
					[Language.NL]: 'Writer (NL)'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '- formato, focus tematico, numero di pagine/parole, frequenza, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207129'
			},
			[WorkerType.ART_CRITIC]: {
				label: {
					[Language.EN]: 'Art Critic',
					[Language.FR]: 'Critique d’art',
					[Language.IT]: 'Criticə d’arte',
					[Language.NL]: 'Art Critic (NL)'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '- formato, focus tematico, numero di pagine/parole, frequenza, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207130'
			},
			[WorkerType.EDITOR]: {
				label: {
					[Language.EN]: 'Editor',
					[Language.FR]: 'Editeur·ice',
					[Language.IT]: 'Editor / redattorə',
					[Language.NL]: 'Editor (NL)'
				},
				detail: {
					[Language.EN]: '- format, number of texts, number of contributors, languages, etc.',
					[Language.FR]: '- format, nombre de textes, nombre de contributeur·ices, langues, etc.',
					[Language.IT]: '- formato, numero di testi, numero di contributor, lingue, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207131'
			},
			[WorkerType.JOURNALIST]: {
				label: {
					[Language.EN]: 'Journalist',
					[Language.FR]: 'Journaliste',
					[Language.IT]: 'Giornalista',
					[Language.NL]: 'Journalist (NL)'
				},
				detail: {
					[Language.EN]: '- subjects covered, number of articles or interviews conducted, etc.',
					[Language.FR]: '- thématiques, nombre d’articles ou d’entretiens réalisés, etc.',
					[Language.IT]: '- temi trattati, numero di articoli o interviste realizzate, ecc.',
					[Language.NL]: '(NL) subjects covered, number of articles or interviews conducted, etc.'
				},
				id: '5207132'
			},
			[WorkerType.TRANSLATOR]: {
				label: {
					[Language.EN]: 'Translator',
					[Language.FR]: 'Traducteur·ice',
					[Language.IT]: 'Traduttorə',
					[Language.NL]: 'Translator (NL)'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '- lingue, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '(NL) languages, page/word count, type of texts, etc.'
				},
				id: '5207133'
			},
			[WorkerType.COPYWRITER]: {
				label: {
					[Language.EN]: 'Copywriter',
					[Language.FR]: 'Rédacteur·rice',
					[Language.IT]: 'Copywriter',
					[Language.NL]: 'Copywriter (NL)'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '- lingue, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '(NL) languages, page/word count, type of texts, etc.'
				},
				id: '5207134'
			},
			[WorkerType.GHOSTWRITER]: {
				label: {
					[Language.EN]: 'Ghostwriter',
					[Language.FR]: 'Collaborateur·ice éditorial·e',
					[Language.IT]: 'Ghostwriter',
					[Language.NL]: 'Ghostwriter (NL)'
				},
				detail: {
					[Language.EN]: '- client profile, page/word count, type of texts, etc.',
					[Language.FR]: '- profil du client, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]:
						'- profilo del committente, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207135'
			},
			[WorkerType.ARCHIVIST]: {
				label: {
					[Language.EN]: 'Archivist',
					[Language.FR]: 'Archiviste',
					[Language.IT]: 'Archivista',
					[Language.NL]: 'Archivist (NL)'
				},
				detail: {
					[Language.EN]: '- type of collection, cataloging systems, digitization volume, etc.',
					[Language.FR]:
						'- type de la collection, systèmes de catalogage utilisés, volume de numérisation, etc.',
					[Language.IT]:
						'- tipologia della collezione, sistemi di catalogazione, volume di digitalizzazione, ecc.',
					[Language.NL]: '(NL) type of collection, cataloging systems, digitization volume, etc.'
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
			[Language.NL]: 'Curation (NL)'
		},
		options: {
			[WorkerType.CURATOR]: {
				label: {
					[Language.EN]: 'Curator',
					[Language.FR]: 'Curateur·ice',
					[Language.IT]: 'Curatela',
					[Language.NL]: 'Curator (NL)'
				},
				detail: {
					[Language.EN]: '- size of exhibition space, number of artists, thematic focus, etc.',
					[Language.FR]:
						'- taille de l’espace d’exposition, nombre d’artistes, axe thématique, etc.',
					[Language.IT]:
						'- dimensione dello spazio espositivo, numero di artisti, focus tematico, ecc.',
					[Language.NL]: '(NL) size of exhibition space, number of artists, thematic focus, etc.'
				},
				id: '5207137'
			},
			[WorkerType.RESEARCHER]: {
				label: {
					[Language.EN]: 'Researcher',
					[Language.FR]: 'Chercheur·se',
					[Language.IT]: 'Ricercatorə',
					[Language.NL]: 'Researcher (NL)'
				},
				detail: {
					[Language.EN]: '- scope of research, archives accessed, outputs produced, etc.',
					[Language.FR]:
						'- champ de recherche, archives consultées, productions/résultats réalisés, etc.',
					[Language.IT]: '- ampiezza della ricerca, archivi consultati, output prodotti, ecc.',
					[Language.NL]: '(NL) scope of research, archives accessed, outputs produced, etc.'
				},
				id: '5207138'
			},
			[WorkerType.ART_HISTORIAN]: {
				label: {
					[Language.EN]: 'Art Historian',
					[Language.FR]: 'Historien·ne de l’art',
					[Language.IT]: 'Storicə dell’arte',
					[Language.NL]: 'Art Historian (NL)'
				},
				detail: {
					[Language.EN]: '- specialization, lectures given, research periods, etc.',
					[Language.FR]: '- spécialisation, conférences données, périodes de recherche, etc.',
					[Language.IT]: '- specializzazione, lezioni svolte, periodi di ricerca, ecc.',
					[Language.NL]: '(NL) specialization, lectures given, research periods, etc.'
				},
				id: '5207139'
			},
			[WorkerType.ARTISTIC_PROGAMMER]: {
				label: {
					[Language.EN]: 'Artistic Programmer',
					[Language.FR]: 'Programmateur·ice',
					[Language.IT]: 'Programmatørə artisticə',
					[Language.NL]: 'Artistic Programmer (NL)'
				},
				detail: {
					[Language.EN]: '- event format, number of artists, audience size, etc.',
					[Language.FR]: '- format d’événement, nombre d’artistes, taille du public, etc.',
					[Language.IT]: '- formati curatoriali, numero di artisti, dimensione del pubblico, ecc.',
					[Language.NL]: '(NL) event format, number of artists, audience size, etc.'
				},
				id: '5207140'
			},
			[WorkerType.CURATORIAL_FELLOW]: {
				label: {
					[Language.EN]: 'Curatorial Fellow',
					[Language.FR]: 'Curateur·ice associé·e',
					[Language.IT]: 'Curatorial fellow / borsista',
					[Language.NL]: 'Curatorial Fellow (NL)'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]:
						'- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]:
						'- focus del progetto, mostre supportate, aree di ricerca, attività di scrittura, ecc.',
					[Language.NL]: '(NL) project focus, exhibitions supported, research areas, etc.'
				},
				id: '5207141'
			},
			[WorkerType.CURATORIAL_ASSISTANT]: {
				label: {
					[Language.EN]: 'Curatorial Assistant',
					[Language.FR]: 'Assistant·e curateur·ice',
					[Language.IT]: 'Assistente curatorə',
					[Language.NL]: 'Curatorial Assistant (NL)'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]:
						'- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]: '- focus del progetto, mostre supportate, aree di ricerca, ecc.',
					[Language.NL]: '(NL) project focus, exhibitions supported, research areas, etc.'
				},
				id: '5207142'
			},
			[WorkerType.PUBLIC_PROGRAMS_COORDINATOR]: {
				label: {
					[Language.EN]: 'Public Programs Coordinator',
					[Language.FR]: 'Coordinateur·ice des programmes',
					[Language.IT]: 'Coordinatørə dei programmi pubblici',
					[Language.NL]: 'Public Programs Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- event types, number of programs, partner types, etc.',
					[Language.FR]: '- types et nombre d’événements, types de partenaires, etc.',
					[Language.IT]: '- tipologie di eventi, numero di programmi, tipologia di partner, ecc.',
					[Language.NL]: '(NL) event types, number of programs, partner types, etc.'
				},
				id: '5207143'
			},
			[WorkerType.RESEARCH_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Research Associate',
					[Language.FR]: 'Chercheur·se associé·e',
					[Language.IT]: 'Ricercatorə associatə',
					[Language.NL]: 'Research Associate (NL)'
				},
				detail: {
					[Language.EN]: '- research scope, collaborations, etc.',
					[Language.FR]: '- champ de recherche, collaborations, etc.',
					[Language.IT]: '- ambito della ricerca, collaborazioni, ecc.',
					[Language.NL]: '(NL) scope of research, archives accessed, outputs produced, etc.'
				},
				id: '5207144'
			}
		}
	},
	[WorkerTypeSubgroup.PRODUCTION]: {
		groupLabel: {
			[Language.EN]: 'Production',
			[Language.FR]: 'Production',
			[Language.IT]: 'Produzione',
			[Language.NL]: 'Production (NL)'
		},
		options: {
			[WorkerType.ARTIST_ASSISTANT]: {
				label: {
					[Language.EN]: 'Artist Assistant',
					[Language.FR]: 'Assistant·e d’artiste',
					[Language.IT]: 'Assistente d’artista',
					[Language.NL]: 'Artist Assistant (NL)'
				},
				detail: {
					[Language.EN]: '- tasks, techniques, scale of studio, etc.',
					[Language.FR]: '- missions, techniques, taiille de l’atelier, etc.',
					[Language.IT]: '- mansioni, tecniche, scala dello studio, ecc.',
					[Language.NL]: '(NL) tasks, techniques, scale of studio, etc.'
				},
				id: '5207145'
			},
			[WorkerType.PRODUCTION_MANAGER]: {
				label: {
					[Language.EN]: 'Production Manager',
					[Language.FR]: 'Chargé·e de production',
					[Language.IT]: 'Responsabile di produzione',
					[Language.NL]: 'Production Manager (NL)'
				},
				detail: {
					[Language.EN]: '- project budgets, team size, timelines managed, locations, etc.',
					[Language.FR]: '- budgets des projets, taille des équipes, calendrier, lieux, etc.',
					[Language.IT]:
						'- budget di progetto, dimensione del team, tempistiche gestite, sedi/luoghi, ecc.',
					[Language.NL]: '(NL) project budgets, team size, timelines managed, locations, etc.'
				},
				id: '5207146'
			},
			[WorkerType.PRODUCTION_ASSISTANT]: {
				label: {
					[Language.EN]: 'Production Assistant',
					[Language.FR]: 'Assistant·e de production',
					[Language.IT]: 'Assistente alla produzione',
					[Language.NL]: 'Production Assistant (NL)'
				},
				detail: {
					[Language.EN]: '- teams supported, materials, etc.',
					[Language.FR]: '- taille de l’équipe, matériaux et techniques, etc.',
					[Language.IT]: '- team supportati, materiali utilizzati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207147'
			},
			[WorkerType.FABRICATOR]: {
				label: {
					[Language.EN]: 'Fabricator (metal, wood, 3D printing)',
					[Language.FR]: 'Technicien·ne de fabrication',
					[Language.IT]: 'Tecnicə di produzione',
					[Language.NL]: 'Fabricator (metal, wood, 3D printing) (NL)'
				},
				detail: {
					[Language.EN]: '- materials, tools, objects built, etc.',
					[Language.FR]: '- matériaux, outils, objets réalisés/construits, etc.',
					[Language.IT]: '- materiali, strumenti, oggetti costruiti, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207148'
			},
			[WorkerType.ARTISAN]: {
				label: {
					[Language.EN]: 'Craftsperson',
					[Language.FR]: 'Artisan d’art',
					[Language.IT]: 'Artigianə',
					[Language.NL]: 'Artisan (NL)'
				},
				detail: {
					[Language.EN]: '- craft specialty, materials, techniques, objects produced, etc.',
					[Language.FR]: '- spécialité, matériaux, techniques, objets produits, etc.',
					[Language.IT]:
						'- specializzazione artigianale, materiali, tecniche, oggetti prodotti, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207149'
			},
			[WorkerType.TECHNICIAN]: {
				label: {
					[Language.EN]: 'Technician',
					[Language.FR]: 'Regisseur·se',
					[Language.IT]: 'Tecnicə',
					[Language.NL]: 'Technician (NL)'
				},
				detail: {
					[Language.EN]: '- project type, specializations, equipment, etc.',
					[Language.FR]: '- type de projet, spécialités, équipements, etc.',
					[Language.IT]: '- tipologia di progetto, specializzazioni, attrezzature, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207150'
			},
			[WorkerType.LIGHTING_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Lighting Technician',
					[Language.FR]: 'Ingenieur·e lumière',
					[Language.IT]: 'Tecnicə luci',
					[Language.NL]: 'Lighting Technician (NL)'
				},
				detail: {
					[Language.EN]: '- space type, lighting systems, etc.',
					[Language.FR]: '- type d’espace, systèmes d’éclairage, etc.',
					[Language.IT]: '- tipologia di spazio, sistemi di illuminazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207151'
			},
			[WorkerType.LIGHTING_DESIGNER]: {
				label: {
					[Language.EN]: 'Lighting Designer',
					[Language.FR]: 'Concepteur·rice lumière',
					[Language.IT]: 'Lighting designer',
					[Language.NL]: 'Lighting Designer (NL)'
				},
				detail: {
					[Language.EN]: '- space type, concepts developed, cueing, etc.',
					[Language.FR]: '- type d’espace et de création, repérages, etc.',
					[Language.IT]: '- tipologia di spazio, concetti sviluppati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207152'
			},
			[WorkerType.PROJECTION_AV_SPECIALIST]: {
				label: {
					[Language.EN]: 'Projection / AV Specialist',
					[Language.FR]: 'Technicien·ne audivisuel·le',
					[Language.IT]: 'Tecnicə audio video',
					[Language.NL]: 'Projection / AV Specialist (NL)'
				},
				detail: {
					[Language.EN]: '- space type, projectors used, mapping, etc.',
					[Language.FR]: '- type d’espace, projecteurs utilisés, mapping, etc.',
					[Language.IT]: '- tipologia di spazio, proiettori utilizzati, mapping, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207153'
			},
			[WorkerType.SOUND_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Sound Technician',
					[Language.FR]: 'Technicien·ne son',
					[Language.IT]: 'Tecnicə del suono',
					[Language.NL]: 'Sound Technician (NL)'
				},
				detail: {
					[Language.EN]: '- project type, equipment, etc.',
					[Language.FR]: '- type de projet, équipements, etc.',
					[Language.IT]: '- tipologia di progetto, attrezzature, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207154'
			},
			[WorkerType.SOUND_DESIGNER]: {
				label: {
					[Language.EN]: 'Sound Designer',
					[Language.FR]: 'Concepteur·rice sonore',
					[Language.IT]: 'Sound designer',
					[Language.NL]: 'Sound Designer (NL)'
				},
				detail: {
					[Language.EN]: '- project type, software used, channels, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, etc.',
					[Language.IT]: '- tipologia di progetto, software utilizzati, canali, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207155'
			},
			[WorkerType.EXHIBITION_DESIGNER]: {
				label: {
					[Language.EN]: 'Exhibition Designer',
					[Language.FR]: 'Scénographe d’exposition',
					[Language.IT]: 'Scenografə',
					[Language.NL]: 'Exhibition Designer (NL)'
				},
				detail: {
					[Language.EN]: '- project type, software used, number of renderings, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, nombre de rendus, etc.',
					[Language.IT]: '- tipologia di progetto, software utilizzati, numero di rendering, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207156'
			},
			[WorkerType.ART_HANDLER]: {
				label: {
					[Language.EN]: 'Art Handler',
					[Language.FR]: 'Installateur·ice d’œuvres',
					[Language.IT]: 'Art handler / addettə alla movimentazione opere',
					[Language.NL]: 'Art Handler (NL)'
				},
				detail: {
					[Language.EN]: '- artwork type, number of works, packing methods, etc.',
					[Language.FR]: '- type d’œuvres, nombre d’œuvres, méthodes d’emballage, etc.',
					[Language.IT]: '- tipologia di opera, numero di opere, modalità di imballaggio, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207157'
			},
			[WorkerType.THREED_VISUALIZER]: {
				label: {
					[Language.EN]: '3D Visualizer',
					[Language.FR]: 'Concepteur·ice 3D',
					[Language.IT]: 'Progettista 3D',
					[Language.NL]: '3D Visualizer (exhibition mock-ups, renders) (NL)'
				},
				detail: {
					[Language.EN]: '- project type, software, number of visualizations, etc.',
					[Language.FR]:
						'- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]:
						'- tipologia di progetto, complessità, considerazioni sull’accessibilità, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207158'
			},
			[WorkerType.UI_UX]: {
				label: {
					[Language.EN]: 'UI/UX Designer',
					[Language.FR]: 'Designer UI/UX',
					[Language.IT]: 'Designer UI/UX',
					[Language.NL]: 'UI/UX Designer (as art production) (NL)'
				},
				detail: {
					[Language.EN]: '- project type, complexity, accessibility considerations, etc.',
					[Language.FR]:
						'- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]:
						'- tipologia di progetto, complessità, considerazioni sull’accessibilità, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207159'
			},
			[WorkerType.STAGE_MANAGER]: {
				label: {
					[Language.EN]: 'Stage Manager',
					[Language.FR]: 'Régisseur·se de plateau',
					[Language.IT]: 'Stage manager / direttorə di scena',
					[Language.NL]: 'Stage Manager (NL)'
				},
				detail: {
					[Language.EN]: '- rehearsal cadence, cast/crew size, etc.',
					[Language.FR]:
						'- fréquence des répétitions, taille de la distribution/équipe technique, etc.',
					[Language.IT]: '- cadenza delle prove, dimensione del cast/crew, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207160'
			},
			[WorkerType.COSTUME_DESIGNER]: {
				label: {
					[Language.EN]: 'Costume Designer',
					[Language.FR]: 'Créateur·rice de costumes',
					[Language.IT]: 'Costumista',
					[Language.NL]: 'Costume designer (NL)'
				},
				detail: {
					[Language.EN]: '- costume count, materials, fittings, character research, etc.',
					[Language.FR]: '- nombre de costumes, matériaux, essayages, recherches, etc.',
					[Language.IT]: 'numero di costumi, materiali, prove, ricerca sui personaggi, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207161'
			}
		}
	},
	[WorkerTypeSubgroup.MEDIATION_AND_HOSPITALITY]: {
		groupLabel: {
			[Language.EN]: 'Mediation & Hospitality',
			[Language.FR]: 'Médiation & accueil',
			[Language.IT]: 'Mediazione & ospitalità',
			[Language.NL]: 'Mediation & Hospitality (NL)'
		},
		options: {
			[WorkerType.HEAD_OF_PUBLIC_ENG]: {
				label: {
					[Language.EN]: 'Head of Public Engagement',
					[Language.FR]: 'Responsable des publics',
					[Language.IT]: 'Responsabile della mediazione culturale',
					[Language.NL]: 'Cultural Mediator (NL)'
				},
				detail: {
					[Language.EN]: '- number of projects, team size, etc.',
					[Language.FR]: '- nombre de projets, taille de l’équipe gérée, etc.',
					[Language.IT]: '- numero di progetti, numero di persone gestite, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5767891'
			},
			[WorkerType.PUBLIC_ENGAG_OFFICER]: {
				label: {
					[Language.EN]: 'Public Engagement Officer',
					[Language.FR]: 'Chargé·e des publics',
					[Language.IT]: 'Responsabile public engagement',
					[Language.NL]: 'Cultural Mediator (NL)'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipo di pubblico, visite guidate, laboratori, temi affrontati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5767892'
			},
			[WorkerType.VISITOR_SERVICES_ASST]: {
				label: {
					[Language.EN]: 'Visitor Services Assistant',
					[Language.FR]: 'Chargé·e d’accueil',
					[Language.IT]: 'Addettə all’accoglienza',
					[Language.NL]: 'Cultural Mediator (NL)'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipo di pubblico, visite guidate, laboratori, temi affrontati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5767893'
			},
			[WorkerType.CULTURAL_MEDIATOR]: {
				label: {
					[Language.EN]: 'Cultural Outreach / Visitor Engagement',
					[Language.FR]: 'Médiateur·ice culturel·le',
					[Language.IT]: 'Mediatorə culturale',
					[Language.NL]: 'Cultural Mediator (NL)'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipologia di pubblico, visite, workshop, temi trattati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207162'
			},
			[WorkerType.TOUR_GUIDE]: {
				label: {
					[Language.EN]: 'Tour Guide',
					[Language.FR]: 'Guide conférencier·ère',
					[Language.IT]: 'Guidə / accompagnatorə',
					[Language.NL]: 'Tour Guide (NL)'
				},
				detail: {
					[Language.EN]: '- tour frequency, group sizes, languages, thematic expertise, etc.',
					[Language.FR]:
						'- fréquence des visites, tailles des groupes, langues, expertise thématique, etc.',
					[Language.IT]:
						'- frequenza delle visite, dimensione dei gruppi, lingue, competenze tematiche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207163'
			},
			[WorkerType.TRAINER_EDUCATOR]: {
				label: {
					[Language.EN]: 'Educator',
					[Language.FR]: 'Formateur',
					[Language.IT]: 'Educatorə',
					[Language.NL]: 'Trainer/Educator (NL)'
				},
				detail: {
					[Language.EN]: '- curriculum developed, class size, workshop formats, etc.',
					[Language.FR]:
						'- programme pédagogique développé, taille des classes, formats d’ateliers, etc.',
					[Language.IT]:
						'- programma didattico sviluppato, dimensione delle classi, formati dei workshop, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207164'
			},
			[WorkerType.TICKETING_AGENT]: {
				label: {
					[Language.EN]: 'Ticket Sales',
					[Language.FR]: 'Agent·e de billeterie',
					[Language.IT]: 'Addettə vendita biglietti',
					[Language.NL]: 'Ticketing Agent (NL)'
				},
				detail: {
					[Language.EN]: '- ticket volume, software systems, customer interactions, etc.',
					[Language.FR]:
						'- volume de billets, gestion de logiciels, interactions avec la clientèle, etc.',
					[Language.IT]:
						'- volume di biglietti, sistemi software, interazioni con il pubblico, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207165'
			},
			[WorkerType.HOST]: {
				label: {
					[Language.EN]: 'Front of House',
					[Language.FR]: 'Hôte·sse accueil',
					[Language.IT]: 'Accoglienza',
					[Language.NL]: 'Host (NL)'
				},
				detail: {
					[Language.EN]: '- event types, visitor flow, hospitality tasks, etc.',
					[Language.FR]: '- types d’événements, flux de visiteurs, missions d’accueil, etc.',
					[Language.IT]:
						'- tipologie di eventi, flussi di visitatori, mansioni di accoglienza, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207166'
			}
		}
	},
	[WorkerTypeSubgroup.MANAGEMENT_AND_ADMIN]: {
		groupLabel: {
			[Language.EN]: 'Management & Admin',
			[Language.FR]: 'Management & administration',
			[Language.IT]: 'Management & amministrazione',
			[Language.NL]: 'Management & Admin (NL)'
		},
		options: {
			[WorkerType.STUDIO_MANAGER]: {
				label: {
					[Language.EN]: 'Studio Manager',
					[Language.FR]: 'Studio manager',
					[Language.IT]: 'Studio Manager',
					[Language.NL]: 'Studio Manager (NL)'
				},
				detail: {
					[Language.EN]: '- team size, task types, studio budget, etc.',
					[Language.FR]: '- taille de l’équipe, types de missions, budget de l’atelier, etc.',
					[Language.IT]: '- dimensione del team, tipologie di mansioni, budget dello studio, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207167'
			},
			[WorkerType.PROJECT_MANAGER]: {
				label: {
					[Language.EN]: 'Project Manager',
					[Language.FR]: 'Chargé·e de projet',
					[Language.IT]: 'Project Manager',
					[Language.NL]: 'Project Manager (NL)'
				},
				detail: {
					[Language.EN]: '- project scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure du projet, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del progetto, dimensione del team, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207168'
			},
			[WorkerType.EVENT_PRODUCER]: {
				label: {
					[Language.EN]: 'Event Producer',
					[Language.FR]: 'Producteur·ice évènementiel·le',
					[Language.IT]: 'Produttorə di eventi',
					[Language.NL]: 'Event Producer (NL)'
				},
				detail: {
					[Language.EN]:
						'- event scale, vendors managed, audience size, technical complexity, etc.',
					[Language.FR]:
						'- envergure de l’événement, types de prestataires, taille du public, complexité technique, etc.',
					[Language.IT]:
						'- grandezza dell’evento, fornitori gestiti, dimensione del pubblico, complessità tecnica, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207169'
			},
			[WorkerType.EXHIBITION_MANAGER]: {
				label: {
					[Language.EN]: 'Exhibition Manager',
					[Language.FR]: 'Coordinateur·ice d’exposition',
					[Language.IT]: 'Responsabile mostre',
					[Language.NL]: 'Exhibition Manager (NL)'
				},
				detail: {
					[Language.EN]: '- exhibition scale, number of artists, installation timelines, etc.',
					[Language.FR]: '- taille de l’exposition, nombre d’artistes, délais, etc.',
					[Language.IT]:
						'- grandezza della mostra, numero di artisti, tempistiche di installazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207170'
			},
			[WorkerType.PROGRAM_COORDINATOR]: {
				label: {
					[Language.EN]: 'Program Coordinator',
					[Language.FR]: 'Coordinateur·ice de programme',
					[Language.IT]: 'Coordinatorə di programma pubblico',
					[Language.NL]: 'Program Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- program scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure du programme, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del programma, dimensione del team, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207171'
			},
			[WorkerType.PROJECT_ASSISTANT]: {
				label: {
					[Language.EN]: 'Project Assistant',
					[Language.FR]: 'Assistant·e de projet',
					[Language.IT]: 'Assistente di progetto',
					[Language.NL]: 'Program Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- project scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure des missions, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del progetto, dimensione del team, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207172'
			},
			[WorkerType.RESIDENCY_COORDINATOR]: {
				label: {
					[Language.EN]: 'Residency Coordinator',
					[Language.FR]: 'Coordinateur·ice de résidence',
					[Language.IT]: 'Coordinatorə di residenza',
					[Language.NL]: 'Residency Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- number of residents, residency focus, programming, etc.',
					[Language.FR]: '- nombre de résident·es, axe de la résidence, programmation, etc.',
					[Language.IT]: '- numero di residenti, focus della residenza, programmazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207173'
			},
			[WorkerType.ARTS_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Arts Administrator',
					[Language.FR]: 'Administrateur·ice',
					[Language.IT]: 'Amministratorə culturale',
					[Language.NL]: 'Arts Administrator (NL)'
				},
				detail: {
					[Language.EN]: '- departments, task types, etc.',
					[Language.FR]: '- départements, types de missions, etc.',
					[Language.IT]: '- dipartimenti coinvolti, tipologie di mansioni, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207174'
			},
			[WorkerType.PROGRAM_DIRECTOR]: {
				label: {
					[Language.EN]: 'Program Director',
					[Language.FR]: 'Directeur de programme',
					[Language.IT]: 'Direttorə di programma pubblico',
					[Language.NL]: 'Program Director (NL)'
				},
				detail: {
					[Language.EN]: '- program scale, team size, partnerships, etc.',
					[Language.FR]: '- envergure du programme, taille de l’équipe, partenariats, etc.',
					[Language.IT]: '- scala del programma, dimensione del team, partnership, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207175'
			},
			[WorkerType.COLLECTIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Collections Manager',
					[Language.FR]: 'Responsable des collections',
					[Language.IT]: 'Responsabile delle collezioni',
					[Language.NL]: 'Collections Manager (NL)'
				},
				detail: {
					[Language.EN]: '- size of collection, cataloging system, storage conditions, etc.',
					[Language.FR]:
						'- taille de la collection, système de catalogage, conditions de stockage, etc.',
					[Language.IT]:
						'- dimensione della collezione, sistema di catalogazione, condizioni di conservazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207176'
			},
			[WorkerType.GALLERY_MANAGER]: {
				label: {
					[Language.EN]: 'Gallery Manager',
					[Language.FR]: 'Responsable de galerie',
					[Language.IT]: 'Gallery Manager',
					[Language.NL]: 'Gallery Manager (NL)'
				},
				detail: {
					[Language.EN]: '- artist roster size, exhibitions organized, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, expositions organisées, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, mostre organizzate, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207177'
			},
			[WorkerType.GALLERY_ASSISTANT]: {
				label: {
					[Language.EN]: 'Gallery Assistant',
					[Language.FR]: 'Assistant·e de galerie',
					[Language.IT]: 'Assistente di galleria',
					[Language.NL]: 'Gallery Assistant (NL)'
				},
				detail: {
					[Language.EN]: '- artist roster size, exhibitions organized, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, expositions organisées, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, mostre organizzate, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207178'
			},
			[WorkerType.ARTIST_LIAISON]: {
				label: {
					[Language.EN]: 'Artist Liaison',
					[Language.FR]: 'Artist liaison',
					[Language.IT]: 'Referente per gli artisti / artists liaison',
					[Language.NL]: 'Artist Liaison (NL)'
				},
				detail: {
					[Language.EN]: '- artist roster size, mediums, languages, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, supports, langues, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, media, lingue, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207179'
			},
			[WorkerType.GENERAL_COORDINATOR]: {
				label: {
					[Language.EN]: 'Coordinator',
					[Language.FR]: 'Coordinateur·ice général·e',
					[Language.IT]: 'Coordinatorə',
					[Language.NL]: 'General Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- project type, specializations, etc.',
					[Language.FR]: '- type de projet, spécialités, etc.',
					[Language.IT]: '- tipologia di progetto, specializzazioni, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207180'
			},
			[WorkerType.GENERAL_DIRECTOR]: {
				label: {
					[Language.EN]: 'General Director',
					[Language.FR]: 'Directeur·ice général·e',
					[Language.IT]: 'Direttorə generale',
					[Language.NL]: 'General Director (NL)'
				},
				detail: {
					[Language.EN]: '- team size, specializations, strategic initiatives, etc.',
					[Language.FR]: '- taille de l’équipe, spécialités, initiatives stratégiques, etc.',
					[Language.IT]: '- dimensione del team, specializzazioni, iniziative strategiche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207181'
			},
			[WorkerType.ADMINISTRATIVE_SUPPORT]: {
				label: {
					[Language.EN]: 'Administrative Support',
					[Language.FR]: 'Accompagnateur·ice administratif·ve',
					[Language.IT]: 'Supporto amministrativo',
					[Language.NL]: 'Administrative Support (NL)'
				},
				detail: {
					[Language.EN]: '- task types, skills & tools used, etc. ',
					[Language.FR]: '- types de mission, compétences et outils utilisés, etc.',
					[Language.IT]: '-  tipologie di mansioni, competenze e strumenti utilizzati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207182'
			},
			[WorkerType.CHIEF_OF_STAFF]: {
				label: {
					[Language.EN]: 'Chief of Staff',
					[Language.FR]: 'Secretaire général·e',
					[Language.IT]: 'Capo staff',
					[Language.NL]: 'Chief of Staff (NL)'
				},
				detail: {
					[Language.EN]: '- team size, specializations, strategic initiatives, etc.',
					[Language.FR]: '- taille de l’équipe, spécialités, initiatives stratégiques, etc.',
					[Language.IT]: '- dimensione del team, specializzazioni, iniziative strategiche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207183'
			},
			[WorkerType.HR_STAFF_MANAGER]: {
				label: {
					[Language.EN]: 'HR / Staff Manager',
					[Language.FR]: 'Chargé·e de ressources humaines',
					[Language.IT]: 'Responsabile risorse umane / personale',
					[Language.NL]: 'HR / Staff Manager (NL)'
				},
				detail: {
					[Language.EN]: '- task types, skills & tools used, workplace policies, etc.',
					[Language.FR]:
						'- types de mission, compétences et outils utilisés, mise en place de politiques internes, etc.',
					[Language.IT]:
						'tipologie di attività, competenze e strumenti utilizzati, politiche aziendali, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207184'
			}
		}
	},
	[WorkerTypeSubgroup.COMMUNICATION_AND_DOCUMENTATION]: {
		groupLabel: {
			[Language.EN]: 'Communication & Documentation',
			[Language.FR]: 'Communication & documentation',
			[Language.IT]: 'Communicazione & documentazione',
			[Language.NL]: 'Communcation & Documentation (NL)'
		},
		options: {
			[WorkerType.GRAPHIC_DESIGNER]: {
				label: {
					[Language.EN]: 'Graphic Designer',
					[Language.FR]: 'Graphiste',
					[Language.IT]: 'Graphic designer',
					[Language.NL]: 'Graphic designer (books, posters, exhibitions) (NL)'
				},
				detail: {
					[Language.EN]: '- formats produced, software used, number of assets, etc.',
					[Language.FR]: '- formats produits, logiciels utilisés, etc.',
					[Language.IT]: '- formati prodotti, software utilizzati, numero di asset, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207185'
			},
			[WorkerType.PHOTOGRAPHER]: {
				label: {
					[Language.EN]: 'Photographer',
					[Language.FR]: 'Photographe',
					[Language.IT]: 'Fotografə',
					[Language.NL]: 'Photographer (documentation, portraits, installation shots) (NL)'
				},
				detail: {
					[Language.EN]: '- types of shots, number of sessions, editing workflow, etc.',
					[Language.FR]: '- types de prises de vues, nombre de sessions, temps d’édition, etc.',
					[Language.IT]: '- tipologie di riprese, numero di sessioni, flusso di montaggio, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207186'
			},
			[WorkerType.WEB_DEVELOPER]: {
				label: {
					[Language.EN]: 'Web Developer',
					[Language.FR]: 'Développeur·se web',
					[Language.IT]: 'Web developer',
					[Language.NL]: 'Web Developer (NL)'
				},
				detail: {
					[Language.EN]: '- languages/CMS used, site complexity, features built, etc.',
					[Language.FR]:
						'- langages utilisés, complexité du site, fonctionnalités développées, etc.',
					[Language.IT]:
						'- linguaggi/CMS utilizzati, complessità del sito, funzionalità sviluppate, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207187'
			},
			[WorkerType.WEB_DESIGNER]: {
				label: {
					[Language.EN]: 'Web Designer',
					[Language.FR]: 'Designer web',
					[Language.IT]: 'Web designer',
					[Language.NL]: 'Web Designer (NL)'
				},
				detail: {
					[Language.EN]: '- layouts, UI systems, prototypes, branding elements, etc.',
					[Language.FR]:
						'- mises en page, systèmes d’interface utilisateur, prototypes, éléments de branding, etc.',
					[Language.IT]: '- layout, sistemi UI, prototipi, elementi di branding, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207188'
			},
			[WorkerType.VIDEOGRAPHER]: {
				label: {
					[Language.EN]: 'Videographer',
					[Language.FR]: 'Vidéaste',
					[Language.IT]: 'Videomaker',
					[Language.NL]: 'Videographer (NL)'
				},
				detail: {
					[Language.EN]: '- filming setups, number of locations, etc.',
					[Language.FR]: '- configurations de tournage, nombre de lieux, etc.',
					[Language.IT]: '- setup di ripresa, numero di location, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207189'
			},
			[WorkerType.COMMUNITY_MANAGER]: {
				label: {
					[Language.EN]: 'Community Manager',
					[Language.FR]: 'Community manager',
					[Language.IT]: 'Community manager',
					[Language.NL]: 'Community Manager (NL)'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207190'
			},
			[WorkerType.DIGITAL_CONTENT_MANAGER]: {
				label: {
					[Language.EN]: 'Digital Content Manager',
					[Language.FR]: 'Chargé·e des contenus numériques',
					[Language.IT]: 'Digital content manager',
					[Language.NL]: 'Digital Content Manager (NL)'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207191'
			},
			[WorkerType.SOCIAL_MEDIA_STRATEGIST]: {
				label: {
					[Language.EN]: 'Social Media Strategist',
					[Language.FR]: 'Chargé·e de stratégie digitale',
					[Language.IT]: 'Strategist social media',
					[Language.NL]: 'Social Media Strategist (NL)'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207192'
			},
			[WorkerType.MARKETING_MANAGER]: {
				label: {
					[Language.EN]: 'Marketing Manager',
					[Language.FR]: 'Chargé·e de marketing',
					[Language.IT]: 'Responsabile marketing',
					[Language.NL]: 'Marketing Manager (NL)'
				},
				detail: {
					[Language.EN]: '- campaign types, audience scale, etc.',
					[Language.FR]: '- types de campagnes, envergure de l’audience, etc.',
					[Language.IT]: '- tipologie di campagne, scala del pubblico, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207193'
			},
			[WorkerType.PRESS_LIAISON]: {
				label: {
					[Language.EN]: 'Press Liaison',
					[Language.FR]: 'Relations Presse',
					[Language.IT]: 'Addettə alle relazioni con la stampa',
					[Language.NL]: 'Press Liaison (NL)'
				},
				detail: {
					[Language.EN]: '- campaign types, task types, etc.',
					[Language.FR]: '- types de campagnes, types de missions, etc.',
					[Language.IT]: '- tipologie di campagne, tipologie di mansioni, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207194'
			}
		}
	},
	[WorkerTypeSubgroup.OPERATIONS_AND_IT]: {
		groupLabel: {
			[Language.EN]: 'Operations & IT',
			[Language.FR]: 'Opérations & services informatiques',
			[Language.IT]: 'Operations & IT',
			[Language.NL]: 'Operations & IT (NL)'
		},
		options: {
			[WorkerType.SECURITY_AGENT]: {
				label: {
					[Language.EN]: 'Security Guard',
					[Language.FR]: 'Agent·e de sécurité',
					[Language.IT]: 'Addettə alla sicurezza',
					[Language.NL]: 'Security agent (NL)'
				},
				detail: {
					[Language.EN]: '- building size, protocols assigned, etc.',
					[Language.FR]:
						'- superficie du bâtiment, horaires spécifiques, protocoles assignés, etc.',
					[Language.IT]: '- dimensione dell’edificio, protocolli assegnati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207195'
			},
			[WorkerType.CUSTODIAL_STAFF]: {
				label: {
					[Language.EN]: 'Caretaker / Maintenance Worker',
					[Language.FR]: 'Agent·e d’entretien',
					[Language.IT]: 'Custodə / addettə alla manutenzione',
					[Language.NL]: 'Custodial Staff (NL)'
				},
				detail: {
					[Language.EN]: '- building coverage, cleaning routines, etc.',
					[Language.FR]: '- surface couverte, horaires spécifiques, routines de nettoyage, etc.',
					[Language.IT]: '- copertura dell’edificio, routine di pulizia, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207196'
			},
			[WorkerType.FACILITIES_MANAGER]: {
				label: {
					[Language.EN]: 'Building / Facilities Manager',
					[Language.FR]: 'Responsable des infrastructures',
					[Language.IT]: 'Responsabile edificio / strutture',
					[Language.NL]: 'Facilities Manager (NL)'
				},
				detail: {
					[Language.EN]: '- maintenance operations, building systems, etc. ',
					[Language.FR]: '- opérations de maintenance, systèmes du bâtiment, etc.',
					[Language.IT]: '- operazioni di manutenzione, sistemi dell’edificio, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207197'
			},
			[WorkerType.IT_SUPPORT]: {
				label: {
					[Language.EN]: 'IT Support',
					[Language.FR]: 'Assistant informatique',
					[Language.IT]: 'Supporto IT',
					[Language.NL]: 'IT Support (NL)'
				},
				detail: {
					[Language.EN]: '- hardware/software supported, ticket volume, systems managed, etc.',
					[Language.FR]:
						'- matériel/logiciels gérés, volume de tickets, systèmes administrés, etc.',
					[Language.IT]:
						'- hardware/software gestiti, volume di ticket, sistemi amministrati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207198'
			},
			[WorkerType.SYSTEMS_ADMIN]: {
				label: {
					[Language.EN]: 'Systems Admin',
					[Language.FR]: 'Administrateur·ice système',
					[Language.IT]: 'Amministratorə di sistemi',
					[Language.NL]: 'Systems Admin (NL)'
				},
				detail: {
					[Language.EN]: '- infrastructure managed, uptime, tools deployed, etc.',
					[Language.FR]: '- infrastructure gérée, outils déployés, taux de disponibilité, etc.',
					[Language.IT]:
						'- infrastruttura gestita, strumenti distribuiti, tasso di disponibilità, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207199'
			},
			[WorkerType.COLLECTIONS_DATABASE_MANAGER]: {
				label: {
					[Language.EN]: 'Collections Database Manager',
					[Language.FR]: 'Gestionnaire de base de données',
					[Language.IT]: 'Responsabile database delle collezioni',
					[Language.NL]: 'Collections Database Manager (NL)'
				},
				detail: {
					[Language.EN]: '- database used, number of records, digitisation scope, etc.',
					[Language.FR]:
						'- base de données utilisée, nombre de notices, périmètre de numérisation, etc.',
					[Language.IT]:
						'- database utilizzato, numero di schede, portata della digitalizzazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207200'
			}
		}
	},
	[WorkerTypeSubgroup.LEGAL_AND_FINANCE]: {
		groupLabel: {
			[Language.EN]: 'Legal & Finance',
			[Language.FR]: 'Services légaux & financiers',
			[Language.IT]: 'Legale & finanza',
			[Language.NL]: 'Legal & Finance (NL)'
		},
		options: {
			[WorkerType.FINANCIAL_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Financial Administrator',
					[Language.FR]: 'Directeur·ice financier·ère',
					[Language.IT]: 'Amministratorə finanziariə',
					[Language.NL]: 'Financial Administrator (NL)'
				},
				detail: {
					[Language.EN]: '- departments managed, software used, etc.',
					[Language.FR]: '- départements gérés, logiciels utilisés, etc.',
					[Language.IT]: '- dipartimenti gestiti, software utilizzati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207201'
			},
			[WorkerType.ACCOUNTANT]: {
				label: {
					[Language.EN]: 'Accountant',
					[Language.FR]: 'Comptable',
					[Language.IT]: 'Contabile',
					[Language.NL]: 'Accountant (NL)'
				},
				detail: {
					[Language.EN]: '- bookkeeping volume, reconciliations, financial controls, etc..',
					[Language.FR]: '- volume de comptabilité, rapprochements, contrôles financiers, etc.',
					[Language.IT]: '- volume di contabilità, riconciliazioni, controlli finanziari, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207202'
			},
			[WorkerType.ART_SALES_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Sales Manager',
					[Language.FR]: 'Chargé·e des ventes',
					[Language.IT]: 'Responsabile vendite',
					[Language.NL]: 'Art Sales Associate (NL)'
				},
				detail: {
					[Language.EN]: '- sales volume, client types, artists represented, etc.',
					[Language.FR]: '- volume des ventes, clients, artistes représentés, etc.',
					[Language.IT]:
						'- volume delle vendite, tipologia di clienti, artisti rappresentati, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207203'
			},
			[WorkerType.GRANTS_MANAGER]: {
				label: {
					[Language.EN]: 'Grants Manager',
					[Language.FR]: 'Chargé·e de mécenat',
					[Language.IT]: 'Responsabile bandi e finanziamenti',
					[Language.NL]: 'Grants Manager (NL)'
				},
				detail: {
					[Language.EN]: '- grants written, awarded amounts, reporting tasks, etc.',
					[Language.FR]: '- subventions rédigées, montants attribués, missions de reporting, etc.',
					[Language.IT]: '— bandi scritti, importi ottenuti, attività di rendicontazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207204'
			},
			[WorkerType.ART_ADVISOR]: {
				label: {
					[Language.EN]: 'Art Advisor',
					[Language.FR]: 'Art advisor',
					[Language.IT]: 'Art advisor',
					[Language.NL]: 'Art Advisor (NL)'
				},
				detail: {
					[Language.EN]: '- client base, collection types, acquisitions recommended, etc.',
					[Language.FR]: '- base de clients, types de collections, acquisitions recommandées, etc.',
					[Language.IT]: '- base clienti, tipologie di collezioni, acquisizioni raccomandate, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207205'
			},
			[WorkerType.STRATEGY_POLICY_OFFICER]: {
				label: {
					[Language.EN]: 'Strategy / Policy Officer',
					[Language.FR]: 'Responsable de la stratégie',
					[Language.IT]: 'Responsabile strategia / policy',
					[Language.NL]: 'Strategy / Policy Officer (NL)'
				},
				detail: {
					[Language.EN]: '- policies developed, research areas, stakeholder coordination, etc.',
					[Language.FR]:
						'- politiques élaborées, axes de recherche, missions de coordination, etc.',
					[Language.IT]: '- policy sviluppate, aree di ricerca, coordinamento stakeholder, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207206'
			},
			[WorkerType.DEVELOPMENT_DIRECTOR]: {
				label: {
					[Language.EN]: 'Development Director',
					[Language.FR]: 'Responsable du développement',
					[Language.IT]: 'Direttorə sviluppo',
					[Language.NL]: 'Development Director (NL)'
				},
				detail: {
					[Language.EN]: '- fundraising goals, target donors, team size, etc.',
					[Language.FR]:
						'- objectifs de collecte de fonds, portefeuille de donateurs, taille de l’équipe, etc.',
					[Language.IT]: '- obiettivi di fundraising, donatori target, dimensione del team, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207207'
			},
			[WorkerType.FUNDRAISING_OFFICER]: {
				label: {
					[Language.EN]: 'Fundraising Officer',
					[Language.FR]: 'Responsable des financements',
					[Language.IT]: 'Responsabile fundraising',
					[Language.NL]: 'Fundraising Officer (NL)'
				},
				detail: {
					[Language.EN]: '- campaigns, donor cultivation, grant success rate, etc.',
					[Language.FR]:
						'- campagnes, fidélisation des donateurs, taux de réussite des subventions, etc.',
					[Language.IT]: '- campagne, coltivazione dei donatori, tasso di successo dei bandi, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207208'
			},
			[WorkerType.SPONSORSHIP_COORDINATOR]: {
				label: {
					[Language.EN]: 'Sponsorship Coordinator',
					[Language.FR]: 'Responsable des partenariats',
					[Language.IT]: 'Coordinatorə sponsorizzazioni',
					[Language.NL]: 'Sponsorship Coordinator (NL)'
				},
				detail: {
					[Language.EN]: '- corporate partners, contracts, sponsorship value, etc.',
					[Language.FR]: '- partenaires, contrats, valeur des partenariats, etc.',
					[Language.IT]: '- partner aziendali, contratti, valore delle sponsorizzazioni, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207209'
			},
			[WorkerType.MEMBERSHIP_PATRON_RELATIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Membership / Patron Relations Manager',
					[Language.FR]: 'Responsable du mécénat',
					[Language.IT]: 'Responsabile relazioni con membri',
					[Language.NL]: 'Membership/Patron Relations Manager (NL)'
				},
				detail: {
					[Language.EN]: '- membership tiers, events, donor communication, etc.',
					[Language.FR]:
						'- objectifs d’adhésion, événements, communication avec les donateurs, etc.',
					[Language.IT]: 'livelli di membership, eventi, comunicazione con i donatori, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207210'
			},
			[WorkerType.LEGAL_ADVISOR]: {
				label: {
					[Language.EN]: 'Legal Advisor',
					[Language.FR]: 'Conseiller·ère juridique',
					[Language.IT]: 'Consulente legale',
					[Language.NL]: 'Legal Advisor (NL)'
				},
				detail: {
					[Language.EN]: '- contract types, compliance issues, legal areas covered, etc.',
					[Language.FR]:
						'- types de contrats, questions de conformité, domaines juridiques couverts, etc.',
					[Language.IT]:
						'- tipologie di contratto, questioni di conformità, aree legali coperte, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207211'
			},
			[WorkerType.ART_LAWYER]: {
				label: {
					[Language.EN]: 'Art Lawyer',
					[Language.FR]: 'Avocat·e spécialisé·e',
					[Language.IT]: 'Avvocatə specializzatə in diritto dell’arte',
					[Language.NL]: 'Art Lawyer (NL)'
				},
				detail: {
					[Language.EN]: '- IP cases, contract negotiations, artist rights advocacy, etc.',
					[Language.FR]:
						'- cas de propriété intellectuelle, négociations contractuelles, défense des droits des artistes, etc.',
					[Language.IT]:
						'- casi di proprietà intellettuale, negoziazione contratti, tutela dei diritti degli artisti, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207212'
			},
			[WorkerType.CONTRACTS_MANAGER]: {
				label: {
					[Language.EN]: 'Contracts Manager',
					[Language.FR]: 'Gestionnaire des contrats',
					[Language.IT]: 'Responsabile contratti',
					[Language.NL]: 'Contracts Manager (NL)'
				},
				detail: {
					[Language.EN]: '- contract volume, types drafted, approval workflows, etc.',
					[Language.FR]:
						'- volume de contrats, missions de rédaction, processus d’approbation, etc.',
					[Language.IT]: '- volume di contratti, tipologie redatte, flussi di approvazione, ecc.',
					[Language.NL]: '(NL) mediums used, new or old works, number of works produced, etc.'
				},
				id: '5207213'
			}
		}
	}
	/*
	[WorkerTypeSubgroup.OTHER]: {
		groupLabel: {
			[Language.EN]: 'Other',
			[Language.FR]: 'Autre',
			[Language.IT]: 'Altro',
			[Language.NL]: 'Other (NL)'
		},
		options: {
			[WorkerType.OTHER]: {
				label: {
					[Language.EN]: 'Other',
					[Language.FR]: 'Autre',
					[Language.IT]: 'Altro',
					[Language.NL]: 'Other (NL)'
				},
				detail: {
					[Language.EN]: '- department title, task types, team size, etc.',
					[Language.FR]: '- nom du département, types de missions, taille de l’équipe, etc',
					[Language.IT]: '- titolo del dipartimento, tipologie di mansioni, dimensione del team, ecc.',
					[Language.NL]: '(NL) department title, task types, team size, etc.'
				},
				id: '5207214'
			}
		}
	}
	*/
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

export const getWorkerTypeSubgroup = (
	workerType: WorkerType | undefined
): WorkerTypeSubgroup | undefined => {
	if (workerType) {
		for (const subgroupKey in workerTypeOptions) {
			const subgroup = workerTypeOptions[subgroupKey as WorkerTypeSubgroup];
			if (workerType in subgroup.options) {
				return subgroupKey as WorkerTypeSubgroup;
			}
		}
	}

	return undefined;
};

export const enum ProjectType {
	GROUP_EXHIBITION = 'GROUP_EXHIBITION',
	SOLO_EXHIBITION = 'SOLO_EXHIBITION',
	FILM_SCREENING = 'FILM_SCREENING',
	PUBLIC_READING = 'PUBLIC_READING',
	CONFERENCE = 'CONFERENCE',
	PUBLIC_TALK = 'PUBLIC_TALK',
	CURATORIAL_TALK = 'CURATORIAL_TALK',
	VISITING_ARTIST_TUTORIAL = 'VISITING_ARTIST_TUTORIAL',
	VISITING_ARTIST_TALK = 'VISITING_ARTIST_TALK',
	LIVE_PERFORMANCE = 'LIVE_PERFORMANCE',
	COMMISSIONED_PERFORMANCE = 'COMMISSIONED_PERFORMANCE',
	COMMISSIONED_WORK = 'COMMISSIONED_WORK',
	REPLICA = 'REPLICA',
	STUDIO_VISIT = 'STUDIO_VISIT',
	CATALOG_TEXT = 'CATALOG_TEXT',
	PRESENTATION_TEXT = 'PRESENTATION_TEXT',
	CRITICAL_REVIEW = 'CRITICAL_REVIEW',
	MONOGRAPHIC_ESSAY = 'MONOGRAPHIC_ESSAY',
	ARTWORK_WALL_TEXT = 'ARTWORK_WALL_TEXT',
	CURATORIAL_TEXT = 'CURATORIAL_TEXT',
	LITERARY_COMMISSION = 'LITERARY_COMMISSION',
	POETRY_COMMISSION = 'POETRY_COMMISSION',
	TEXT_REPRINT = 'TEXT_REPRINT',
	PODCAST_FEATURE = 'PODCAST_FEATURE',
	PODCAST_COMMISSION = 'PODCAST_COMMISSION',
	SKILLS_WORKSHOP = 'SKILLS_WORKSHOP',
	PANEL_DISCUSSION_PARTICIPATION = 'PANEL_DISCUSSION_PARTICIPATION',
	PANEL_DISCUSSION_MODERATION = 'PANEL_DISCUSSION_MODERATION',
	EDITING_PROJECT = 'EDITING_PROJECT',
	CATALOG_TRANSLATION = 'CATALOG_TRANSLATION',
	TEXT_TRANSLATION = 'TEXT_TRANSLATION',
	LITERARY_TRANSLATION = 'LITERARY_TRANSLATION',
	POETRY_TRANSLATION = 'POETRY_TRANSLATION',
	SUBTITLING = 'SUBTITLING',
	COPYWRITING_TASK = 'COPYWRITING_TASK',
	GHOSTWRITING_PROJECT = 'GHOSTWRITING_PROJECT',
	ARCHIVE_BUILD = 'ARCHIVE_BUILD',
	ARCHIVE_RESEARCH = 'ARCHIVE_RESEARCH',
	BIBLIOGRAPHY_BUILD = 'BIBLIOGRAPHY_BUILD',
	CATALOG_RESEARCH = 'CATALOG_RESEARCH',
	COLLECTION_ACCESS = 'COLLECTION_ACCESS',
	METADATA_ENTRY = 'METADATA_ENTRY',
	RESEARCH_ASSISTANCE = 'RESEARCH_ASSISTANCE',
	PUBLIC_TOUR = 'PUBLIC_TOUR',
	GUIDED_VISIT = 'GUIDED_VISIT',
	AUDIENCE_EDUCATION = 'AUDIENCE_EDUCATION',
	CULTURAL_OUTREACH_SESSION = 'CULTURAL_OUTREACH_SESSION',
	OUTREACH_IN_SCHOOLS = 'OUTREACH_IN_SCHOOLS',
	WORKSHOP_DESIGN_AND_FACILITATION = 'WORKSHOP_DESIGN_AND_FACILITATION',
	PERFORMANCE = 'PERFORMANCE',
	EVENT = 'EVENT',
	VIDEO_WORK = 'VIDEO_WORK',
	SCREENING = 'SCREENING',
	PODCAST = 'PODCAST',
	ARCHIVE = 'ARCHIVE',
	DIGITAL_NEW_MEDIA_WORK = 'DIGITAL_NEW_MEDIA_WORK',
	SCULPTURE = 'SCULPTURE',
	PAINTING = 'PAINTING',
	INSTALLATION = 'INSTALLATION',
	TECHNICAL_SETUP = 'TECHNICAL_SETUP',
	PROJECT_COORDINATION = 'PROJECT_COORDINATION',
	SUPPORT_AND_CONSULTING = 'SUPPORT_AND_CONSULTING',
	TOUR_PLANNING = 'TOUR_PLANNING',
	SCHOOL_INTERVENTION = 'SCHOOL_INTERVENTION',
	CONFERENCE_MODERATION = 'CONFERENCE_MODERATION',
	EDUCATIONAL_RESOURCE_WRITING = 'EDUCATIONAL_RESOURCE_WRITING',
	MEDIATION_TEXT = 'MEDIATION_TEXT',
	DEVELOPMENT_OF_MEDIATION_TOOLS = 'DEVELOPMENT_OF_MEDIATION_TOOLS',
	OUTREACH_PROJECT_PLANNING = 'OUTREACH_PROJECT_PLANNING',
	RECEPTION_AND_SUPPORT_FOR_GROUP_VISITS = 'RECEPTION_AND_SUPPORT_FOR_GROUP_VISITS',
	MEDIATOR_PEER_TRAINING = 'MEDIATOR_PEER_TRAINING',
	EDUCATIONAL_COORDINATION = 'EDUCATIONAL_COORDINATION',
	COMMUNITY_WORKSHOP = 'COMMUNITY_WORKSHOP',
	VISITOR_SUPPORT = 'VISITOR_SUPPORT',
	FRONT_OF_HOUSE = 'FRONT_OF_HOUSE',
	TICKETING_SERVICE = 'TICKETING_SERVICE',
	HOSTING_DUTIES = 'HOSTING_DUTIES',
	ARCHIVE_RETRIEVAL = 'ARCHIVE_RETRIEVAL',
	EXHIBITION_PRODUCTION = 'EXHIBITION_PRODUCTION',
	EVENT_PRODUCTION = 'EVENT_PRODUCTION',
	RESIDENCY_COORDINATION = 'RESIDENCY_COORDINATION',
	PROGRAMME_COORDINATION = 'PROGRAMME_COORDINATION',
	COLLECTION_MANAGEMENT = 'COLLECTION_MANAGEMENT',
	ARTIST_LIAISON = 'ARTIST_LIAISON',
	BUDGET_MANAGEMENT = 'BUDGET_MANAGEMENT',
	GRANT_WRITING = 'GRANT_WRITING',
	PARTNERSHIP_DEVELOPMENT = 'PARTNERSHIP_DEVELOPMENT',
	VENDOR_MANAGEMENT = 'VENDOR_MANAGEMENT',
	TEAM_MANAGEMENT = 'TEAM_MANAGEMENT',
	HR_AND_RECRUITMENT = 'HR_AND_RECRUITMENT',
	SCHEDULING_AND_PLANNING = 'SCHEDULING_AND_PLANNING',
	REPORTING = 'REPORTING',
	CONTRACT_DRAFTING = 'CONTRACT_DRAFTING',
	STRATEGIC_PLANNING = 'STRATEGIC_PLANNING',
	ADMINISTRATIVE_SUPPORT = 'ADMINISTRATIVE_SUPPORT',
	ARTISTIC_SUPPORT = 'ARTISTIC_SUPPORT',
	PUBLICATION = 'PUBLICATION',
	PHOTO_DOCUMENTATION = 'PHOTO_DOCUMENTATION',
	VIDEO_CAPTURE = 'VIDEO_CAPTURE',
	CONTENT_CREATION = 'CONTENT_CREATION',
	SOCIAL_STRATEGY = 'SOCIAL_STRATEGY',
	DIGITAL_MANAGEMENT = 'DIGITAL_MANAGEMENT',
	PRESS_OUTREACH = 'PRESS_OUTREACH',
	MARKETING_CAMPAIGN = 'MARKETING_CAMPAIGN',
	AUDIENCE_STRATEGY = 'AUDIENCE_STRATEGY',
	COMMUNITY_STRATEGY = 'COMMUNITY_STRATEGY',
	EXHIBITION = 'EXHIBITION',
	DIGITAL_MIGRATION = 'DIGITAL_MIGRATION',
	ARCHIVE_DIGITISATION = 'ARCHIVE_DIGITISATION',
	SYSTEM_DEPLOYMENT = 'SYSTEM_DEPLOYMENT',
	BUILDING_MAINTENANCE = 'BUILDING_MAINTENANCE',
	SECURITY_OPERATIONS = 'SECURITY_OPERATIONS',
	FACILITIES_MANAGEMENT = 'FACILITIES_MANAGEMENT',
	IT_SUPPORT = 'IT_SUPPORT',
	SYSTEMS_ADMINISTRATION = 'SYSTEMS_ADMINISTRATION',
	NETWORK_MANAGEMENT = 'NETWORK_MANAGEMENT',
	HARDWARE_INSTALLATION = 'HARDWARE_INSTALLATION',
	SOFTWARE_DEPLOYMENT = 'SOFTWARE_DEPLOYMENT',
	DATABASE_MANAGEMENT = 'DATABASE_MANAGEMENT',
	DATA_ENTRY_AND_CATALOGUING = 'DATA_ENTRY_AND_CATALOGUING',
	COLLECTION_DIGITISATION = 'COLLECTION_DIGITISATION',
	USER_TRAINING = 'USER_TRAINING',
	TECHNICAL_SUPPORT = 'TECHNICAL_SUPPORT',
	FINANCIAL_REPORTING = 'FINANCIAL_REPORTING',
	BUDGETING = 'BUDGETING',
	INVOICE_MANAGEMENT = 'INVOICE_MANAGEMENT',
	TAX_ADVISORY = 'TAX_ADVISORY',
	LEGAL_ADVISORY = 'LEGAL_ADVISORY',
	STRATEGIC_ADVISORY = 'STRATEGIC_ADVISORY',
	INTELLECTUAL_PROPERTY = 'INTELLECTUAL_PROPERTY',
	INSURANCE_AND_RISK = 'INSURANCE_AND_RISK'
}

export const projectTypeOptions = {
	[ProjectType.GROUP_EXHIBITION]: {
		[Language.EN]: 'Group Exhibition',
		[Language.FR]: 'Exposition collective',
		[Language.IT]: 'Group Exhibition in italian',
		[Language.NL]: 'Group Exhibition (NL)'
	},
	[ProjectType.SOLO_EXHIBITION]: {
		[Language.EN]: 'Solo Exhibition',
		[Language.FR]: 'Exposition personnelle',
		[Language.IT]: 'Solo Exhibition in italian',
		[Language.NL]: 'Solo Exhibition (NL)'
	},
	[ProjectType.FILM_SCREENING]: {
		[Language.EN]: 'Film Screening',
		[Language.FR]: 'Projection de film',
		[Language.IT]: 'Film Screening in italian',
		[Language.NL]: 'Film Screening (NL)'
	},
	[ProjectType.PUBLIC_READING]: {
		[Language.EN]: 'Public Reading',
		[Language.FR]: 'Lecture publique',
		[Language.IT]: 'Public Reading in italian',
		[Language.NL]: 'Public Reading (NL)'
	},
	[ProjectType.CONFERENCE]: {
		[Language.EN]: 'Conference',
		[Language.FR]: 'Conférence',
		[Language.IT]: 'Conference in italian',
		[Language.NL]: 'Conference (NL)'
	},
	[ProjectType.PUBLIC_TALK]: {
		[Language.EN]: 'Public Talk',
		[Language.FR]: 'Conférence publique',
		[Language.IT]: 'Public Talk in italian',
		[Language.NL]: 'Public Talk (NL)'
	},
	[ProjectType.CURATORIAL_TALK]: {
		[Language.EN]: 'Curatorial Talk',
		[Language.FR]: 'Conférence curatoriale',
		[Language.IT]: 'Curatorial Talk in italian',
		[Language.NL]: 'Curatorial Talk (NL)'
	},
	[ProjectType.VISITING_ARTIST_TUTORIAL]: {
		[Language.EN]: 'Visiting Artist Tutorial',
		[Language.FR]: 'Atelier avec un·e artiste invité·e',
		[Language.IT]: 'Visiting Artist Tutorial in italian',
		[Language.NL]: 'Visiting Artist Tutorial (NL)'
	},
	[ProjectType.VISITING_ARTIST_TALK]: {
		[Language.EN]: 'Visiting Artist Talk',
		[Language.FR]: 'Conférence avec un·e artiste invité·e',
		[Language.IT]: 'Visiting Artist Talk in italian',
		[Language.NL]: 'Visiting Artist Talk (NL)'
	},
	[ProjectType.LIVE_PERFORMANCE]: {
		[Language.EN]: 'Live Performance',
		[Language.FR]: 'Performance en direct',
		[Language.IT]: 'Live Performance in italian',
		[Language.NL]: 'Live Performance (NL)'
	},
	[ProjectType.COMMISSIONED_PERFORMANCE]: {
		[Language.EN]: 'Commissioned Performance',
		[Language.FR]: 'Performance commandée',
		[Language.IT]: 'Commissioned Performance in italian',
		[Language.NL]: 'Commissioned Performance (NL)'
	},
	[ProjectType.COMMISSIONED_WORK]: {
		[Language.EN]: 'Commissioned Work',
		[Language.FR]: 'Œuvre commandée',
		[Language.IT]: 'Commissioned Work in italian',
		[Language.NL]: 'Commissioned Work (NL)'
	},
	[ProjectType.REPLICA]: {
		[Language.EN]: 'Replica',
		[Language.FR]: 'Réplique',
		[Language.IT]: 'Replica in italian',
		[Language.NL]: 'Replica (NL)'
	},
	[ProjectType.STUDIO_VISIT]: {
		[Language.EN]: 'Studio Visit',
		[Language.FR]: "Visite d'atelier",
		[Language.IT]: 'Studio Visit in italian',
		[Language.NL]: 'Studio Visit (NL)'
	},
	[ProjectType.CATALOG_TEXT]: {
		[Language.EN]: 'Catalog Text',
		[Language.FR]: 'Texte de catalogue',
		[Language.IT]: 'Catalog Text in italian',
		[Language.NL]: 'Catalog Text (NL)'
	},
	[ProjectType.PRESENTATION_TEXT]: {
		[Language.EN]: 'Presentation Text',
		[Language.FR]: 'Texte de présentation',
		[Language.IT]: 'Presentation Text in italian',
		[Language.NL]: 'Presentation Text (NL)'
	},
	[ProjectType.CRITICAL_REVIEW]: {
		[Language.EN]: 'Critical Review',
		[Language.FR]: 'Critique',
		[Language.IT]: 'Critical Review in italian',
		[Language.NL]: 'Critical Review (NL)'
	},
	[ProjectType.MONOGRAPHIC_ESSAY]: {
		[Language.EN]: 'Monographic Essay',
		[Language.FR]: 'Essai monographique',
		[Language.IT]: 'Monographic Essay in italian',
		[Language.NL]: 'Monographic Essay (NL)'
	},
	[ProjectType.ARTWORK_WALL_TEXT]: {
		[Language.EN]: 'Artwork Wall Text',
		[Language.FR]: "Texte de présentation de l'œuvre",
		[Language.IT]: 'Artwork Wall Text in italian',
		[Language.NL]: 'Artwork Wall Text (NL)'
	},
	[ProjectType.CURATORIAL_TEXT]: {
		[Language.EN]: 'Curatorial Text',
		[Language.FR]: 'Texte curatoriale',
		[Language.IT]: 'Curatorial Text in italian',
		[Language.NL]: 'Curatorial Text (NL)'
	},
	[ProjectType.LITERARY_COMMISSION]: {
		[Language.EN]: 'Literary Commission',
		[Language.FR]: 'Commande littéraire',
		[Language.IT]: 'Literary Commission in italian',
		[Language.NL]: 'Literary Commission (NL)'
	},
	[ProjectType.POETRY_COMMISSION]: {
		[Language.EN]: 'Poetry Commission',
		[Language.FR]: 'Commande de poésie',
		[Language.IT]: 'Poetry Commission in italian',
		[Language.NL]: 'Poetry Commission (NL)'
	},
	[ProjectType.TEXT_REPRINT]: {
		[Language.EN]: 'Text Reprint',
		[Language.FR]: 'Réimpression de texte',
		[Language.IT]: 'Text Reprint in italian',
		[Language.NL]: 'Text Reprint (NL)'
	},
	[ProjectType.PODCAST_FEATURE]: {
		[Language.EN]: 'Podcast Feature',
		[Language.FR]: 'Podcast en vedette',
		[Language.IT]: 'Podcast Feature in italian',
		[Language.NL]: 'Podcast Feature (NL)'
	},
	[ProjectType.PODCAST_COMMISSION]: {
		[Language.EN]: 'Podcast Commission',
		[Language.FR]: 'Commande de podcast',
		[Language.IT]: 'Podcast Commission in italian',
		[Language.NL]: 'Podcast Commission (NL)'
	},
	[ProjectType.SKILLS_WORKSHOP]: {
		[Language.EN]: 'Skills Workshop',
		[Language.FR]: 'Atelier de compétences',
		[Language.IT]: 'Skills Workshop in italian',
		[Language.NL]: 'Skills Workshop (NL)'
	},
	[ProjectType.PANEL_DISCUSSION_PARTICIPATION]: {
		[Language.EN]: 'Panel Discussion Participation',
		[Language.FR]: 'Participation à une table ronde',
		[Language.IT]: 'Panel Discussion Participation in italian',
		[Language.NL]: 'Panel Discussion Participation (NL)'
	},
	[ProjectType.PANEL_DISCUSSION_MODERATION]: {
		[Language.EN]: 'Panel Discussion Moderation',
		[Language.FR]: "Modération d'une table ronde",
		[Language.IT]: 'Panel Discussion Moderation in italian',
		[Language.NL]: 'Panel Discussion Moderation (NL)'
	},
	[ProjectType.EDITING_PROJECT]: {
		[Language.EN]: 'Editing Project',
		[Language.FR]: "Projet d'édition",
		[Language.IT]: 'Editing Project in italian',
		[Language.NL]: 'Editing Project (NL)'
	},
	[ProjectType.CATALOG_TRANSLATION]: {
		[Language.EN]: 'Catalog Translation',
		[Language.FR]: 'Traduction de catalogue',
		[Language.IT]: 'Catalog Translation in italian',
		[Language.NL]: 'Catalog Translation (NL)'
	},
	[ProjectType.TEXT_TRANSLATION]: {
		[Language.EN]: 'Text Translation',
		[Language.FR]: 'Traduction de texte',
		[Language.IT]: 'Text Translation in italian',
		[Language.NL]: 'Text Translation (NL)'
	},
	[ProjectType.LITERARY_TRANSLATION]: {
		[Language.EN]: 'Literary Translation',
		[Language.FR]: 'Traduction littéraire',
		[Language.IT]: 'Literary Translation in italian',
		[Language.NL]: 'Literary Translation (NL)'
	},
	[ProjectType.POETRY_TRANSLATION]: {
		[Language.EN]: 'Poetry Translation',
		[Language.FR]: 'Traduction de poésie',
		[Language.IT]: 'Poetry Translation in italian',
		[Language.NL]: 'Poetry Translation (NL)'
	},
	[ProjectType.SUBTITLING]: {
		[Language.EN]: 'Subtitling',
		[Language.FR]: 'Sous-titrage',
		[Language.IT]: 'Subtitling in italian',
		[Language.NL]: 'Subtitling (NL)'
	},
	[ProjectType.COPYWRITING_TASK]: {
		[Language.EN]: 'Copywriting Task',
		[Language.FR]: 'Tâche de rédaction',
		[Language.IT]: 'Copywriting Task in italian',
		[Language.NL]: 'Copywriting Task (NL)'
	},
	[ProjectType.GHOSTWRITING_PROJECT]: {
		[Language.EN]: 'Ghostwriting Project',
		[Language.FR]: 'Projet de rédaction fantôme',
		[Language.IT]: 'Ghostwriting Project in italian',
		[Language.NL]: 'Ghostwriting Project (NL)'
	},
	[ProjectType.ARCHIVE_BUILD]: {
		[Language.EN]: 'Archive Build',
		[Language.FR]: "Construction d'archive",
		[Language.IT]: 'Archive Build in italian',
		[Language.NL]: 'Archive Build (NL)'
	},
	[ProjectType.ARCHIVE_RESEARCH]: {
		[Language.EN]: 'Archive Research',
		[Language.FR]: "Recherche d'archive",
		[Language.IT]: 'Archive Research in italian',
		[Language.NL]: 'Archive Research (NL)'
	},
	[ProjectType.BIBLIOGRAPHY_BUILD]: {
		[Language.EN]: 'Bibliography Build',
		[Language.FR]: 'Construction de bibliographie',
		[Language.IT]: 'Bibliography Build in italian',
		[Language.NL]: 'Bibliography Build (NL)'
	},
	[ProjectType.CATALOG_RESEARCH]: {
		[Language.EN]: 'Catalog Research',
		[Language.FR]: 'Recherche de catalogue',
		[Language.IT]: 'Catalog Research in italian',
		[Language.NL]: 'Catalog Research (NL)'
	},
	[ProjectType.COLLECTION_ACCESS]: {
		[Language.EN]: 'Collection Access',
		[Language.FR]: 'Accès à la collection',
		[Language.IT]: 'Collection Access in italian',
		[Language.NL]: 'Collection Access (NL)'
	},
	[ProjectType.METADATA_ENTRY]: {
		[Language.EN]: 'Metadata Entry',
		[Language.FR]: 'Saisie de métadonnées',
		[Language.IT]: 'Metadata Entry in italian',
		[Language.NL]: 'Metadata Entry (NL)'
	},
	[ProjectType.RESEARCH_ASSISTANCE]: {
		[Language.EN]: 'Research Assistance',
		[Language.FR]: 'Assistance à la recherche',
		[Language.IT]: 'Research Assistance in italian',
		[Language.NL]: 'Research Assistance (NL)'
	},
	[ProjectType.PUBLIC_TOUR]: {
		[Language.EN]: 'Public Tour',
		[Language.FR]: 'Visite guidée publique',
		[Language.IT]: 'Public Tour in italian',
		[Language.NL]: 'Public Tour (NL)'
	},
	[ProjectType.GUIDED_VISIT]: {
		[Language.EN]: 'Guided Visit',
		[Language.FR]: 'Visite guidée',
		[Language.IT]: 'Guided Visit in italian',
		[Language.NL]: 'Guided Visit (NL)'
	},
	[ProjectType.AUDIENCE_EDUCATION]: {
		[Language.EN]: 'Audience Education',
		[Language.FR]: 'Éducation du public',
		[Language.IT]: 'Audience Education in italian',
		[Language.NL]: 'Audience Education (NL)'
	},
	[ProjectType.CULTURAL_OUTREACH_SESSION]: {
		[Language.EN]: 'Cultural Outreach Session',
		[Language.FR]: 'Session de sensibilisation culturelle',
		[Language.IT]: 'Cultural Outreach Session in italian',
		[Language.NL]: 'Cultural Outreach Session (NL)'
	},
	[ProjectType.OUTREACH_IN_SCHOOLS]: {
		[Language.EN]: 'Outreach in Schools',
		[Language.FR]: 'Sensibilisation dans les écoles',
		[Language.IT]: 'Outreach in Schools in italian',
		[Language.NL]: 'Outreach in Schools (NL)'
	},
	[ProjectType.WORKSHOP_DESIGN_AND_FACILITATION]: {
		[Language.EN]: 'Workshop Design and Facilitation',
		[Language.FR]: "Conception et facilitation d'ateliers",
		[Language.IT]: 'Workshop Design and Facilitation in italian',
		[Language.NL]: 'Workshop Design and Facilitation (NL)'
	},
	[ProjectType.PERFORMANCE]: {
		[Language.EN]: 'Performance',
		[Language.FR]: 'Performance',
		[Language.IT]: 'Performance in italian',
		[Language.NL]: 'Performance (NL)'
	},
	[ProjectType.EVENT]: {
		[Language.EN]: 'Event',
		[Language.FR]: 'Événement',
		[Language.IT]: 'Event in italian',
		[Language.NL]: 'Event (NL)'
	},
	[ProjectType.VIDEO_WORK]: {
		[Language.EN]: 'Video Work',
		[Language.FR]: 'Œuvre vidéo',
		[Language.IT]: 'Video Work in italian',
		[Language.NL]: 'Video Work (NL)'
	},
	[ProjectType.SCREENING]: {
		[Language.EN]: 'Screening',
		[Language.FR]: 'Projection',
		[Language.IT]: 'Screening in italian',
		[Language.NL]: 'Screening (NL)'
	},
	[ProjectType.PODCAST]: {
		[Language.EN]: 'Podcast',
		[Language.FR]: 'Podcast',
		[Language.IT]: 'Podcast in italian',
		[Language.NL]: 'Podcast (NL)'
	},
	[ProjectType.ARCHIVE]: {
		[Language.EN]: 'Archive',
		[Language.FR]: 'Archive',
		[Language.IT]: 'Archive in italian',
		[Language.NL]: 'Archive (NL)'
	},
	[ProjectType.DIGITAL_NEW_MEDIA_WORK]: {
		[Language.EN]: 'Digital/New Media Work',
		[Language.FR]: 'Œuvre numérique/nouveaux médias',
		[Language.IT]: 'Digital/New Media Work in italian',
		[Language.NL]: 'Digital/New Media Work (NL)'
	},
	[ProjectType.SCULPTURE]: {
		[Language.EN]: 'Sculpture',
		[Language.FR]: 'Sculpture',
		[Language.IT]: 'Sculpture in italian',
		[Language.NL]: 'Sculpture (NL)'
	},
	[ProjectType.PAINTING]: {
		[Language.EN]: 'Painting',
		[Language.FR]: 'Peinture',
		[Language.IT]: 'Painting in italian',
		[Language.NL]: 'Painting (NL)'
	},
	[ProjectType.INSTALLATION]: {
		[Language.EN]: 'Installation',
		[Language.FR]: 'Installation',
		[Language.IT]: 'Installation in italian',
		[Language.NL]: 'Installation (NL)'
	},
	[ProjectType.TECHNICAL_SETUP]: {
		[Language.EN]: 'Technical Setup',
		[Language.FR]: 'Installation technique',
		[Language.IT]: 'Technical Setup in italian',
		[Language.NL]: 'Technical Setup (NL)'
	},
	[ProjectType.PROJECT_COORDINATION]: {
		[Language.EN]: 'Project Coordination',
		[Language.FR]: 'Coordination de projet',
		[Language.IT]: 'Project Coordination in italian',
		[Language.NL]: 'Project Coordination (NL)'
	},
	[ProjectType.SUPPORT_AND_CONSULTING]: {
		[Language.EN]: 'Support and Consulting',
		[Language.FR]: 'Soutien et conseil',
		[Language.IT]: 'Support and Consulting in italian',
		[Language.NL]: 'Support and Consulting (NL)'
	},
	[ProjectType.TOUR_PLANNING]: {
		[Language.EN]: 'Tour Planning',
		[Language.FR]: 'Planification de tournée',
		[Language.IT]: 'Tour Planning in italian',
		[Language.NL]: 'Tour Planning (NL)'
	},
	[ProjectType.SCHOOL_INTERVENTION]: {
		[Language.EN]: 'School Intervention',
		[Language.FR]: 'Intervention scolaire',
		[Language.IT]: 'School Intervention in italian',
		[Language.NL]: 'School Intervention (NL)'
	},
	[ProjectType.CONFERENCE_MODERATION]: {
		[Language.EN]: 'Conference Moderation',
		[Language.FR]: 'Modération de conférence',
		[Language.IT]: 'Conference Moderation in italian',
		[Language.NL]: 'Conference Moderation (NL)'
	},
	[ProjectType.EDUCATIONAL_RESOURCE_WRITING]: {
		[Language.EN]: 'Educational Resource Writing',
		[Language.FR]: 'Rédaction de ressources éducatives',
		[Language.IT]: 'Educational Resource Writing in italian',
		[Language.NL]: 'Educational Resource Writing (NL)'
	},
	[ProjectType.MEDIATION_TEXT]: {
		[Language.EN]: 'Mediation Text',
		[Language.FR]: 'Texte de médiation',
		[Language.IT]: 'Mediation Text in italian',
		[Language.NL]: 'Mediation Text (NL)'
	},
	[ProjectType.DEVELOPMENT_OF_MEDIATION_TOOLS]: {
		[Language.EN]: 'Development of Mediation Tools',
		[Language.FR]: "Développement d'outils de médiation",
		[Language.IT]: 'Development of Mediation Tools in italian',
		[Language.NL]: 'Development of Mediation Tools (NL)'
	},
	[ProjectType.OUTREACH_PROJECT_PLANNING]: {
		[Language.EN]: 'Outreach Project Planning',
		[Language.FR]: 'Planification de projet de sensibilisation',
		[Language.IT]: 'Outreach Project Planning in italian',
		[Language.NL]: 'Outreach Project Planning (NL)'
	},
	[ProjectType.RECEPTION_AND_SUPPORT_FOR_GROUP_VISITS]: {
		[Language.EN]: 'Reception and Support for Group Visits',
		[Language.FR]: 'Accueil et soutien pour les visites de groupe',
		[Language.IT]: 'Reception and Support for Group Visits in italian',
		[Language.NL]: 'Reception and Support for Group Visits (NL)'
	},
	[ProjectType.MEDIATOR_PEER_TRAINING]: {
		[Language.EN]: 'Mediator Peer Training',
		[Language.FR]: 'Formation de pairs médiateurs',
		[Language.IT]: 'Mediator Peer Training in italian',
		[Language.NL]: 'Mediator Peer Training (NL)'
	},
	[ProjectType.EDUCATIONAL_COORDINATION]: {
		[Language.EN]: 'Educational Coordination',
		[Language.FR]: 'Coordination éducative',
		[Language.IT]: 'Educational Coordination in italian',
		[Language.NL]: 'Educational Coordination (NL)'
	},
	[ProjectType.COMMUNITY_WORKSHOP]: {
		[Language.EN]: 'Community Workshop',
		[Language.FR]: 'Atelier communautaire',
		[Language.IT]: 'Community Workshop in italian',
		[Language.NL]: 'Community Workshop (NL)'
	},
	[ProjectType.VISITOR_SUPPORT]: {
		[Language.EN]: 'Visitor Support',
		[Language.FR]: 'Soutien aux visiteurs',
		[Language.IT]: 'Visitor Support in italian',
		[Language.NL]: 'Visitor Support (NL)'
	},
	[ProjectType.FRONT_OF_HOUSE]: {
		[Language.EN]: 'Front of House',
		[Language.FR]: 'Accueil',
		[Language.IT]: 'Front of House in italian',
		[Language.NL]: 'Front of House (NL)'
	},
	[ProjectType.TICKETING_SERVICE]: {
		[Language.EN]: 'Ticketing Service',
		[Language.FR]: 'Service de billetterie',
		[Language.IT]: 'Ticketing Service in italian',
		[Language.NL]: 'Ticketing Service (NL)'
	},
	[ProjectType.HOSTING_DUTIES]: {
		[Language.EN]: 'Hosting Duties',
		[Language.FR]: "Tâches d'accueil",
		[Language.IT]: 'Hosting Duties in italian',
		[Language.NL]: 'Hosting Duties (NL)'
	},
	[ProjectType.ARCHIVE_RETRIEVAL]: {
		[Language.EN]: 'Archive Retrieval',
		[Language.FR]: "Récupération d'archives",
		[Language.IT]: 'Archive Retrieval in italian',
		[Language.NL]: 'Archive Retrieval (NL)'
	},
	[ProjectType.EXHIBITION_PRODUCTION]: {
		[Language.EN]: 'Exhibition Production',
		[Language.FR]: "Production d'exposition",
		[Language.IT]: 'Exhibition Production in italian',
		[Language.NL]: 'Exhibition Production (NL)'
	},
	[ProjectType.EVENT_PRODUCTION]: {
		[Language.EN]: 'Event Production',
		[Language.FR]: "Production d'événement",
		[Language.IT]: 'Event Production in italian',
		[Language.NL]: 'Event Production (NL)'
	},
	[ProjectType.RESIDENCY_COORDINATION]: {
		[Language.EN]: 'Residency Coordination',
		[Language.FR]: 'Coordination de résidence',
		[Language.IT]: 'Residency Coordination in italian',
		[Language.NL]: 'Residency Coordination (NL)'
	},
	[ProjectType.PROGRAMME_COORDINATION]: {
		[Language.EN]: 'Programme Coordination',
		[Language.FR]: 'Coordination de programme',
		[Language.IT]: 'Programme Coordination in italian',
		[Language.NL]: 'Programme Coordination (NL)'
	},
	[ProjectType.COLLECTION_MANAGEMENT]: {
		[Language.EN]: 'Collection Management',
		[Language.FR]: 'Gestion de collection',
		[Language.IT]: 'Collection Management in italian',
		[Language.NL]: 'Collection Management (NL)'
	},
	[ProjectType.ARTIST_LIAISON]: {
		[Language.EN]: 'Artist Liaison',
		[Language.FR]: 'Liaison avec les artistes',
		[Language.IT]: 'Artist Liaison in italian',
		[Language.NL]: 'Artist Liaison (NL)'
	},
	[ProjectType.BUDGET_MANAGEMENT]: {
		[Language.EN]: 'Budget Management',
		[Language.FR]: 'Gestion budgétaire',
		[Language.IT]: 'Budget Management in italian',
		[Language.NL]: 'Budget Management (NL)'
	},
	[ProjectType.GRANT_WRITING]: {
		[Language.EN]: 'Grant Writing',
		[Language.FR]: 'Rédaction de subventions',
		[Language.IT]: 'Grant Writing in italian',
		[Language.NL]: 'Grant Writing (NL)'
	},
	[ProjectType.PARTNERSHIP_DEVELOPMENT]: {
		[Language.EN]: 'Partnership Development',
		[Language.FR]: 'Développement de partenariats',
		[Language.IT]: 'Partnership Development in italian',
		[Language.NL]: 'Partnership Development (NL)'
	},
	[ProjectType.VENDOR_MANAGEMENT]: {
		[Language.EN]: 'Vendor Management',
		[Language.FR]: 'Gestion des fournisseurs',
		[Language.IT]: 'Vendor Management in italian',
		[Language.NL]: 'Vendor Management (NL)'
	},
	[ProjectType.TEAM_MANAGEMENT]: {
		[Language.EN]: 'Team Management',
		[Language.FR]: "Gestion d'équipe",
		[Language.IT]: 'Team Management in italian',
		[Language.NL]: 'Team Management (NL)'
	},
	[ProjectType.HR_AND_RECRUITMENT]: {
		[Language.EN]: 'HR and Recruitment',
		[Language.FR]: 'Ressources humaines et recrutement',
		[Language.IT]: 'HR and Recruitment in italian',
		[Language.NL]: 'HR and Recruitment (NL)'
	},
	[ProjectType.SCHEDULING_AND_PLANNING]: {
		[Language.EN]: 'Scheduling and Planning',
		[Language.FR]: 'Planification et organisation',
		[Language.IT]: 'Scheduling and Planning in italian',
		[Language.NL]: 'Scheduling and Planning (NL)'
	},
	[ProjectType.REPORTING]: {
		[Language.EN]: 'Reporting',
		[Language.FR]: 'Rapports',
		[Language.IT]: 'Reporting in italian',
		[Language.NL]: 'Reporting (NL)'
	},
	[ProjectType.CONTRACT_DRAFTING]: {
		[Language.EN]: 'Contract Drafting',
		[Language.FR]: 'Rédaction de contrats',
		[Language.IT]: 'Contract Drafting in italian',
		[Language.NL]: 'Contract Drafting (NL)'
	},
	[ProjectType.STRATEGIC_PLANNING]: {
		[Language.EN]: 'Strategic Planning',
		[Language.FR]: 'Planification stratégique',
		[Language.IT]: 'Strategic Planning in italian',
		[Language.NL]: 'Strategic Planning (NL)'
	},
	[ProjectType.ADMINISTRATIVE_SUPPORT]: {
		[Language.EN]: 'Administrative Support',
		[Language.FR]: 'Soutien administratif',
		[Language.IT]: 'Administrative Support in italian',
		[Language.NL]: 'Administrative Support (NL)'
	},
	[ProjectType.ARTISTIC_SUPPORT]: {
		[Language.EN]: 'Artistic Support',
		[Language.FR]: 'Soutien artistique',
		[Language.IT]: 'Artistic Support in italian',
		[Language.NL]: 'Artistic Support (NL)'
	},
	[ProjectType.PUBLICATION]: {
		[Language.EN]: 'Publication',
		[Language.FR]: 'Publication',
		[Language.IT]: 'Publication in italian',
		[Language.NL]: 'Publication (NL)'
	},
	[ProjectType.PHOTO_DOCUMENTATION]: {
		[Language.EN]: 'Photo Documentation',
		[Language.FR]: 'Documentation photographique',
		[Language.IT]: 'Photo Documentation in italian',
		[Language.NL]: 'Photo Documentation (NL)'
	},
	[ProjectType.VIDEO_CAPTURE]: {
		[Language.EN]: 'Video Capture',
		[Language.FR]: 'Captation vidéo',
		[Language.IT]: 'Video Capture in italian',
		[Language.NL]: 'Video Capture (NL)'
	},
	[ProjectType.CONTENT_CREATION]: {
		[Language.EN]: 'Content Creation',
		[Language.FR]: 'Création de contenu',
		[Language.IT]: 'Content Creation in italian',
		[Language.NL]: 'Content Creation (NL)'
	},
	[ProjectType.SOCIAL_STRATEGY]: {
		[Language.EN]: 'Social Strategy',
		[Language.FR]: 'Stratégie sociale',
		[Language.IT]: 'Social Strategy in italian',
		[Language.NL]: 'Social Strategy (NL)'
	},
	[ProjectType.DIGITAL_MANAGEMENT]: {
		[Language.EN]: 'Digital Management',
		[Language.FR]: 'Gestion numérique',
		[Language.IT]: 'Digital Management in italian',
		[Language.NL]: 'Digital Management (NL)'
	},
	[ProjectType.PRESS_OUTREACH]: {
		[Language.EN]: 'Press Outreach',
		[Language.FR]: 'Sensibilisation de la presse',
		[Language.IT]: 'Press Outreach in italian',
		[Language.NL]: 'Press Outreach (NL)'
	},
	[ProjectType.MARKETING_CAMPAIGN]: {
		[Language.EN]: 'Marketing Campaign',
		[Language.FR]: 'Campagne de marketing',
		[Language.IT]: 'Marketing Campaign in italian',
		[Language.NL]: 'Marketing Campaign (NL)'
	},
	[ProjectType.AUDIENCE_STRATEGY]: {
		[Language.EN]: 'Audience Strategy',
		[Language.FR]: "Stratégie d'audience",
		[Language.IT]: 'Audience Strategy in italian',
		[Language.NL]: 'Audience Strategy (NL)'
	},
	[ProjectType.COMMUNITY_STRATEGY]: {
		[Language.EN]: 'Community Strategy',
		[Language.FR]: 'Stratégie communautaire',
		[Language.IT]: 'Community Strategy in italian',
		[Language.NL]: 'Community Strategy (NL)'
	},
	[ProjectType.EXHIBITION]: {
		[Language.EN]: 'Exhibition',
		[Language.FR]: 'Exposition',
		[Language.IT]: 'Exhibition in italian',
		[Language.NL]: 'Exhibition (NL)'
	},
	[ProjectType.DIGITAL_MIGRATION]: {
		[Language.EN]: 'Digital Migration',
		[Language.FR]: 'Migration numérique',
		[Language.IT]: 'Digital Migration in italian',
		[Language.NL]: 'Digital Migration (NL)'
	},
	[ProjectType.ARCHIVE_DIGITISATION]: {
		[Language.EN]: 'Archive Digitisation',
		[Language.FR]: "Numérisation d'archives",
		[Language.IT]: 'Archive Digitisation in italian',
		[Language.NL]: 'Archive Digitisation (NL)'
	},
	[ProjectType.SYSTEM_DEPLOYMENT]: {
		[Language.EN]: 'System Deployment',
		[Language.FR]: 'Déploiement de système',
		[Language.IT]: 'System Deployment in italian',
		[Language.NL]: 'System Deployment (NL)'
	},
	[ProjectType.BUILDING_MAINTENANCE]: {
		[Language.EN]: 'Building Maintenance',
		[Language.FR]: 'Maintenance du bâtiment',
		[Language.IT]: 'Building Maintenance in italian',
		[Language.NL]: 'Building Maintenance (NL)'
	},
	[ProjectType.SECURITY_OPERATIONS]: {
		[Language.EN]: 'Security Operations',
		[Language.FR]: 'Opérations de sécurité',
		[Language.IT]: 'Security Operations in italian',
		[Language.NL]: 'Security Operations (NL)'
	},
	[ProjectType.FACILITIES_MANAGEMENT]: {
		[Language.EN]: 'Facilities Management',
		[Language.FR]: 'Gestion des installations',
		[Language.IT]: 'Facilities Management in italian',
		[Language.NL]: 'Facilities Management (NL)'
	},
	[ProjectType.IT_SUPPORT]: {
		[Language.EN]: 'IT Support',
		[Language.FR]: 'Support informatique',
		[Language.IT]: 'IT Support in italian',
		[Language.NL]: 'IT Support (NL)'
	},
	[ProjectType.SYSTEMS_ADMINISTRATION]: {
		[Language.EN]: 'Systems Administration',
		[Language.FR]: 'Administration des systèmes',
		[Language.IT]: 'Systems Administration in italian',
		[Language.NL]: 'Systems Administration (NL)'
	},
	[ProjectType.NETWORK_MANAGEMENT]: {
		[Language.EN]: 'Network Management',
		[Language.FR]: 'Gestion de réseau',
		[Language.IT]: 'Network Management in italian',
		[Language.NL]: 'Network Management (NL)'
	},
	[ProjectType.HARDWARE_INSTALLATION]: {
		[Language.EN]: 'Hardware Installation',
		[Language.FR]: 'Installation de matériel',
		[Language.IT]: 'Hardware Installation in italian',
		[Language.NL]: 'Hardware Installation (NL)'
	},
	[ProjectType.SOFTWARE_DEPLOYMENT]: {
		[Language.EN]: 'Software Deployment',
		[Language.FR]: 'Déploiement de logiciel',
		[Language.IT]: 'Software Deployment in italian',
		[Language.NL]: 'Software Deployment (NL)'
	},
	[ProjectType.DATABASE_MANAGEMENT]: {
		[Language.EN]: 'Database Management',
		[Language.FR]: 'Gestion de base de données',
		[Language.IT]: 'Database Management in italian',
		[Language.NL]: 'Database Management (NL)'
	},
	[ProjectType.DATA_ENTRY_AND_CATALOGUING]: {
		[Language.EN]: 'Data Entry and Cataloguing',
		[Language.FR]: 'Saisie de données et catalogage',
		[Language.IT]: 'Data Entry and Cataloguing in italian',
		[Language.NL]: 'Data Entry and Cataloguing (NL)'
	},
	[ProjectType.COLLECTION_DIGITISATION]: {
		[Language.EN]: 'Collection Digitisation',
		[Language.FR]: 'Numérisation de collection',
		[Language.IT]: 'Collection Digitisation in italian',
		[Language.NL]: 'Collection Digitisation (NL)'
	},
	[ProjectType.USER_TRAINING]: {
		[Language.EN]: 'User Training',
		[Language.FR]: 'Formation des utilisateurs',
		[Language.IT]: 'User Training in italian',
		[Language.NL]: 'User Training (NL)'
	},
	[ProjectType.TECHNICAL_SUPPORT]: {
		[Language.EN]: 'Technical Support',
		[Language.FR]: 'Support technique',
		[Language.IT]: 'Technical Support in italian',
		[Language.NL]: 'Technical Support (NL)'
	},
	[ProjectType.FINANCIAL_REPORTING]: {
		[Language.EN]: 'Financial Reporting',
		[Language.FR]: 'Rapports financiers',
		[Language.IT]: 'Financial Reporting in italian',
		[Language.NL]: 'Financial Reporting (NL)'
	},
	[ProjectType.BUDGETING]: {
		[Language.EN]: 'Budgeting',
		[Language.FR]: 'Budgétisation',
		[Language.IT]: 'Budgeting in italian',
		[Language.NL]: 'Budgeting (NL)'
	},
	[ProjectType.INVOICE_MANAGEMENT]: {
		[Language.EN]: 'Invoice Management',
		[Language.FR]: 'Gestion des factures',
		[Language.IT]: 'Invoice Management in italian',
		[Language.NL]: 'Invoice Management (NL)'
	},
	[ProjectType.TAX_ADVISORY]: {
		[Language.EN]: 'Tax Advisory',
		[Language.FR]: 'Conseil fiscal',
		[Language.IT]: 'Tax Advisory in italian',
		[Language.NL]: 'Tax Advisory (NL)'
	},
	[ProjectType.LEGAL_ADVISORY]: {
		[Language.EN]: 'Legal Advisory',
		[Language.FR]: 'Conseil juridique',
		[Language.IT]: 'Legal Advisory in italian',
		[Language.NL]: 'Legal Advisory (NL)'
	},
	[ProjectType.STRATEGIC_ADVISORY]: {
		[Language.EN]: 'Strategic Advisory',
		[Language.FR]: 'Conseil stratégique',
		[Language.IT]: 'Strategic Advisory in italian',
		[Language.NL]: 'Strategic Advisory (NL)'
	},
	[ProjectType.INTELLECTUAL_PROPERTY]: {
		[Language.EN]: 'Intellectual Property',
		[Language.FR]: 'Propriété intellectuelle',
		[Language.IT]: 'Intellectual Property in italian',
		[Language.NL]: 'Intellectual Property (NL)'
	},
	[ProjectType.INSURANCE_AND_RISK]: {
		[Language.EN]: 'Insurance and Risk',
		[Language.FR]: 'Assurance et risque',
		[Language.IT]: 'Insurance and Risk in italian',
		[Language.NL]: 'Insurance and Risk (NL)'
	}
};

//ARTMAKING / WRITING / CURATION
export const projectTypeGroupOne = [
	ProjectType.GROUP_EXHIBITION,
	ProjectType.SOLO_EXHIBITION,
	ProjectType.FILM_SCREENING,
	ProjectType.PUBLIC_READING,
	ProjectType.CONFERENCE,
	ProjectType.PUBLIC_TALK,
	ProjectType.CURATORIAL_TALK,
	ProjectType.VISITING_ARTIST_TUTORIAL,
	ProjectType.VISITING_ARTIST_TALK,
	ProjectType.LIVE_PERFORMANCE,
	ProjectType.COMMISSIONED_PERFORMANCE,
	ProjectType.COMMISSIONED_WORK,
	ProjectType.REPLICA,
	ProjectType.STUDIO_VISIT,
	ProjectType.CATALOG_TEXT,
	ProjectType.PRESENTATION_TEXT,
	ProjectType.CRITICAL_REVIEW,
	ProjectType.MONOGRAPHIC_ESSAY,
	ProjectType.ARTWORK_WALL_TEXT,
	ProjectType.CURATORIAL_TEXT,
	ProjectType.LITERARY_COMMISSION,
	ProjectType.POETRY_COMMISSION,
	ProjectType.TEXT_REPRINT,
	ProjectType.PODCAST_FEATURE,
	ProjectType.PODCAST_COMMISSION,
	ProjectType.SKILLS_WORKSHOP,
	ProjectType.PANEL_DISCUSSION_PARTICIPATION,
	ProjectType.PANEL_DISCUSSION_MODERATION,
	ProjectType.EDITING_PROJECT,
	ProjectType.CATALOG_TRANSLATION,
	ProjectType.TEXT_TRANSLATION,
	ProjectType.LITERARY_TRANSLATION,
	ProjectType.POETRY_TRANSLATION,
	ProjectType.SUBTITLING,
	ProjectType.COPYWRITING_TASK,
	ProjectType.GHOSTWRITING_PROJECT,
	ProjectType.ARCHIVE_BUILD,
	ProjectType.ARCHIVE_RESEARCH,
	ProjectType.BIBLIOGRAPHY_BUILD,
	ProjectType.CATALOG_RESEARCH,
	ProjectType.COLLECTION_ACCESS,
	ProjectType.METADATA_ENTRY,
	ProjectType.RESEARCH_ASSISTANCE,
	ProjectType.PUBLIC_TOUR,
	ProjectType.GUIDED_VISIT,
	ProjectType.AUDIENCE_EDUCATION,
	ProjectType.CULTURAL_OUTREACH_SESSION,
	ProjectType.OUTREACH_IN_SCHOOLS,
	ProjectType.WORKSHOP_DESIGN_AND_FACILITATION
];

//PRODUCTION
export const projectTypeGroupTwo = [
	ProjectType.SOLO_EXHIBITION,
	ProjectType.GROUP_EXHIBITION,
	ProjectType.PERFORMANCE,
	ProjectType.EVENT,
	ProjectType.COMMISSIONED_WORK,
	ProjectType.VIDEO_WORK,
	ProjectType.SCREENING,
	ProjectType.PODCAST,
	ProjectType.ARCHIVE,
	ProjectType.DIGITAL_NEW_MEDIA_WORK,
	ProjectType.SCULPTURE,
	ProjectType.PAINTING,
	ProjectType.INSTALLATION,
	ProjectType.TECHNICAL_SETUP,
	ProjectType.PROJECT_COORDINATION,
	ProjectType.SUPPORT_AND_CONSULTING
];

//MEDIATION / HOSPITALITY
export const projectTypeGroupThree = [
	ProjectType.TOUR_PLANNING,
	ProjectType.PUBLIC_TOUR,
	ProjectType.GUIDED_VISIT,
	ProjectType.AUDIENCE_EDUCATION,
	ProjectType.CULTURAL_OUTREACH_SESSION,
	ProjectType.SCHOOL_INTERVENTION,
	ProjectType.CONFERENCE_MODERATION,
	ProjectType.EDUCATIONAL_RESOURCE_WRITING,
	ProjectType.MEDIATION_TEXT,
	ProjectType.DEVELOPMENT_OF_MEDIATION_TOOLS,
	ProjectType.OUTREACH_PROJECT_PLANNING,
	ProjectType.RECEPTION_AND_SUPPORT_FOR_GROUP_VISITS,
	ProjectType.MEDIATOR_PEER_TRAINING,
	ProjectType.EDUCATIONAL_COORDINATION,
	ProjectType.COMMUNITY_WORKSHOP,
	ProjectType.VISITOR_SUPPORT,
	ProjectType.FRONT_OF_HOUSE,
	ProjectType.TICKETING_SERVICE,
	ProjectType.HOSTING_DUTIES,
	ProjectType.BIBLIOGRAPHY_BUILD,
	ProjectType.CATALOG_RESEARCH,
	ProjectType.ARCHIVE_RETRIEVAL,
	ProjectType.COLLECTION_ACCESS,
	ProjectType.RESEARCH_ASSISTANCE,
	ProjectType.PROJECT_COORDINATION,
	ProjectType.SUPPORT_AND_CONSULTING
];

//MANAGEMENT / ADMINISTRATION
export const projectTypeGroupFour = [
	ProjectType.SOLO_EXHIBITION,
	ProjectType.GROUP_EXHIBITION,
	ProjectType.PERFORMANCE,
	ProjectType.EVENT,
	ProjectType.COMMISSIONED_WORK,
	ProjectType.SCREENING,
	ProjectType.PODCAST,
	ProjectType.ARCHIVE,
	ProjectType.INSTALLATION,
	ProjectType.TECHNICAL_SETUP,
	ProjectType.EXHIBITION_PRODUCTION,
	ProjectType.EVENT_PRODUCTION,
	ProjectType.RESIDENCY_COORDINATION,
	ProjectType.PROGRAMME_COORDINATION,
	ProjectType.COLLECTION_MANAGEMENT,
	ProjectType.ARTIST_LIAISON,
	ProjectType.BUDGET_MANAGEMENT,
	ProjectType.GRANT_WRITING,
	ProjectType.PARTNERSHIP_DEVELOPMENT,
	ProjectType.VENDOR_MANAGEMENT,
	ProjectType.TEAM_MANAGEMENT,
	ProjectType.HR_AND_RECRUITMENT,
	ProjectType.SCHEDULING_AND_PLANNING,
	ProjectType.REPORTING,
	ProjectType.CONTRACT_DRAFTING,
	ProjectType.STRATEGIC_PLANNING,
	ProjectType.ADMINISTRATIVE_SUPPORT,
	ProjectType.ARTISTIC_SUPPORT,
	ProjectType.PROJECT_COORDINATION,
	ProjectType.SUPPORT_AND_CONSULTING
];

//COMMUNICATION / DOCUMENTATION
export const projectTypeGroupFive = [
	ProjectType.SOLO_EXHIBITION,
	ProjectType.GROUP_EXHIBITION,
	ProjectType.PERFORMANCE,
	ProjectType.EVENT,
	ProjectType.PUBLICATION,
	ProjectType.PHOTO_DOCUMENTATION,
	ProjectType.VIDEO_CAPTURE,
	ProjectType.CONTENT_CREATION,
	ProjectType.SOCIAL_STRATEGY,
	ProjectType.DIGITAL_MANAGEMENT,
	ProjectType.PRESS_OUTREACH,
	ProjectType.MARKETING_CAMPAIGN,
	ProjectType.AUDIENCE_STRATEGY,
	ProjectType.COMMUNITY_STRATEGY,
	ProjectType.PROJECT_COORDINATION,
	ProjectType.SUPPORT_AND_CONSULTING
];

// OPERATIONS / IT
export const projectTypeGroupSix = [
	ProjectType.EXHIBITION,
	ProjectType.PERFORMANCE,
	ProjectType.EVENT,
	ProjectType.DIGITAL_MIGRATION,
	ProjectType.ARCHIVE_DIGITISATION,
	ProjectType.SYSTEM_DEPLOYMENT,
	ProjectType.BUILDING_MAINTENANCE,
	ProjectType.SECURITY_OPERATIONS,
	ProjectType.FACILITIES_MANAGEMENT,
	ProjectType.IT_SUPPORT,
	ProjectType.SYSTEMS_ADMINISTRATION,
	ProjectType.NETWORK_MANAGEMENT,
	ProjectType.HARDWARE_INSTALLATION,
	ProjectType.SOFTWARE_DEPLOYMENT,
	ProjectType.DATABASE_MANAGEMENT,
	ProjectType.DATA_ENTRY_AND_CATALOGUING,
	ProjectType.COLLECTION_DIGITISATION,
	ProjectType.USER_TRAINING,
	ProjectType.TECHNICAL_SUPPORT
];

// LEGAL & FINANCE
export const projectTypeGroupSeven = [
	ProjectType.SOLO_EXHIBITION,
	ProjectType.GROUP_EXHIBITION,
	ProjectType.PERFORMANCE,
	ProjectType.EVENT,
	ProjectType.PUBLICATION,
	ProjectType.CONTRACT_DRAFTING,
	ProjectType.GRANT_WRITING,
	ProjectType.FINANCIAL_REPORTING,
	ProjectType.BUDGETING,
	ProjectType.INVOICE_MANAGEMENT,
	ProjectType.TAX_ADVISORY,
	ProjectType.LEGAL_ADVISORY,
	ProjectType.STRATEGIC_ADVISORY,
	ProjectType.INTELLECTUAL_PROPERTY,
	ProjectType.INSURANCE_AND_RISK,
	ProjectType.PROJECT_COORDINATION,
	ProjectType.SUPPORT_AND_CONSULTING
];

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
		[Language.FR]: 'Promotion interne',
		[Language.IT]: 'Promozione interna',
		[Language.NL]: 'Internal Promotion ES'
	},
	[JobObtainedVia.CALL_FOR_APPLICATIONS]: {
		[Language.EN]: 'Call for Applications',
		[Language.FR]: 'Appel à candidatures',
		[Language.IT]: 'Bando di selezione',
		[Language.NL]: 'Call for Applications ES'
	},
	[JobObtainedVia.CALL_FOR_PROJECTS]: {
		[Language.EN]: 'Call for Projects',
		[Language.FR]: 'Appel à projets',
		[Language.IT]: 'Bando per progetto',
		[Language.NL]: 'Call for Projects ES'
	},
	[JobObtainedVia.JOB_OFFER]: {
		[Language.EN]: 'Job Offer',
		[Language.FR]: 'Offre d’emploi',
		[Language.IT]: 'Offerta di lavoro',
		[Language.NL]: 'Job Offer ES'
	},
	[JobObtainedVia.INVITATION_REFERRAL]: {
		[Language.EN]: 'Invitation',
		[Language.FR]: 'Invitation',
		[Language.IT]: 'Invito',
		[Language.NL]: 'Invitation Referral ES'
	},
	[JobObtainedVia.DIRECT_OUTREACH]: {
		[Language.EN]: 'Direct Outreach',
		[Language.FR]: 'Candidature spontanée',
		[Language.IT]: 'Autocandidatura',
		[Language.NL]: 'Direct Outreach ES'
	},
	[JobObtainedVia.PURE_NEPOTISM]: {
		[Language.EN]: 'Nepotism / Friendship',
		[Language.FR]: 'Népotisme ou amitié',
		[Language.IT]: 'Nepotismo o amichettismo',
		[Language.NL]: 'Pure Nepotism ES'
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
