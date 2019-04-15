import { combineReducers } from 'redux';
import courses from './courses';
import lessons from './lessons';
import user from './user';

export default combineReducers({
	courses,
	lessons,
	user,
});
