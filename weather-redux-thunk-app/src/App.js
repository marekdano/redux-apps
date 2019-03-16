import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Forecast from './Forecast';
import { getCities } from './actions';
import { ADD_CITY_NAME } from './constants';

const App = (props) => {
	return (
		<>
			<h5>City Weather</h5>
			<Input 
				name={'city'}
				type={'text'}
				value={props.cityName} 
				placeholder={'city name...'}
				handleChange={props.handleInputChange} 
				handleKeyPress={props.handleKeyPress}
			/>
			<button 
				onClick={() => props.handleBtnClick(props)}
			>
				Get It
			</button>
			<div>
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

const mapDispatchToProps = (dispatch) => ({
	handleInputChange: handleInputChange(dispatch),
	handleBtnClick: handleBtnClick(dispatch),
	handleKeyPress: handleKeyPress(dispatch),
});

const handleInputChange = (dispatch) => (e) => {
	return dispatch({type: ADD_CITY_NAME, cityName: e.target.value});
};

const handleBtnClick = (dispatch) => (props) => {
	if (props.cityName) {
		return dispatch(getCities(props.cityName));
	}
}

const handleKeyPress = (dispatch) => (e) => {
	if (e.key === 'Enter') {
		return dispatch(getCities(e.target.value));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
