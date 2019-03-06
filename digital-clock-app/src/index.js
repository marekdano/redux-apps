import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { INCREMENT_HOUR, INCREMENT_MINUTE } from './actions';
import Clock from './Clock';
import './index.css';

function reducer(state = initState, action) {
	switch (action.type) {
		case INCREMENT_HOUR:
			if (state.hours === 23) {
				return {
					hours: 0,
					minutes: 0,
				}
			} else {
				return {
					hours: state.hours + 1,
					minutes: state.minutes,
				}
			}
		case INCREMENT_MINUTE: 
		if (state.hours === 23 && state.minutes === 59) {
			return {
				hours: 0,
				minutes: 0,
			}
		} else if (state.hours < 23 && state.minutes === 59) {
			return {
				hours: state.hours + 1,
				minutes: 0,
			}
		}	else {
			return {
				hours: state.hours,
				minutes: state.minutes + 1,
			}
		}
		default: 
			return state;
	}
}

const initState = { 
	hours: 0,
	minutes: 0,
};
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Clock />
	</Provider>, 
	document.getElementById("root")
);

