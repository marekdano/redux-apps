import { ADD_COURSE_SUCCESS, ADD_COURSE_BEGIN, ADD_COURSE_ERROR, LOAD_COURSES_SUCCESS, LOAD_COURSES_BEGIN, LOAD_COURSES_ERROR } from './actions';

const initState = {
	saveInProgress: false,
	saveError: null,
	coursesLoading: false,
	coursesError: null,
	courses: [],
};

export default function reducer (state = initState, action) {
	switch(action.type) {
		case ADD_COURSE_BEGIN:
			return {
				...state,
				saveInProgress: true,
      	saveError: null,
			}
		case ADD_COURSE_SUCCESS: 
			return {
				...state,
				saveInProgress: false,
				courses: [ ...state.courses, action.payload ],
			}
		case ADD_COURSE_ERROR:
			return {
				...state,
				saveInProgress: false,
      	saveError: action.saveError,
			}
		case LOAD_COURSES_BEGIN:
			return {
				...state,
				coursesLoading: true,
				coursesError: null,
			}
		case LOAD_COURSES_SUCCESS:
			return {
				...state,
				courses: action.payload,
				coursesLoading: false,
			}
		case LOAD_COURSES_ERROR:
			return {
				...state,
				coursesLoading: false,
				coursesError: action.error,
			}
		default:
			return state;
	}
} 