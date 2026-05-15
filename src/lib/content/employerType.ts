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
				[Language.EN]: 'Regional cultural institution (e.g. FRAC Sud, CRAC Puglia, FACT Liverpool)',
				[Language.FR]: 'Institution culturelle régionale (ex: FRAC Sud, CRAC Puglia, FACT Liverpool)',
				[Language.IT]: 'Istituzione pubblica di medie dimensioni (ex: FRAC Sud, CRAC Puglia, FACT Liverpool)',
				[Language.NL]: 'Regionale culturele instelling (b.v. FRAC Sud, CRAC Puglia, FACT Liverpool)',
				id: '5207061'
			},
			[EmployerType.LOCAL_CULTURAL_INSTITUTION]: {
				[Language.EN]:'Local cultural institution (e.g. Devonshire Collective, CAC Brétigny, PAC Milano, Framer Framed)',
				[Language.FR]: 'Institution culturelle locale (ex: Devonshire Collective, CAC Brétigny, PAC Milano, Framer Framed)',
				[Language.IT]:'Istituzione pubblica di piccole dimensioni (ex: Devonshire Collective, CAC Brétigny, PAC Milano, Framer Framed)',
				[Language.NL]: 'Lokale culturele instelling (b.v. Devonshire Collective, CAC Brétigny, PAC Milano, Framer Framed)',
				id: '5768056'
			},
			[EmployerType.PRIVATE_FOUNDATION]: {
				[Language.EN]: 'Private cultural institution (e.g. Royal Academy, Fondazione Prada, Hartwig Art Foundation)',
				[Language.FR]: 'Fondation privée (ex: Royal Academy, Fondazione Prada, Hartwig Art Foundation)',
				[Language.IT]: 'Istituzione privata o fondazione (ex: Royal Academy, Fondazione Prada, Hartwig Art Foundation)',
				[Language.NL]: 'Particuliere culturele instelling (b.v. Royal Academy, Fondazione Prada, Hartwig Art Foundation)',
				id: '5768057'
			},
			[EmployerType.ARTS_COMMISSIONER]: {
				[Language.EN]: 'Arts commissioner (e.g. Art Angel, Kadist, Mondraanfonds)',
				[Language.FR]: 'Fonds de dotation (ex: Art Angel, Kadist, Mondraanfonds)',
				[Language.IT]:'Fondazione filantropica per le arti (ex: Art Angel, Kadist, Mondraanfonds)',
				[Language.NL]: 'Kunstcommissie/opdrachtgever (b.v. Art Angel, Kadist, Mondraanfonds)',
				id: '5768058'
			},
			[EmployerType.NON_PROFIT_ORGANIZATION]: {
				[Language.EN]: 'Non-profit art space (e.g. De Appel, Triangle-Astérides, The Perimeter)',
				[Language.FR]: 'Espace associatif (ex: De Appel, Triangle-Astérides, The Perimeter)',
				[Language.IT]: 'Spazi d’arte non profit (ex: De Appel, Triangle-Astérides, The Perimeter)',
				[Language.NL]: 'Non-profit kunstruimte (b.v. De Appel, Triangle-Astérides, The Perimeter)',
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
			[Language.EN]: 'Education & research',
			[Language.FR]: 'Éducation & recherche',
			[Language.IT]: 'Educazione & ricerca',
			[Language.NL]: 'Educatie & onderzoek'
		},
		options: {
			[EmployerType.PUBLIC_SCHOOL]: {
				[Language.EN]: 'Public school',
				[Language.FR]: 'École publique',
				[Language.IT]: 'Scuola pubblica',
				[Language.NL]: 'Openbare school',
				id: '5207069'
			},
			[EmployerType.PRIVATE_SCHOOL]: {
				[Language.EN]: 'Private school',
				[Language.FR]: 'École privée',
				[Language.IT]: 'Scuola privata',
				[Language.NL]: 'Particuliere school',
				id: '5207070'
			},
			[EmployerType.PUBLIC_UNIVERSITY]: {
				[Language.EN]: 'Public university',
				[Language.FR]: 'Université publique',
				[Language.IT]: 'Università pubblica',
				[Language.NL]: 'Openbare universiteit',
				id: '5207071'
			},
			[EmployerType.PRIVATE_UNIVERSITY]: {
				[Language.EN]: 'Private university',
				[Language.FR]: 'Université privée',
				[Language.IT]: 'Università privata',
				[Language.NL]: 'Particuliere universiteit',
				id: '5207072'
			},
			[EmployerType.LIBRARY]: {
				[Language.EN]: 'Library',
				[Language.FR]: 'Bibliothèque',
				[Language.IT]: 'Biblioteca',
				[Language.NL]: 'Bibliotheek',
				id: '5207073'
			},
			[EmployerType.ARCHIVE]: {
				[Language.EN]: 'Archive',
				[Language.FR]: 'Centre d’archives',
				[Language.IT]: 'Archivio',
				[Language.NL]: 'Archief',
				id: '5207074'
			},
			[EmployerType.RESEARCH_CENTER]: {
				[Language.EN]: 'Research center',
				[Language.FR]: 'Centre de recherche',
				[Language.IT]: 'Centro di ricerca',
				[Language.NL]: 'Onderzoekscentrum',
				id: '5207075'
			}
		}
	},
	[EmployerTypeSubgroup.GOVERNMENT_AND_FUNDING_BODIES]: {
		groupLabel: {
			[Language.EN]: 'Government & funding bodies',
			[Language.FR]: 'Gouvernement & organismes de financement public',
			[Language.IT]: 'Enti governativi & finanziatori',
			[Language.NL]: 'Overheid & financieringsinstanties '
		},
		options: {
			[EmployerType.MINISTER_CULTURE]: {
				[Language.EN]: 'Central government — Culture (e.g. DCMS, DRAC, MiC, Ministerie O, C&W)',
				[Language.FR]: 'Ministère de la Culture (ex: DCMS, DRAC, MiC, Ministerie O, C&W)',
				[Language.IT]: 'Ministero della Cultura (ex: DCMS, DRAC, MiC, Ministerie O, C&W)',
				[Language.NL]: 'Nationale overheid (b.v. DCMS, DRAC, MiC, Ministerie O, C&W)',
				id: '5207077'
			},
			[EmployerType.ARTS_COUNCIL]: {
				[Language.EN]: 'Arts council / Arm’s-length body (e.g. Arts Council England, CNAP, Stimuleringsfonds)',
				[Language.FR]: 'Organisme public culturel (ex: Arts Council England, CNAP, Stimuleringsfonds)',
				[Language.IT]: 'Ente pubblico per la cultura (ex: Arts Council England, CNAP, Stimuleringsfonds)',
				[Language.NL]: 'Cultuurfondsen (b.v. Arts Council England, CNAP, Stimuleringsfonds)',
				id: '5207078'
			},
			[EmployerType.LOCAL_GOVT]: {
				[Language.EN]: 'Regional or local authority',
				[Language.FR]: 'Collectivité ou réseau territorial',
				[Language.IT]: 'Enti regionali, provinciali e municipali',
				[Language.NL]: 'Provinciale en stedelijke cultuurfondsen',
				id: '5207079'
			},
			[EmployerType.CULTURAL_DIPLOMACY_BODY]: {
				[Language.EN]: 'Cultural diplomacy body (e.g. ambassades, Institut Français, Istituto Italiano di Cultura)',
				[Language.FR]: 'Organisme de diplomatie culturelle (ex: ambassades, Institut Français, Istituto Italiano di Cultura)',
				[Language.IT]: 'Ente di diplomazia culturale (ex: ambassades, Institut Français, Istituto Italiano di Cultura)',
				[Language.NL]: 'Culturele diplomatie (b.v. ambassades, Institut Français, Istituto Italiano di Cultura)',
				id: '5207082'
			}
		}
	},
	[EmployerTypeSubgroup.COMMERCIAL_AND_MARKET]: {
		groupLabel: {
			[Language.EN]: 'Commercial & market',
			[Language.FR]: 'Marché de l’art',
			[Language.IT]: 'Mercato dell’arte',
			[Language.NL]: 'Commercieel & markt'
		},
		options: {
			[EmployerType.AUCTION_HOUSE]: {
				[Language.EN]: 'Auction house',
				[Language.FR]: 'Maison de ventes',
				[Language.IT]: 'Case d’asta',
				[Language.NL]: 'Veilinghuis',
				id: '5207083'
			},
			[EmployerType.COMMERCIAL_GALLERY]: {
				[Language.EN]: 'Commercial gallery',
				[Language.FR]: 'Galerie d’art',
				[Language.IT]: 'Galleria commerciale',
				[Language.NL]: 'Commerciële galerie',
				id: '5768089'
			},
			[EmployerType.ART_DEALER]: {
				[Language.EN]: 'Art dealer',
				[Language.FR]: 'Marchand d’art',
				[Language.IT]: 'Mercante d’arte',
				[Language.NL]: 'Kunsthandelaar',
				id: '5207084'
			},
			[EmployerType.ART_ADVISOR]: {
				[Language.EN]: 'Art advisor',
				[Language.FR]: 'Art advisor',
				[Language.IT]: 'Consulente d’arte',
				[Language.NL]: 'Kunstconsultancy',
				id: '5207085'
			},
			[EmployerType.ART_FAIR]: {
				[Language.EN]: 'Art fair',
				[Language.FR]: 'Foire d’art contemporain',
				[Language.IT]: 'Fiera d’arte',
				[Language.NL]: 'Kunstbeurs',
				id: '5768090'
			},
			[EmployerType.ONLINE_SALES_PLATFORM]: {
				[Language.EN]: 'Online sales platform',
				[Language.FR]: 'Plateforme de vente en ligne',
				[Language.IT]: 'Piattaforma di vendita online',
				[Language.NL]: 'Online verkoopplatform',
				id: '5207086'
			},
			[EmployerType.CORPORATE_ENTERPRISE]: {
				[Language.EN]: 'Corporate enterprise',
				[Language.FR]: 'Entreprise privée',
				[Language.IT]: 'Impresa privata',
				[Language.NL]: 'Zakelijke onderneming/bedrijf',
				id: '5768091'
			}
		}
	},
	[EmployerTypeSubgroup.PUBLISHING]: {
		groupLabel: {
			[Language.EN]: 'Publishing',
			[Language.FR]: 'Édition & presse',
			[Language.IT]: 'Editoria',
			[Language.NL]: 'Uitgevers'
		},
		options: {
			[EmployerType.PUBLISHING_HOUSE]: {
				[Language.EN]: 'Publishing house',
				[Language.FR]: 'Maison d’édition',
				[Language.IT]: 'Casa editrice',
				[Language.NL]: 'Uitgeverij',
				id: '5207087'
			},
			[EmployerType.IND_PUBLISHING_HOUSE]: {
				[Language.EN]: 'Independent publishing house',
				[Language.FR]: 'Maison d’édition indépendante',
				[Language.IT]: 'Casa editrice indipendente',
				[Language.NL]: 'Onafhankelijke uitgever',
				id: '5768101'
			},
			[EmployerType.MEDIA]: {
				[Language.EN]: 'Media',
				[Language.FR]: 'Média',
				[Language.IT]: 'Media',
				[Language.NL]: 'Media',
				id: '5207088'
			},
			[EmployerType.MAGAZINE]: {
				[Language.EN]: 'Magazine',
				[Language.FR]: 'Magazine',
				[Language.IT]: 'Rivista',
				[Language.NL]: 'Tijdschrift',
				id: '5207089'
			},
			[EmployerType.IND_MAGAZINE]: {
				[Language.EN]: 'Independent magazine',
				[Language.FR]: 'Magazine indépendante',
				[Language.IT]: 'Rivista indipendente',
				[Language.NL]: 'Onafhankelijk tijdschrift',
				id: '5768102'
			},
			[EmployerType.ONLINE_PLATFORM]: {
				[Language.EN]: 'Online platform',
				[Language.FR]: 'Plateforme éditoriale en ligne',
				[Language.IT]: 'Piattaforma online',
				[Language.NL]: 'Online Platform',
				id: '5207090'
			}
		}
	},
	[EmployerTypeSubgroup.PRODUCTION_AND_CREATION]: {
		groupLabel: {
			[Language.EN]: 'Production & creation',
			[Language.FR]: 'Production & création',
			[Language.IT]: 'Produzione & creazione',
			[Language.NL]: 'Productie & creatie'
		},
		options: {
			[EmployerType.ARTIST_STUDIO]: {
				[Language.EN]: "Artist's studio",
				[Language.FR]: 'Studio d’artiste',
				[Language.IT]: 'Studio d’artista',
				[Language.NL]: "Kunstenaarsatelier",
				id: '5207091'
			},
			[EmployerType.IND_ARTIST]: {
				[Language.EN]: 'Independent artist',
				[Language.FR]: 'Artiste indépendant·e',
				[Language.IT]: 'Artista indipente',
				[Language.NL]: 'Onafhankelijk kunstenaar',
				id: '5768104'
			},
			[EmployerType.FABRICATION_WORKSHOP]: {
				[Language.EN]: 'Fabrication workshop',
				[Language.FR]: 'Atelier industriel',
				[Language.IT]: 'Laboratori di produzione',
				[Language.NL]: 'Productie werkplaats',
				id: '5207092'
			},
			[EmployerType.FAB_LAB]: {
				[Language.EN]: 'Maker space',
				[Language.FR]: 'Fab lab',
				[Language.IT]: 'Fab lab',
				[Language.NL]: 'Makersruimte',
				id: '5207093'
			},
			[EmployerType.ART_LOGISTICS]: {
				[Language.EN]: 'Art logistics',
				[Language.FR]: 'Entreprise de logistique',
				[Language.IT]: 'Logistica per l’arte',
				[Language.NL]: 'Kunstlogistiek',
				id: '5207094'
			}
		}
	},
	[EmployerTypeSubgroup.EVENTS]: {
		groupLabel: {
			[Language.EN]: 'Events',
			[Language.FR]: 'Événements',
			[Language.IT]: 'Eventi',
			[Language.NL]: 'Evenementen'
		},
		options: {
			[EmployerType.FESTIVAL]: {
				[Language.EN]: 'Festival',
				[Language.FR]: 'Festival',
				[Language.IT]: 'Festival',
				[Language.NL]: 'Festival',
				id: '5207095'
			},
			[EmployerType.BIENNIAL]: {
				[Language.EN]: 'Biennial',
				[Language.FR]: 'Bienniale',
				[Language.IT]: 'Bienniale',
				[Language.NL]: 'Bienniale',
				id: '5207096'
			},
			[EmployerType.TRIENNIAL]: {
				[Language.EN]: 'Triennial',
				[Language.FR]: 'Trienniale',
				[Language.IT]: 'Trienniale',
				[Language.NL]: 'Trienniale',
				id: '5207097'
			},
			[EmployerType.LOCAL_EVENT]: {
				[Language.EN]: 'Local event',
				[Language.FR]: 'Evènement local',
				[Language.IT]: 'Evento locale',
				[Language.NL]: 'Lokaal evenement',
				id: '5207099'
			}
		}
	},
	[EmployerTypeSubgroup.ARTIST_SUPPORT_STRUCTURES]: {
		groupLabel: {
			[Language.EN]: 'Artist support structures',
			[Language.FR]: 'Structures de soutien aux artistes',
			[Language.IT]: 'Strutture di supporto allə artistə',
			[Language.NL]: 'Ondersteuningsorganisaties voor kunstenaars'
		},
		options: {
			[EmployerType.UNION]: {
				[Language.EN]: 'Union',
				[Language.FR]: 'Syndicat',
				[Language.IT]: 'Sindacato',
				[Language.NL]: 'Vakbond',
				id: '5207100'
			},
			[EmployerType.ARTIST_SERVICES_ORGANIZATION]: {
				[Language.EN]: 'Artists’ support services',
				[Language.FR]: 'Plateforme d’accompagnement d’artistes',
				[Language.IT]: 'Servizi di supporto allə artistə',
				[Language.NL]: 'Organisaties voor kunstenaarsondersteuning',
				id: '5207101'
			},
			[EmployerType.PROFESSIONAL_MEMBERSHIP_ORG]: {
				[Language.EN]: 'Professional membership organisation (e.g.: AICA, c-e-a, AWI)',
				[Language.FR]: 'Association de professionnel·les de l’art (ex: AICA, c-e-a, AWI)',
				[Language.IT]: 'Associazioni di categoria (e.g.: AICA, c-e-a, AWI)',
				[Language.NL]: 'Beroepsvereniging (e.g.: AICA, c-e-a, AWI)',
				id: '5768104'
			},
			[EmployerType.RIGHTS_ORGANIZATION]: {
				[Language.EN]: 'Artists’ rights organisation',
				[Language.FR]: 'Organisme de gestion collective (ex: ADAGP)',
				[Language.IT]: 'Associazione per i diritti dellə artistə',
				[Language.NL]: 'Organsiatie voor wettelijke positie kunstenaars',
				id: '5207102'
			},
			[EmployerType.RESIDENCY_PROGRAM]: {
				[Language.EN]: 'Residency programme',
				[Language.FR]: 'Programme de résidence',
				[Language.IT]: 'Programma di residenza',
				[Language.NL]: 'Residencyprogramma',
				id: '5207103'
			},
			[EmployerType.COOPERATIVE_STRUCTURE]: {
				[Language.EN]: 'Cooperative',
				[Language.FR]: 'Coopérative',
				[Language.IT]: 'Cooperativa',
				[Language.NL]: 'Coöperatie',
				id: '5207104'
			}
		}
	},
	[EmployerTypeSubgroup.OTHER]: {
		groupLabel: {
			[Language.EN]: 'Other',
			[Language.FR]: 'Autre',
			[Language.IT]: 'Altro',
			[Language.NL]: 'Overig'
		},
		options: {
			[EmployerType.OTHER]: {
				[Language.EN]: 'Other',
				[Language.FR]: 'Autre',
				[Language.IT]: 'Altro',
				[Language.NL]: 'Overig',
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
