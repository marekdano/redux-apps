import React from 'react';
import { connect } from 'react-redux';

const Forecast = (props) => {
	return (
		<div>
			TODO: display forecast
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cityForecast: state.cityForecast,
		isLoading: state.isLoading,
		error: state.error
	}
};

export default connect(mapStateToProps)(Forecast);