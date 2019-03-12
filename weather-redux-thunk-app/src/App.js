import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Forecast from './Forecast';
import { getCities } from './actions';


const App = (props) => {
	return (
		<>
			<Input 
				name={'city'}
				type={'text'}
				title={'Current Weather'}
				placeholder={'city name...'}
				handleChange={props.handleInputChange} 
			/>
			<div>
				{props.cities.length ? 
					props.cities.map(city => {
						return <span>{city.title}</span>
					}) :
					null}
			</div>
			<Forecast />
		</>
	);
}

const mapStateToProps = state => {
	return {
		cities: state.cities,
		isLoading: state.isLoading,
		error: state.error
	}
};

const mapDispatchToProps = dispatch => ({
	handleInputChange: handleChange(dispatch),
});

const handleChange = (dispatch) => (e) => {
	if (e.target.value) {
		return dispatch(getCities(e.target.value));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
