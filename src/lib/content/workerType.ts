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
			[Language.NL]: 'Kunstmaken'
		},
		options: {
			[WorkerType.ARTIST]: {
				label: {
					[Language.EN]: 'Visual artist',
					[Language.FR]: 'Artiste',
					[Language.IT]: 'Artista visivə',
					[Language.NL]: 'Beeldend kunstenaar'
				},
				detail: {
					[Language.EN]: '- mediums used, new or old works, number of works produced, etc.',
					[Language.FR]:
						'- médiums utilisés, œuvres nouvelles ou anciennes, nombre d’œuvres produites, etc.',
					[Language.IT]:
						'- media utilizzati, opere nuove o preesistenti, numero di opere prodotte, ecc.',
					[Language.NL]: '- toegepaste media, nieuw of oud werk, hoeveel werken geproduceerd, etc.'
				},
				id: '5207127'
			},
			[WorkerType.PERFORMING_ARTIST]: {
				label: {
					[Language.EN]: 'Performing artist',
					[Language.FR]: 'Artiste interprète',
					[Language.IT]: 'Artista performativə',
					[Language.NL]: 'Uitvoerend kunstenaar'
				},
				detail: {
					[Language.EN]: '- type of performance, duration, number of collaborators, etc.',
					[Language.FR]: '- type de performance, durée, nombre de collaborateurs, etc.',
					[Language.IT]: '- tipologia di performance, durata, numero di collaboratori, ecc.',
					[Language.NL]: '- type uitvoering, duur, aantal medewerkers, etc.'
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
			[Language.NL]: 'Schrijven'
		},
		options: {
			[WorkerType.WRITER]: {
				label: {
					[Language.EN]: 'Writer',
					[Language.FR]: 'Auteur·ice',
					[Language.IT]: 'Scrittorə',
					[Language.NL]: 'Schrijver'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '- formato, focus tematico, numero di pagine/parole, frequenza, ecc.',
					[Language.NL]: '- format, onderwerp keuze, aantal pag/woord, frequentie, etc.'
				},
				id: '5207129'
			},
			[WorkerType.ART_CRITIC]: {
				label: {
					[Language.EN]: 'Art critic',
					[Language.FR]: 'Critique d’art',
					[Language.IT]: 'Criticə d’arte',
					[Language.NL]: 'Kunstcriticus'
				},
				detail: {
					[Language.EN]: '- format, topic focus, page/word count, frequency, etc.',
					[Language.FR]: '- sujet, nombre de pages ou mots, fréquence de publication, format, etc.',
					[Language.IT]: '- formato, focus tematico, numero di pagine/parole, frequenza, ecc.',
					[Language.NL]: '- format, onderwerp keuze, aantal pag/woord, frequentie, etc.'
				},
				id: '5207130'
			},
			[WorkerType.EDITOR]: {
				label: {
					[Language.EN]: 'Editor',
					[Language.FR]: 'Editeur·ice',
					[Language.IT]: 'Editor / redattorə',
					[Language.NL]: 'Redacteur'
				},
				detail: {
					[Language.EN]: '- format, number of texts, number of contributors, languages, etc.',
					[Language.FR]: '- format, nombre de textes, nombre de contributeur·ices, langues, etc.',
					[Language.IT]: '- formato, numero di testi, numero di contributor, lingue, ecc.',
					[Language.NL]: '- format, type publicatie, aantal teksten, aantal bijdragen, talen, etc.'
				},
				id: '5207131'
			},
			[WorkerType.JOURNALIST]: {
				label: {
					[Language.EN]: 'Journalist',
					[Language.FR]: 'Journaliste',
					[Language.IT]: 'Giornalista',
					[Language.NL]: 'Journalist'
				},
				detail: {
					[Language.EN]: '- subjects covered, number of articles or interviews conducted, etc.',
					[Language.FR]: '- thématiques, nombre d’articles ou d’entretiens réalisés, etc.',
					[Language.IT]: '- temi trattati, numero di articoli o interviste realizzate, ecc.',
					[Language.NL]: '- behandelde onderwerpen, aantal artikelen of afgenomen interviews, etc.'
				},
				id: '5207132'
			},
			[WorkerType.TRANSLATOR]: {
				label: {
					[Language.EN]: 'Translator',
					[Language.FR]: 'Traducteur·ice',
					[Language.IT]: 'Traduttorə',
					[Language.NL]: 'Vertaler'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '- lingue, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '- talen, aantal pag/woord, type tekst, etc.'
				},
				id: '5207133'
			},
			[WorkerType.COPYWRITER]: {
				label: {
					[Language.EN]: 'Copywriter',
					[Language.FR]: 'Rédacteur·rice',
					[Language.IT]: 'Copywriter',
					[Language.NL]: 'Tekstschrijver'
				},
				detail: {
					[Language.EN]: '- languages, page/word count, type of texts, etc.',
					[Language.FR]: '- langues, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]: '- lingue, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '- klantprofiel, aantal pag/woord, type tekst, etc.'
				},
				id: '5207134'
			},
			[WorkerType.GHOSTWRITER]: {
				label: {
					[Language.EN]: 'Ghostwriter',
					[Language.FR]: 'Collaborateur·ice éditorial·e',
					[Language.IT]: 'Ghostwriter',
					[Language.NL]: 'Ghostwriter'
				},
				detail: {
					[Language.EN]: '- client profile, page/word count, type of texts, etc.',
					[Language.FR]: '- profil du client, nombre de pages ou de mots, type de textes, etc.',
					[Language.IT]:
						'- profilo del committente, numero di pagine/parole, tipologia di testi, ecc.',
					[Language.NL]: '- klantprofiel, aantal pag/woord, type tekst, etc.'
				},
				id: '5207135'
			},
			[WorkerType.ARCHIVIST]: {
				label: {
					[Language.EN]: 'Archivist',
					[Language.FR]: 'Archiviste',
					[Language.IT]: 'Archivista',
					[Language.NL]: 'Archivist'
				},
				detail: {
					[Language.EN]: '- type of collection, cataloging systems, digitization volume, etc.',
					[Language.FR]:
						'- type de la collection, systèmes de catalogage utilisés, volume de numérisation, etc.',
					[Language.IT]:
						'- tipologia della collezione, sistemi di catalogazione, volume di digitalizzazione, ecc.',
					[Language.NL]: '- type/grootte collectie, catalogiseringsysteem, digitaliseringsvolume, etc.'
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
			[Language.NL]: 'Curatie'
		},
		options: {
			[WorkerType.CURATOR]: {
				label: {
					[Language.EN]: 'Curator',
					[Language.FR]: 'Curateur·ice',
					[Language.IT]: 'Curatela',
					[Language.NL]: 'Curator'
				},
				detail: {
					[Language.EN]: '- size of exhibition space, number of artists, thematic focus, etc.',
					[Language.FR]:
						'- taille de l’espace d’exposition, nombre d’artistes, axe thématique, etc.',
					[Language.IT]:
						'- dimensione dello spazio espositivo, numero di artisti, focus tematico, ecc.',
					[Language.NL]: '- grootte presentatie-ruimte, aantal kunstenaars, thematiek, etc.'
				},
				id: '5207137'
			},
			[WorkerType.RESEARCHER]: {
				label: {
					[Language.EN]: 'Researcher',
					[Language.FR]: 'Chercheur·se',
					[Language.IT]: 'Ricercatorə',
					[Language.NL]: 'Onderzoeker'
				},
				detail: {
					[Language.EN]: '- scope of research, archives accessed, outputs produced, etc.',
					[Language.FR]:
						'- champ de recherche, archives consultées, productions/résultats réalisés, etc.',
					[Language.IT]: '- ampiezza della ricerca, archivi consultati, output prodotti, ecc.',
					[Language.NL]: '- onderzoeksgebied,archieven geraadpleegd, geleverde output, etc.'
				},
				id: '5207138'
			},
			[WorkerType.ART_HISTORIAN]: {
				label: {
					[Language.EN]: 'Art historian',
					[Language.FR]: 'Historien·ne de l’art',
					[Language.IT]: 'Storicə dell’arte',
					[Language.NL]: 'Kunsthistoricus'
				},
				detail: {
					[Language.EN]: '- specialization, lectures given, research periods, etc.',
					[Language.FR]: '- spécialisation, conférences données, périodes de recherche, etc.',
					[Language.IT]: '- specializzazione, lezioni svolte, periodi di ricerca, ecc.',
					[Language.NL]: '- specialisatie, gegeven lezingen, onderzoeksperiode, etc.'
				},
				id: '5207139'
			},
			[WorkerType.ARTISTIC_PROGAMMER]: {
				label: {
					[Language.EN]: 'Artistic programmer',
					[Language.FR]: 'Programmateur·ice',
					[Language.IT]: 'Programmatørə artisticə',
					[Language.NL]: 'Artistiek programmeur'
				},
				detail: {
					[Language.EN]: '- event format, number of artists, audience size, etc.',
					[Language.FR]: '- format d’événement, nombre d’artistes, taille du public, etc.',
					[Language.IT]: '- formati curatoriali, numero di artisti, dimensione del pubblico, ecc.',
					[Language.NL]: '- aantal events, aantal kunstenaars, gecureerde formats, publieksgrootte, etc.'
				},
				id: '5207140'
			},
			[WorkerType.CURATORIAL_FELLOW]: {
				label: {
					[Language.EN]: 'Curatorial fellow',
					[Language.FR]: 'Curateur·ice associé·e',
					[Language.IT]: 'Curatorial fellow / borsista',
					[Language.NL]: 'Co-curator'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]:
						'- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]:
						'- focus del progetto, mostre supportate, aree di ricerca, attività di scrittura, ecc.',
					[Language.NL]: '- project focus, ondersteunde tentoonstellingen, onderzoeksgebieden, schrijftaken, etc.'
				},
				id: '5207141'
			},
			[WorkerType.CURATORIAL_ASSISTANT]: {
				label: {
					[Language.EN]: 'Curatorial assistant',
					[Language.FR]: 'Assistant·e curateur·ice',
					[Language.IT]: 'Assistente curatorə',
					[Language.NL]: 'Assistent curator'
				},
				detail: {
					[Language.EN]: '- project focus, exhibitions supported, research areas, etc.',
					[Language.FR]:
						'- orientation du projet, expositions accompagnées, axes de recherche, etc.',
					[Language.IT]: '- focus del progetto, mostre supportate, aree di ricerca, ecc.',
					[Language.NL]: '- project focus, ondersteunde tentoonstellingen, onderzoeksgebieden, schrijftaken, etc.'
				},
				id: '5207142'
			},
			[WorkerType.PUBLIC_PROGRAMS_COORDINATOR]: {
				label: {
					[Language.EN]: 'Public programs coordinator',
					[Language.FR]: 'Coordinateur·ice des programmes',
					[Language.IT]: 'Coordinatørə dei programmi pubblici',
					[Language.NL]: 'Coördinator publieksprogramma'
				},
				detail: {
					[Language.EN]: '- event types, number of programs, partner types, etc.',
					[Language.FR]: '- types et nombre d’événements, types de partenaires, etc.',
					[Language.IT]: '- tipologie di eventi, numero di programmi, tipologia di partner, ecc.',
					[Language.NL]: '- type event, aantal programmas, soort partnerschap, etc.'
				},
				id: '5207143'
			},
			[WorkerType.RESEARCH_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Research associate',
					[Language.FR]: 'Chercheur·se associé·e',
					[Language.IT]: 'Ricercatorə associatə',
					[Language.NL]: 'Onderzoeksmedewerker'
				},
				detail: {
					[Language.EN]: '- research scope, collaborations, etc.',
					[Language.FR]: '- champ de recherche, collaborations, etc.',
					[Language.IT]: '- ambito della ricerca, collaborazioni, ecc.',
					[Language.NL]: '- onderzoeksgebied, collaboratie, etc.'
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
			[Language.NL]: 'Productie'
		},
		options: {
			[WorkerType.ARTIST_ASSISTANT]: {
				label: {
					[Language.EN]: 'Artist assistant',
					[Language.FR]: 'Assistant·e d’artiste',
					[Language.IT]: 'Assistente d’artista',
					[Language.NL]: 'Kunstenaarsassistent'
				},
				detail: {
					[Language.EN]: '- tasks, techniques, scale of studio, etc.',
					[Language.FR]: '- missions, techniques, taiille de l’atelier, etc.',
					[Language.IT]: '- mansioni, tecniche, scala dello studio, ecc.',
					[Language.NL]: '- taken (uitvoering/organisatie), technieken, atelier grootte, etc.'
				},
				id: '5207145'
			},
			[WorkerType.PRODUCTION_MANAGER]: {
				label: {
					[Language.EN]: 'Production manager',
					[Language.FR]: 'Chargé·e de production',
					[Language.IT]: 'Responsabile di produzione',
					[Language.NL]: 'Productiemanager'
				},
				detail: {
					[Language.EN]: '- project budgets, team size, timelines managed, locations, etc.',
					[Language.FR]: '- budgets des projets, taille des équipes, calendrier, lieux, etc.',
					[Language.IT]:
						'- budget di progetto, dimensione del team, tempistiche gestite, sedi/luoghi, ecc.',
					[Language.NL]: '- projectbudgetten, team grootte, tijdlijnbeheer, lokaties, etc.'
				},
				id: '5207146'
			},
			[WorkerType.PRODUCTION_ASSISTANT]: {
				label: {
					[Language.EN]: 'Production assistant',
					[Language.FR]: 'Assistant·e de production',
					[Language.IT]: 'Assistente alla produzione',
					[Language.NL]: 'Productieassistent'
				},
				detail: {
					[Language.EN]: '- teams supported, materials, etc.',
					[Language.FR]: '- taille de l’équipe, matériaux et techniques, etc.',
					[Language.IT]: '- team supportati, materiali utilizzati, ecc.',
					[Language.NL]: '- teams ondersteund, materialen, etc.'
				},
				id: '5207147'
			},
			[WorkerType.FABRICATOR]: {
				label: {
					[Language.EN]: 'Fabricator',
					[Language.FR]: 'Technicien·ne de fabrication',
					[Language.IT]: 'Tecnicə di produzione',
					[Language.NL]: 'Uitvoerder'
				},
				detail: {
					[Language.EN]: '- materials, tools, objects built, etc.',
					[Language.FR]: '- matériaux, outils, objets réalisés/construits, etc.',
					[Language.IT]: '- materiali, strumenti, oggetti costruiti, ecc.',
					[Language.NL]: 'materialen, gereedschappen, gebouwde objecten, etc.'
				},
				id: '5207148'
			},
			[WorkerType.ARTISAN]: {
				label: {
					[Language.EN]: 'Craftsperson',
					[Language.FR]: 'Artisan d’art',
					[Language.IT]: 'Artigianə',
					[Language.NL]: 'Vakspecialist'
				},
				detail: {
					[Language.EN]: '- craft specialty, materials, techniques, objects produced, etc.',
					[Language.FR]: '- spécialité, matériaux, techniques, objets produits, etc.',
					[Language.IT]:
						'- specializzazione artigianale, materiali, tecniche, oggetti prodotti, ecc.',
					[Language.NL]: '- vakspecialisatie, materialen,technieken, gebouwde objecten, etc.'
				},
				id: '5207149'
			},
			[WorkerType.TECHNICIAN]: {
				label: {
					[Language.EN]: 'Technician',
					[Language.FR]: 'Regisseur·se',
					[Language.IT]: 'Tecnicə',
					[Language.NL]: 'Technicus'
				},
				detail: {
					[Language.EN]: '- project type, specializations, equipment, etc.',
					[Language.FR]: '- type de projet, spécialités, équipements, etc.',
					[Language.IT]: '- tipologia di progetto, specializzazioni, attrezzature, ecc.',
					[Language.NL]: '- type project, specialisatie, apparatuur, etc.'
				},
				id: '5207150'
			},
			[WorkerType.LIGHTING_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Lighting technician',
					[Language.FR]: 'Ingenieur·e lumière',
					[Language.IT]: 'Tecnicə luci',
					[Language.NL]: 'Lichttechnicus'
				},
				detail: {
					[Language.EN]: '- space type, lighting systems, etc.',
					[Language.FR]: '- type d’espace, systèmes d’éclairage, etc.',
					[Language.IT]: '- tipologia di spazio, sistemi di illuminazione, ecc.',
					[Language.NL]: '- type ruimte, licht-systemen, etc.'
				},
				id: '5207151'
			},
			[WorkerType.LIGHTING_DESIGNER]: {
				label: {
					[Language.EN]: 'Lighting designer',
					[Language.FR]: 'Concepteur·rice lumière',
					[Language.IT]: 'Lighting designer',
					[Language.NL]: 'Lichtontwerper'
				},
				detail: {
					[Language.EN]: '- space type, concepts developed, cueing, etc.',
					[Language.FR]: '- type d’espace et de création, repérages, etc.',
					[Language.IT]: '- tipologia di spazio, concetti sviluppati, ecc.',
					[Language.NL]: '- type ruimte, ontwikkelde concepten, ontwerp, etc.'
				},
				id: '5207152'
			},
			[WorkerType.PROJECTION_AV_SPECIALIST]: {
				label: {
					[Language.EN]: 'Projection / AV specialist',
					[Language.FR]: 'Technicien·ne audivisuel·le',
					[Language.IT]: 'Tecnicə audio video',
					[Language.NL]: 'Projectie / AV Specialist'
				},
				detail: {
					[Language.EN]: '- space type, projectors used, mapping, etc.',
					[Language.FR]: '- type d’espace, projecteurs utilisés, mapping, etc.',
					[Language.IT]: '- tipologia di spazio, proiettori utilizzati, mapping, ecc.',
					[Language.NL]: '- type ruimte, gebruikte projectoren, mapping, etc.'
				},
				id: '5207153'
			},
			[WorkerType.SOUND_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Sound technician',
					[Language.FR]: 'Technicien·ne son',
					[Language.IT]: 'Tecnicə del suono',
					[Language.NL]: 'Geluidstechnicus'
				},
				detail: {
					[Language.EN]: '- project type, equipment, etc.',
					[Language.FR]: '- type de projet, équipements, etc.',
					[Language.IT]: '- tipologia di progetto, attrezzature, ecc.',
					[Language.NL]: '- type project, apparatuur, etc.'
				},
				id: '5207154'
			},
			[WorkerType.SOUND_DESIGNER]: {
				label: {
					[Language.EN]: 'Sound designer',
					[Language.FR]: 'Concepteur·rice sonore',
					[Language.IT]: 'Sound designer',
					[Language.NL]: 'Geluidsontwerper'
				},
				detail: {
					[Language.EN]: '- project type, software used, channels, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, etc.',
					[Language.IT]: '- tipologia di progetto, software utilizzati, canali, ecc.',
					[Language.NL]: '- type project, gebruikte software, kanalen, etc.'
				},
				id: '5207155'
			},
			[WorkerType.EXHIBITION_DESIGNER]: {
				label: {
					[Language.EN]: 'Exhibition designer',
					[Language.FR]: 'Scénographe d’exposition',
					[Language.IT]: 'Scenografə',
					[Language.NL]: 'Tentoonstellingsvormgever'
				},
				detail: {
					[Language.EN]: '- project type, software used, number of renderings, etc.',
					[Language.FR]: '- type de projet, logiciels utilisés, nombre de rendus, etc.',
					[Language.IT]: '- tipologia di progetto, software utilizzati, numero di rendering, ecc.',
					[Language.NL]: '- type project, gebruikte software, aantallen modellen, etc.'
				},
				id: '5207156'
			},
			[WorkerType.ART_HANDLER]: {
				label: {
					[Language.EN]: 'Art handler',
					[Language.FR]: 'Installateur·ice d’œuvres',
					[Language.IT]: 'Art handler / addettə alla movimentazione opere',
					[Language.NL]: 'Kunsttransporteur'
				},
				detail: {
					[Language.EN]: '- artwork type, number of works, packing methods, etc.',
					[Language.FR]: '- type d’œuvres, nombre d’œuvres, méthodes d’emballage, etc.',
					[Language.IT]: '- tipologia di opera, numero di opere, modalità di imballaggio, ecc.',
					[Language.NL]: '- type kunstwerk, aantal werken, verpakkingswijze, etc.'
				},
				id: '5207157'
			},
			[WorkerType.THREED_VISUALIZER]: {
				label: {
					[Language.EN]: '3D visualizer',
					[Language.FR]: 'Concepteur·ice 3D',
					[Language.IT]: 'Progettista 3D',
					[Language.NL]: '3D Visualisatie'
				},
				detail: {
					[Language.EN]: '- project type, software, number of visualizations, etc.',
					[Language.FR]:
						'- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]:
						'- tipologia di progetto, complessità, considerazioni sull’accessibilità, ecc.',
					[Language.NL]: '- type project, software, aantal visualisatie, etc.'
				},
				id: '5207158'
			},
			[WorkerType.UI_UX]: {
				label: {
					[Language.EN]: 'UI/UX designer',
					[Language.FR]: 'Designer UI/UX',
					[Language.IT]: 'Designer UI/UX',
					[Language.NL]: 'UI/UX vormgever'
				},
				detail: {
					[Language.EN]: '- project type, complexity, accessibility considerations, etc.',
					[Language.FR]:
						'- type de projet, complexité, prise en compte des conditions d’accessibilité, etc.',
					[Language.IT]:
						'- tipologia di progetto, complessità, considerazioni sull’accessibilità, ecc.',
					[Language.NL]: '- type project, complexiteit, toegankelijkheidsvereisten, etc.'
				},
				id: '5207159'
			},
			[WorkerType.STAGE_MANAGER]: {
				label: {
					[Language.EN]: 'Stage manager',
					[Language.FR]: 'Régisseur·se de plateau',
					[Language.IT]: 'Stage manager / direttorə di scena',
					[Language.NL]: 'Toneelmeester'
				},
				detail: {
					[Language.EN]: '- rehearsal cadence, cast/crew size, etc.',
					[Language.FR]:
						'- fréquence des répétitions, taille de la distribution/équipe technique, etc.',
					[Language.IT]: '- cadenza delle prove, dimensione del cast/crew, ecc.',
					[Language.NL]: '- repetitie frequentie, cast/crew grootte, etc.'
				},
				id: '5207160'
			},
			[WorkerType.COSTUME_DESIGNER]: {
				label: {
					[Language.EN]: 'Costume designer',
					[Language.FR]: 'Créateur·rice de costumes',
					[Language.IT]: 'Costumista',
					[Language.NL]: 'Kostuumontwerper'
				},
				detail: {
					[Language.EN]: '- costume count, materials, fittings, character research, etc.',
					[Language.FR]: '- nombre de costumes, matériaux, essayages, recherches, etc.',
					[Language.IT]: '- numero di costumi, materiali, prove, ricerca sui personaggi, ecc.',
					[Language.NL]: '- aantal kostuums, materialen, draagsessies, type/karakter onderzoek, etc.'
				},
				id: '5207161'
			}
		}
	},
	[WorkerTypeSubgroup.MEDIATION_AND_HOSPITALITY]: {
		groupLabel: {
			[Language.EN]: 'Mediation & hospitality',
			[Language.FR]: 'Médiation & accueil',
			[Language.IT]: 'Mediazione & ospitalità',
			[Language.NL]: 'Mediatie & hosting'
		},
		options: {
			[WorkerType.HEAD_OF_PUBLIC_ENG]: {
				label: {
					[Language.EN]: 'Head of public engagement',
					[Language.FR]: 'Responsable des publics',
					[Language.IT]: 'Responsabile della mediazione culturale',
					[Language.NL]: 'Hoofd publiekscommunicatie'
				},
				detail: {
					[Language.EN]: '- number of projects, team size, etc.',
					[Language.FR]: '- nombre de projets, taille de l’équipe gérée, etc.',
					[Language.IT]: '- numero di progetti, numero di persone gestite, ecc.',
					[Language.NL]: '- aantal projecten, team grootte, etc.'
				},
				id: '5767891'
			},
			[WorkerType.PUBLIC_ENGAG_OFFICER]: {
				label: {
					[Language.EN]: 'Public engagement officer',
					[Language.FR]: 'Chargé·e des publics',
					[Language.IT]: 'Responsabile public engagement',
					[Language.NL]: 'Functionaris publiekscommunicatie'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipo di pubblico, visite guidate, laboratori, temi affrontati, ecc.',
					[Language.NL]: '- aantal projecten, publiekstype, rondleidingen, workshops, onderwerpen behandeld, etc.'
				},
				id: '5767892'
			},
			[WorkerType.VISITOR_SERVICES_ASST]: {
				label: {
					[Language.EN]: 'Visitor services assistant',
					[Language.FR]: 'Chargé·e d’accueil',
					[Language.IT]: 'Addettə all’accoglienza',
					[Language.NL]: 'Medewerker publieksservice'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipo di pubblico, visite guidate, laboratori, temi affrontati, ecc.',
					[Language.NL]: '- aantal projecten, publiekstype, rondleidingen, workshops, onderwerpen behandeld, etc.'
				},
				id: '5767893'
			},
			[WorkerType.CULTURAL_MEDIATOR]: {
				label: {
					[Language.EN]: 'Cultural outreach / visitor engagement',
					[Language.FR]: 'Médiateur·ice culturel·le',
					[Language.IT]: 'Mediatorə culturale',
					[Language.NL]: 'Culturele zichtbaarheid / publiekscommunicatie'
				},
				detail: {
					[Language.EN]: '- audience type, tours, workshops, topics covered, etc.',
					[Language.FR]: '- type de public, visites, ateliers, sujets abordés, etc.',
					[Language.IT]: '- tipologia di pubblico, visite, workshop, temi trattati, ecc.',
					[Language.NL]: '- publiekstype, rondleidingen, workshops, onderwerpen behandeld, etc.'
				},
				id: '5207162'
			},
			[WorkerType.TOUR_GUIDE]: {
				label: {
					[Language.EN]: 'Tour guide',
					[Language.FR]: 'Guide conférencier·ère',
					[Language.IT]: 'Guidə / accompagnatorə',
					[Language.NL]: 'Rondleidingen'
				},
				detail: {
					[Language.EN]: '- tour frequency, group sizes, languages, thematic expertise, etc.',
					[Language.FR]:
						'- fréquence des visites, tailles des groupes, langues, expertise thématique, etc.',
					[Language.IT]:
						'- frequenza delle visite, dimensione dei gruppi, lingue, competenze tematiche, ecc.',
					[Language.NL]: '- frequentie, groepsgrootte, talen, thematische expertise, etc.'
				},
				id: '5207163'
			},
			[WorkerType.TRAINER_EDUCATOR]: {
				label: {
					[Language.EN]: 'Educator',
					[Language.FR]: 'Formateur',
					[Language.IT]: 'Educatorə',
					[Language.NL]: 'Educatie'
				},
				detail: {
					[Language.EN]: '- curriculum developed, class size, workshop formats, etc.',
					[Language.FR]:
						'- programme pédagogique développé, taille des classes, formats d’ateliers, etc.',
					[Language.IT]:
						'- programma didattico sviluppato, dimensione delle classi, formati dei workshop, ecc.',
					[Language.NL]: '- ontwikkeld curriculum, klas/groepsgrootte, workshop formats, etc.'
				},
				id: '5207164'
			},
			[WorkerType.TICKETING_AGENT]: {
				label: {
					[Language.EN]: 'Ticket sales',
					[Language.FR]: 'Agent·e de billeterie',
					[Language.IT]: 'Addettə vendita biglietti',
					[Language.NL]: 'Kaartverkoop'
				},
				detail: {
					[Language.EN]: '- ticket volume, software systems, customer interactions, etc.',
					[Language.FR]:
						'- volume de billets, gestion de logiciels, interactions avec la clientèle, etc.',
					[Language.IT]:
						'- volume di biglietti, sistemi software, interazioni con il pubblico, ecc.',
					[Language.NL]: '- volume kaartverkoop, software systeem, klantcontact, etc.'
				},
				id: '5207165'
			},
			[WorkerType.HOST]: {
				label: {
					[Language.EN]: 'Front of house',
					[Language.FR]: 'Hôte·sse accueil',
					[Language.IT]: 'Accoglienza',
					[Language.NL]: 'Ontvangst/hosting'
				},
				detail: {
					[Language.EN]: '- event types, visitor flow, hospitality tasks, etc.',
					[Language.FR]: '- types d’événements, flux de visiteurs, missions d’accueil, etc.',
					[Language.IT]:
						'- tipologie di eventi, flussi di visitatori, mansioni di accoglienza, ecc.',
					[Language.NL]: '- type event, bezoekersverloop, hostingtaken, etc.'
				},
				id: '5207166'
			}
		}
	},
	[WorkerTypeSubgroup.MANAGEMENT_AND_ADMIN]: {
		groupLabel: {
			[Language.EN]: 'Management & admin',
			[Language.FR]: 'Management & administration',
			[Language.IT]: 'Management & amministrazione',
			[Language.NL]: 'Management & administratie'
		},
		options: {
			[WorkerType.STUDIO_MANAGER]: {
				label: {
					[Language.EN]: 'Studio manager',
					[Language.FR]: 'Studio manager',
					[Language.IT]: 'Studio manager',
					[Language.NL]: 'Operationeel manager'
				},
				detail: {
					[Language.EN]: '- team size, task types, studio budget, etc.',
					[Language.FR]: '- taille de l’équipe, types de missions, budget de l’atelier, etc.',
					[Language.IT]: '- dimensione del team, tipologie di mansioni, budget dello studio, ecc.',
					[Language.NL]: '- team grootte, type taak, operationeel budget, etc.'
				},
				id: '5207167'
			},
			[WorkerType.PROJECT_MANAGER]: {
				label: {
					[Language.EN]: 'Project manager',
					[Language.FR]: 'Chargé·e de projet',
					[Language.IT]: 'Project manager',
					[Language.NL]: 'Project manager '
				},
				detail: {
					[Language.EN]: '- project scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure du projet, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del progetto, dimensione del team, ecc.',
					[Language.NL]: '- project grootte, afgesproken resultaten, team grootte, etc.'
				},
				id: '5207168'
			},
			[WorkerType.EVENT_PRODUCER]: {
				label: {
					[Language.EN]: 'Event producer',
					[Language.FR]: 'Producteur·ice évènementiel·le',
					[Language.IT]: 'Produttorə di eventi',
					[Language.NL]: 'Event producent'
				},
				detail: {
					[Language.EN]:
						'- event scale, vendors managed, audience size, technical complexity, etc.',
					[Language.FR]:
						'- envergure de l’événement, types de prestataires, taille du public, complexité technique, etc.',
					[Language.IT]:
						'- grandezza dell’evento, fornitori gestiti, dimensione del pubblico, complessità tecnica, ecc.',
					[Language.NL]: '- schaal event, management leveranciers, publieksgrootte, technische complexiteit, etc.'
				},
				id: '5207169'
			},
			[WorkerType.EXHIBITION_MANAGER]: {
				label: {
					[Language.EN]: 'Exhibition manager',
					[Language.FR]: 'Coordinateur·ice d’exposition',
					[Language.IT]: 'Responsabile mostre',
					[Language.NL]: 'Tentoonstellingsmanagement'
				},
				detail: {
					[Language.EN]: '- exhibition scale, number of artists, installation timelines, etc.',
					[Language.FR]: '- taille de l’exposition, nombre d’artistes, délais, etc.',
					[Language.IT]:
						'- grandezza della mostra, numero di artisti, tempistiche di installazione, ecc.',
					[Language.NL]: '- grootte tenstoonstelling, aantal kunstenaars, installatie tijdslijn, etc.'
				},
				id: '5207170'
			},
			[WorkerType.PROGRAM_COORDINATOR]: {
				label: {
					[Language.EN]: 'Program coordinator',
					[Language.FR]: 'Coordinateur·ice de programme',
					[Language.IT]: 'Coordinatorə di programma pubblico',
					[Language.NL]: 'Programmacoordinator'
				},
				detail: {
					[Language.EN]: '- program scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure du programme, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del programma, dimensione del team, ecc.',
					[Language.NL]: '- grootte programma, afgesproken resultaten, team grootte, etc.'
				},
				id: '5207171'
			},
			[WorkerType.PROJECT_ASSISTANT]: {
				label: {
					[Language.EN]: 'Project assistant',
					[Language.FR]: 'Assistant·e de projet',
					[Language.IT]: 'Assistente di progetto',
					[Language.NL]: 'Projectassistent'
				},
				detail: {
					[Language.EN]: '- project scale, deliverables, team size, etc.',
					[Language.FR]: '- envergure des missions, livrables, taille de l’équipe, etc.',
					[Language.IT]: '- grandezza del progetto, dimensione del team, ecc.',
					[Language.NL]: '- project grootte, afgesproken resultaten, team grootte, etc.'
				},
				id: '5207172'
			},
			[WorkerType.RESIDENCY_COORDINATOR]: {
				label: {
					[Language.EN]: 'Residency coordinator',
					[Language.FR]: 'Coordinateur·ice de résidence',
					[Language.IT]: 'Coordinatorə di residenza',
					[Language.NL]: 'Residencycoördinator'
				},
				detail: {
					[Language.EN]: '- number of residents, residency focus, programming, etc.',
					[Language.FR]: '- nombre de résident·es, axe de la résidence, programmation, etc.',
					[Language.IT]: '- numero di residenti, focus della residenza, programmazione, ecc.',
					[Language.NL]: '- aantal residenten, focus residency, programmering, etc.'
				},
				id: '5207173'
			},
			[WorkerType.ARTS_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Arts administrator',
					[Language.FR]: 'Administrateur·ice',
					[Language.IT]: 'Amministratorə culturale',
					[Language.NL]: 'Kunstadministrateur'
				},
				detail: {
					[Language.EN]: '- departments, task types, etc.',
					[Language.FR]: '- départements, types de missions, etc.',
					[Language.IT]: '- dipartimenti coinvolti, tipologie di mansioni, ecc.',
					[Language.NL]: 'afdelingen, type taken, etc.'
				},
				id: '5207174'
			},
			[WorkerType.PROGRAM_DIRECTOR]: {
				label: {
					[Language.EN]: 'Program director',
					[Language.FR]: 'Directeur de programme',
					[Language.IT]: 'Direttorə di programma pubblico',
					[Language.NL]: 'Programmadirecteur'
				},
				detail: {
					[Language.EN]: '- program scale, team size, partnerships, etc.',
					[Language.FR]: '- envergure du programme, taille de l’équipe, partenariats, etc.',
					[Language.IT]: '- scala del programma, dimensione del team, partnership, ecc.',
					[Language.NL]: '- grootte programma, team grootte, partnerschappen, etc.'
				},
				id: '5207175'
			},
			[WorkerType.COLLECTIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Collections manager',
					[Language.FR]: 'Responsable des collections',
					[Language.IT]: 'Responsabile delle collezioni',
					[Language.NL]: 'Colletiebeheer'
				},
				detail: {
					[Language.EN]: '- size of collection, cataloging system, storage conditions, etc.',
					[Language.FR]:
						'- taille de la collection, système de catalogage, conditions de stockage, etc.',
					[Language.IT]:
						'- dimensione della collezione, sistema di catalogazione, condizioni di conservazione, ecc.',
					[Language.NL]: '- grootte collectie, catalogus systeem, opslagsituatie, etc.'
				},
				id: '5207176'
			},
			[WorkerType.GALLERY_MANAGER]: {
				label: {
					[Language.EN]: 'Gallery manager',
					[Language.FR]: 'Responsable de galerie',
					[Language.IT]: 'Gallery Manager',
					[Language.NL]: 'Galeriebeheer'
				},
				detail: {
					[Language.EN]: '- artist roster size, exhibitions organized, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, expositions organisées, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, mostre organizzate, ecc.',
					[Language.NL]: '- grootte kunstenaarsprogramma, georganiseerde tentoonstellingen, etc.'
				},
				id: '5207177'
			},
			[WorkerType.GALLERY_ASSISTANT]: {
				label: {
					[Language.EN]: 'Gallery assistant',
					[Language.FR]: 'Assistant·e de galerie',
					[Language.IT]: 'Assistente di galleria',
					[Language.NL]: 'Galerieassistent'
				},
				detail: {
					[Language.EN]: '- artist roster size, exhibitions organized, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, expositions organisées, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, mostre organizzate, ecc.',
					[Language.NL]: '- grootte kunstenaarsprogramma, georganiseerde tentoonstellingen, etc.'
				},
				id: '5207178'
			},
			[WorkerType.ARTIST_LIAISON]: {
				label: {
					[Language.EN]: 'Artist liaison',
					[Language.FR]: 'Artist liaison',
					[Language.IT]: 'Referente per gli artisti / artists liaison',
					[Language.NL]: 'Kunstenaarsbemiddelaar'
				},
				detail: {
					[Language.EN]: '- artist roster size, mediums, languages, etc.',
					[Language.FR]: '- taille du répertoire d’artistes, supports, langues, etc.',
					[Language.IT]: '- dimensione del gruppo di artisti, media, lingue, ecc.',
					[Language.NL]: '- grootte kunstenaarsprogramma, media, talen, etc.'
				},
				id: '5207179'
			},
			[WorkerType.GENERAL_COORDINATOR]: {
				label: {
					[Language.EN]: 'Coordinator',
					[Language.FR]: 'Coordinateur·ice général·e',
					[Language.IT]: 'Coordinatorə',
					[Language.NL]: 'Coördinator'
				},
				detail: {
					[Language.EN]: '- project type, specializations, etc.',
					[Language.FR]: '- type de projet, spécialités, etc.',
					[Language.IT]: '- tipologia di progetto, specializzazioni, ecc.',
					[Language.NL]: '- type project, specialisatie, etc.'
				},
				id: '5207180'
			},
			[WorkerType.GENERAL_DIRECTOR]: {
				label: {
					[Language.EN]: 'Managing director',
					[Language.FR]: 'Directeur·ice général·e',
					[Language.IT]: 'Direttorə generale',
					[Language.NL]: 'Algemeen directeur'
				},
				detail: {
					[Language.EN]: '- team size, specializations, strategic initiatives, etc.',
					[Language.FR]: '- taille de l’équipe, spécialités, initiatives stratégiques, etc.',
					[Language.IT]: '- dimensione del team, specializzazioni, iniziative strategiche, ecc.',
					[Language.NL]: '- team grootte, specialisaties, strategisch initiatief, etc.'
				},
				id: '5207181'
			},
			[WorkerType.ADMINISTRATIVE_SUPPORT]: {
				label: {
					[Language.EN]: 'Administrative support',
					[Language.FR]: 'Accompagnateur·ice administratif·ve',
					[Language.IT]: 'Supporto amministrativo',
					[Language.NL]: 'Adminstratieve ondersteuning'
				},
				detail: {
					[Language.EN]: '- task types, skills & tools used, etc. ',
					[Language.FR]: '- types de mission, compétences et outils utilisés, etc.',
					[Language.IT]: '-  tipologie di mansioni, competenze e strumenti utilizzati, ecc.',
					[Language.NL]: '-  type taken, ingezette vaardigheden en middelen, etc.'
				},
				id: '5207182'
			},
			[WorkerType.CHIEF_OF_STAFF]: {
				label: {
					[Language.EN]: 'Chief of staff',
					[Language.FR]: 'Secretaire général·e',
					[Language.IT]: 'Capo staff',
					[Language.NL]: 'Stafchef'
				},
				detail: {
					[Language.EN]: '- team size, specializations, strategic initiatives, etc.',
					[Language.FR]: '- taille de l’équipe, spécialités, initiatives stratégiques, etc.',
					[Language.IT]: '- dimensione del team, specializzazioni, iniziative strategiche, ecc.',
					[Language.NL]: '- team grootte, specialisaties, strategisch initiatief, etc.'
				},
				id: '5207183'
			},
			[WorkerType.HR_STAFF_MANAGER]: {
				label: {
					[Language.EN]: 'HR / Staff manager',
					[Language.FR]: 'Chargé·e de ressources humaines',
					[Language.IT]: 'Responsabile risorse umane / personale',
					[Language.NL]: 'HR / Stafmangement'
				},
				detail: {
					[Language.EN]: '- task types, skills & tools used, workplace policies, etc.',
					[Language.FR]:
						'- types de mission, compétences et outils utilisés, mise en place de politiques internes, etc.',
					[Language.IT]:
						'- tipologie di attività, competenze e strumenti utilizzati, politiche aziendali, ecc.',
					[Language.NL]: '- type taken, ingezette vaardigheden en middelen, arbeidsvoorwaarden, etc.'
				},
				id: '5207184'
			}
		}
	},
	[WorkerTypeSubgroup.COMMUNICATION_AND_DOCUMENTATION]: {
		groupLabel: {
			[Language.EN]: 'Communication & documentation',
			[Language.FR]: 'Communication & documentation',
			[Language.IT]: 'Communicazione & documentazione',
			[Language.NL]: 'Communicatie & documentatie'
		},
		options: {
			[WorkerType.GRAPHIC_DESIGNER]: {
				label: {
					[Language.EN]: 'Graphic designer',
					[Language.FR]: 'Graphiste',
					[Language.IT]: 'Graphic designer',
					[Language.NL]: 'Grafisch vormgever'
				},
				detail: {
					[Language.EN]: '- formats produced, software used, number of assets, etc.',
					[Language.FR]: '- formats produits, logiciels utilisés, etc.',
					[Language.IT]: '- formati prodotti, software utilizzati, numero di asset, ecc.',
					[Language.NL]: '- de geleverde formats, gebruikte software, het aantal bestanden, etc.'
				},
				id: '5207185'
			},
			[WorkerType.PHOTOGRAPHER]: {
				label: {
					[Language.EN]: 'Photographer',
					[Language.FR]: 'Photographe',
					[Language.IT]: 'Fotografə',
					[Language.NL]: 'Fotograaf'
				},
				detail: {
					[Language.EN]: '- types of shots, number of sessions, editing workflow, etc.',
					[Language.FR]: '- types de prises de vues, nombre de sessions, temps d’édition, etc.',
					[Language.IT]: '- tipologie di riprese, numero di sessioni, flusso di montaggio, ecc.',
					[Language.NL]: '- type opnames, aantal sessies, editing werkzaamheden, etc.'
				},
				id: '5207186'
			},
			[WorkerType.WEB_DEVELOPER]: {
				label: {
					[Language.EN]: 'Web developer',
					[Language.FR]: 'Développeur·se web',
					[Language.IT]: 'Web developer',
					[Language.NL]: 'Webontwikkelaar'
				},
				detail: {
					[Language.EN]: '- languages/CMS used, site complexity, features built, etc.',
					[Language.FR]:
						'- langages utilisés, complexité du site, fonctionnalités développées, etc.',
					[Language.IT]:
						'- linguaggi/CMS utilizzati, complessità del sito, funzionalità sviluppate, ecc.',
					[Language.NL]: '- toegepaste talen/CMS, complexiteit website, gebouwde toepassingen, etc.'
				},
				id: '5207187'
			},
			[WorkerType.WEB_DESIGNER]: {
				label: {
					[Language.EN]: 'Web designer',
					[Language.FR]: 'Designer web',
					[Language.IT]: 'Web designer',
					[Language.NL]: 'Webontwerper'
				},
				detail: {
					[Language.EN]: '- layouts, UI systems, prototypes, branding elements, etc.',
					[Language.FR]:
						'- mises en page, systèmes d’interface utilisateur, prototypes, éléments de branding, etc.',
					[Language.IT]: '- layout, sistemi UI, prototipi, elementi di branding, ecc.',
					[Language.NL]: '- ontwerpen/lay-outs, UI systemen, prototypes, huisstijl onderdelen, etc.'
				},
				id: '5207188'
			},
			[WorkerType.VIDEOGRAPHER]: {
				label: {
					[Language.EN]: 'Videographer',
					[Language.FR]: 'Vidéaste',
					[Language.IT]: 'Videomaker',
					[Language.NL]: 'Videografie'
				},
				detail: {
					[Language.EN]: '- filming setups, number of locations, etc.',
					[Language.FR]: '- configurations de tournage, nombre de lieux, etc.',
					[Language.IT]: '- setup di ripresa, numero di location, ecc.',
					[Language.NL]: '- opname set-ups, aantal lokaties, etc.'
				},
				id: '5207189'
			},
			[WorkerType.COMMUNITY_MANAGER]: {
				label: {
					[Language.EN]: 'Community manager',
					[Language.FR]: 'Community manager',
					[Language.IT]: 'Community manager',
					[Language.NL]: 'Communicatiebeheerder'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '- content grootte, beheerde kanalen, data analyse, etc'
				},
				id: '5207190'
			},
			[WorkerType.DIGITAL_CONTENT_MANAGER]: {
				label: {
					[Language.EN]: 'Digital content manager',
					[Language.FR]: 'Chargé·e des contenus numériques',
					[Language.IT]: 'Digital content manager',
					[Language.NL]: 'Digitale content manager'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '- content grootte, beheerde kanalen, data analyse, etc'
				},
				id: '5207191'
			},
			[WorkerType.SOCIAL_MEDIA_STRATEGIST]: {
				label: {
					[Language.EN]: 'Social media strategist',
					[Language.FR]: 'Chargé·e de stratégie digitale',
					[Language.IT]: 'Strategist social media',
					[Language.NL]: 'Socialemediastrateeg'
				},
				detail: {
					[Language.EN]: '- content volume, channels managed, analytics, etc.',
					[Language.FR]: '- volume de contenu, canaux gérés, analyses, etc.',
					[Language.IT]: '- volume di contenuti, canali gestiti, analisi/metriche, ecc.',
					[Language.NL]: '- content grootte, beheerde kanalen, data analyse, etc'
				},
				id: '5207192'
			},
			[WorkerType.MARKETING_MANAGER]: {
				label: {
					[Language.EN]: 'Marketing manager',
					[Language.FR]: 'Chargé·e de marketing',
					[Language.IT]: 'Responsabile marketing',
					[Language.NL]: 'Marketing manager'
				},
				detail: {
					[Language.EN]: '- campaign types, audience scale, etc.',
					[Language.FR]: '- types de campagnes, envergure de l’audience, etc.',
					[Language.IT]: '- tipologie di campagne, scala del pubblico, ecc.',
					[Language.NL]: '- type campagne, publieksschaal, etc.'
				},
				id: '5207193'
			},
			[WorkerType.PRESS_LIAISON]: {
				label: {
					[Language.EN]: 'Press liaison',
					[Language.FR]: 'Relations Presse',
					[Language.IT]: 'Addettə alle relazioni con la stampa',
					[Language.NL]: 'Persvoorlichter'
				},
				detail: {
					[Language.EN]: '- campaign types, task types, etc.',
					[Language.FR]: '- types de campagnes, types de missions, etc.',
					[Language.IT]: '- tipologie di campagne, tipologie di mansioni, ecc.',
					[Language.NL]: '- type campagne, type taken, etc.'
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
			[Language.NL]: 'Bedrijfsvoering & IT'
		},
		options: {
			[WorkerType.SECURITY_AGENT]: {
				label: {
					[Language.EN]: 'Security guard',
					[Language.FR]: 'Agent·e de sécurité',
					[Language.IT]: 'Addettə alla sicurezza',
					[Language.NL]: 'Beveiliging'
				},
				detail: {
					[Language.EN]: '- building size, protocols assigned, etc.',
					[Language.FR]:
						'- superficie du bâtiment, horaires spécifiques, protocoles assignés, etc.',
					[Language.IT]: '- dimensione dell’edificio, protocolli assegnati, ecc.',
					[Language.NL]: '- grootte gebouw, toegewezen protocollen, etc.'
				},
				id: '5207195'
			},
			[WorkerType.CUSTODIAL_STAFF]: {
				label: {
					[Language.EN]: 'Caretaker / Maintenance worker',
					[Language.FR]: 'Agent·e d’entretien',
					[Language.IT]: 'Custodə / addettə alla manutenzione',
					[Language.NL]: 'Concierge/onderhoudsmedewerker'
				},
				detail: {
					[Language.EN]: '- building coverage, cleaning routines, etc.',
					[Language.FR]: '- surface couverte, horaires spécifiques, routines de nettoyage, etc.',
					[Language.IT]: '- copertura dell’edificio, routine di pulizia, ecc.',
					[Language.NL]: '- dekking gebouw, schoonmaakregime, etc.'
				},
				id: '5207196'
			},
			[WorkerType.FACILITIES_MANAGER]: {
				label: {
					[Language.EN]: 'Building / Facilities manager',
					[Language.FR]: 'Responsable des infrastructures',
					[Language.IT]: 'Responsabile edificio / strutture',
					[Language.NL]: 'Gebouw/faciliteitsbeheer'
				},
				detail: {
					[Language.EN]: '- maintenance operations, building systems, etc. ',
					[Language.FR]: '- opérations de maintenance, systèmes du bâtiment, etc.',
					[Language.IT]: '- operazioni di manutenzione, sistemi dell’edificio, ecc.',
					[Language.NL]: '- onderhoudswerkzaamheden, gebouwtechnische installaties, etc.'
				},
				id: '5207197'
			},
			[WorkerType.IT_SUPPORT]: {
				label: {
					[Language.EN]: 'IT support',
					[Language.FR]: 'Assistant informatique',
					[Language.IT]: 'Supporto IT',
					[Language.NL]: 'IT-ondersteuning'
				},
				detail: {
					[Language.EN]: '- hardware/software supported, ticket volume, systems managed, etc.',
					[Language.FR]:
						'- matériel/logiciels gérés, volume de tickets, systèmes administrés, etc.',
					[Language.IT]:
						'- hardware/software gestiti, volume di ticket, sistemi amministrati, ecc.',
					[Language.NL]: '- ondersteunde soft/hardware, aantallen werkzaamheden, systeemonderhoud, etc.'
				},
				id: '5207198'
			},
			[WorkerType.SYSTEMS_ADMIN]: {
				label: {
					[Language.EN]: 'Systems admin',
					[Language.FR]: 'Administrateur·ice système',
					[Language.IT]: 'Amministratorə di sistemi',
					[Language.NL]: 'Systeembeheer'
				},
				detail: {
					[Language.EN]: '- infrastructure managed, uptime, tools deployed, etc.',
					[Language.FR]: '- infrastructure gérée, outils déployés, taux de disponibilité, etc.',
					[Language.IT]:
						'- infrastruttura gestita, strumenti distribuiti, tasso di disponibilità, ecc.',
					[Language.NL]: '- infrastructureel beheer, operationele beschikbaarheid, ingezette instrumenten, etc.'
				},
				id: '5207199'
			},
			[WorkerType.COLLECTIONS_DATABASE_MANAGER]: {
				label: {
					[Language.EN]: 'Collections database manager',
					[Language.FR]: 'Gestionnaire de base de données',
					[Language.IT]: 'Responsabile database delle collezioni',
					[Language.NL]: 'Beheer collectiedatabase'
				},
				detail: {
					[Language.EN]: '- database used, number of records, digitisation scope, etc.',
					[Language.FR]:
						'- base de données utilisée, nombre de notices, périmètre de numérisation, etc.',
					[Language.IT]:
						'- database utilizzato, numero di schede, portata della digitalizzazione, ecc.',
					[Language.NL]: '- gebruikte database, aantal archiefstukken, omvang digitalisering, etc.'
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
			[Language.NL]: 'Juridisch & financieel'
		},
		options: {
			[WorkerType.FINANCIAL_ADMINISTRATOR]: {
				label: {
					[Language.EN]: 'Financial administrator',
					[Language.FR]: 'Directeur·ice financier·ère',
					[Language.IT]: 'Amministratorə finanziariə',
					[Language.NL]: 'Financieel beheerder'
				},
				detail: {
					[Language.EN]: '- departments managed, software used, etc.',
					[Language.FR]: '- départements gérés, logiciels utilisés, etc.',
					[Language.IT]: '- dipartimenti gestiti, software utilizzati, ecc.',
					[Language.NL]: '- afdelingen onder beheer, gebruikte software, etc.'
				},
				id: '5207201'
			},
			[WorkerType.ACCOUNTANT]: {
				label: {
					[Language.EN]: 'Accountant',
					[Language.FR]: 'Comptable',
					[Language.IT]: 'Contabile',
					[Language.NL]: 'Accountant'
				},
				detail: {
					[Language.EN]: '- bookkeeping volume, reconciliations, financial controls, etc..',
					[Language.FR]: '- volume de comptabilité, rapprochements, contrôles financiers, etc.',
					[Language.IT]: '- volume di contabilità, riconciliazioni, controlli finanziari, ecc.',
					[Language.NL]: '- volume boekhouding, afstemmingen, financiële controle, etc.'
				},
				id: '5207202'
			},
			[WorkerType.ART_SALES_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Sales manager',
					[Language.FR]: 'Chargé·e des ventes',
					[Language.IT]: 'Responsabile vendite',
					[Language.NL]: 'Verkoopmanager'
				},
				detail: {
					[Language.EN]: '- sales volume, client types, artists represented, etc.',
					[Language.FR]: '- volume des ventes, clients, artistes représentés, etc.',
					[Language.IT]:
						'- volume delle vendite, tipologia di clienti, artisti rappresentati, ecc.',
					[Language.NL]: '- volume verkoop, type klant, vertegenwoordigde kunstenaars, etc.'
				},
				id: '5207203'
			},
			[WorkerType.GRANTS_MANAGER]: {
				label: {
					[Language.EN]: 'Grants manager',
					[Language.FR]: 'Chargé·e de mécenat',
					[Language.IT]: 'Responsabile bandi e finanziamenti',
					[Language.NL]: 'Subsidiemanager'
				},
				detail: {
					[Language.EN]: '- grants written, awarded amounts, reporting tasks, etc.',
					[Language.FR]: '- subventions rédigées, montants attribués, missions de reporting, etc.',
					[Language.IT]: '— bandi scritti, importi ottenuti, attività di rendicontazione, ecc.',
					[Language.NL]: '— geschreven subsidieaanvragen, toekenningen/bedragen, taken rapportage, etc'
				},
				id: '5207204'
			},
			[WorkerType.ART_ADVISOR]: {
				label: {
					[Language.EN]: 'Art advisor',
					[Language.FR]: 'Art advisor',
					[Language.IT]: 'Art advisor',
					[Language.NL]: 'Kunstadviseur'
				},
				detail: {
					[Language.EN]: '- client base, collection types, acquisitions recommended, etc.',
					[Language.FR]: '- base de clients, types de collections, acquisitions recommandées, etc.',
					[Language.IT]: '- base clienti, tipologie di collezioni, acquisizioni raccomandate, ecc.',
					[Language.NL]: '- klantbestand, types collecties, acquisitie aanbevelingen, etc.'
				},
				id: '5207205'
			},
			[WorkerType.STRATEGY_POLICY_OFFICER]: {
				label: {
					[Language.EN]: 'Strategy / Policy officer',
					[Language.FR]: 'Responsable de la stratégie',
					[Language.IT]: 'Responsabile strategia / policy',
					[Language.NL]: 'Beleids/strategie medewerker'
				},
				detail: {
					[Language.EN]: '- policies developed, research areas, stakeholder coordination, etc.',
					[Language.FR]:
						'- politiques élaborées, axes de recherche, missions de coordination, etc.',
					[Language.IT]: '- policy sviluppate, aree di ricerca, coordinamento stakeholder, ecc.',
					[Language.NL]: '- ontwikkeld beleid, onderzoeksgebieden, coördinatie stakeholders, etc.'
				},
				id: '5207206'
			},
			[WorkerType.DEVELOPMENT_DIRECTOR]: {
				label: {
					[Language.EN]: 'Development director',
					[Language.FR]: 'Responsable du développement',
					[Language.IT]: 'Direttorə sviluppo',
					[Language.NL]: 'Directeur ontwikkeling'
				},
				detail: {
					[Language.EN]: '- fundraising goals, target donors, team size, etc.',
					[Language.FR]:
						'- objectifs de collecte de fonds, portefeuille de donateurs, taille de l’équipe, etc.',
					[Language.IT]: '- obiettivi di fundraising, donatori target, dimensione del team, ecc.',
					[Language.NL]: '- doelen fondsenwerving, doelgroep donateurs, team grootte, etc.'
				},
				id: '5207207'
			},
			[WorkerType.FUNDRAISING_OFFICER]: {
				label: {
					[Language.EN]: 'Fundraising officer',
					[Language.FR]: 'Responsable des financements',
					[Language.IT]: 'Responsabile fundraising',
					[Language.NL]: 'Fondsenwerving medewerker'
				},
				detail: {
					[Language.EN]: '- campaigns, donor cultivation, grant success rate, etc.',
					[Language.FR]:
						'- campagnes, fidélisation des donateurs, taux de réussite des subventions, etc.',
					[Language.IT]: '- campagne, coltivazione dei donatori, tasso di successo dei bandi, ecc.',
					[Language.NL]: '- campagnes, donateurswerving, succespercentage van subsidieaanvragen, etc.'
				},
				id: '5207208'
			},
			[WorkerType.SPONSORSHIP_COORDINATOR]: {
				label: {
					[Language.EN]: 'Sponsorship coordinator',
					[Language.FR]: 'Responsable des partenariats',
					[Language.IT]: 'Coordinatorə sponsorizzazioni',
					[Language.NL]: 'Sponsorcoördinator'
				},
				detail: {
					[Language.EN]: '- corporate partners, contracts, sponsorship value, etc.',
					[Language.FR]: '- partenaires, contrats, valeur des partenariats, etc.',
					[Language.IT]: '- partner aziendali, contratti, valore delle sponsorizzazioni, ecc.',
					[Language.NL]: '- bedrijfspartnerschappen, contracten, sponsorwaarde, etc.'
				},
				id: '5207209'
			},
			[WorkerType.MEMBERSHIP_PATRON_RELATIONS_MANAGER]: {
				label: {
					[Language.EN]: 'Membership / Patron relations manager',
					[Language.FR]: 'Responsable du mécénat',
					[Language.IT]: 'Responsabile relazioni con membri',
					[Language.NL]: 'Manager klantrelaties'
				},
				detail: {
					[Language.EN]: '- membership tiers, events, donor communication, etc.',
					[Language.FR]:
						'- objectifs d’adhésion, événements, communication avec les donateurs, etc.',
					[Language.IT]: 'livelli di membership, eventi, comunicazione con i donatori, ecc.',
					[Language.NL]: '- lidmaatschapsniveaus, evenementen, communicatie met donateurs, etc.'
				},
				id: '5207210'
			},
			[WorkerType.LEGAL_ADVISOR]: {
				label: {
					[Language.EN]: 'Legal advisor',
					[Language.FR]: 'Conseiller·ère juridique',
					[Language.IT]: 'Consulente legale',
					[Language.NL]: 'Juridisch adviseur'
				},
				detail: {
					[Language.EN]: '- contract types, compliance issues, legal areas covered, etc.',
					[Language.FR]:
						'- types de contrats, questions de conformité, domaines juridiques couverts, etc.',
					[Language.IT]:
						'- tipologie di contratto, questioni di conformità, aree legali coperte, ecc.',
					[Language.NL]: '- Types contracten, nalevingskwesties, dekking juridische gebieden, etc.'
				},
				id: '5207211'
			},
			[WorkerType.ART_LAWYER]: {
				label: {
					[Language.EN]: 'Art lawyer',
					[Language.FR]: 'Avocat·e spécialisé·e',
					[Language.IT]: 'Avvocatə specializzatə in diritto dell’arte',
					[Language.NL]: 'Juridisch kunstexpert'
				},
				detail: {
					[Language.EN]: '- IP cases, contract negotiations, artist rights advocacy, etc.',
					[Language.FR]:
						'- cas de propriété intellectuelle, négociations contractuelles, défense des droits des artistes, etc.',
					[Language.IT]:
						'- casi di proprietà intellettuale, negoziazione contratti, tutela dei diritti degli artisti, ecc.',
					[Language.NL]: '- intellectueel Eigendom zaken, contractonderhandelingen, belangenbehartiging kunstenaars, etc.'
				},
				id: '5207212'
			},
			[WorkerType.CONTRACTS_MANAGER]: {
				label: {
					[Language.EN]: 'Contracts manager',
					[Language.FR]: 'Gestionnaire des contrats',
					[Language.IT]: 'Responsabile contratti',
					[Language.NL]: 'Contractbeheerder'
				},
				detail: {
					[Language.EN]: '- contract volume, types drafted, approval workflows, etc.',
					[Language.FR]:
						'- volume de contrats, missions de rédaction, processus d’approbation, etc.',
					[Language.IT]: '- volume di contratti, tipologie redatte, flussi di approvazione, ecc.',
					[Language.NL]: '- volume contracten, types contractopstellingen, goedkeuringsprocessen, etc.'
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
