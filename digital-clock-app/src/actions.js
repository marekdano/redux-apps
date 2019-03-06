export const INCREMENT_HOUR = 'INCREMENT_HOUR';
export const INCREMENT_MINUTE = 'INCREMENT_MINUTE';

export function incrementHour() {
	return { type: INCREMENT_HOUR };
}

export function incrementMinute() {
	return { type: INCREMENT_MINUTE };
}
