import {GET_CITIES_SUCCESS, GET_CITIES_BEGIN, GET_CITIES_FAILURE } from './constants';

const baseUrl = 'https://weather.daveceddia.com/api/location/'

export function getCities(query) {
	return (dispatch, getState) => {
		dispatch({type: GET_CITIES_BEGIN});
		fetch(`${baseUrl}/search/?query=${query}`)
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: GET_CITIES_SUCCESS,
					cities: json
				});
			})
			.catch(error => {
				dispatch({
					type: GET_CITIES_FAILURE,
					error
				})
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