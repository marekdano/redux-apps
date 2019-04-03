const PREFIX = '/api';

export const createCourse = (name, price) => {
	return postData(PREFIX +'/courses', { 
		name,
		price: parseFloat(price)
	});
};

export const getCourses = () => {
	return fetch(PREFIX + '/courses').then(res => res.json());
};

export const getLessons = (courseId) => {
	return fetch(
		PREFIX + '/lessons?courseId=' + courseId
	).then(res => res.json());
};

export const createLesson = (name, courseId) => {
	return postData(PREFIX + '/lessons', {
		name,
		courseId
	});
};

function postData(url = ``, data = {}) {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => response.json());
}