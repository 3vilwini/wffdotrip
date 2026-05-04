import { Language } from '$lib/content/country';

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
		[Language.EN]: 'Group exhibition',
		[Language.FR]: 'Exposition collective',
		[Language.IT]: 'Mostra collettiva',
		[Language.NL]: 'Groepstentoonstelling'
	},
	[ProjectType.SOLO_EXHIBITION]: {
		[Language.EN]: 'Solo exhibition',
		[Language.FR]: 'Solo show',
		[Language.IT]: 'Mostra personale',
		[Language.NL]: 'Solo tentoonstelling'
	},
	[ProjectType.FILM_SCREENING]: {
		[Language.EN]: 'Film screening',
		[Language.FR]: 'Projection',
		[Language.IT]: 'Video proiezione',
		[Language.NL]: 'Filmvertoning'
	},
	[ProjectType.PUBLIC_READING]: {
		[Language.EN]: 'Public reading',
		[Language.FR]: 'Lecture',
		[Language.IT]: 'Lettura pubblica',
		[Language.NL]: 'Publieke lezing'
	},
	[ProjectType.CONFERENCE]: {
		[Language.EN]: 'Conference',
		[Language.FR]: 'Conférence',
		[Language.IT]: 'Conferenza',
		[Language.NL]: 'Conferentie'
	},
	[ProjectType.PUBLIC_TALK]: {
		[Language.EN]: 'Public talk',
		[Language.FR]: 'Prise de parole publique',
		[Language.IT]: 'Incontro pubblico',
		[Language.NL]: 'Publiek gesprek'
	},
	[ProjectType.CURATORIAL_TALK]: {
		[Language.EN]: 'Curatorial talk',
		[Language.FR]: 'Intervention curatoriale',
		[Language.IT]: 'Intervento curatoriale',
		[Language.NL]: 'Curatorieel gesprek'
	},
	[ProjectType.VISITING_ARTIST_TUTORIAL]: {
		[Language.EN]: 'Visiting artist tutorial',
		[Language.FR]: 'Atelier avec un·e artiste invité·e',
		[Language.IT]: 'Artista ospite – tutoraggio ',
		[Language.NL]: 'Gastkunstenaar (tutorial)'
	},
	[ProjectType.VISITING_ARTIST_TALK]: {
		[Language.EN]: 'Visiting artist talk',
		[Language.FR]: 'Conférence avec un·e artiste invité·e',
		[Language.IT]: 'Artista ospite – talk',
		[Language.NL]: 'Gastkunstenaar (gesprek)'
	},
	[ProjectType.LIVE_PERFORMANCE]: {
		[Language.EN]: 'Live performance',
		[Language.FR]: 'Performance',
		[Language.IT]: 'Performance dal vivo',
		[Language.NL]: 'Live performance'
	},
	[ProjectType.COMMISSIONED_PERFORMANCE]: {
		[Language.EN]: 'Commissioned performance',
		[Language.FR]: 'Commande de performance',
		[Language.IT]: 'Performance su commissione',
		[Language.NL]: 'Performance in opdracht'
	},
	[ProjectType.COMMISSIONED_WORK]: {
		[Language.EN]: 'Commissioned work',
		[Language.FR]: 'Commande d’œuvre',
		[Language.IT]: 'Opera su commissione',
		[Language.NL]: 'Werk in opdracht'
	},
	[ProjectType.REPLICA]: {
		[Language.EN]: 'Replica',
		[Language.FR]: 'Édition d’œuvre',
		[Language.IT]: 'Replica',
		[Language.NL]: 'Replica'
	},
	[ProjectType.STUDIO_VISIT]: {
		[Language.EN]: 'Studio visit',
		[Language.FR]: "Visite d’atelier",
		[Language.IT]: 'Visita in studio',
		[Language.NL]: 'Atelierbezoek'
	},
	[ProjectType.CATALOG_TEXT]: {
		[Language.EN]: 'Catalog text',
		[Language.FR]: 'Texte de catalogue',
		[Language.IT]: 'Testo per catalogo',
		[Language.NL]: 'Catalogus tekst'
	},
	[ProjectType.PRESENTATION_TEXT]: {
		[Language.EN]: 'Presentation text',
		[Language.FR]: 'Texte de présentation',
		[Language.IT]: 'Testo di presentazione',
		[Language.NL]: 'Presentatie tekst'
	},
	[ProjectType.CRITICAL_REVIEW]: {
		[Language.EN]: 'Critical review',
		[Language.FR]: 'Critique',
		[Language.IT]: 'Recensione',
		[Language.NL]: 'Kritische bespreking'
	},
	[ProjectType.MONOGRAPHIC_ESSAY]: {
		[Language.EN]: 'Monographic essay',
		[Language.FR]: 'Essai monographique',
		[Language.IT]: 'Saggio monografico',
		[Language.NL]: 'Monografische essay'
	},
	[ProjectType.ARTWORK_WALL_TEXT]: {
		[Language.EN]: 'Artwork wall text',
		[Language.FR]: 'Notice d’œuvre",
		[Language.IT]: 'Scheda opera',
		[Language.NL]: 'Kunstwerk muurtekst'
	},
	[ProjectType.CURATORIAL_TEXT]: {
		[Language.EN]: 'Curatorial Text',
		[Language.FR]: 'Texte de commissariat',
		[Language.IT]: 'Testo curatoriale',
		[Language.NL]: 'Curatoriële tekst'
	},
	[ProjectType.LITERARY_COMMISSION]: {
		[Language.EN]: 'Literary commission',
		[Language.FR]: 'Commande littéraire',
		[Language.IT]: 'Commissione letteraria',
		[Language.NL]: 'Literaire opdracht'
	},
	[ProjectType.POETRY_COMMISSION]: {
		[Language.EN]: 'Poetry commission',
		[Language.FR]: 'Commande de poésie',
		[Language.IT]: 'Commissione poetica',
		[Language.NL]: 'Poëzieopdracht'
	},
	[ProjectType.TEXT_REPRINT]: {
		[Language.EN]: 'Text reprint',
		[Language.FR]: 'Réédition de texte',
		[Language.IT]: 'Ristampa di testo',
		[Language.NL]: 'Tekst herdruk'
	},
	[ProjectType.PODCAST_FEATURE]: {
		[Language.EN]: 'Podcast feature',
		[Language.FR]: 'Intervention dans un podcast',
		[Language.IT]: 'Partecipazione a podcast',
		[Language.NL]: 'Podcast functie'
	},
	[ProjectType.PODCAST_COMMISSION]: {
		[Language.EN]: 'Podcast commission',
		[Language.FR]: 'Commande de podcast',
		[Language.IT]: 'Podcast su commissione',
		[Language.NL]: 'Podcastopdracht'
	},
	[ProjectType.SKILLS_WORKSHOP]: {
		[Language.EN]: 'Skills workshop',
		[Language.FR]: 'Atelier pratique',
		[Language.IT]: 'Workshop',
		[Language.NL]: 'Vaardigheden workshop)'
	},
	[ProjectType.PANEL_DISCUSSION_PARTICIPATION]: {
		[Language.EN]: 'Panel discussion participation',
		[Language.FR]: 'Participation à une table ronde',
		[Language.IT]: 'Partecipazione a tavola rotonda',
		[Language.NL]: 'Deelname (aan een) paneldiscussie'
	},
	[ProjectType.PANEL_DISCUSSION_MODERATION]: {
		[Language.EN]: 'Panel discussion moderation',
		[Language.FR]: "Modération d'une table ronde",
		[Language.IT]: 'Moderazione di tavola rotonda',
		[Language.NL]: 'Moderatie (van een) paneldiscussie'
	},
	[ProjectType.EDITING_PROJECT]: {
		[Language.EN]: 'Editing project',
		[Language.FR]: "Projet éditorial",
		[Language.IT]: 'Progetto editoriale / editing',
		[Language.NL]: 'Editing project'
	},
	[ProjectType.CATALOG_TRANSLATION]: {
		[Language.EN]: 'Catalog translation',
		[Language.FR]: 'Traduction de catalogue',
		[Language.IT]: 'Traduzione di catalogo',
		[Language.NL]: 'Catalog Translation (NL)'
	},
	[ProjectType.TEXT_TRANSLATION]: {
		[Language.EN]: 'Text translation',
		[Language.FR]: 'Traduction de texte',
		[Language.IT]: 'Traduzione di testi',
		[Language.NL]: 'Tekstvertaling'
	},
	[ProjectType.LITERARY_TRANSLATION]: {
		[Language.EN]: 'Literary translation',
		[Language.FR]: 'Traduction littéraire',
		[Language.IT]: 'Traduzione letteraria',
		[Language.NL]: 'Literaire vertaling'
	},
	[ProjectType.POETRY_TRANSLATION]: {
		[Language.EN]: 'Poetry translation',
		[Language.FR]: 'Traduction de poésie',
		[Language.IT]: 'Traduzione poetica',
		[Language.NL]: 'Poëzievertaling'
	},
	[ProjectType.SUBTITLING]: {
		[Language.EN]: 'Subtitling',
		[Language.FR]: 'Sous-titrage',
		[Language.IT]: 'Sottotitolazione',
		[Language.NL]: 'Ondertiteling'
	},
	[ProjectType.COPYWRITING_TASK]: {
		[Language.EN]: 'Copywriting task',
		[Language.FR]: 'Conception-rédaction ',
		[Language.IT]: 'Attività di copywriting',
		[Language.NL]: 'Opdracht voor het schrijven van teksten'
	},
	[ProjectType.GHOSTWRITING_PROJECT]: {
		[Language.EN]: 'Ghostwriting project',
		[Language.FR]: 'Collaboration éditoriale',
		[Language.IT]: 'Progetto di ghostwriting',
		[Language.NL]: 'Ghostwriting-project'
	},
	[ProjectType.ARCHIVE_BUILD]: {
		[Language.EN]: 'Archive build',
		[Language.FR]: "Mission d'archivage",
		[Language.IT]: 'Costruzione di archivio',
		[Language.NL]: 'Aangelegd archief'
	},
	[ProjectType.ARCHIVE_RESEARCH]: {
		[Language.EN]: 'Archive research',
		[Language.FR]: "Recherche archivistique",
		[Language.IT]: 'Ricerca d’archivio',
		[Language.NL]: 'Archiefonderzoek'
	},
	[ProjectType.BIBLIOGRAPHY_BUILD]: {
		[Language.EN]: 'Bibliography build',
		[Language.FR]: 'Recherche bibliographique',
		[Language.IT]: 'Costruzione bibliografia',
		[Language.NL]: 'Samengestelde bibliografie'
	},
	[ProjectType.CATALOG_RESEARCH]: {
		[Language.EN]: 'Catalog research',
		[Language.FR]: 'Recherche documentaire',
		[Language.IT]: 'Ricerca per catalogo',
		[Language.NL]: 'Catalogus onderzoek'
	},
	[ProjectType.COLLECTION_ACCESS]: {
		[Language.EN]: 'Collection access',
		[Language.FR]: 'Valorisation de collection',
		[Language.IT]: 'Accesso a collezioni',
		[Language.NL]: 'Toegang tot de collectie'
	},
	[ProjectType.METADATA_ENTRY]: {
		[Language.EN]: 'Metadata entry',
		[Language.FR]: 'Saisie de métadonnées',
		[Language.IT]: 'Inserimento metadata',
		[Language.NL]: 'Metadata invoering'
	},
	[ProjectType.RESEARCH_ASSISTANCE]: {
		[Language.EN]: 'Research assistance',
		[Language.FR]: 'Soutien de recherche',
		[Language.IT]: 'Assistenza alla ricerca',
		[Language.NL]: 'Onderzoeksassistent'
	},
	[ProjectType.PUBLIC_TOUR]: {
		[Language.EN]: 'Public tour',
		[Language.FR]: 'Visite publique',
		[Language.IT]: 'Visita pubblica',
		[Language.NL]: 'Publieke rondleiding'
	},
	[ProjectType.GUIDED_VISIT]: {
		[Language.EN]: 'Guided visit',
		[Language.FR]: 'Visite guidée',
		[Language.IT]: 'Visita guidata',
		[Language.NL]: 'Rondleiding'
	},
	[ProjectType.AUDIENCE_EDUCATION]: {
		[Language.EN]: 'Audience education',
		[Language.FR]: 'Médiation éducative',
		[Language.IT]: 'Educazione del pubblico',
		[Language.NL]: 'Publiekseducatie'
	},
	[ProjectType.CULTURAL_OUTREACH_SESSION]: {
		[Language.EN]: 'Cultural outreach session',
		[Language.FR]: 'Médiation hors-les-murs',
		[Language.IT]: 'Attività di mediazione culturale',
		[Language.NL]: 'Culturele outreach-sessie'
	},
	[ProjectType.OUTREACH_IN_SCHOOLS]: {
		[Language.EN]: 'Outreach in schools',
		[Language.FR]: 'Intervention en établissement scolaire',
		[Language.IT]: 'Intervento in istituto scolastico',
		[Language.NL]: 'Voorlichting op scholen'
	},
	[ProjectType.WORKSHOP_DESIGN_AND_FACILITATION]: {
		[Language.EN]: 'Workshop design & facilitation',
		[Language.FR]: "Conception & animation d'ateliers",
		[Language.IT]: 'Progettazione & conduzione laboratori',
		[Language.NL]: 'Workshop ontwerp & begeleiding'
	},
	[ProjectType.PERFORMANCE]: {
		[Language.EN]: 'Performance',
		[Language.FR]: 'Performance',
		[Language.IT]: 'Performance',
		[Language.NL]: 'Performance'
	},
	[ProjectType.EVENT]: {
		[Language.EN]: 'Event',
		[Language.FR]: 'Événement',
		[Language.IT]: 'Evento',
		[Language.NL]: 'Event'
	},
	[ProjectType.VIDEO_WORK]: {
		[Language.EN]: 'Artwork — Video',
		[Language.FR]: 'Œuvre — Vidéo',
		[Language.IT]: 'Opera — Video',
		[Language.NL]: 'Kunstwerk — Video'
	},
	[ProjectType.SCREENING]: {
		[Language.EN]: 'Screening',
		[Language.FR]: 'Projection',
		[Language.IT]: 'Proiezione',
		[Language.NL]: 'Vertoning'
	},
	[ProjectType.PODCAST]: {
		[Language.EN]: 'Podcast',
		[Language.FR]: 'Podcast',
		[Language.IT]: 'Podcast',
		[Language.NL]: 'Podcast'
	},
	[ProjectType.ARCHIVE]: {
		[Language.EN]: 'Archive',
		[Language.FR]: 'Archive',
		[Language.IT]: 'Archivio',
		[Language.NL]: 'Archief'
	},
	[ProjectType.DIGITAL_NEW_MEDIA_WORK]: {
		[Language.EN]: 'Artwork — Digital / new media',
		[Language.FR]: 'Œuvre — Nouveaux médias',
		[Language.IT]: 'Opera — Digitale / new media',
		[Language.NL]: 'Kunstwerk — Digitaal / nieuwe media'
	},
	[ProjectType.SCULPTURE]: {
		[Language.EN]: 'Artwork — Sculpture',
		[Language.FR]: 'Œuvre — Sculpture',
		[Language.IT]: 'Opera — Scultura',
		[Language.NL]: 'Kunstwerk — Sculptuur'
	},
	[ProjectType.PAINTING]: {
		[Language.EN]: 'Artwork — Painting/wall-based',
		[Language.FR]: 'Œuvre — Peinture / murale',
		[Language.IT]: 'Opera — Pittura / murale',
		[Language.NL]: 'Kunstwerk — Schilderij / muurgebaseerd'
	},
	[ProjectType.INSTALLATION]: {
		[Language.EN]: 'Artwork — Installation',
		[Language.FR]: 'Œuvre — Installation',
		[Language.IT]: 'Opera — Installazione',
		[Language.NL]: 'Kunstwerk — Installatie'
	},
	[ProjectType.TECHNICAL_SETUP]: {
		[Language.EN]: 'Technical setup',
		[Language.FR]: 'Installation technique',
		[Language.IT]: 'Allestimento tecnico',
		[Language.NL]: 'Technische set-up'
	},
	[ProjectType.PROJECT_COORDINATION]: {
		[Language.EN]: 'Project coordination',
		[Language.FR]: 'Coordination de projet',
		[Language.IT]: 'Coordinamento del progetto',
		[Language.NL]: 'Projectcoördinatie'
	},
	[ProjectType.SUPPORT_AND_CONSULTING]: {
		[Language.EN]: 'Support & consulting',
		[Language.FR]: 'Suivi & conseil ',
		[Language.IT]: 'Supporto & consulenza',
		[Language.NL]: 'Ondersteuning & advies'
	},
	[ProjectType.TOUR_PLANNING]: {
		[Language.EN]: 'Tour planning',
		[Language.FR]: 'Conception de parcours de visite',
		[Language.IT]: 'Progettazione del percorso di visita',
		[Language.NL]: 'Rondleidingsplanning'
	},
	[ProjectType.SCHOOL_INTERVENTION]: {
		[Language.EN]: 'School intervention',
		[Language.FR]: 'Intervention en établissement scolaire',
		[Language.IT]: 'Intervento in istituto scolastico',
		[Language.NL]: 'School interventie'
	},
	[ProjectType.CONFERENCE_MODERATION]: {
		[Language.EN]: 'Conference moderation',
		[Language.FR]: 'Modération de conférence',
		[Language.IT]: 'Moderazione di conferenze',
		[Language.NL]: 'Conferentie moderatie'
	},
	[ProjectType.EDUCATIONAL_RESOURCE_WRITING]: {
		[Language.EN]: 'Educational resource writing',
		[Language.FR]: 'Écriture de dossier pédagogique',
		[Language.IT]: 'Redazione di dossier pedagogico',
		[Language.NL]: 'Het schrijven van lesmateriaal'
	},
	[ProjectType.MEDIATION_TEXT]: {
		[Language.EN]: 'Mediation text',
		[Language.FR]: 'Écriture de livret de salle',
		[Language.IT]: 'Redazione di guida di sala',
		[Language.NL]: 'Tekst over bemiddeling'
	},
	[ProjectType.DEVELOPMENT_OF_MEDIATION_TOOLS]: {
		[Language.EN]: 'Development of mediation tools',
		[Language.FR]: "Développement d'outils de médiation",
		[Language.IT]: 'Sviluppo di strumenti di mediazione',
		[Language.NL]: 'Ontwikkeling van bemiddelingsinstrumenten'
	},
	[ProjectType.OUTREACH_PROJECT_PLANNING]: {
		[Language.EN]: 'Outreach project planning',
		[Language.FR]: 'Ingénierie culturelle hors-les-murs',
		[Language.IT]: 'Ingegneria culturale fuori sede',
		[Language.NL]: 'Planning van voorlichtingsprojecten'
	},
	[ProjectType.RECEPTION_AND_SUPPORT_FOR_GROUP_VISITS]: {
		[Language.EN]: 'Reception & support for group visits',
		[Language.FR]: 'Accueil & accompagnement de groupes',
		[Language.IT]: 'Accoglienza & accompagnamento gruppi',
		[Language.NL]: 'Ontvangst & ondersteuning bij groepsbezoeken'
	},
	[ProjectType.MEDIATOR_PEER_TRAINING]: {
		[Language.EN]: 'Mediator peer training',
		[Language.FR]: 'Formation de médiateur·ices',
		[Language.IT]: 'Formazione di mediatori',
		[Language.NL]: 'Peer-to-peer training'
	},
	[ProjectType.EDUCATIONAL_COORDINATION]: {
		[Language.EN]: 'Educational coordination',
		[Language.FR]: 'Coordination pédagogique',
		[Language.IT]: 'Coordinamento pedagogico',
		[Language.NL]: 'Onderwijscoördinatie'
	},
	[ProjectType.COMMUNITY_WORKSHOP]: {
		[Language.EN]: 'Community workshop',
		[Language.FR]: 'Atelier communautaire',
		[Language.IT]: 'Workshop di gruppo',
		[Language.NL]: 'Community Workshop'
	},
	[ProjectType.VISITOR_SUPPORT]: {
		[Language.EN]: 'Visitor support',
		[Language.FR]: 'Accompagnement à la visite',
		[Language.IT]: 'Supporto ai visitatori',
		[Language.NL]: 'Bezoekersondersteuning'
	},
	[ProjectType.FRONT_OF_HOUSE]: {
		[Language.EN]: 'Front of house',
		[Language.FR]: 'Accueil',
		[Language.IT]: 'Accoglienza',
		[Language.NL]: 'Gastenservice'
	},
	[ProjectType.TICKETING_SERVICE]: {
		[Language.EN]: 'Ticketing service',
		[Language.FR]: 'Billetterie',
		[Language.IT]: 'Servizio biglietteria',
		[Language.NL]: 'Ticketverkoop'
	},
	[ProjectType.HOSTING_DUTIES]: {
		[Language.EN]: 'Hosting duties',
		[Language.FR]: "Accueil événementiel",
		[Language.IT]: 'Mansioni di ospitalità',
		[Language.NL]: 'Gastheer taken'
	},
	[ProjectType.ARCHIVE_RETRIEVAL]: {
		[Language.EN]: 'Archive retrieval',
		[Language.FR]: "Récupération d'archives",
		[Language.IT]: 'Recupero materiali d’archivio',
		[Language.NL]: 'Archiefopvraging'
	},
	[ProjectType.EXHIBITION_PRODUCTION]: {
		[Language.EN]: 'Exhibition production',
		[Language.FR]: "Production d'exposition",
		[Language.IT]: 'Produzione della mostra',
		[Language.NL]: 'Tentoonstellingsproductie'
	},
	[ProjectType.EVENT_PRODUCTION]: {
		[Language.EN]: 'Event production',
		[Language.FR]: "Production événementielle",
		[Language.IT]: 'Produzione di eventi',
		[Language.NL]: 'Event productie'
	},
	[ProjectType.RESIDENCY_COORDINATION]: {
		[Language.EN]: 'Residency coordination',
		[Language.FR]: 'Coordination de résidence',
		[Language.IT]: 'Coordinamento della residenza',
		[Language.NL]: 'Residencycoördinatie'
	},
	[ProjectType.PROGRAMME_COORDINATION]: {
		[Language.EN]: 'Programme coordination',
		[Language.FR]: 'Coordination de programme',
		[Language.IT]: 'Coordinamento del programma',
		[Language.NL]: 'Programmacoördinatie'
	},
	[ProjectType.COLLECTION_MANAGEMENT]: {
		[Language.EN]: 'Collection management',
		[Language.FR]: 'Gestion des collections',
		[Language.IT]: 'Gestione delle collezioni',
		[Language.NL]: 'Collectiebeheer'
	},
	[ProjectType.ARTIST_LIAISON]: {
		[Language.EN]: 'Artist liaison',
		[Language.FR]: 'Suivi des relations artistes',
		[Language.IT]: 'Relazioni con gli artisti',
		[Language.NL]: 'Kunstenaarsbemiddelaar'
	},
	[ProjectType.BUDGET_MANAGEMENT]: {
		[Language.EN]: 'Budget management',
		[Language.FR]: 'Gestion budgétaire',
		[Language.IT]: 'Gestione del budget',
		[Language.NL]: 'Budgetbeheer'
	},
	[ProjectType.GRANT_WRITING]: {
		[Language.EN]: 'Grant writing',
		[Language.FR]: 'Rédaction de subventions',
		[Language.IT]: 'Montage de dossiers de subvention',
		[Language.NL]: 'Domande di finanziamento'
	},
	[ProjectType.PARTNERSHIP_DEVELOPMENT]: {
		[Language.EN]: 'Partnership development',
		[Language.FR]: 'Développement de partenariats',
		[Language.IT]: 'Sviluppo di partnership',
		[Language.NL]: 'Ontwikkeling van partnerschappen'
	},
	[ProjectType.VENDOR_MANAGEMENT]: {
		[Language.EN]: 'Vendor management',
		[Language.FR]: 'Gestion des prestataires',
		[Language.IT]: 'Gestione dei fornitori',
		[Language.NL]: 'Leveranciersbeheer'
	},
	[ProjectType.TEAM_MANAGEMENT]: {
		[Language.EN]: 'Team management',
		[Language.FR]: "Management d'équipe",
		[Language.IT]: 'Gestione del team',
		[Language.NL]: 'Teammanagement'
	},
	[ProjectType.HR_AND_RECRUITMENT]: {
		[Language.EN]: 'HR & recruitment',
		[Language.FR]: 'RH & recrutement',
		[Language.IT]: 'Risorse umane & selezione',
		[Language.NL]: 'HR & Werving'
	},
	[ProjectType.SCHEDULING_AND_PLANNING]: {
		[Language.EN]: 'Scheduling & planning',
		[Language.FR]: 'Planification',
		[Language.IT]: 'Pianificazione',
		[Language.NL]: 'Planning & organisatie'
	},
	[ProjectType.REPORTING]: {
		[Language.EN]: 'Reporting',
		[Language.FR]: 'Reporting',
		[Language.IT]: 'Reportistica',
		[Language.NL]: 'Verslaglegging'
	},
	[ProjectType.CONTRACT_DRAFTING]: {
		[Language.EN]: 'Contract drafting',
		[Language.FR]: 'Rédaction de contrats',
		[Language.IT]: 'Redazione di contratti',
		[Language.NL]: 'Opstellen van contracten'
	},
	[ProjectType.STRATEGIC_PLANNING]: {
		[Language.EN]: 'Strategic planning',
		[Language.FR]: 'Planification stratégique',
		[Language.IT]: 'Pianificazione strategica',
		[Language.NL]: 'Strategische planning'
	},
	[ProjectType.ADMINISTRATIVE_SUPPORT]: {
		[Language.EN]: 'Administrative support',
		[Language.FR]: 'Soutien administratif',
		[Language.IT]: 'Supporto amministrativo',
		[Language.NL]: 'Administratieve ondersteuning'
	},
	[ProjectType.ARTISTIC_SUPPORT]: {
		[Language.EN]: 'Artistic support',
		[Language.FR]: 'Soutien artistique',
		[Language.IT]: 'Supporto artistico',
		[Language.NL]: 'Artistieke ondersteuning'
	},
	[ProjectType.PUBLICATION]: {
		[Language.EN]: 'Publication',
		[Language.FR]: 'Publication',
		[Language.IT]: 'Pubblicazione',
		[Language.NL]: 'Publicatie'
	},
	[ProjectType.PHOTO_DOCUMENTATION]: {
		[Language.EN]: 'Photo documentation',
		[Language.FR]: 'Documentation photographique',
		[Language.IT]: 'Documentazione fotografica',
		[Language.NL]: 'Fotodocumentatie'
	},
	[ProjectType.VIDEO_CAPTURE]: {
		[Language.EN]: 'Video capture',
		[Language.FR]: 'Captation vidéo',
		[Language.IT]: 'Riprese video',
		[Language.NL]: 'Video-opname'
	},
	[ProjectType.CONTENT_CREATION]: {
		[Language.EN]: 'Content creation',
		[Language.FR]: 'Création de contenu',
		[Language.IT]: 'Creazione di contenuti',
		[Language.NL]: 'Het maken van content'
	},
	[ProjectType.SOCIAL_STRATEGY]: {
		[Language.EN]: 'Social Strategy',
		[Language.FR]: 'Stratégie réseaux sociaux',
		[Language.IT]: 'Strategia social',
		[Language.NL]: 'Sociale strategie'
	},
	[ProjectType.DIGITAL_MANAGEMENT]: {
		[Language.EN]: 'Digital management',
		[Language.FR]: 'Gestion de la communication digitale',
		[Language.IT]: 'Gestione digitale',
		[Language.NL]: 'Digitaal beheer'
	},
	[ProjectType.PRESS_OUTREACH]: {
		[Language.EN]: 'Press outreach',
		[Language.FR]: 'Relation presse',
		[Language.IT]: 'Ufficio stampa / relazioni con la stampa',
		[Language.NL]: 'Persvoorlichting'
	},
	[ProjectType.MARKETING_CAMPAIGN]: {
		[Language.EN]: 'Marketing campaign',
		[Language.FR]: 'Campagne marketing',
		[Language.IT]: 'Campagna di marketing',
		[Language.NL]: 'Marketingcampagne'
	},
	[ProjectType.AUDIENCE_STRATEGY]: {
		[Language.EN]: 'Audience strategy',
		[Language.FR]: "Stratégie d'engagement des publics",
		[Language.IT]: 'Strategia di pubblico',
		[Language.NL]: 'Doelgroepstrategie'
	},
	[ProjectType.COMMUNITY_STRATEGY]: {
		[Language.EN]: 'Community strategy',
		[Language.FR]: 'Gestion des communautés',
		[Language.IT]: 'Strategia di comunità',
		[Language.NL]: 'Gemeenschapsstrategie'
	},
	[ProjectType.EXHIBITION]: {
		[Language.EN]: 'Exhibition',
		[Language.FR]: 'Exposition',
		[Language.IT]: 'Allestimento di mostra',
		[Language.NL]: 'Tentoonstelling'
	},
	[ProjectType.DIGITAL_MIGRATION]: {
		[Language.EN]: 'Digital migration',
		[Language.FR]: 'Migration numérique',
		[Language.IT]: 'Migrazione digitale',
		[Language.NL]: 'Digitale migratie'
	},
	[ProjectType.ARCHIVE_DIGITISATION]: {
		[Language.EN]: 'Archive digitisation',
		[Language.FR]: "Numérisation d’archives",
		[Language.IT]: 'Digitalizzazione d’archivio',
		[Language.NL]: 'Digitalisering van archieven'
	},
	[ProjectType.SYSTEM_DEPLOYMENT]: {
		[Language.EN]: 'System deployment',
		[Language.FR]: 'Déploiement de système',
		[Language.IT]: 'Distribuzione di sistema',
		[Language.NL]: 'Systeemtoepassing'
	},
	[ProjectType.BUILDING_MAINTENANCE]: {
		[Language.EN]: 'Building maintenance',
		[Language.FR]: 'Maintenance du bâtiment',
		[Language.IT]: 'Manutenzione dell’edificio',
		[Language.NL]: 'Gebouwbeheer'
	},
	[ProjectType.SECURITY_OPERATIONS]: {
		[Language.EN]: 'Security operations',
		[Language.FR]: 'Gestion de la sécurité',
		[Language.IT]: 'Gestione della sicurezza',
		[Language.NL]: 'Beveiligingsactiviteiten'
	},
	[ProjectType.FACILITIES_MANAGEMENT]: {
		[Language.EN]: 'Facilities management',
		[Language.FR]: 'Gestion des infrastructures',
		[Language.IT]: 'Gestione delle infrastrutture',
		[Language.NL]: 'Facilitair beheer'
	},
	[ProjectType.IT_SUPPORT]: {
		[Language.EN]: 'IT Support',
		[Language.FR]: 'Assistance informatique',
		[Language.IT]: 'Assistenza informatica',
		[Language.NL]: 'IT-ondersteuning'
	},
	[ProjectType.SYSTEMS_ADMINISTRATION]: {
		[Language.EN]: 'Systems administration',
		[Language.FR]: 'Administration des systèmes',
		[Language.IT]: 'Amministrazione dei sistemi',
		[Language.NL]: 'Systeembeheer'
	},
	[ProjectType.NETWORK_MANAGEMENT]: {
		[Language.EN]: 'Network management',
		[Language.FR]: 'Gestion du réseau',
		[Language.IT]: 'Gestione della rete',
		[Language.NL]: 'Netwerkbeheer'
	},
	[ProjectType.HARDWARE_INSTALLATION]: {
		[Language.EN]: 'Hardware installation',
		[Language.FR]: 'Installation de matériel',
		[Language.IT]: 'Installazione hardware',
		[Language.NL]: 'Installatie van hardware'
	},
	[ProjectType.SOFTWARE_DEPLOYMENT]: {
		[Language.EN]: 'Software deployment',
		[Language.FR]: 'Déploiement de logiciel',
		[Language.IT]: 'Distribuzione software',
		[Language.NL]: 'Software-toepassing'
	},
	[ProjectType.DATABASE_MANAGEMENT]: {
		[Language.EN]: 'Database management',
		[Language.FR]: 'Gestion de base de données',
		[Language.IT]: 'Gestione del database',
		[Language.NL]: 'Databasebeheer'
	},
	[ProjectType.DATA_ENTRY_AND_CATALOGUING]: {
		[Language.EN]: 'Data entry & cataloguing',
		[Language.FR]: 'Saisie de données & catalogage',
		[Language.IT]: 'Inserimento dati & catalogazione',
		[Language.NL]: 'Gegevensinvoer & catalogiseren'
	},
	[ProjectType.COLLECTION_DIGITISATION]: {
		[Language.EN]: 'Collection digitisation',
		[Language.FR]: 'Numérisation des collections',
		[Language.IT]: 'Digitalizzazione delle collezioni',
		[Language.NL]: 'Digitalisering van collecties'
	},
	[ProjectType.USER_TRAINING]: {
		[Language.EN]: 'User training',
		[Language.FR]: 'Formation des utilisateur·ices',
		[Language.IT]: 'Formazione degli utenti',
		[Language.NL]: 'Gebruikerstraining'
	},
	[ProjectType.TECHNICAL_SUPPORT]: {
		[Language.EN]: 'Technical support',
		[Language.FR]: 'Support technique',
		[Language.IT]: 'Supporto tecnico',
		[Language.NL]: 'Technische ondersteuning'
	},
	[ProjectType.FINANCIAL_REPORTING]: {
		[Language.EN]: 'Financial reporting',
		[Language.FR]: 'Reporting financier',
		[Language.IT]: 'Reportistica finanziaria',
		[Language.NL]: 'Financiële verslaglegging'
	},
	[ProjectType.BUDGETING]: {
		[Language.EN]: 'Budgeting',
		[Language.FR]: 'Budgétisation',
		[Language.IT]: 'Elaborazione del budget',
		[Language.NL]: 'Budgettering'
	},
	[ProjectType.INVOICE_MANAGEMENT]: {
		[Language.EN]: 'Invoice management',
		[Language.FR]: 'Gestion de la facturation',
		[Language.IT]: 'Gestione della fatturazione',
		[Language.NL]: 'Factureringsbeheer'
	},
	[ProjectType.TAX_ADVISORY]: {
		[Language.EN]: 'Tax advisory',
		[Language.FR]: 'Conseil fiscal',
		[Language.IT]: 'Consulenza fiscale',
		[Language.NL]: 'Fiscaal advies'
	},
	[ProjectType.LEGAL_ADVISORY]: {
		[Language.EN]: 'Legal advisory',
		[Language.FR]: 'Conseil juridique',
		[Language.IT]: 'Consulenza legale',
		[Language.NL]: 'Juridisch advies'
	},
	[ProjectType.STRATEGIC_ADVISORY]: {
		[Language.EN]: 'Strategic advisory',
		[Language.FR]: 'Conseil stratégique',
		[Language.IT]: 'Consulenza strategica',
		[Language.NL]: 'Strategisch advies'
	},
	[ProjectType.INTELLECTUAL_PROPERTY]: {
		[Language.EN]: 'Intellectual property',
		[Language.FR]: 'Propriété intellectuelle',
		[Language.IT]: 'Proprietà intellettuale',
		[Language.NL]: 'Intellectueel eigendom'
	},
	[ProjectType.INSURANCE_AND_RISK]: {
		[Language.EN]: 'Insurance & risk',
		[Language.FR]: 'Assurances & gestion des risques',
		[Language.IT]: 'Assicurazioni & gestione dei rischi',
		[Language.NL]: 'Verzekeringen & risico’s'
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
