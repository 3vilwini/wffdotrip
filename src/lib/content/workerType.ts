import { siteState } from '$lib/states.svelte';
import { Language } from '$lib/content/country';

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
