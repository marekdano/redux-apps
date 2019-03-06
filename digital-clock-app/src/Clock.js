import React from 'react';
import { connect } from 'react-redux';
import { incrementHour, incrementMinute } from './actions';
import './Clock.css';

class Clock extends React.Component {
	incrementHour = () => {
		this.props.incrementHour();
	}

	incrementMinute = () => {
		this.props.incrementMinute();
	}

	componentDidMount() {
		this.interval = setInterval(this.incrementMinute, 60000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { props } = this;
		return (
			<>
				<div className='main'>
					<section className='box'>
						<h1>{props.hours < 10 ? `0${props.hours}` : props.hours}</h1>
						<button onClick={this.incrementHour}>+</button>
					</section>
					<section>
						<h1>:</h1>
					</section>
					<section className='box'>
						<h1>{props.minutes < 10 ? `0${props.minutes}` : props.minutes}</h1>
						<button onClick={this.incrementMinute}>+</button>
					</section>
				</div>	
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		hours: state.hours,
		minutes: state.minutes
	}
};

const mapDispatchToProps = {
	incrementHour,
	incrementMinute
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);