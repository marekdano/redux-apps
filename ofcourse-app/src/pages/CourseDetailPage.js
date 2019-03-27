import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';

const CourseDetailPage = ({
	courseId, 
	course,
	loading
}) => {
	if (loading) {
		return <div>Loading...</div>
	}

	if (!course) {
		return <NotFoundPage />;	
	}

	return (
		<div>{courseId} --- {course.name}</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.coursesLoading,
		course: state.courses.find(c => c.id === +ownProps.courseId)
	}
};

export default connect(mapStateToProps)(CourseDetailPage);
