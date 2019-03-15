import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Forecast from './Forecast';
import { getCities } from './actions';

const App = (props) => {
	const isValidCity = props.cities.length >= 1 && props.cities[0].title.toLowerCase() === props.cityName.toLowerCase();

	return (
		<>
			<Input 
				name={'city'}
				type={'text'}
				title={'Current Weather'}
				value={props.cityName} 
				placeholder={'city name...'}
				handleChange={props.handleInputChange} 
				handleKeyPress={props.handleInputKeyPress}
			/>
			<div>
				{ props.cityName !== '' && !isValidCity ? 
					<div>City name has not been found.</div> : null }
				<Forecast details={props.cityForecast}/>
			</div>
		</>
	);
}

const mapStateToProps = state => {
	return {
		cityName: state.cityName,
		cities: state.cities,
		cityForecast: state.cityForecast,
		isLoading: state.isLoading,
		error: state.error
	}
};

const mapDispatchToProps = dispatch => ({
	handleInputChange: handleChange(dispatch),
	handleInputKeyPress: handleKeyPress(dispatch) 
});

const handleChange = (dispatch) => (e) => {
	// return dispatch({type: ADD_CITY_NAME, cityName: e.target.value});
	return dispatch(getCities(e.target.value));
};

const handleKeyPress = (dispatch) => (e) => {
	if (e.key === 'Enter' && e.target.value) {
		return dispatch(getCities(e.target.value));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
