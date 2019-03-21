import { ADD_COURSE_SUCCESS, ADD_COURSE_BEGIN, ADD_COURSE_ERROR } from './actions';

const initState = {
	loading: false,
	error: null,
	courses: [],
};

export default function reducer (state = initState, action) {
	switch(action.type) {
		case ADD_COURSE_BEGIN:
			return {
				...state,
				loading: true,
      	error: null,
			}
		case ADD_COURSE_SUCCESS: 
			return {
				...state,
				loading: false,
				courses: [ ...state.courses, action.payload ],
			}
		case ADD_COURSE_ERROR:
			return {
				...state,
				loading: false,
      	error: action.error,
			}
		default:
			return state;
	}
} 