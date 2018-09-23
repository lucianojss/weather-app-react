import {
    FORECAST_LIST_ACTIONS
} from './actions';
import {
    getForecast
} from '../api/yahoo-weather-api';

/**
 * Action get 5 days Forecast for a given location
 *
 * @param {String} location - Book id to be fetched
 * @param {Boolean} unit - True metric unit, false imperial
 */
export const getForecastByLocation = (location, unit) => async dispatch => {

    if (!location || location === '') {
        return dispatch({
            type: FORECAST_LIST_ACTIONS.GET_FORECAST_SUCCESS,
            forecast: null,
            weather: null,
            units: null
        });
    }

    dispatch({
        type: FORECAST_LIST_ACTIONS.GET_FORECAST_LOADING,
    });

    try {
        const result = await getForecast(location, unit);

        if (result && result.query && result.query.results && result.query.results.channel) {

            const {
                location,
                atmosphere,
                astronomy,
                wind,
                lastBuildDate,
                item,
                units
            } = result.query.results.channel;

            const weather = {
                location,
                atmosphere,
                astronomy,
                wind,
                lastBuildDate,
                condition: item.condition
            };

            const forecast = item.forecast.filter((item, index) => index < 5);

            return dispatch({
                type: FORECAST_LIST_ACTIONS.GET_FORECAST_SUCCESS,
                forecast,
                weather,
                units
            });

        } else {
            return dispatch({
                type: FORECAST_LIST_ACTIONS.GET_FORECAST_SUCCESS,
                forecast: null,
                weather: null,
                units: null
            });
        }
    } catch (error) {
        return dispatch({
            type: FORECAST_LIST_ACTIONS.GET_FORECAST_ERROR,
            payload: error,
        });
    }
};