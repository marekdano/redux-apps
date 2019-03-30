import {
	ADD_LESSON_SUCCESS,
	ADD_LESSON_BEGIN, 
	ADD_LESSON_ERROR,
} from '../actions';

const initState = {
	lessons: [],
	lessonSaveInProgress: false,
	lessonSaveError: null,
};

const reducer = (state = initState, action) => {
	switch(action.type) {
		case ADD_LESSON_BEGIN:
			return {
				...state,
				lessonSaveInProgress: true,
				lessonSaveError: null,
			}
		case ADD_LESSON_SUCCESS:
			return {
				...state,
				lessons: [...state.lessons, action.payload]
			};
		case ADD_LESSON_ERROR:
			return {
				...state,
				lessonSaveInProgress: false,
				lessonSaveError: action.lessonSaveError
			}
		default:
			return state;
	}
} 

export default reducer;
