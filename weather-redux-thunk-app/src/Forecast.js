import React from 'react';
import { connect } from 'react-redux';

class Forecast extends React.Component {
	render() {
		if (this.props.isLoading) {
			return <div>Loading...</div>
		}
		if(this.props.error) {
			return <div>{this.props.error.message}</div>
		}
		return (
			<div>
				{this.props.cityForecast && this.props.cityForecast[0] &&
					<div>
						<h5>Today</h5>
						<p>{this.props.cityForecast[0].weather_state_name}</p>
						<p>{Number.parseInt(this.props.cityForecast[0].the_temp)} &deg;C</p>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		cityForecast: state.cityForecast,
		isLoading: state.isLoading,
		error: state.error
	}
};

export default connect(mapStateToProps)(Forecast);