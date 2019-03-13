import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Forecast from './Forecast';
import { getCities } from './actions';
import { ADD_CITY_NAME } from './constants';


class App extends Component {
	render() {
		const { cityName, cities, cityForecast, isLoading, error } = this.props;

		if (isLoading) {
			return <div>Loading...</div>
		}
		if(error) {
			return <div>{error.message}</div>
		}

		return (
			<>
				<Input 
					name={'city'}
					type={'text'}
					title={'Current Weather'}
					value={this.props.cityName} 
					placeholder={'city name...'}
					handleChange={this.props.handleInputChange} 
					handleKeyPress={this.props.handleInputKeyPress}
				/>
				<div>
					{cities.length >= 1 && cities[0].title.toLowerCase() !== cityName.toLowerCase() && 
						<div>The entered city name is not recognized. Please try again.</div>
					}
					<Forecast details={cityForecast}/>
				</div>
			</>
		);
	}
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
	return dispatch({type: ADD_CITY_NAME, cityName: e.target.value});
};

const handleKeyPress = (dispatch) => (e) => {
	if (e.key === 'Enter' && e.target.value) {
		return dispatch(getCities(e.target.value));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
