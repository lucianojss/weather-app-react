import {
    UNITS_CONVERTER
} from '../actions/actions';

const initialState = true;

function unitsSelector(state = initialState, action) {
    switch (action.type) {
        case UNITS_CONVERTER.SET_FORECAST_UNITS:
            return action.isMetricUnit
        default:
            return state
    }
}

export default unitsSelector;