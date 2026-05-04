import { Language, siteState } from './states.svelte';














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







