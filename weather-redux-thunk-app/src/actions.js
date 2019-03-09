const baseUrl = 'https://weather.daveceddia.com/api/location/'

export function getCities(query) {
	return (dispatch, getState) => {
		fetch(`${baseUrl}/search/?query=${query}`)
			.then(res => res.json())
			.then(json => {
				console.log(json);
			})
	}
}

export function getCityForecast(woeid) {
	return (dispatch, getState) => {
		fetch(`${baseUrl}/${woeid}`)
			.then(res => res.json())
			.then(json => {
				console.log(json);
			})
	}
}