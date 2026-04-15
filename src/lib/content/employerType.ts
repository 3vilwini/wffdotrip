import { Language } from '$lib/content/country';
import { siteState } from '$lib/states.svelte';

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
			[Language.EN]: 'Cultural Institutions',
			[Language.FR]: 'Institutions culturelles',
			[Language.IT]: 'Istituzioni culturali',
			[Language.NL]: 'Cultural Institutions (NL)'
		},
		options: {
			[EmployerType.NATIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'National Cultural Institution (e.g. Tate, National Galleries of Scotland)',
				[Language.FR]:
					'Institution culturelle nationale (ex: Centre Pompidou, Palais de Tokyo, MUCEM)',
				[Language.IT]: 'Istituzione pubblica di grandi dimensioni (ex: MAXXI, GNAM)',
				[Language.NL]: 'National Cultural Institution (NL)',
				id: '5207062'
			},
			[EmployerType.REGIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'Regional Cutural Institution (e.g. FACT, Turner Contemporary, Chapter)',
				[Language.FR]: 'Institution culturelle régionale (ex: FRAC)',
				[Language.IT]:
					'Istituzione pubblica di medie dimensioni (ex: Castello di Rivoli, CRAC, MART)',
				[Language.NL]: 'Regional Cultural Institution (NL)',
				id: '5207061'
			},
			[EmployerType.LOCAL_CULTURAL_INSTITUTION]: {
				[Language.EN]:
					'Local Cultural Institution  (e.g. Metroland Cultures, Devonshire Collective)',
				[Language.FR]: 'Institution culturelle locale (ex: La Friche Belle de Mai, CAC Bretigny)',
				[Language.IT]:
					'Istituzione pubblica di piccole dimensioni (ex: PAC Milano, MAMbo, Galleria Civica di Modena)',
				[Language.NL]: 'Local Cultural Institution (NL)',
				id: '5768056'
			},
			[EmployerType.PRIVATE_FOUNDATION]: {
				[Language.EN]: 'Private Cultural Institution (e.g. Wellcome Collection, Royal Academy)',
				[Language.FR]: 'Fondation privée (ex: Fondation Cartier, Fondation d’entreprise Ricard)',
				[Language.IT]: 'Istituzione privata o fondazione (ex: Fondazione Prada, Palazzo Grassi)',
				[Language.NL]: 'Private Cultural Institution (NL)',
				id: '5768057'
			},
			[EmployerType.ARTS_COMMISSIONER]: {
				[Language.EN]: 'Arts Commissioner (e.g. Create London, Art Angel)',
				[Language.FR]: 'Fonds de dotation (ex: Kadist, Fonds de dotation agnès b.)',
				[Language.IT]:
					'Fondazione filantropica per le arti (ex: Dena Foundation for Contemporary Art, Fondazione Nicola Trussardi)',
				[Language.NL]: 'Arts Commissioner (NL)',
				id: '5768058'
			},
			[EmployerType.NON_PROFIT_ORGANIZATION]: {
				[Language.EN]: 'Nonprofit Art Space (e.g. The Perimeter, Raven Row)',
				[Language.FR]: 'Espace associatif (ex: Bétonsalon, Triangle-Astérides)',
				[Language.IT]: 'Spazi d’arte non profit (ex: Pirelli HangarBicocca, Fondazione ICA Milano)',
				[Language.NL]: 'Non-Profit Organization (NL)',
				id: '5207068'
			},
			[EmployerType.ARTIST_RUN_SPACE]: {
				[Language.EN]: 'Artist-Run Space',
				[Language.FR]: 'Artist-run space',
				[Language.IT]: 'Artist-run space',
				[Language.NL]: 'Artist-Run Space (NL)',
				id: '5207064'
			},
			[EmployerType.STAFFING_AGENCY]: {
				[Language.EN]: 'Staffing Agency',
				[Language.FR]: 'Agence en sous-traitance',
				[Language.IT]: 'Cooperativa di servizi culturali',
				[Language.NL]: 'Staffing Agency (NL)',
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
				[Language.FR]: 'Online Sales Platform in french',
				[Language.IT]: 'Online Sales Platform in italian',
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