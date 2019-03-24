import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions';
import './CourseListPage.css';

const CourseListPage = ({ 
	courses,
	saveInProgress,
	saveError, 
	coursesLoading,
	coursesError,
	dispatch 
}) => {
	const [courseName, setCourseName] = useState('');
	const [coursePrice, setCoursePrice] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addCourse(courseName, coursePrice))
	}

	if (coursesLoading) {
		return <div />;
	}

	if (coursesError) {
		return <div>{coursesError.message}</div>;
	}

	return courses.length === 0 ? (
		<div className="CreateCourse">
			<h1>Create Your First Course</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Pick a name:
				</label>
				<input 
					disabled={saveInProgress}
					value={courseName}
					onChange={e => setCourseName(e.target.value)}
				/>
				<label>
					Pick a price:
				</label>
				<input 
					disabled={saveInProgress}
					value={coursePrice}
					onChange={e => setCoursePrice(e.target.value)}
				/>
				{ saveError && (
					<div className="saveError-message">
						Error: {saveError.message}
					</div>
				)}
				<button type='submit'>Create Course</button>
			</form>
		</div>
	) : (
		<div className="CourseList">
			<h1>Your Courses</h1>
			<ul>
				{courses.map(course => (
					<li key={course.id}>
						<div className="title">{course.name}</div>
						<div className="price">
							$???
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = state => ({
	saveInProgress: state.saveInProgress,
	saveError: state.saveError,
	coursesLoading: state.coursesLoading,
	coursesError: state.coursesError,
	courses: state.courses
});

export default connect(mapStateToProps)(CourseListPage);
