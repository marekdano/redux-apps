import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import StepCounter from './StepCounter';
import { INCREMENT, RESET } from './actions';

function reducer(state = initState, action) {
	switch (action.type) {
		case INCREMENT:
			return { counter: state.counter + 1 };
		case RESET: 
			return { counter: 0 };
		default: 
			return state;
	}
}

const initState = { counter: 0 };
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<StepCounter />
	</Provider>, 
	document.getElementById("root")
);