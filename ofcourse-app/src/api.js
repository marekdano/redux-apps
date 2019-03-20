export const createCourse = name => {
	return postData('http://localhost:8000/courses', { name });
}

function postData(url = ``, data = {}) {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => response.json());
}