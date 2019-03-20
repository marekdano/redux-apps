import { ADD_COURSE_SUCCESS } from './actions';

const initState = {
	courses: [],
};

export default function reducer (state = initState, action) {
	switch(action.type) {
		case ADD_COURSE_SUCCESS: 
			return {
				...state,
				courses: [ ...state.courses, action.payload ],
			}
		default:
			return state;
	}
} 