import React from 'react';
import { connect } from 'react-redux'; 
import './SalesPage.css';
import { getCourseById } from '../selectors';

const SalesPage = ({ course }) => {
	return (
		<div className="SalesPage">
			<h1>Buy {course && course.name}</h1>
			<p>You're gonna love this course.</p>
			<button>BUY NOW</button>
		</div>
	);
};
	
const mapStateToProps = (state, props) => ({
	course: getCourseById(state, props)
});
export default connect(mapStateToProps)(SalesPage);
