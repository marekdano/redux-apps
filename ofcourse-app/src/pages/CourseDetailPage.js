import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import Loading from '../components/Loading';
import './CourseDetailPage.css';

const CourseDetailPage = ({ course, loading }) => {
	if (loading) {
		return <Loading />
	}

	if (!course) {
		return <NotFoundPage />;	
	}

	return (
		<div className="CourseDetail">
      <header>
        <h1>{course.name}</h1>
      </header>
      <div className="content">
        <div className="sidebar"></div>
        <div className="lesson" />
      </div>
    </div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.coursesLoading,
		course: state.courses.find(c => c.id === +ownProps.courseId)
	}
};

export default connect(mapStateToProps)(CourseDetailPage);
