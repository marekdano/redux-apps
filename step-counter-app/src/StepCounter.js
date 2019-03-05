import React from "react";
import { connect } from "react-redux";
import { increment, reset } from './actions';

const StepCounter = (props) => {
	const increment = () => {
		props.increment();
	}

	const reset = () => {
		props.reset();
	}

	return (
		<>
			<div>You've walked {props.counter} steps today!</div>
			<button onClick={increment}>Add a Step</button>
			<button onClick={reset}>Reset Steps</button>
		</>
	);
}

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
};

// const mapDispatchToProps = (dispatch) => ({
// 	increment: () => dispatch(increment()),
// 	reset: () => dispatch(reset())
// });

// short version
const mapDispatchToProps = {
	increment,
	reset
}

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);