import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import Loading from '../components/Loading';
import Lesson from '../components/Lesson';
import { loadLessons, addLesson, saveLesson } from '../actions';
import './CourseDetailPage.css';
import { getLessonsByCourse, getCourseById } from '../selectors';
import LoginLogout from '../components/LoginLogout';

const CourseDetailPage = ({ 
	course, 
	lessons, 
	loading, 
	loadLessons, 
	addLesson,
	saveLesson 
}) => {
	if (loading) {
		return <Loading />
	}

	if (!course) {
		return <NotFoundPage />;	
	}

	useEffect(() => {
		loadLessons(course.id) 
	}, [course]);

	return (
		<div className="CourseDetail">
      <header>
        <h1>{course.name}</h1>
				<LoginLogout/>
      </header>
      <div className="content">
        <div className="sidebar">
					{lessons.length > 0 && (
						<ul className="lessons">
							{lessons.map(lesson => (
								<li key={lesson.id}>
									<Lesson
                    className="lesson-item"
                    lesson={lesson}
                    onSubmit={name =>
                      saveLesson({
                        ...lesson,
                        name
                      })
                    }
                  >
                    {(edit, remove) => (
                      <div className="lesson-item">
                        <span>{lesson.name}</span>
                        <button
                          onClick={() => edit(lesson.name)}
                          className="edit-lesson-btn"
                        >
                          Edit
                        </button>
												<button 
													className="delete-lesson-btn"
													onClick={remove}
												>
													Delete
												</button>
                      </div>
                    )}
                  </Lesson>
								</li>
							))}
						</ul>
					)}
					<Lesson 
						className='add-lesson-button'
						onSubmit={title => addLesson(title, course.id)}
					>
						{edit => (
							<button
								className="add-lesson-button"
								onClick={edit}
							>
								New Lesson
							</button>
						)}
					</Lesson>  
				</div>
        <div className="lesson" />
      </div>
    </div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.courses.coursesLoading,
		lessons: getLessonsByCourse(state, ownProps),
		course: getCourseById(state, ownProps)
	}
};

export default connect(
	mapStateToProps, 
	{ loadLessons, addLesson, saveLesson }
)(CourseDetailPage);
