import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import { getCities } from './actions';
import App from './App';
import { GET_CITIES_SUCCESS, GET_CITIES_FAILURE, GET_CITIES_BEGIN } from './constants';

function reducer(state = initState, action) {
	switch (action.type) {
		case GET_CITIES_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			};
		case GET_CITIES_SUCCESS:
			return {
				...state,
				cities: action.cities,
				isLoading: false,
				error: null
			};
		case GET_CITIES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default: 
			return state;
	}
}

const initState = { 
	cityForecast: {},
	cities: {},
	isLoading: false,
	error: null,
};
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getCities('dublin'));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("root")
);

