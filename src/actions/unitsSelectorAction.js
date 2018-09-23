import { UNITS_CONVERTER } from './actions';

const setUnitSelector = (isMetricUnit) => {
    return {
        type: UNITS_CONVERTER.SET_FORECAST_UNITS,
        isMetricUnit
    }
};

export {
    setUnitSelector
}