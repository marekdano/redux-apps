export const RESET = 'RESET';
export const INCREMENT = 'INCREMENT';

export function increment() {
	return { type: INCREMENT };
}

export function reset() {
	return { type: RESET };
}
