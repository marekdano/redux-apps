import React from 'react';
import Lesson from './Lesson';

const LessonEditor = ({ lesson }) => (
	<>
		<div className="lesson-editor-help">
			<p>
				You are editing this lesson. Change are saved automatically. 
			</p>
		</div>
		<texarea 
			className="lesson-editor"
			value={Lesson.name}
		/>
	</>
);

export default LessonEditor;
