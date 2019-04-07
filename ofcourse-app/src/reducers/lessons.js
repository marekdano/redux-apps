import {
	ADD_LESSON_BEGIN, 
	ADD_LESSON_SUCCESS,
	ADD_LESSON_ERROR,
	SAVE_LESSON_BEGIN, 
	SAVE_LESSON_SUCCESS,
	SAVE_LESSON_ERROR,
	LOAD_LESSONS_BEGIN, 
	LOAD_LESSONS_SUCCESS,
	LOAD_LESSONS_ERROR,
	RESET_LESSON_ERROR,
} from '../actions';

const initState = {
	lessons: {},
	saving: false,
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
		case SAVE_LESSON_BEGIN:
			return {
				...state,
				saving: true,
				error: null,
			}
		case ADD_LESSON_SUCCESS:
		case SAVE_LESSON_SUCCESS:
			return {
				...state,
				lessons: {
					...state.lessons,
					[action.payload.id]: action.payload
				},
			};
		case ADD_LESSON_ERROR:
		case SAVE_LESSON_ERROR:
			return {
				...state,
				saving: false,
				error: action.error
			};
		case RESET_LESSON_ERROR:
      return {
				...state,
				error: null
			};
		default:
			return state;
	}
} 

export default reducer;
