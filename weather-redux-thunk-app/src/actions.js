import {
	GET_CITIES_SUCCESS, GET_CITIES_BEGIN, GET_CITIES_FAILURE, 
	GET_FORECAST_SUCCESS, GET_FORECAST_BEGIN, GET_FORECAST_FAILURE 
} from './constants';

const baseUrl = 'https://weather.daveceddia.com/api/location/'

export function getCities(query) {
	return (dispatch, getState) => {
		// dispatch({type: ADD_CITY_NAME, cityName: query});
		if (query) {
			dispatch({type: GET_CITIES_BEGIN});
			fetch(`${baseUrl}/search/?query=${query}`)
				.then(res => res.json())
				.then(cities => {
					dispatch({
						type: GET_CITIES_SUCCESS,
						cities
					});
					if (cities.length === 1 && cities[0].title.toLowerCase() === query.toLowerCase()) {
						dispatch(getCityForecast(cities[0].woeid));
					} else {
						dispatch({ type: GET_CITIES_FAILURE, error: {message: 'City name has not been found.'}});
					}
				})
				.catch(error => {
					dispatch({
						type: GET_CITIES_FAILURE,
						error
					})
				});
		}
	}
}

export function getCityForecast(woeid) {
	return (dispatch, getState) => {
		dispatch({type: GET_FORECAST_BEGIN});
		fetch(`${baseUrl}/${woeid}`)
		.then(res => res.json())
		.then(json => {
			dispatch({
				type: GET_FORECAST_SUCCESS,
				cityForecast: json.consolidated_weather
			});
		})
		.catch(error => {
			dispatch({
				type: GET_FORECAST_FAILURE,
				error
			})
		});
	}
}
