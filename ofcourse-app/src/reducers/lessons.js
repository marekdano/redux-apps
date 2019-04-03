import {
	ADD_LESSON_BEGIN, 
	ADD_LESSON_SUCCESS,
	ADD_LESSON_ERROR,
	LOAD_LESSONS_BEGIN, 
	LOAD_LESSONS_SUCCESS,
	LOAD_LESSONS_ERROR,
} from '../actions';

const initState = {
	lessons: {},
	lessonSaveInProgress: false,
	error: null,
};

const reducer = (state = initState, action) => {
	switch(action.type) {
		case LOAD_LESSONS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};
		case LOAD_LESSONS_SUCCESS: 
			return {
				...state,
				loading: false,
				lessons: {
					...state.lessons,
					...action.payload,
				}
			};
		case LOAD_LESSONS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case ADD_LESSON_BEGIN:
			return {
				...state,
				lessonSaveInProgress: true,
				error: null,
			}
		case ADD_LESSON_SUCCESS:
			return {
				...state,
				lessons: {
					...state.lessons,
					[action.payload.id]: action.payload
				},
			};
		case ADD_LESSON_ERROR:
			return {
				...state,
				lessonSaveInProgress: false,
				error: action.error
			};
		default:
			return state;
	}
} 

export default reducer;
