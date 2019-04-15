import produce from 'immer';
import { 
	LOGIN_BEGIN, 
	SIGNUP_BEGIN, 
	LOGIN_SUCCESS, 
	SIGNUP_SUCCESS, 
	LOGIN_ERROR, 
	SIGNUP_ERROR 
} from '../actions';

const initState = {
	user: null,
	loading: false,
	error: null,
};

const reducer = produce((draft, action) => {
	switch(action.type) {
		case LOGIN_BEGIN:
		case SIGNUP_BEGIN:
			draft.loading = true;
			draft.error = null;
			return;
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			draft.loading = false;
			draft.user = action.payload;
			return;
		case LOGIN_ERROR:
		case SIGNUP_ERROR:
			draft.loading = false;
			draft.error = action.error;
			draft.user = null;
			return;
		default:
			return;
	}
}, initState);

export default reducer;
