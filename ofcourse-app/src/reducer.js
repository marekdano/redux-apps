import { ADD_COURSE } from './actions';

const initState = {
	courses: [],
};

export default function reducer (state = initState, action) {
	switch(action.type) {
		case ADD_COURSE: 
			return {
				...state,
				courses: [ ...state.courses, action.payload ],
			}
		default:
			return state;
	}
} 