import React from 'react';
import { connect } from 'react-redux'; 
import LessonEditor from '../components/LessonEditor';
import NotFoundPage from './NotFoundPage';
import ReactMarkdown from 'react-markdown';

const LessonPage = ({ lesson, loading }) => {
	if (loading) {
		return 'Loading...';
	}

	if (!lesson) {
		return <NotFoundPage />
	}
	return <ReactMarkdown source={lesson.markdown || ''} />;
	// return <LessonEditor lesson={lesson} />
};

const mapStateToProps = (state, props) => {
	const lessonId = parseInt(props.lessonId, 10);
	return {
		lesson: state.lessons.lessons[lessonId],
		loading: state.lessons.loading
	}
}

export default connect(mapStateToProps)(LessonPage);
