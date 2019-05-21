import { combineReducers } from 'redux';
import courses from './courses';
import lessons from './lessons';
import user from './user';
import app from './app';

export default combineReducers({
	courses,
	lessons,
	app,
	user,
});
