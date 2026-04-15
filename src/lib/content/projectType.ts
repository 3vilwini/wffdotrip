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