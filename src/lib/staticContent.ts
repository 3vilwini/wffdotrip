import { Language } from './states.svelte';

export const enum Country {
	UK = 'UK',
	FRANCE = 'FRANCE',
	ITALY = 'ITALY',
	SPAIN = 'SPAIN',
	UNSELECTED = 'UNSELECTED'
}

export const fieldLabels = {
	country: {
		[Language.EN]: 'Country',
		[Language.FR]: 'Country in french',
		[Language.IT]: 'Country in italian',
		[Language.ES]: 'Country in spanish'
	},
	city: {
		[Language.EN]: 'City',
		[Language.FR]: 'City in french',
		[Language.IT]: 'City in italian',
		[Language.ES]: 'City in spanish'
	},
	year: {
		[Language.EN]: 'Year',
		[Language.FR]: 'Year in french',
		[Language.IT]: 'Year in italian',
		[Language.ES]: 'Year in spanish'
	},
	employerType: {
		[Language.EN]: 'Employer Type',
		[Language.FR]: 'Employer Type in french',
		[Language.IT]: 'Employer Type in italian',
		[Language.ES]: 'Employer Type in spanish'
	},
	employerName: {
		[Language.EN]: 'Employer Name (optional)',
		[Language.FR]: 'Employer Name (optional) in french',
		[Language.IT]: 'Employer Name (optional) in italian',
		[Language.ES]: 'Employer Name (optional) in spanish'
	},
	numEmployees: {
		[Language.EN]: '# of Employees',
		[Language.FR]: '# of Employees in french',
		[Language.IT]: '# of Employees in italian',
		[Language.ES]: '# of Employees in spanish'
	},
	contractType: {
		[Language.EN]: 'Contract Type',
		[Language.FR]: 'Contract Type in french',
		[Language.IT]: 'Contract Type in italian',
		[Language.ES]: 'Contract Type in spanish'
	},
	workerStatus: {
		[Language.EN]: {
			[Country.UK]: 'UK Worker status',
			[Country.SPAIN]: 'Spanish Worker status',
			[Country.ITALY]: 'Italian Worker status',
			[Country.FRANCE]: 'French Worker status'
		},
		[Language.FR]: {
			[Country.UK]: 'UK Worker status (FR)',
			[Country.SPAIN]: 'Spanish Worker status (FR)',
			[Country.ITALY]: 'Italian Worker status (FR)',
			[Country.FRANCE]: 'French Worker status (FR)'
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
		[Language.FR]: 'Contract Length (optional) in french',
		[Language.IT]: 'Contract Length (optional) in italian',
		[Language.ES]: 'Contract Length (optional) in spanish'
	},
	contractNumHours: {
		[Language.EN]: '# of hours (optional)',
		[Language.FR]: '# of hours (optional) in french',
		[Language.IT]: '# of hours (optional) in italian',
		[Language.ES]: '# of hours (optional) in spanish'
	},
	perWeek: {
		[Language.EN]: 'per week',
		[Language.FR]: 'per week in french',
		[Language.IT]: 'per week in italian',
		[Language.ES]: 'per week in spanish'
	},
	workerCategory: {
		[Language.EN]: 'Worker category',
		[Language.FR]: 'Worker category in french',
		[Language.IT]: 'Worker category in italian',
		[Language.ES]: 'Worker category in spanish'
	},
	jobTitle: {
		[Language.EN]: 'Job title (optional)',
		[Language.FR]: 'Job title (optional) in french',
		[Language.IT]: 'Job title (optional) in italian',
		[Language.ES]: 'Job title (optional) in spanish'
	},
	jobDetails: {
		[Language.EN]: 'Details (optional)',
		[Language.FR]: 'Details (optional) in french',
		[Language.IT]: 'Details (optional) in italian',
		[Language.ES]: 'Details (optional) in spanish'
	},
	jobExperience: {
		[Language.EN]: 'Experience (optional)',
		[Language.FR]: 'Experience (optional) in french',
		[Language.IT]: 'Experience (optional) in italian',
		[Language.ES]: 'Experience (optional) in spanish'
	},
	jobObtainedVia: {
		[Language.EN]: 'Job obtained via (optional)',
		[Language.FR]: 'Job obtained via (optional) in french',
		[Language.IT]: 'Job obtained via (optional) in italian',
		[Language.ES]: 'Job obtained via (optional) in spanish'
	},
	compensationAmount: {
		[Language.EN]: 'Amount',
		[Language.FR]: 'Amount in french',
		[Language.IT]: 'Amount in italian',
		[Language.ES]: 'Amount in spanish'
	},
	compensationFrequency: {
		[Language.EN]: 'frequency',
		[Language.FR]: 'frequency in french',
		[Language.IT]: 'frequency in italian',
		[Language.ES]: 'frequency in spanish'
	},
	compensationLate: {
		[Language.EN]: 'I was paid late',
		[Language.FR]: 'I was paid late in french',
		[Language.IT]: 'I was paid late in italian',
		[Language.ES]: 'I was paid late in spanish'
	},
	satisfiedWithCompensation: {
		[Language.EN]: 'I was satisfied with the compensation',
		[Language.FR]: 'I was satisfied with the compensation in french',
		[Language.IT]: 'I was satisfied with the compensation in italian',
		[Language.ES]: 'I was satisfied with the compensation in spanish'
	},
	satisfiedWithConditions: {
		[Language.EN]: 'I was satisfied with the working conditions',
		[Language.FR]: 'I was satisfied with the working conditions in french',
		[Language.IT]: 'I was satisfied with the working conditions in italian',
		[Language.ES]: 'I was satisfied with the working conditions in spanish'
	},
	treatedFairly: {
		[Language.EN]: 'I felt fairly treated against my colleagues',
		[Language.FR]: 'I felt fairly treated against my colleagues in french',
		[Language.IT]: 'I felt fairly treated against my colleagues in italian',
		[Language.ES]: 'I felt fairly treated against my colleagues in spanish'
	},
	addlComp: {
		[Language.EN]: 'Add additional compensation',
		[Language.FR]: 'Add additional compensation in french',
		[Language.IT]: 'Add additional compensation in italian',
		[Language.ES]: 'Add additional compensation in spanish'
	},
	saleOfWork: {
		[Language.EN]: 'Sale of work',
		[Language.FR]: 'Sale of work in french',
		[Language.IT]: 'Sale of work in italian',
		[Language.ES]: 'Sale of work in spanish'
	},
	production: {
		[Language.EN]: 'Production',
		[Language.FR]: 'Production in french',
		[Language.IT]: 'Production in italian',
		[Language.ES]: 'Production in spanish'
	},
	travel: {
		[Language.EN]: 'Travel',
		[Language.FR]: 'Travel in french',
		[Language.IT]: 'Travel in italian',
		[Language.ES]: 'Travel in spanish'
	},
	accommodation: {
		[Language.EN]: 'Accommodation',
		[Language.FR]: 'Accommodation in french',
		[Language.IT]: 'Accommodation in italian',
		[Language.ES]: 'Accommodation in spanish'
	},
	transportOfWorks: {
		[Language.EN]: 'Transport of works',
		[Language.FR]: 'Transport of works in french',
		[Language.IT]: 'Transport of works in italian',
		[Language.ES]: 'Transport of works in spanish'
	}
};

export const countryOptions = {
	[Country.UK]: {
		[Language.EN]: 'UK',
		[Language.FR]: 'UK in french',
		[Language.IT]: 'UK in italian',
		[Language.ES]: 'UK in spanish'
	},
	[Country.FRANCE]: {
		[Language.EN]: 'France',
		[Language.FR]: 'France in french',
		[Language.IT]: 'France in italian',
		[Language.ES]: 'France in spanish'
	},
	[Country.ITALY]: {
		[Language.EN]: 'Italy',
		[Language.FR]: 'Italy in french',
		[Language.IT]: 'Italy in italian',
		[Language.ES]: 'Italy in spanish'
	},
	[Country.SPAIN]: {
		[Language.EN]: 'Spain',
		[Language.FR]: 'Spain in french',
		[Language.IT]: 'Spain in italian',
		[Language.ES]: 'Spain in spanish'
	}
};

export const yearOption2010OrBefore = {
	[Language.EN]: '2010 or before',
	[Language.FR]: '2010 or before in french',
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
				[Language.ES]: 'Museum in spanish'
			},
			[EmployerType.ART_CENTER]: {
				[Language.EN]: 'Art Center',
				[Language.FR]: 'Art Center in french',
				[Language.IT]: 'Art Center in italian',
				[Language.ES]: 'Art Center in spanish'
			},
			[EmployerType.REGIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'Regional Cultural Institution (FRAC, Kunstverein)',
				[Language.FR]: 'Regional Cultural Institution (FRAC, Kunstverein) in french',
				[Language.IT]: 'Regional Cultural Institution (FRAC, Kunstverein) in italian',
				[Language.ES]: 'Regional Cultural Institution (FRAC, Kunstverein) in spanish'
			},
			[EmployerType.NATIONAL_CULTURAL_INSTITUTION]: {
				[Language.EN]: 'National Cultural Institution (EPCC...)',
				[Language.FR]: 'National Cultural Institution (EPCC...) in french',
				[Language.IT]: 'National Cultural Institution (EPCC...) in italian',
				[Language.ES]: 'National Cultural Institution (EPCC...) in spanish'
			},
			[EmployerType.GALLERY]: {
				[Language.EN]: 'Gallery',
				[Language.FR]: 'Gallery in french',
				[Language.IT]: 'Gallery in italian',
				[Language.ES]: 'Gallery in spanish'
			},
			[EmployerType.ARTIST_RUN_SPACE]: {
				[Language.EN]: 'Artist-Run Space',
				[Language.FR]: 'Artist-Run Space in french',
				[Language.IT]: 'Artist-Run Space in italian',
				[Language.ES]: 'Artist-Run Space in spanish'
			},
			[EmployerType.FOUNDATION]: {
				[Language.EN]: 'Foundation',
				[Language.FR]: 'Foundation in french',
				[Language.IT]: 'Foundation in italian',
				[Language.ES]: 'Foundation in spanish'
			},
			[EmployerType.CULTURAL_CENTER]: {
				[Language.EN]: 'Cultural Center',
				[Language.FR]: 'Cultural Center in french',
				[Language.IT]: 'Cultural Center in italian',
				[Language.ES]: 'Cultural Center in spanish'
			},
			[EmployerType.THIRD_PLACES]: {
				[Language.EN]: 'Third Places',
				[Language.FR]: 'Third Places in french',
				[Language.IT]: 'Third Places in italian',
				[Language.ES]: 'Third Places in spanish'
			},
			[EmployerType.NON_PROFIT_ORGANIZATION]: {
				[Language.EN]: 'Non-Profit Organization',
				[Language.FR]: 'Non-Profit Organization in french',
				[Language.IT]: 'Non-Profit Organization in italian',
				[Language.ES]: 'Non-Profit Organization in spanish'
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
				[Language.ES]: 'Public School in spanish'
			},
			[EmployerType.PRIVATE_SCHOOL]: {
				[Language.EN]: 'Private School',
				[Language.FR]: 'Private School in french',
				[Language.IT]: 'Private School in italian',
				[Language.ES]: 'Private School in spanish'
			},
			[EmployerType.PUBLIC_UNIVERSITY]: {
				[Language.EN]: 'Public University',
				[Language.FR]: 'Public University in french',
				[Language.IT]: 'Public University in italian',
				[Language.ES]: 'Public University in spanish'
			},
			[EmployerType.PRIVATE_UNIVERSITY]: {
				[Language.EN]: 'Private University',
				[Language.FR]: 'Private University in french',
				[Language.IT]: 'Private University in italian',
				[Language.ES]: 'Private University in spanish'
			},
			[EmployerType.LIBRARY]: {
				[Language.EN]: 'Library',
				[Language.FR]: 'Library in french',
				[Language.IT]: 'Library in italian',
				[Language.ES]: 'Library in spanish'
			},
			[EmployerType.ARCHIVE]: {
				[Language.EN]: 'Archive',
				[Language.FR]: 'Archive in french',
				[Language.IT]: 'Archive in italian',
				[Language.ES]: 'Archive in spanish'
			},
			[EmployerType.FOUNDATION]: {
				[Language.EN]: 'Foundation',
				[Language.FR]: 'Foundation in french',
				[Language.IT]: 'Foundation in italian',
				[Language.ES]: 'Foundation in spanish'
			},
			[EmployerType.RESEARCH_CENTER]: {
				[Language.EN]: 'Research Center',
				[Language.FR]: 'Research Center in french',
				[Language.IT]: 'Research Center in italian',
				[Language.ES]: 'Research Center in spanish'
			},
			[EmployerType.LABORATORY]: {
				[Language.EN]: 'Laboratory',
				[Language.FR]: 'Laboratory in french',
				[Language.IT]: 'Laboratory in italian',
				[Language.ES]: 'Third Places in spanish'
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
				[Language.ES]: 'National Cultural Authority in spanish'
			},
			[EmployerType.ARTS_COUNCIL]: {
				[Language.EN]: 'Arts Council or Arm’s-Length Body',
				[Language.FR]: 'Arts Council or Arm’s-Length Body in french',
				[Language.IT]: 'Arts Council or Arm’s-Length Body in italian',
				[Language.ES]: 'Arts Council or Arm’s-Length Body in spanish'
			},
			[EmployerType.LOCAL_GOVT]: {
				[Language.EN]: 'Regional or Local Government',
				[Language.FR]: 'Regional or Local Government in french',
				[Language.IT]: 'Regional or Local Government in italian',
				[Language.ES]: 'Regional or Local Government in spanish'
			},
			[EmployerType.PUBLIC_FUNDING_AGENCY]: {
				[Language.EN]: 'Public Funding Agency',
				[Language.FR]: 'Public Funding Agency in french',
				[Language.IT]: 'Public Funding Agency in italian',
				[Language.ES]: 'Public Funding Agency in spanish'
			},
			[EmployerType.ENDOWMENT_FUND]: {
				[Language.EN]: 'Endowment Fund or Public-Interest Foundation',
				[Language.FR]: 'Endowment Fund or Public-Interest Foundation in french',
				[Language.IT]: 'Endowment Fund or Public-Interest Foundation in italian',
				[Language.ES]: 'Endowment Fund or Public-Interest Foundation in spanish'
			},
			[EmployerType.CULTURAL_DIPLOMACY_BODY]: {
				[Language.EN]: 'Cultural Diplomacy Body (Embassy / Cultural Institute)',
				[Language.FR]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in french',
				[Language.IT]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in italian',
				[Language.ES]: 'Cultural Diplomacy Body (Embassy / Cultural Institute) in spanish'
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
				[Language.ES]: 'Auction House in spanish'
			},
			[EmployerType.ART_DEALER]: {
				[Language.EN]: 'Art Dealer',
				[Language.FR]: 'Art Dealer in french',
				[Language.IT]: 'Art Dealer in italian',
				[Language.ES]: 'Art Dealer in spanish'
			},
			[EmployerType.ART_ADVISOR]: {
				[Language.EN]: 'Art Advisor',
				[Language.FR]: 'Art Advisor in french',
				[Language.IT]: 'Art Advisor in italian',
				[Language.ES]: 'Art Advisor in spanish'
			},
			[EmployerType.ONLINE_SALES_PLATFORM]: {
				[Language.EN]: 'Online Sales Platform',
				[Language.FR]: 'Online Sales Platform in french',
				[Language.IT]: 'Online Sales Platform in italian',
				[Language.ES]: 'Online Sales Platform in spanish'
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
				[Language.ES]: 'Publishing House in spanish'
			},
			[EmployerType.MEDIA]: {
				[Language.EN]: 'Media',
				[Language.FR]: 'Media in french',
				[Language.IT]: 'Media in italian',
				[Language.ES]: 'Media in spanish'
			},
			[EmployerType.MAGAZINE]: {
				[Language.EN]: 'Magazine',
				[Language.FR]: 'Magazine in french',
				[Language.IT]: 'Magazine in italian',
				[Language.ES]: 'Magazine in spanish'
			},
			[EmployerType.ONLINE_PLATFORM]: {
				[Language.EN]: 'Online Platform',
				[Language.FR]: 'Online Platform in french',
				[Language.IT]: 'Online Platform in italian',
				[Language.ES]: 'Online Platform in spanish'
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
				[Language.ES]: "Artist's Studio in spanish"
			},
			[EmployerType.FABRICATION_WORKSHOP]: {
				[Language.EN]: 'Fabrication Workshops',
				[Language.FR]: 'Fabrication Workshops in french',
				[Language.IT]: 'Fabrication Workshops in italian',
				[Language.ES]: 'Fabrication Workshops in spanish'
			},
			[EmployerType.FAB_LAB]: {
				[Language.EN]: 'Fab Lab',
				[Language.FR]: 'Fab Lab in french',
				[Language.IT]: 'Fab Lab in italian',
				[Language.ES]: 'Fab Lab in spanish'
			},
			[EmployerType.ART_LOGISTICS]: {
				[Language.EN]: 'Art Logistics (Shipping, Storage, Handling)',
				[Language.FR]: 'Art Logistics (Shipping, Storage, Handling) in french',
				[Language.IT]: 'Art Logistics (Shipping, Storage, Handling) in italian',
				[Language.ES]: 'Art Logistics (Shipping, Storage, Handling) in spanish'
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
				[Language.ES]: 'Festival in spanish'
			},
			[EmployerType.BIENNIAL]: {
				[Language.EN]: 'Biennial',
				[Language.FR]: 'Biennial in french',
				[Language.IT]: 'Biennial in italian',
				[Language.ES]: 'Biennial in spanish'
			},
			[EmployerType.TRIENNIAL]: {
				[Language.EN]: 'Triennial',
				[Language.FR]: 'Triennial in french',
				[Language.IT]: 'Triennial in italian',
				[Language.ES]: 'Triennial in spanish'
			},
			[EmployerType.FAIR]: {
				[Language.EN]: 'Fair',
				[Language.FR]: 'Fair in french',
				[Language.IT]: 'Fair in italian',
				[Language.ES]: 'Fair in spanish'
			},
			[EmployerType.LOCAL_EVENT]: {
				[Language.EN]: 'Local Event',
				[Language.FR]: 'Local Event in french',
				[Language.IT]: 'Local Event in italian',
				[Language.ES]: 'Local Event in spanish'
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
				[Language.ES]: 'Union in spanish'
			},
			[EmployerType.ARTIST_SERVICES_ORGANIZATION]: {
				[Language.EN]: 'Artist Services Organization',
				[Language.FR]: 'Artist Services Organization in french',
				[Language.IT]: 'Artist Services Organization in italian',
				[Language.ES]: 'Artist Services Organization in spanish'
			},
			[EmployerType.RIGHTS_ORGANIZATION]: {
				[Language.EN]: 'Rights Organization (ADAGP, Artist Rights Society)',
				[Language.FR]: 'Rights Organization (ADAGP, Artist Rights Society) in french',
				[Language.IT]: 'Rights Organization (ADAGP, Artist Rights Society) in italian',
				[Language.ES]: 'Rights Organization (ADAGP, Artist Rights Society) in spanish'
			},
			[EmployerType.RESIDENCY_PROGRAM]: {
				[Language.EN]: 'Residency Program',
				[Language.FR]: 'Residency Program in french',
				[Language.IT]: 'Residency Program in italian',
				[Language.ES]: 'Residency Program in spanish'
			},
			[EmployerType.COOPERATIVE_STRUCTURE]: {
				[Language.EN]: 'Cooperative Structure',
				[Language.FR]: 'Cooperative Structure in french',
				[Language.IT]: 'Cooperative Structure in italian',
				[Language.ES]: 'Cooperative Structure in spanish'
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
				[Language.ES]: 'Other in spanish'
			}
		}
	}
};

export const getEmployerTypeLabel = (employerType: EmployerType, language: Language): string => {
	for (const subgroupKey in employerTypeOptions) {
		const subgroup = employerTypeOptions[subgroupKey as EmployerTypeSubgroup];
		if (employerType in subgroup.options) {
			return subgroup.options[employerType][language];
		}
	}
	return employerType;
};

export const numEmployeesOptions = {
	'0_employees': {
		[Language.EN]: '0 employees',
		[Language.FR]: '0 employees FR',
		[Language.IT]: '0 employees IT',
		[Language.ES]: '0 employees ES'
	},
	'1_2': {
		[Language.EN]: '1-2 employees',
		[Language.FR]: '1-2 employees FR',
		[Language.IT]: '1-2 employees IT',
		[Language.ES]: '1-2 employees ES'
	},
	'3_5': {
		[Language.EN]: '3-5 employees',
		[Language.FR]: '3-5 employees FR',
		[Language.IT]: '3-5 employees IT',
		[Language.ES]: '3-5 employees ES'
	},
	'6_10': {
		[Language.EN]: '6-10 employees',
		[Language.FR]: '6-10 employees FR',
		[Language.IT]: '6-10 employees IT',
		[Language.ES]: '6-10 employees ES'
	},
	'11_20': {
		[Language.EN]: '11-20 employees',
		[Language.FR]: '11-20 employees FR',
		[Language.IT]: '11-20 employees IT',
		[Language.ES]: '11-20 employees ES'
	},
	'21_50': {
		[Language.EN]: '21-50 employees',
		[Language.FR]: '21-50 employees FR',
		[Language.IT]: '21-50 employees IT',
		[Language.ES]: '21-50 employees ES'
	},
	'51_100': {
		[Language.EN]: '51-100 employees',
		[Language.FR]: '51-100 employees FR',
		[Language.IT]: '51-100 employees IT',
		[Language.ES]: '51-100 employees ES'
	},
	'101_200': {
		[Language.EN]: '101-200 employees',
		[Language.FR]: '101-200 employees FR',
		[Language.IT]: '101-200 employees IT',
		[Language.ES]: '101-200 employees ES'
	},
	'201_plus': {
		[Language.EN]: '200+ employees',
		[Language.FR]: '200+ employees FR',
		[Language.IT]: '200+ employees IT',
		[Language.ES]: '200+ employees ES'
	}
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
		[Language.ES]: 'Full-time ES'
	},
	[ContractType.PARTTIME]: {
		[Language.EN]: 'Part-time',
		[Language.FR]: 'Part-time FR',
		[Language.IT]: 'Part-time IT',
		[Language.ES]: 'Part-time ES'
	},
	[ContractType.FULLTIME_TEMP]: {
		[Language.EN]: 'Full-time (temporary)',
		[Language.FR]: 'Full-time (temporary) FR',
		[Language.IT]: 'Full-time (temporary) IT',
		[Language.ES]: 'Full-time (temporary) ES'
	},
	[ContractType.PARTTIME_TEMP]: {
		[Language.EN]: 'Part-time (temporary)',
		[Language.FR]: 'Part-time (temporary) FR',
		[Language.IT]: 'Part-time (temporary) IT',
		[Language.ES]: 'Part-time (temporary) ES'
	},
	[ContractType.INDEPENDENT]: {
		[Language.EN]: 'Independent',
		[Language.FR]: 'Independent FR',
		[Language.IT]: 'Independent IT',
		[Language.ES]: 'Independent ES'
	},
	[ContractType.INTERNSHIP]: {
		[Language.EN]: 'Internship',
		[Language.FR]: 'Internship FR',
		[Language.IT]: 'Internship IT',
		[Language.ES]: 'Internship ES'
	},
	[ContractType.APPRENTICESHIP]: {
		[Language.EN]: 'Apprenticeship',
		[Language.FR]: 'Apprenticeship FR',
		[Language.IT]: 'Apprenticeship IT',
		[Language.ES]: 'Apprenticeship ES'
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

export const contractLengthUnit = {
	[ContractLengthUnit.HOURS]: {
		[Language.EN]: 'hours',
		[Language.FR]: 'hours FR',
		[Language.IT]: 'hours IT',
		[Language.ES]: 'hours ES'
	},
	[ContractLengthUnit.DAYS]: {
		[Language.EN]: 'days',
		[Language.FR]: 'days FR',
		[Language.IT]: 'days IT',
		[Language.ES]: 'days ES'
	},
	[ContractLengthUnit.MONTHS]: {
		[Language.EN]: 'months',
		[Language.FR]: 'months FR',
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
			[Language.EN]: 'Creation',
			[Language.FR]: 'Creation in french',
			[Language.IT]: 'Creation in italian',
			[Language.ES]: 'Creation in spanish'
		},
		options: {
			[WorkerType.ARTIST]: {
				label: {
					[Language.EN]: 'Artist',
					[Language.FR]: 'Artist in french',
					[Language.IT]: 'Artist in italian',
					[Language.ES]: 'Artist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.PERFORMING_ARTIST]: {
				label: {
					[Language.EN]: 'Perfroming Artist',
					[Language.FR]: 'Perfroming Artist in french',
					[Language.IT]: 'Perfroming Artist in italian',
					[Language.ES]: 'Perfroming Artist in spanish'
				},
				detail: {
					[Language.EN]: 'type of performance, duration, number of collaborators, etc.',
					[Language.FR]: '(FR) type of performance, duration, number of collaborators, etc.',
					[Language.IT]: '(IT) type of performance, duration, number of collaborators, etc.',
					[Language.ES]: '(ES) type of performance, duration, number of collaborators, etc.'
				}
			}
		}
	},
	[WorkerTypeSubgroup.WRITING]: {
		groupLabel: {
			[Language.EN]: 'Writing',
			[Language.FR]: 'Writing in french',
			[Language.IT]: 'Writing in italian',
			[Language.ES]: 'Writing in spanish'
		},
		options: {
			[WorkerType.WRITER]: {
				label: {
					[Language.EN]: 'Writer',
					[Language.FR]: 'Writer in french',
					[Language.IT]: 'Writer in italian',
					[Language.ES]: 'Writer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ART_CRITIC]: {
				label: {
					[Language.EN]: 'Art critic',
					[Language.FR]: 'Art critic in french',
					[Language.IT]: 'Art critic in italian',
					[Language.ES]: 'Art critic in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.EDITOR]: {
				label: {
					[Language.EN]: 'Editor',
					[Language.FR]: 'Editor in french',
					[Language.IT]: 'Editor in italian',
					[Language.ES]: 'Editor in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.JOURNALIST]: {
				label: {
					[Language.EN]: 'journalist',
					[Language.FR]: 'journalist in french',
					[Language.IT]: 'journalist in italian',
					[Language.ES]: 'journalist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.TRANSLATOR]: {
				label: {
					[Language.EN]: 'translator',
					[Language.FR]: 'translator in french',
					[Language.IT]: 'translator in italian',
					[Language.ES]: 'translator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.COPYWRITER]: {
				label: {
					[Language.EN]: 'Copywriter',
					[Language.FR]: 'Copywriter in french',
					[Language.IT]: 'Copywriter in italian',
					[Language.ES]: 'Copywriter in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.GHOSTWRITER]: {
				label: {
					[Language.EN]: 'Ghostwriter',
					[Language.FR]: 'Ghostwriter in french',
					[Language.IT]: 'Ghostwriter in italian',
					[Language.ES]: 'Ghostwriter in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ARCHIVIST]: {
				label: {
					[Language.EN]: 'Archivist',
					[Language.FR]: 'Archivist in french',
					[Language.IT]: 'Archivist in italian',
					[Language.ES]: 'Archivist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			}
		}
	},
	[WorkerTypeSubgroup.CURATION]: {
		groupLabel: {
			[Language.EN]: 'Curation',
			[Language.FR]: 'Curation in french',
			[Language.IT]: 'Curation in italian',
			[Language.ES]: 'Curation in spanish'
		},
		options: {
			[WorkerType.CURATOR]: {
				label: {
					[Language.EN]: 'Curator',
					[Language.FR]: 'Curator in french',
					[Language.IT]: 'Curator in italian',
					[Language.ES]: 'Curator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.RESEARCHER]: {
				label: {
					[Language.EN]: 'Researcher',
					[Language.FR]: 'Researcher in french',
					[Language.IT]: 'Researcher in italian',
					[Language.ES]: 'Researcher in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ART_HISTORIAN]: {
				label: {
					[Language.EN]: 'Art Historian',
					[Language.FR]: 'Art Historian in french',
					[Language.IT]: 'Art Historian in italian',
					[Language.ES]: 'Art Historian in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ARTISTIC_PROGAMMER]: {
				label: {
					[Language.EN]: 'Artistic Programmer',
					[Language.FR]: 'Artistic Programmer in french',
					[Language.IT]: 'Artistic Programmer in italian',
					[Language.ES]: 'Artistic Programmer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.CURATORIAL_FELLOW]: {
				label: {
					[Language.EN]: 'Curatorial Fellow',
					[Language.FR]: 'Curatorial Fellow in french',
					[Language.IT]: 'Curatorial Fellow in italian',
					[Language.ES]: 'Curatorial Fellow in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.CURATORIAL_ASSISTANT]: {
				label: {
					[Language.EN]: 'Curatorial Assistant',
					[Language.FR]: 'Curatorial Assistant in french',
					[Language.IT]: 'Curatorial Assistant in italian',
					[Language.ES]: 'Curatorial Assistant in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.PUBLIC_PROGRAMS_COORDINATOR]: {
				label: {
					[Language.EN]: 'Public Programs Coordinator',
					[Language.FR]: 'Public Programs Coordinator in french',
					[Language.IT]: 'Public Programs Coordinator in italian',
					[Language.ES]: 'Public Programs Coordinator in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.RESEARCH_ASSOCIATE]: {
				label: {
					[Language.EN]: 'Research Associate',
					[Language.FR]: 'Research Associate in french',
					[Language.IT]: 'Research Associate in italian',
					[Language.ES]: 'Research Associate in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
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
					[Language.FR]: 'Artist Assistant in french',
					[Language.IT]: 'Artist Assistant in italian',
					[Language.ES]: 'Artist Assistant in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.PRODUCTION_MANAGER]: {
				label: {
					[Language.EN]: 'Production Manager',
					[Language.FR]: 'Production Manager in french',
					[Language.IT]: 'Production Manager in italian',
					[Language.ES]: 'Production Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.PRODUCTION_ASSISTANT]: {
				label: {
					[Language.EN]: 'Production Assistant',
					[Language.FR]: 'Production Assistant in french',
					[Language.IT]: 'Production Assistant in italian',
					[Language.ES]: 'Production Assistant in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.FABRICATOR]: {
				label: {
					[Language.EN]: 'Fabricator (metal, wood, 3D printing)',
					[Language.FR]: 'Fabricator (metal, wood, 3D printing) in french',
					[Language.IT]: 'Fabricator (metal, wood, 3D printing) in italian',
					[Language.ES]: 'Fabricator (metal, wood, 3D printing) in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ARTISAN]: {
				label: {
					[Language.EN]: 'Artisan',
					[Language.FR]: 'Artisan in french',
					[Language.IT]: 'Artisan in italian',
					[Language.ES]: 'Artisan in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.TECHNICIAN]: {
				label: {
					[Language.EN]: 'Technician',
					[Language.FR]: 'Technician in french',
					[Language.IT]: 'Technician in italian',
					[Language.ES]: 'Technician in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.LIGHTING_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Lighting Technician',
					[Language.FR]: 'Lighting Technician in french',
					[Language.IT]: 'Lighting Technician in italian',
					[Language.ES]: 'Lighting Technician in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.LIGHTING_DESIGNER]: {
				label: {
					[Language.EN]: 'Lighting Designer',
					[Language.FR]: 'Lighting Designer in french',
					[Language.IT]: 'Lighting Designer in italian',
					[Language.ES]: 'Lighting Designer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.PROJECTION_AV_SPECIALIST]: {
				label: {
					[Language.EN]: 'Projection / AV Specialist',
					[Language.FR]: 'Projection / AV Specialist in french',
					[Language.IT]: 'Projection / AV Specialist in italian',
					[Language.ES]: 'Projection / AV Specialist in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.SOUND_TECHNICIAN]: {
				label: {
					[Language.EN]: 'Sound Technician',
					[Language.FR]: 'Sound Technician in french',
					[Language.IT]: 'Sound Technician in italian',
					[Language.ES]: 'Sound Technician in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.SOUND_DESIGNER]: {
				label: {
					[Language.EN]: 'Sound Designer',
					[Language.FR]: 'Sound Designer in french',
					[Language.IT]: 'Sound Designer in italian',
					[Language.ES]: 'Sound Designer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.EXHIBITION_DESIGNER]: {
				label: {
					[Language.EN]: 'Exhibition Designer',
					[Language.FR]: 'Exhibition Designer in french',
					[Language.IT]: 'Exhibition Designer in italian',
					[Language.ES]: 'Exhibition Designer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.ART_HANDLER]: {
				label: {
					[Language.EN]: 'Art Handler',
					[Language.FR]: 'Art Handler in french',
					[Language.IT]: 'Art Handler in italian',
					[Language.ES]: 'Art Handler in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.THREED_VISUALIZER]: {
				label: {
					[Language.EN]: '3D Visualizer (exhibition mock-ups, renders)',
					[Language.FR]: '3D Visualizer (exhibition mock-ups, renders) in french',
					[Language.IT]: '3D Visualizer (exhibition mock-ups, renders) in italian',
					[Language.ES]: '3D Visualizer (exhibition mock-ups, renders) in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.UI_UX]: {
				label: {
					[Language.EN]: 'UI/UX Designer (as art production)',
					[Language.FR]: 'UI/UX Designer (as art production) in french',
					[Language.IT]: 'UI/UX Designer (as art production) in italian',
					[Language.ES]: 'UI/UX Designer (as art production) in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.STAGE_MANAGER]: {
				label: {
					[Language.EN]: 'Stage Manager',
					[Language.FR]: 'Stage Manager in french',
					[Language.IT]: 'Stage Manager in italian',
					[Language.ES]: 'Stage Manager in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
			},
			[WorkerType.COSTUME_DESIGNER]: {
				label: {
					[Language.EN]: 'Costume designer',
					[Language.FR]: 'Costume designer in french',
					[Language.IT]: 'Costume designer in italian',
					[Language.ES]: 'Costume designer in spanish'
				},
				detail: {
					[Language.EN]: 'mediums used, new or old works, number of works produced, etc.',
					[Language.FR]: '(FR) mediums used, new or old works, number of works produced, etc.',
					[Language.IT]: '(IT) mediums used, new or old works, number of works produced, etc.',
					[Language.ES]: '(ES) mediums used, new or old works, number of works produced, etc.'
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
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
				}
			}
		}
	}
};

export const getWorkerTypeLabel = (workerType: WorkerType, language: Language): string => {
	for (const subgroupKey in workerTypeOptions) {
		const subgroup = workerTypeOptions[subgroupKey as WorkerTypeSubgroup];
		if (workerType in subgroup.options) {
			return subgroup.options[workerType].label[language];
		}
	}
	return workerType;
};

export const jobExperienceOptions = {
	'0': {
		[Language.EN]: 'No experience',
		[Language.FR]: 'No experience FR',
		[Language.IT]: 'No experience IT',
		[Language.ES]: 'No experience ES'
	},
	'1': {
		[Language.EN]: '1 year',
		[Language.FR]: '1 year FR',
		[Language.IT]: '1 year IT',
		[Language.ES]: '1 year ES'
	},
	'2': {
		[Language.EN]: '2 years',
		[Language.FR]: '2 years FR',
		[Language.IT]: '2 years IT',
		[Language.ES]: '2 years ES'
	},
	'3': {
		[Language.EN]: '3 years',
		[Language.FR]: '3 years FR',
		[Language.IT]: '3 years IT',
		[Language.ES]: '3 years ES'
	},
	'4': {
		[Language.EN]: '4 years',
		[Language.FR]: '4 years FR',
		[Language.IT]: '4 years IT',
		[Language.ES]: '4 years ES'
	},
	'5': {
		[Language.EN]: '5 years',
		[Language.FR]: '5 years FR',
		[Language.IT]: '5 years IT',
		[Language.ES]: '5 years ES'
	},
	'6_10': {
		[Language.EN]: '6-10 years',
		[Language.FR]: '6-10 years FR',
		[Language.IT]: '6-10 years IT',
		[Language.ES]: '6-10 years ES'
	},
	'11_15': {
		[Language.EN]: '11-15 years',
		[Language.FR]: '11-15 years FR',
		[Language.IT]: '11-15 years IT',
		[Language.ES]: '11-15 years ES'
	},
	'15_20': {
		[Language.EN]: '15-20 years',
		[Language.FR]: '15-20 years FR',
		[Language.IT]: '15-20 years IT',
		[Language.ES]: '15-20 years ES'
	},
	'20_30': {
		[Language.EN]: '20-30 years',
		[Language.FR]: '20-30 years FR',
		[Language.IT]: '20-30 years IT',
		[Language.ES]: '20-30 years ES'
	},
	'31': {
		[Language.EN]: '30+ years',
		[Language.FR]: '30+ years FR',
		[Language.IT]: '30+ years IT',
		[Language.ES]: '30+ years ES'
	}
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
		[Language.ES]: 'Hourly ES'
	},
	[CompensationFrequency.DAILY]: {
		[Language.EN]: 'Daily',
		[Language.FR]: 'Daily FR',
		[Language.IT]: 'Daily IT',
		[Language.ES]: 'Daily ES'
	},
	[CompensationFrequency.WEEKLY]: {
		[Language.EN]: 'Weekly',
		[Language.FR]: 'Weekly FR',
		[Language.IT]: 'Weekly IT',
		[Language.ES]: 'Weekly ES'
	},
	[CompensationFrequency.MONTHLY]: {
		[Language.EN]: 'Monthly',
		[Language.FR]: 'Monthly FR',
		[Language.IT]: 'Monthly IT',
		[Language.ES]: 'Monthly ES'
	},
	[CompensationFrequency.FLAT_FEE]: {
		[Language.EN]: 'Flat Fee',
		[Language.FR]: 'Flat Fee FR',
		[Language.IT]: 'Flat Fee IT',
		[Language.ES]: 'Flat Fee ES'
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

export const addlCompItems = {
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
