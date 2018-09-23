import {
    FORECAST_LIST_ACTIONS
} from '../actions/actions';

const initialState = {
    forecast: [],
    weather: null,
    loading: false,
    error: null,
    units: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FORECAST_LIST_ACTIONS.GET_FORECAST_LOADING:
            return {
                ...state,
                loading: true
            };
        case FORECAST_LIST_ACTIONS.GET_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.forecast,
                weather: action.weather,
                units: action.units,
                loading: false,
                error: null
            };
        case FORECAST_LIST_ACTIONS.GET_FORECAST_ERROR:
            return {
                ...state,
                loading: false,
                forecast: [],
                weather: {},
                error: action.payload
            };
        default:
            return state;
    }
};