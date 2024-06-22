import { getMomentDate, isDateSupported } from "src/svelte/shared/services/time-utils";
import { DateFilterCondition } from "src/types";

export const matchDateFilter = (
	propertyValue: string | null,
	compare: string,
	condition: DateFilterCondition,
	matchIfNull: boolean
) => {
	if (propertyValue) {
		console.assert(isDateSupported(propertyValue), `DateFilter propertyValue "${propertyValue}" must be supported date format`);
	}
	console.assert(isDateSupported(compare), `DateFilter compare "${compare}" must be supported date format`);

	switch (condition) {
		case DateFilterCondition.IS: {
			if (propertyValue === null) return matchIfNull;

			const propertyValueDate = getMomentDate(propertyValue);
			const compareDate = getMomentDate(compare);
			return propertyValueDate.isSame(compareDate, "day");
		}

		case DateFilterCondition.IS_AFTER: {
			if (propertyValue === null) return matchIfNull;

			const propertyValueDate = getMomentDate(propertyValue);
			const compareDate = getMomentDate(compare);
			return propertyValueDate.isAfter(compareDate, "day");
		}

		case DateFilterCondition.IS_BEFORE: {
			if (propertyValue === null) return matchIfNull;

			const propertyValueDate = getMomentDate(propertyValue);
			const compareDate = getMomentDate(compare);
			return propertyValueDate.isBefore(compareDate, "day");
		}

		case DateFilterCondition.EXISTS:
			return propertyValue !== null;

		case DateFilterCondition.DOES_NOT_EXIST:
			return propertyValue === null;

		default:
			throw new Error(`Date filter condition not supported: ${condition}`);
	}
}
