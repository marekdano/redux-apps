const PREFIX = '/api';
let authToken = null;

export const setToken = token => {
	authToken = token;
}

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

export const updateLesson = lesson => {
	return putData(`${PREFIX}/lessons/${lesson.id}`, lesson)
};

export const destroyLesson = (lesson) => {
	return deleteData(`${PREFIX}/lessons/${lesson.id}`);
};

export const loginUser = (username, password) => {
	return postData(PREFIX + `/login`, {
		username, 
		password
	});
};

export const createUser = (username, password) => {
	return postData(PREFIX + `/users`, {
		username, 
		password
	});
};

function postData(url = ``, data = {}) {
	return fetchWithData(url, data, 'POST');
}

function putData(url = ``, data = {}) {
	return fetchWithData(url, data, 'PUT');
}

function deleteData(url = ``, data = {}) {
	return fetchWithData(url, data, 'DELETE');
}

function fetchWithData(url = ``, data = {}, method = 'POST') {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': authToken ? `Bearer ${authToken}` : undefined
		},
		body: JSON.stringify(data)
	}).then(response => response.json());
}