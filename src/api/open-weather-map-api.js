const API_KEY= 'f30562b7fa2a7b87095c8f7623525b9f';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';

const UNITS = {
	METRIC: 'metric',
	IMPERIAL: 'imperial'
};

/**
 * Get weather forecast for 5 days by location
 *
 * @param {String} location
 * @param {String} units - weather units
 */
const getForecast = async (location , units = UNITS.METRIC ) => {

	const url = new URL(API_URL);
	const params = { appid: API_KEY, q: location, units }

	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

	const response = await fetch(url);

	if (!response.ok) {
		throw response;
	}

	return await response.json();
};

export {
	getForecast,
	UNITS
};
