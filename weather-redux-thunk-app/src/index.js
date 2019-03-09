import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import { getCities } from './actions';

function reducer(state = initState, action) {
	switch (action.type) {
		
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
		<div />
	</Provider>, 
	document.getElementById("root")
);

