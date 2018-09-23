import forecastList from '../../src/reducers/forecastList';

describe('forecastList', () => {
    test('should return the initial state', () => {
        expect(forecastList(undefined, {})).toEqual({
            forecast: [],
            weather: null,
            loading: false,
            error: null,
            units: null
        });
    });

    test('should handle GET_FORECAST_LOADING action', () => {
        expect(forecastList(undefined, {
            type: 'GET_FORECAST_LOADING'
        })).toEqual({
            forecast: [],
            weather: null,
            loading: true,
            error: null,
            units: null
        });
    });

    test('should handle GET_FORECAST_ERROR action', () => {
        expect(forecastList(undefined, {
            type: 'GET_FORECAST_ERROR',
            payload: 'error'
        })).toEqual({
            forecast: [],
            weather: {},
            loading: false,
            error: 'error',
            units: null
        });
    });

    test('should handle GET_FORECAST_SUCCESS action', () => {
        expect(forecastList(undefined, {
            type: 'GET_FORECAST_SUCCESS',
            forecast: 'forecast',
            weather: 'weather',
            units: 'units'
        })).toEqual({
            forecast: 'forecast',
            weather: 'weather',
            loading: false,
            error: null,
            units: 'units'
        });
    });
});