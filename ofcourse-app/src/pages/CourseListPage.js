import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions';
import './CourseListPage.css';

const CourseListPage = ({ courses, dispatch }) => {
	const [courseName, setCourseName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addCourse(courseName))
	}

	return courses.length === 0 ? (
		<div>
			<h1>Create Your First Course</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Pick a name:
				</label>
				<input 
					value={courseName}
					onChange={e => setCourseName(e.target.value)}
				/>
				<button type='submit'>Create Course</button>
			</form>
		</div>
	) : (
		<div>
			<ul>
				{courses.map(course => (
					<li key={course.id}>{course.name}</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	courses: state.courses
});

export default connect(mapStateToProps)(CourseListPage);